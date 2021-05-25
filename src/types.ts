export interface IPackageConfig {
  id: string;
  weight: number;
  distance: number;
  offerCode?: string;
}

export interface IPackageCost {
  id: string;
  discount: number;
  totalCost: number;
}

export interface IDeliveryOrder {
  baseCost: number;
  numberOfPackages: number;
  packages: IPackageConfig[];
}

export interface IRange {
  min: number;
  max: number;
}

export interface IOffer {
  id: string;
  distanceRange: IRange;
  weightRange: IRange;
  discountPercentage: number;
}

export interface ICostConfig {
  weightCost: number;
  distanceCost: number;
}

export interface IOrderWithConfig {
  order: IDeliveryOrder;
  offers: IOffer[];
  costConfig: ICostConfig;
}
