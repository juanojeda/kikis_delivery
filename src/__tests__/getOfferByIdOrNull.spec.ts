import { offers } from "../fixtures/offers";
import { getOfferByIdOrNull } from "../getOfferByIdOrNull";

describe("getOfferByIdOrNull", () => {
  describe("GIVEN an array of offers", () => {
    describe("AND a valid offerCode", () => {
      it("SHOULD return the offer", () => {
        const offer = getOfferByIdOrNull(offers, "OFR001");

        expect(offer).toEqual(offers[0]);
      });
    });

    describe("AND an invalid offerCode", () => {
      it("SHOULD return null", () => {
        const offer = getOfferByIdOrNull(offers, "OFR005");

        expect(offer).toEqual(null);
      });
    });

    describe("AND no offerCode", () => {
      it("SHOULD return null", () => {
        const offer = getOfferByIdOrNull(offers, undefined);

        expect(offer).toEqual(null);
      });
    });
  });
});
