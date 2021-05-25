import yargs from "yargs";
import { toPackagesArray } from "./toPackagesArray";

export const configureCLI = (yargs: yargs.Argv<{}>) => {
  yargs
    .positional("baseCost", {
      type: "number",
      describe: "base delivery cost",
    })
    .positional("noOfPackages", {
      type: "number",
      describe: "number of packages",
    })
    .positional("packages", {
      type: "string",
      describe:
        'package in format <id>,<weight>,<distance>,<offerCode> eg. "PKG1,4,4,OFR003", ...',
      coerce: toPackagesArray,
    })
    .array("packages");
};
