# Delivery calculator - Problem 01

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Running the tests](#tests)
- [Tech stack](#stack)
- [Future improvements](#improvements)

## About <a name = "about"></a>

A calculator that estimates the cost of delivering an order of packages, given a price configuration, and a list of available offers.

From the challenge document:
> You are required to build a command line application to estimate the total delivery cost of each package with an offer code (if applicable).

See the Problem 01 in the [coding challenge document](./docs/challenge-document.pdf).

## Getting Started <a name = "getting_started"></a>

### Prerequisites

- `node` - version 12 ([install the latest](https://nodejs.org/en/download/))
- `npm` (see [installation docs](https://www.npmjs.com/get-npm))



### Running the calculator locally

To run the calculator locally, first you'll need to install the dependencies.

```shell
> npm i
```

Then compile the source files
```shell
> npm run build
```

And finally, ensure that the program is available on your PATH, and executable
```shell
> npm link
```

Then you should be able to run the calculator

```shell
> everest --help

Commands:
  everest estimate [baseCost]                Create an invoice for deliveries
  [noOfPackages] [packageConfig, ...]

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
>
```

## Usage <a name = "usage"></a>

Via the documentation from the `estimate` command:

```shell
> everest invoice --help

everest estimate [baseCost] [noOfPackages] [packageConfig, ...]

Create an invoice for deliveries

Positionals:
  baseCost      base delivery cost                                      [number]
  noOfPackages  number of packages                                      [number]
  packages      package in format <id>,<weight>,<distance>,<offerCode> eg.
                "PKG1,4,4,OFR003", ...                                   [array]

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
```

Example command:
```shell
> everest estimate 100 4 --packages "P1,5,5,OFR001" "P2,15,5,OFR002" "P3,10,100,OFR003" "P4,10,100"

P1 0 175
P2 0 275
P3 35 665
P4 0 700
```

## Running the tests <a name = "tests"></a>

To run the tests, run the following command:

```shell
> npm run test
```

## Tech stack <a name = "stack"></a>

The application is built on the following tools:

- **`Node.js`** - the underlying environment
- **`Typescript`** - provides type safety, while being lightweight and fast to develop in
- **`yargs`** - A library that enables development of interactive CLI tools, in javascript or typescript
- **`jest`** - Used for running tests

## Future improvements <a name = "improvements"></a>

- **noOfPackages**: Currently, the `noOfPackages` parameter is passed via the CLI but never used (as the array length is used). This could be removed, though it would be a breaking change to the CLI's API.
- **configurable costs**: The cost configuration for weight and distance are currently hard-coded. These will be made configurable via the addition of a .env file
- **configurable offers**: As above, the offers are currently given as a hard-coded array of package objects. These will be made configurable via a .env file
- **FP library**: The application is written using functional programming principles, however doesn't use any libraries to provide core structures such as `Option`, `Either` or `Task`. If significant work were to be conducted, I'd want to introduce a library that provides these structures, for greater type safety.