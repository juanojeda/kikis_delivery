#!/usr/bin/env node
import yargs from "yargs";
import { configureCLI } from "./configureCLI";
import { offers } from "./fixtures/offers";
import { getInvoicePrinter } from "./getInvoicePrinter";
import { IPackageConfig } from "./types";

const printInvoice = getInvoicePrinter(offers, {
  weightCost: 10,
  distanceCost: 5,
});

const runProgram = (): void => {
  yargs
    .command(
      "estimate [baseCost] [noOfPackages] [packageConfig, ...]",
      "Create an invoice for deliveries",
      configureCLI,
      (args) =>
        printInvoice({
          baseCost: args.baseCost as number,
          numberOfPackages: (args.packages as IPackageConfig[]).length,
          packages: args.packages as IPackageConfig[],
        }).map((line) => console.log(line))
    )
    .help().argv;
};

runProgram();
