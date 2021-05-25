import { IOffer } from "../types";

export const offers: IOffer[] = [
  {
    id: "OFR001",
    distanceRange: {
      min: 0,
      max: 200,
    },
    weightRange: {
      min: 70,
      max: 200,
    },
    discountPercentage: 10,
  },
  {
    id: "OFR002",
    distanceRange: {
      min: 50,
      max: 150,
    },
    weightRange: {
      min: 100,
      max: 250,
    },
    discountPercentage: 7,
  },
  {
    id: "OFR003",
    distanceRange: {
      min: 50,
      max: 250,
    },
    weightRange: {
      min: 10,
      max: 150,
    },
    discountPercentage: 5,
  },
];
