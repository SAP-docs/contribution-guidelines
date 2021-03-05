import BooleanExpressions from "../";
import generateTestCases from "./generateTestCases";

const testCases = generateTestCases();

describe("simple query permutation tests", () => {
  testCases.forEach(testCase => {
    it("correctly evaluates " + testCase.expression, () => {
      const b = new BooleanExpressions(testCase.expression);
      const variableNames = b.getVariableNames();

      testCase.truthTable.forEach(row => {
        const trueVariables = variableNames.filter((_, i) => row[i]);
        const expectedResult = row[row.length - 1];
        expect(b.evaluate(trueVariables)).toEqual(expectedResult);
      });
    });
  });
});
