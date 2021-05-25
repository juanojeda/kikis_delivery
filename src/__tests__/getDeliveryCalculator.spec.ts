import { testOrder } from "../fixtures/testOrder";
import { getDeliveryCalculator } from "../getDeliveryCalculator";

describe("getDeliveryCalculator", () => {
  const calculateDeliveryCost = getDeliveryCalculator({
    weightCost: 10,
    distanceCost: 5,
  });

  const base = 100;

  it("SHOULD calculate delivery cost correctly (baseCost + weight * weightCost + distance * distanceCost)", () => {
    const deliveryCost1 = calculateDeliveryCost(base, testOrder.packages[0]);
    const deliveryCost2 = calculateDeliveryCost(base, testOrder.packages[1]);
    const deliveryCost3 = calculateDeliveryCost(base, testOrder.packages[2]);

    expect(deliveryCost1).toBe(175);
    expect(deliveryCost2).toBe(275);
    expect(deliveryCost3).toBe(700);
  });
});
