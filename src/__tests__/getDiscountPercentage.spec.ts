import { offers } from "../fixtures/offers";
import { testOrder } from "../fixtures/testOrder";
import { getDiscountPercentage } from "../getDiscountPercentage";
import { IPackageConfig } from "../types";

describe("getDiscountPercentage", () => {
  describe("GIVEN an array of offers", () => {
    const packageValid: IPackageConfig = testOrder.packages[2];
    const packageInvalid: IPackageConfig = testOrder.packages[0];
    const packageNoOffer: IPackageConfig = {
      ...testOrder.packages[1],
      offerCode: undefined,
    };
    describe("AND a package with a valid offer", () => {
      it("SHOULD return the discount percentage", () => {
        const discountPercentage = getDiscountPercentage(offers, packageValid);
        expect(discountPercentage).toBe(5);
      });
    });

    describe("AND a package with an invalid offer", () => {
      it("SHOULD return 0 discount percentage", () => {
        const discountPercentage = getDiscountPercentage(
          offers,
          packageInvalid
        );
        expect(discountPercentage).toBe(0);
      });
    });

    describe("AND a package with no offer", () => {
      it("SHOULD return 0 discount percentage", () => {
        const discountPercentage = getDiscountPercentage(
          offers,
          packageNoOffer
        );
        expect(discountPercentage).toBe(0);
      });
    });
  });
});
