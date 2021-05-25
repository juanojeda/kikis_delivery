import { offers } from "../fixtures/offers";
import { testOrder } from "../fixtures/testOrder";
import { getInvoicePrinter } from "../getInvoicePrinter";

describe("getInvoicePrinter", () => {
  describe("GIVEN an array offers and a cost config", () => {
    const printInvoice = getInvoicePrinter(offers, {
      weightCost: 10,
      distanceCost: 5,
    });

    describe("AND a valid delivery order", () => {
      it("SHOULD print the correct invoice", () => {
        const invoice = printInvoice(testOrder);

        expect(invoice).toEqual(["PKG1 0 175", "PKG2 0 275", "PKG3 35 665"]);
      });
    });
  });
});
