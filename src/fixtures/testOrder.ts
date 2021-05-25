import { IDeliveryOrder } from "../types";

export const testOrder: IDeliveryOrder = {
  baseCost: 100,
  numberOfPackages: 3,
  packages: [
    {
      id: "PKG1",
      weight: 5,
      distance: 5,
      offerCode: "OFR001",
    },
    {
      id: "PKG2",
      weight: 15,
      distance: 5,
      offerCode: "OFR002",
    },
    {
      id: "PKG3",
      weight: 10,
      distance: 100,
      offerCode: "OFR003",
    },
  ],
};
