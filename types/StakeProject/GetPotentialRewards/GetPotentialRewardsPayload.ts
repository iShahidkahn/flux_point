import { SaturnError } from "../../../pages/api/Classes/saturnError";

export interface GetPotentialRewardsPayload {
  rewards?: string;
  error?: SaturnError;
}
