import { calculateDiscount } from "../calculateDiscount";

describe("calculateDiscount", () => {
  it("SHOULD return an amount to discount", () => {
    const amountToDiscount = calculateDiscount(200, 25);

    expect(amountToDiscount).toBe(50);
  });

  it("SHOULD return a 0 if no discount percentage is provided", () => {
    const amountToDiscount = calculateDiscount(200, 0);

    expect(amountToDiscount).toBe(0);
  });
});
