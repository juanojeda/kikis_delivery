import { getLineItemBuilder } from "./getLineItemBuilder";
import { ICostConfig, IDeliveryOrder, IOffer } from "./types";

export const getInvoicePrinter =
  (offers: IOffer[], costConfig: ICostConfig) =>
  (order: IDeliveryOrder): string[] =>
    order.packages
      .map((pkg) => getLineItemBuilder(costConfig)(order.baseCost, pkg, offers))
      .map((pkg) => `${pkg.id} ${pkg.discount} ${pkg.totalCost}`);
