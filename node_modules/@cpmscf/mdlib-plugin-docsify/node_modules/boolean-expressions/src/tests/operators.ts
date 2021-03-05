const andOperators: string[] = ["and", "And", "AND", "aND", "&", "&&", "/\\"];
const orOperators: string[] = ["or", "OR", "Or", "oR", "|", "||", "\\/"];
const xorOperators: string[] = [
  "xor",
  "XOR",
  "Xor",
  "xOr",
  "^",
  "!=",
  "=/=",
  "~=",
  "not equals"
];
const notOperators: string[] = ["not", "NOT", "Not", "noT", "~", "!"];
const ifOperators: string[] = [
  "->",
  "-->",
  "=>",
  "==>",
  "implies",
  "imply",
  "ImPlY",
  "IMPLiES"
];
const biconditionalOperators: string[] = [
  "<->",
  "<=>",
  "<-->",
  "<==>",
  "=",
  "==",
  "iff",
  "if and only if"
];
const converseOperators: string[] = ["<-", "<--", "<=", "<=="];
const nonimplicationOperators: string[] = [
  "-/->",
  "=/=>",
  "nimply",
  "nimplies",
  "NIMPLY",
  "NIMPLIES"
];
const converseNonimplicationOperators: string[] = ["<-/-", "<=/="];
const nandOperators: string[] = ["nand", "NAND", "not and"];
const norOperators: string[] = ["nor", "NOR", "not or"];
const xnorOperators: string[] = ["xnor", "XNOR", "equals", "EQUALS", "not xor"];

export {
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
};
