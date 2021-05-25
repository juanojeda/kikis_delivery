export const calculateDiscount = (
  deliveryCost: number,
  discountPercentage: number
) => deliveryCost * (discountPercentage / 100);
