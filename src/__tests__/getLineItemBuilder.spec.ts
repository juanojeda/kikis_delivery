import { offers } from "../fixtures/offers";
import { getLineItemBuilder } from "../getLineItemBuilder";
import { testOrder } from "../fixtures/testOrder";

describe("getLineItemBuilder", () => {
  it("SHOULD calculate the totalCost", () => {
    const mockPackages = testOrder.packages;
    const buildLineItem = getLineItemBuilder({
      distanceCost: 5,
      weightCost: 10,
    });
    const lineItem1 = buildLineItem(100, mockPackages[0], offers);
    const lineItem2 = buildLineItem(100, mockPackages[1], offers);
    const lineItem3 = buildLineItem(100, mockPackages[2], offers);

    expect(lineItem1.totalCost).toBe(175);
    expect(lineItem2.totalCost).toBe(275);
    expect(lineItem3.totalCost).toBe(665);
  });
});
