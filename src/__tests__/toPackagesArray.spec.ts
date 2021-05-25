import { toPackagesArray } from "../toPackagesArray";

describe("toPackagesArray", () => {
  describe("GIVEN an array of comma-separated strings", () => {
    it("SHOULD return an array of packageConfigs", () => {
      const input = ["PKG1,5,5,OFR001", "PKG2,15,5,OFR002"];
      const packages = toPackagesArray(input);

      expect(packages[0]).toEqual({
        id: "PKG1",
        weight: "5",
        distance: "5",
        offerCode: "OFR001",
      });
      expect(packages[1]).toEqual({
        id: "PKG2",
        weight: "15",
        distance: "5",
        offerCode: "OFR002",
      });
    });
  });
});
