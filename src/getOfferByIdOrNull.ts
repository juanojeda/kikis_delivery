import { IOffer } from "./types";

export const getOfferByIdOrNull = (
  offers: IOffer[],
  offerCode?: string
): IOffer | null => offers.find(({ id }) => offerCode === id) || null;
