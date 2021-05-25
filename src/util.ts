import { IRange } from "./types";

export const isNull = (entity: any): boolean => entity === null;

export const isValidInRange = (number: number, { min, max }: IRange): boolean =>
  number >= min && number <= max;
