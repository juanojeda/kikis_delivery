import { getOfferByIdOrNull } from "./getOfferByIdOrNull";
import { isValidForOffer } from "./isValidForOffer";
import { IOffer, IPackageConfig } from "./types";
import { isNull } from "./util";

export const getDiscountPercentage = (
  offers: IOffer[],
  { weight, distance, offerCode, id }: IPackageConfig
): number => {
  const offerOrNull = getOfferByIdOrNull(offers, offerCode);
  const hasDiscount =
    !isNull(offerOrNull as IOffer) &&
    isValidForOffer(offerOrNull as IOffer, { weight, distance, id });
  const discount =
    !isNull(offerOrNull) && hasDiscount
      ? (offerOrNull as IOffer).discountPercentage
      : 0;

  return discount;
};
