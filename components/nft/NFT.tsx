import { ChangeEvent, useEffect, useState } from "react";
import type { NextPage } from "next";
import { useWallet } from "@meshsdk/react";
import { CardanoWallet } from "@meshsdk/react";
import { queryStakedNfts } from "../../pages/api/GraphQL/StakeProject/query";
import { CreateStakeTransactionInput } from "../../types/Transactions/StakeTransaction/CreateStakeTransactionInput";
import { CreateStakeTransactionPayload } from "../../types/Transactions/StakeTransaction/CreateStakeTransactionPayload";
import {
  mutateCreateStakeTransaction,
  mutateSubmitStakeTransaction,
} from "../../pages/api/GraphQL/Transaction/Stake/mutation";
import { useAddress } from "@meshsdk/react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const NFT: NextPage = () => {
  const { connected, wallet } = useWallet();
  const address = useAddress();
  const stakeProjectId = process.env.NEXT_PUBLIC_STAKE_PROJECT;
  const [assets, setAssets] = useState<null | any>();

  async function getAssets() {
    if (Object.keys(wallet).length != 0) {
      let _assets = await wallet.getAssets();
      const filteredAssets = _assets.filter((asset) => {
        return (
          asset.policyId ===
            "0889a2d542897f0c7eefed47d2d809bd8d8ec78881bd4ff9464f683a" ||
          asset.policyId ===
            "101d1f211e31073bc7c44445400666887a18878ca5b11ef05ab95e40" ||
          asset.policyId ===
            "25c75bbf105310685d51cd3adbdd50b72fdbd99be2cc3757dde7eafc" ||
          asset.policyId ===
            "d3a197c4814054623432c882c60e6a81e8f3b94158033432529a02d2"
        );
      });

      const onlineAssets = [];

      const promises = filteredAssets.map(async (a) => {
        const url = `https://cardano-mainnet.blockfrost.io/api/v0/assets/${a.unit}`;
        const response = await fetch(url, {
          headers: {
            project_id: process.env.NEXT_PUBLIC_BLOCKFROST_MAINNET_PROJECT_ID!,
          },
        });
        const result = await response.json();
        return result;
      });

      const blockfrostData = await Promise.all(promises);
      onlineAssets.push(...blockfrostData);

      const curStakedNFTs = await getStakedNFTsFunction();

      onlineAssets.forEach(async (a) => {
        const staked = curStakedNFTs.find(
          (c: any) => a.policy_id == c.policyId && a.asset_name == c.assetName
        );
        if (staked) {
          Object.assign(a, { ...a, ...staked, staked: true });
        }
      });

      const assetMap = new Map();

      onlineAssets.forEach((asset) => {
        if (!assetMap.has(asset.policy_id)) {
          assetMap.set(asset.policy_id, [asset]);
        } else {
          const existingAssets = assetMap.get(asset.policy_id);
          existingAssets.push(asset);
          assetMap.set(asset.policy_id, existingAssets);
        }
      });

      setAssets(assetMap);
    }
  }

  useEffect(() => {
    getAssets();
  }, [wallet]);
  const stakeHandler = async (policyId: string) => {
    let stop = false;
    checkedAssets[policyId]?.forEach((asset: any) => {
      if (asset.staked == true) {
        stop = true;
        return alert("You have selected NFTs that are already staked!");
      }
    });
    if (stop) return;
    toast("Please Wait. Building Transaction...");
    try {
      const stakeComponents = checkedAssets[policyId].reduce(
        (acc: any, asset: any) => {
          acc.push({
            stakeProjectId,
            policyId,
            assetName: asset["assetName"],
          });
          return acc;
        },
        []
      );

      const createInput: CreateStakeTransactionInput = {
        paymentAddress: address!,
        stakeComponents,
        unstakeComponents: [],
        addStakeTokenComponents: [],
      };

      const createTransaction: CreateStakeTransactionPayload =
        await mutateCreateStakeTransaction(createInput);
      const unstx = createTransaction.successTransactions![0].hexTransaction;
      const signedTx = await wallet.signTx(unstx, true);

      const submitTransactionInput = {
        paymentAddress: address,
        successTransactions: [
          {
            hexTransaction: signedTx,
            transactionId:
              createTransaction.successTransactions![0].transactionId,
          },
        ],
      };
      const result = await mutateSubmitStakeTransaction(submitTransactionInput);
      toast("Transaction Successful! ");

      return createTransaction;
    } catch (error: any) {}
  };

  const unstakeHandler = async (policyId: string) => {
    let stop = false;
    checkedAssets[policyId].forEach((asset: any) => {
      if (!asset.staked) {
        stop = true;
        return alert("You have selected NFTs that are not staked yet!");
      }
    });
    if (stop) return;
    try {
      const unstakeComponents = checkedAssets[policyId].reduce(
        (acc: any, asset: any) => {
          acc.push({
            stakeProjectId,
            policyId,
            assetName: asset.assetName,
          });
          return acc;
        },
        []
      );
      const createInput: CreateStakeTransactionInput = {
        paymentAddress: address!,
        stakeComponents: [],
        unstakeComponents,
        addStakeTokenComponents: [],
      };

      const createTransaction: CreateStakeTransactionPayload =
        await mutateCreateStakeTransaction(createInput);

      const unstx = createTransaction.successTransactions![0].hexTransaction;
      const signedTx = await wallet.signTx(unstx, true);

      const submitTransactionInput = {
        paymentAddress: address,
        successTransactions: [
          {
            hexTransaction: signedTx,
            transactionId:
              createTransaction.successTransactions![0].transactionId,
          },
        ],
      };
      const result = await mutateSubmitStakeTransaction(submitTransactionInput);

      return createTransaction;
    } catch (error: any) {}
  };

  const getStakedNFTsFunction = async (event?: any) => {
    event?.preventDefault();
    try {
      const result = await queryStakedNfts(stakeProjectId!);
      return result;
    } catch (error: any) {}
  };

  const [checkedAssets, setCheckedAssets] = useState<any>({});
  const checkboxHandler = async function (
    e: ChangeEvent<HTMLInputElement>,
    policyId: string,
    assetName: string,
    staked: boolean
  ) {
    const isChecked = e.target.checked;
    let curUpdatedAssets;
    setCheckedAssets((prevCheckedAssets: any) => {
      const updatedAssets: any = { ...prevCheckedAssets };

      if (isChecked) {
        updatedAssets[policyId] = [
          ...(updatedAssets[policyId] || []),
          { assetName, staked },
        ];
      } else {
        updatedAssets[policyId] = (updatedAssets[policyId] || []).filter(
          (asset: any) => asset.assetName !== assetName
        );
      }
      curUpdatedAssets = updatedAssets[policyId];
      return updatedAssets;
    });
  };
  const selectAllHandler = async function (
    e: ChangeEvent<HTMLInputElement>,
    policyId: string
  ) {
    const isChecked = e.target.checked;

    const checkboxes = document.querySelectorAll<HTMLInputElement>(
      `.class_${policyId}`
    );

    if (isChecked) {
      checkboxes.forEach((checkbox) => {
        checkbox.checked = true;
      });
    } else {
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });
    }

    setCheckedAssets((prevCheckedAssets: any) => {
      const updatedAssets: any = { ...prevCheckedAssets };

      if (isChecked) {
        updatedAssets[policyId] = assets
          .get(policyId)
          .reduce((acc: any, asset: any) => {
            acc.push({
              assetName: asset.asset_name,
              staked: asset.staked,
            });
            return acc;
          }, []);
      } else {
        updatedAssets[policyId] = [];
      }

      return updatedAssets;
    });
  };

  return (
    <div className="">
      <Header />

      <div className="flex flex-col items-center">
        <div className="mt-2">
          <CardanoWallet />
        </div>
        <div className="flex flex-col gap-12 items-center">
          {assets &&
            Array.from(assets.entries()).map(
              ([policyId, assetEntries]: any) => (
                <div
                  key={policyId}
                  className="p-4 rounded shadow flex flex-col items-center sm:items-start"
                >
                  <h2 className="text-xs sm:text-xl font-semibold text-center mb-2">
                    <input
                      type="checkbox"
                      onChange={(e) => selectAllHandler(e, policyId)}
                      className={`mr-2 class_select_all_${policyId}`}
                    />{" "}
                    Policy ID: {policyId}
                  </h2>
                  {assetEntries.map((asset: any) => (
                    <div
                      key={asset.onchain_metadata.name}
                      className="flex items-center mb-2"
                    >
                      <input
                        type="checkbox"
                        onChange={(e) =>
                          checkboxHandler(
                            e,
                            policyId,
                            asset.asset_name,
                            asset.staked
                          )
                        }
                        className={`mr-2 class_${policyId}`}
                      />
                      <div>
                        <p className="text-sm">{asset.onchain_metadata.name}</p>
                        <p className="text-sm">
                          Staked : {asset.staked ? "yes" : "no"}
                        </p>
                        {asset.staked && (
                          <p className="text-sm">
                            Days Staked : {asset.daysStaked}
                          </p>
                        )}
                        {asset.staked && (
                          <p className="text-sm">
                            $SHARDS rewards : {asset.rewardsAccumulated}
                          </p>
                        )}
                      </div>
                      <img
                        className="m-1 rounded-sm"
                        alt="nft"
                        src={
                          "https://ipfs.io/ipfs/" +
                          asset.onchain_metadata.image.slice(7)
                        }
                        height={"100"}
                        width={"100"}
                      ></img>
                    </div>
                  ))}
                  <div className="flex space-x-2">
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
                      onClick={(e) => stakeHandler(policyId)}
                    >
                      Stake
                    </button>
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                      onClick={(e) => unstakeHandler(policyId)}
                    >
                      Unstake
                    </button>
                  </div>
                </div>
              )
            )}
          {assets && Array.from(assets.entries()).length == 0 && (
            <h2 className="mt-10 text-3xl text-center">
              You do not have any eligible NFTs to stake
            </h2>
          )}
          {connected == false && (
            <h2 className="mt-10 text-3xl text-center">
              Connect Wallet now to see NFTs
            </h2>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NFT;
