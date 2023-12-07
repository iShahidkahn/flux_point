import { SaturnError } from "../../../pages/api/Classes/saturnError";

export interface GetRemainingTokensPayload {
  tokens?: string;
  error?: SaturnError;
}
