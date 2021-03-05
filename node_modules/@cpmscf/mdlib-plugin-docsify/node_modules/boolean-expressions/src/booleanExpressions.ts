import { grammar } from "ohm-js";
import { grammarRules } from "./grammar";
import { extractVariables } from "./util";
import { createSemantics } from "./evaluator";

class BooleanExpressions {
  private variableNames: string[];
  private evaluateFunc: (variables: string[]) => boolean;

  constructor(exp: string) {
    const truthGrammar = grammar(grammarRules);
    const matchResult = truthGrammar.match(exp);
    if (matchResult.failed()) {
      throw new Error(`Parse failed ${matchResult.shortMessage}`);
    }
    this.variableNames = extractVariables(exp);
    this.evaluateFunc = createSemantics(truthGrammar, matchResult);
  }

  /**
   * Returns a list of all the unique variable names in the boolean expression.
   */
  getVariableNames(): string[] {
    return this.variableNames;
  }

  /**
   * Evaluates the given boolean expression with the given variables set to true
   * and the omitted variables set to false.
   */
  evaluate(variables: string[]): boolean {
    return this.evaluateFunc(variables);
  }
}

export default BooleanExpressions;
