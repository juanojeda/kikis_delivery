export const toPackagesArray = (pkgsInput: string[]) =>
  pkgsInput
    .map((pkg) => pkg.split(","))
    .map(([id, weight, distance, offerCode]) => ({
      id,
      weight,
      distance,
      offerCode,
    }));
