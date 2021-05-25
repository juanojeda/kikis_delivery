import { isValidForOffer } from "../isValidForOffer";
import { IOffer, IPackageConfig, IPackageCost } from "../types";

describe("isValidForOffer", () => {
  describe("GIVEN an offer of <200 distance, 70-200 weight", () => {
    const mockOffer = {
      discountPercentage: 5,
      distanceRange: { min: 0, max: 200 },
      weightRange: { min: 70, max: 200 },
    } as IOffer;
    describe("AND a package that matches the criteria", () => {
      it("SHOULD return as valid for offer", () => {
        const mockPackage = {
          weight: 150,
          distance: 150,
        } as IPackageConfig;
        expect(isValidForOffer(mockOffer, mockPackage)).toBe(true);
      });
    });

    describe("AND a package with invalid weight", () => {
      it("SHOULD return as invalid for offer", () => {
        const mockPackage = {
          weight: 250,
          distance: 150,
        } as IPackageConfig;
        expect(isValidForOffer(mockOffer, mockPackage)).toBe(false);
      });
    });

    describe("AND a package with invalid distance", () => {
      it("SHOULD return as invalid for offer", () => {
        const mockPackage = {
          weight: 250,
          distance: 150,
        } as IPackageConfig;
        expect(isValidForOffer(mockOffer, mockPackage)).toBe(false);
      });
    });
  });
});
