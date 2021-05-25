import { getDeliveryCalculator } from "./getDeliveryCalculator";
import { calculateDiscount } from "./calculateDiscount";
import { getDiscountPercentage } from "./getDiscountPercentage";
import { ICostConfig, IOffer, IPackageConfig, IPackageCost } from "./types";

export const getLineItemBuilder =
  (costConfig: ICostConfig) =>
  (baseCost: number, pkg: IPackageConfig, offers: IOffer[]): IPackageCost => {
    const calculateDeliveryCost = getDeliveryCalculator(costConfig);
    const deliveryCost = calculateDeliveryCost(baseCost, pkg);
    const discountPercentage = getDiscountPercentage(offers, pkg);
    const discountAmount = calculateDiscount(deliveryCost, discountPercentage);
    return {
      id: pkg.id,
      totalCost: deliveryCost - discountAmount,
      discount: discountAmount,
    };
  };
