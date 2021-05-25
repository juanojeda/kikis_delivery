import { IPackageConfig, ICostConfig } from "./types";

export const getDeliveryCalculator =
  ({ weightCost, distanceCost }: ICostConfig) =>
  (baseCost: number, { weight, distance }: IPackageConfig): number =>
    baseCost + weight * weightCost + distance * distanceCost;
