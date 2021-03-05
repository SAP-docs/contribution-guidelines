import { Grammar, MatchResult } from "ohm-js";

/**
 * Creates a semantics object with our truth grammar for the given query
 * parameters.
 *
 * Returns a function to evaluate the semantics for the given match result
 * with the given variables set to true, and the omitted variables set to false.
 * This takes advantage of closures to allow us to re-use the same semantics object.
 *
 * The semantics API doesn't allow us to accept parameters to the evaluate
 * function so this is how we get around it.
 */
function createSemantics(
  truthGrammar: Grammar,
  matchResult: MatchResult
): (variables: string[]) => boolean {
  let trueVariables: string[];
  const semantics = truthGrammar.createSemantics().addOperation("evaluate", {
    Exp: function(e) {
      return e.evaluate();
    },
    PriExp: function(e) {
      return e.evaluate();
    },
    NotExp: function(_op, exp) {
      return !exp.evaluate();
    },
    OrExp_or: function(left, _op, right): boolean {
      return left.evaluate() || right.evaluate();
    },
    NorExp_nor: function(left, _op, right): boolean {
      return !(left.evaluate() || right.evaluate());
    },
    AndExp_and: function(left, _op, right): boolean {
      return left.evaluate() && right.evaluate();
    },
    NandExp_nand: function(left, _op, right): boolean {
      return !(left.evaluate() && right.evaluate());
    },
    XorExp_xor: function(left, _op, right): boolean {
      return left.evaluate() !== right.evaluate();
    },
    XnorExp_xnor: function(left, _op, right): boolean {
      return left.evaluate() === right.evaluate();
    },
    IfExp_arrow: function(left, _op, right) {
      return !left.evaluate() || right.evaluate();
    },
    IfExp_ifThen: function(_if, left, _then, right) {
      return !left.evaluate() || right.evaluate();
    },
    ConverseExp_arrow: function(left, _op, right) {
      return left.evaluate() || !right.evaluate();
    },
    NimplyExp_nimply: function(left, _op, right) {
      return left.evaluate() && !right.evaluate();
    },
    ConverseNimplyExp_converseNimply: function(left, _op, right) {
      return !left.evaluate() && right.evaluate();
    },
    BiconditionalExp_biconditional: function(
      left: any,
      _op: any,
      right: any
    ): boolean {
      return left.evaluate() === right.evaluate();
    },
    ParenExp: function(_open, exp, _close) {
      return exp.evaluate();
    },
    ident: function(first, remaining) {
      const variableName = first.sourceString + remaining.sourceString;
      return trueVariables.indexOf(variableName) >= 0;
    },
    True: function(_) {
      return true;
    },
    False: function(_) {
      return false;
    }
  })(matchResult);

  function evaluateWithTrueVariables(variables: string[]): boolean {
    trueVariables = variables;
    return semantics.evaluate();
  }

  return evaluateWithTrueVariables;
}

export default createSemantics;
