import {
  andOperators,
  orOperators,
  xorOperators,
  notOperators,
  ifOperators,
  biconditionalOperators,
  converseOperators,
  nonimplicationOperators,
  converseNonimplicationOperators,
  nandOperators,
  norOperators,
  xnorOperators
} from "./operators";

export interface TestCase {
  expression: string;
  variableNames: string[];
  truthTable: boolean[][];
}

function generateTestCases(): TestCase[] {
  const testCases: TestCase[] = [
    {
      expression: "p and notq",
      variableNames: ["p", "notq"],
      truthTable: [
        [false, false, false],
        [false, true, false],
        [true, false, false],
        [true, true, true]
      ]
    },
    {
      expression: "not p and q",
      variableNames: ["p", "q"],
      truthTable: [
        [false, false, false],
        [false, true, true],
        [true, false, false],
        [true, true, false]
      ]
    },
    {
      expression: "p and not q",
      variableNames: ["p", "q"],
      truthTable: [
        [false, false, false],
        [false, true, false],
        [true, false, true],
        [true, true, false]
      ]
    },
    {
      expression: "p or not q",
      variableNames: ["p", "q"],
      truthTable: [
        [false, false, true],
        [false, true, false],
        [true, false, true],
        [true, true, true]
      ]
    },
    {
      expression: "not p or q",
      variableNames: ["p", "q"],
      truthTable: [
        [false, false, true],
        [false, true, true],
        [true, false, false],
        [true, true, true]
      ]
    },
    {
      expression: "not p xor q",
      variableNames: ["p", "q"],
      truthTable: [
        [false, false, true],
        [false, true, false],
        [true, false, false],
        [true, true, true]
      ]
    },
    {
      expression: "not p and not q",
      variableNames: ["p", "q"],
      truthTable: [
        [false, false, true],
        [false, true, false],
        [true, false, false],
        [true, true, false]
      ]
    },
    {
      expression: "p and q and s",
      variableNames: ["p", "q", "s"],
      truthTable: [
        [false, false, false, false],
        [false, false, true, false],
        [false, true, false, false],
        [false, true, true, false],
        [true, false, false, false],
        [true, false, true, false],
        [true, true, false, false],
        [true, true, true, true]
      ]
    },
    {
      expression: "p and q and not s",
      variableNames: ["p", "q", "s"],
      truthTable: [
        [false, false, false, false],
        [false, false, true, false],
        [false, true, false, false],
        [false, true, true, false],
        [true, false, false, false],
        [true, false, true, false],
        [true, true, false, true],
        [true, true, true, false]
      ]
    },
    {
      expression: "p and not q and s",
      variableNames: ["p", "q", "s"],
      truthTable: [
        [false, false, false, false],
        [false, false, true, false],
        [false, true, false, false],
        [false, true, true, false],
        [true, false, false, false],
        [true, false, true, true],
        [true, true, false, false],
        [true, true, true, false]
      ]
    },
    {
      expression: "p and not (q and s)",
      variableNames: ["p", "q", "s"],
      truthTable: [
        [false, false, false, false],
        [false, false, true, false],
        [false, true, false, false],
        [false, true, true, false],
        [true, false, false, true],
        [true, false, true, true],
        [true, true, false, true],
        [true, true, true, false]
      ]
    },
    {
      expression: "not p and q and s",
      variableNames: ["p", "q", "s"],
      truthTable: [
        [false, false, false, false],
        [false, false, true, false],
        [false, true, false, false],
        [false, true, true, true],
        [true, false, false, false],
        [true, false, true, false],
        [true, true, false, false],
        [true, true, true, false]
      ]
    },
    {
      expression: "p",
      variableNames: ["p"],
      truthTable: [
        [false, false],
        [true, true]
      ]
    },
    {
      expression: "p and q or s",
      variableNames: ["p", "q", "s"],
      truthTable: [
        [false, false, false, false],
        [false, false, true, true],
        [false, true, false, false],
        [false, true, true, true],
        [true, false, false, false],
        [true, false, true, true],
        [true, true, false, true],
        [true, true, true, true]
      ]
    },
    {
      expression: "(p and q) or s",
      variableNames: ["p", "q", "s"],
      truthTable: [
        [false, false, false, false],
        [false, false, true, true],
        [false, true, false, false],
        [false, true, true, true],
        [true, false, false, false],
        [true, false, true, true],
        [true, true, false, true],
        [true, true, true, true]
      ]
    },
    {
      expression: "if p then q",
      variableNames: ["p", "q"],
      truthTable: [
        [false, false, true],
        [false, true, true],
        [true, false, false],
        [true, true, true]
      ]
    },
    {
      expression: "p and q -> s",
      variableNames: ["p", "q", "s"],
      truthTable: [
        [false, false, false, true],
        [false, false, true, true],
        [false, true, false, true],
        [false, true, true, true],
        [true, false, false, true],
        [true, false, true, true],
        [true, true, false, false],
        [true, true, true, true]
      ]
    },
    {
      expression: "p -> q and s",
      variableNames: ["p", "q", "s"],
      truthTable: [
        [false, false, false, true],
        [false, false, true, true],
        [false, true, false, true],
        [false, true, true, true],
        [true, false, false, false],
        [true, false, true, false],
        [true, true, false, false],
        [true, true, true, true]
      ]
    },
    {
      expression: "p and q and true",
      variableNames: ["p", "q"],
      truthTable: [
        [false, false, false],
        [false, true, false],
        [true, false, false],
        [true, true, true]
      ]
    },
    {
      expression: "p and false and q",
      variableNames: ["p", "q"],
      truthTable: [
        [false, false, false],
        [false, true, false],
        [true, false, false],
        [true, true, false]
      ]
    },
    {
      expression: "true or p and q",
      variableNames: ["p", "q"],
      truthTable: [
        [false, false, true],
        [false, true, true],
        [true, false, true],
        [true, true, true]
      ]
    }
  ];
  // AND operators:
  andOperators.forEach(op => {
    testCases.push({
      expression: "p " + op + " q",
      variableNames: ["p", "q"],
      truthTable: [
        [false, false, false],
        [false, true, false],
        [true, false, false],
        [true, true, true]
      ]
    });
  });
  // OR operators:
  orOperators.forEach(op => {
    testCases.push({
      expression: "p " + op + " q",
      variableNames: ["p", "q"],
      truthTable: [
        [false, false, false],
        [false, true, true],
        [true, false, true],
        [true, true, true]
      ]
    });
  });
  // XOR operators:
  xorOperators.forEach(op => {
    testCases.push({
      expression: "p " + op + " q",
      variableNames: ["p", "q"],
      truthTable: [
        [false, false, false],
        [false, true, true],
        [true, false, true],
        [true, true, false]
      ]
    });
  });
  // NOT operators:
  notOperators.forEach(op => {
    testCases.push({
      expression: op + " p",
      variableNames: ["p"],
      truthTable: [
        [false, true],
        [true, false]
      ]
    });
  });
  // IF operators:
  ifOperators.forEach(op => {
    testCases.push({
      expression: "p " + op + " q",
      variableNames: ["p", "q"],
      truthTable: [
        [false, false, true],
        [false, true, true],
        [true, false, false],
        [true, true, true]
      ]
    });
  });
  // BICONDITIONAL operators:
  biconditionalOperators.forEach(op => {
    testCases.push({
      expression: "p " + op + " q",
      variableNames: ["p", "q"],
      truthTable: [
        [false, false, true],
        [false, true, false],
        [true, false, false],
        [true, true, true]
      ]
    });
  });
  // CONVERSE operators:
  converseOperators.forEach(op => {
    testCases.push({
      expression: "p " + op + " q",
      variableNames: ["p", "q"],
      truthTable: [
        [false, false, true],
        [false, true, false],
        [true, false, true],
        [true, true, true]
      ]
    });
  });
  // NONIMPLICATION operators:
  nonimplicationOperators.forEach(op => {
    testCases.push({
      expression: "p " + op + " q",
      variableNames: ["p", "q"],
      truthTable: [
        [false, false, false],
        [false, true, false],
        [true, false, true],
        [true, true, false]
      ]
    });
  });
  // CONVERSE NONIMPLICATION operators:
  converseNonimplicationOperators.forEach(op => {
    testCases.push({
      expression: "p " + op + " q",
      variableNames: ["p", "q"],
      truthTable: [
        [false, false, false],
        [false, true, true],
        [true, false, false],
        [true, true, false]
      ]
    });
  });
  // NAND operators:
  nandOperators.forEach(op => {
    testCases.push({
      expression: "p " + op + " q",
      variableNames: ["p", "q"],
      truthTable: [
        [false, false, true],
        [false, true, true],
        [true, false, true],
        [true, true, false]
      ]
    });
  });
  // NOR operators:
  norOperators.forEach(op => {
    testCases.push({
      expression: "p " + op + " q",
      variableNames: ["p", "q"],
      truthTable: [
        [false, false, true],
        [false, true, false],
        [true, false, false],
        [true, true, false]
      ]
    });
  });
  // XNOR operators:
  xnorOperators.forEach(op => {
    testCases.push({
      expression: "p " + op + " q",
      variableNames: ["p", "q"],
      truthTable: [
        [false, false, true],
        [false, true, false],
        [true, false, false],
        [true, true, true]
      ]
    });
  });

  return testCases;
}

export default generateTestCases;
