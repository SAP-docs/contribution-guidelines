import BooleanExpressions from "../";

describe("simple error handling tests", () => {
  it('evaluates "p AND q" not to throw an error', () => {
    expect(() => new BooleanExpressions("p AND q")).not.toThrowError();
  });

  it('evaluates "p and q OR r" not to throw an error', () => {
    expect(() => new BooleanExpressions("p and q OR r")).not.toThrowError();
  });

  it('evaluates "p q" to throw an error', () => {
    expect(() => new BooleanExpressions("p q")).toThrowError();
  });

  it('evaluates "p AND q OR" to throw an error', () => {
    expect(() => new BooleanExpressions("p AND q OR")).toThrowError();
  });
});

describe("parenthesis error handling tests", () => {
  it('evaluates "(p AND q) OR r" not to throw an error', () => {
    expect(() => new BooleanExpressions("(p AND q) OR r")).not.toThrowError();
  });

  it('evaluates "(p AND (q OR r))" not to throw an error', () => {
    expect(() => new BooleanExpressions("(p AND (q OR r))")).not.toThrowError();
  });

  it('evaluates "(p AND (q OR r)" to throw an error', () => {
    expect(() => new BooleanExpressions("(p AND (q OR r)")).toThrowError();
  });
});

describe("special keyword error handling tests", () => {
  it('evaluates "p OR OR q" to throw an error', () => {
    expect(() => new BooleanExpressions("p OR OR q")).toThrowError();
  });

  it('evaluates "not p" not to throw an error', () => {
    expect(() => new BooleanExpressions("not p")).not.toThrowError();
  });

  it('evaluates "not" to throw an error', () => {
    expect(() => new BooleanExpressions("not")).toThrowError();
  });

  it('evaluates "( not ) or ( not )" to throw an error', () => {
    expect(() => new BooleanExpressions("( not ) or ( not )")).toThrowError();
  });
});

describe("expressions with invalid tokens", () => {
  it('evaluates "(p AND {q}) OR r" to throw an error', () => {
    expect(() => new BooleanExpressions("(p AND {q}) OR r")).toThrowError();
  });
});
