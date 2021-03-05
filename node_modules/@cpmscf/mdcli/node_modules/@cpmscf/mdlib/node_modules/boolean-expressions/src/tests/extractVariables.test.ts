import { extractVariables } from "../util";

describe("extractVariables tests", () => {
  const exp1 = "p AND q";
  it(`extracts [p, q] from "${exp1}"`, () => {
    expect(extractVariables(exp1)).toEqual(["p", "q"]);
  });

  const exp2 = "p AND q OR r";
  it(`extracts [p, q, r] from "${exp2}"`, () => {
    expect(extractVariables(exp2)).toEqual(["p", "q", "r"]);
  });

  const exp3 = " ( p AND (q OR r))";
  it(`extracts [p, q, r] from "${exp3}"`, () => {
    expect(extractVariables(exp3)).toEqual(["p", "q", "r"]);
  });

  const exp4 = " ( p AND (q OR r) AND p OR q)";
  it(`extracts [p, q, r] from "${exp4}"`, () => {
    expect(extractVariables(exp4)).toEqual(["p", "q", "r"]);
  });

  const exp5 = " ( p xor (q OR r) xor p OR q)";
  it(`extracts [p, q, r] from "${exp5}"`, () => {
    expect(extractVariables(exp5)).toEqual(["p", "q", "r"]);
  });
});
