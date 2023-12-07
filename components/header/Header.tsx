import React, { useState } from "react";
import styles from "./Header.module.scss";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const handleButtonClick = () => {
    const bodyHasClass = document.body.classList.contains("menu-open");

    if (bodyHasClass) {
      document.body.classList.remove("menu-open");
    } else {
      document.body.classList.add("menu-open");
    }

    setMenuOpen((prev) => !prev);
  };
  const handlesubMenuOpen = () => {
    setSubMenuOpen((prev) => !prev);
  };

  const handlesubMenuClose = () => {
    setSubMenuOpen((prev) => !prev);
  };

  const router = useRouter();

  return (
    <div className={styles.main_header}>
      <div className={styles.main}>
        <div className={styles.main_container}>
          {/* <nav className={styles.navbar}> */}
          <div className={styles.header_content}>
            <div className={styles.header_nav_contain}>
              <ul className={styles.header_nav}>
                <li>
                  <Link href="/nft">
                    <p>STAKING</p>
                  </Link>
                </li>

                <li className={router.pathname == "/" ? styles.active_nav : ""}>
                  <Link href="/">
                    <p>HOME</p>
                  </Link>
                </li>
                <li
                  className={
                    router.pathname == "/games" ? styles.active_nav : ""
                  }
                >
                  <Link href="/games">
                    <p>GAMES</p>
                  </Link>
                </li>
                <li
                  className={
                    router.pathname == "/shards" ? styles.active_nav : ""
                  }
                >
                  <Link href="/shards">
                    <p>$SHARDS</p>
                  </Link>
                </li>
                <li
                  className={
                    router.pathname == "/careers" ? styles.active_nav : ""
                  }
                >
                  <Link href="/careers">
                    <p>CAREERS</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.header_logo}>
              <a className={styles.preFade}>
                <img
                  src="https://images.squarespace-cdn.com/content/v1/654a74bd1fa6e4670f8000e5/cb1b1271-38d6-48c2-a60c-3aee13d5ca07/NewLogo_Circle.png?format=1500w"
                  alt=""
                />
              </a>
            </div>
            <div className={styles.header_actions}>
              <div className={styles.social_icons}>
                <Link href="" className={styles.icon}>
                  <FaDiscord className={styles.FaDiscord} />
                </Link>
                <Link href="" className={styles.icon}>
                  <FaTwitter className={styles.FaTwitter} />
                </Link>
              </div>
            </div>
            <div className={styles.burgerMenu_wrap}>
              <div
                className={`${menuOpen ? styles.menu_open : ""} ${
                  styles.burgerMenu
                }`}
                onClick={handleButtonClick}
              ></div>
            </div>
          </div>
          <div
            className={`${styles.mobile_menu_wrap} ${
              menuOpen ? styles.show : ""
            }`}
          >
            <div className={styles.mobile_menu_inner}>
              <div
                className={`${styles.menu_nav} ${
                  subMenuOpen ? styles.inner_submenu_open : ""
                }`}
              >
                <div className={styles.mobile_menu_listing}>
                  <div
                    className={`${
                      router.pathname == "/" ? styles.active_nav : ""
                    } ${styles.mobile_menu_item} ${styles.sub_menu_item}`}
                  >
                    <Link href="/">Home</Link>
                  </div>{" "}
                  <div
                    className={`${
                      router.pathname == "/" ? styles.active_nav : ""
                    } ${styles.mobile_menu_item} ${styles.sub_menu_item}`}
                  >
                    <Link href="/nft">STAKING</Link>
                  </div>
                  <div
                    className={`${
                      router.pathname == "/games" ? styles.active_nav : ""
                    } ${styles.mobile_menu_item} ${styles.sub_menu_item}`}
                  >
                    <Link href="/games">Games</Link>
                  </div>
                  <div
                    className={`${
                      router.pathname == "/shards" ? styles.active_nav : ""
                    } ${styles.mobile_menu_item} ${styles.sub_menu_item}`}
                  >
                    <Link href="/shards">$SHARDS</Link>
                  </div>
                  <div
                    className={`${
                      router.pathname == "/careers" ? styles.active_nav : ""
                    } ${styles.mobile_menu_item} ${styles.sub_menu_item}`}
                  >
                    <Link href="/careers">Careers</Link>
                  </div>
                </div>
                <div className={styles.mobile_social_action}>
                  <div className={styles.social_icons}>
                    <Link href="" className={styles.icon}>
                      <FaDiscord className={styles.FaDiscord} />
                    </Link>
                    <Link href="" className={styles.icon}>
                      <FaTwitter className={styles.FaTwitter} />
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.submenu_wrap} ${
                  subMenuOpen ? styles.submenu_open : ""
                }`}
              >
                <div className={styles.submenu_inner}>
                  <button
                    type="button"
                    className={styles.back_btn}
                    onClick={handlesubMenuClose}
                  >
                    <SlArrowLeft />
                    Back
                  </button>
                  <div className={styles.mobile_menu_listing}>
                    <div
                      className={`${
                        router.pathname == "/stacking" ? styles.active_nav : ""
                      } ${styles.mobile_menu_item} ${styles.sub_menu_item}`}
                    >
                      <Link href="/stacking">stacking</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </nav> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
