import { IOffer, IPackageConfig } from "./types";
import { isValidInRange } from "./util";

export const isValidForOffer = (
  { weightRange, distanceRange }: IOffer,
  { weight, distance }: IPackageConfig
) =>
  isValidInRange(weight, weightRange) &&
  isValidInRange(distance, distanceRange);
