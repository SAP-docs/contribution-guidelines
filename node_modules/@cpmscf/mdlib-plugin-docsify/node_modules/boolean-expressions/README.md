# boolean-expressions

Boolean expression parser and evaluator. Makes use of the Ohm grammar package with grammar rules found [here](https://github.com/avadavat/boolean-expressions/blob/master/src/grammar/grammarRules.ts).

[![NPM version](https://img.shields.io/npm/v/boolean-expressions.svg?style=flat)](https://www.npmjs.com/package/boolean-expressions)
![NPM license](https://img.shields.io/npm/l/boolean-expressions.svg?style=flat)

## Installation

The package is hosted on npm [here](https://www.npmjs.com/package/boolean-expressions). Simply install with `npm install boolean-expressions`.

## Usage

This package provides a `BooleanExpressions` class which parses an expression once and allows an unlimited number of evaluations on that expression.

To parse an expression, instantiate a new instance of the `BooleanExpressions` class with the given expression. For example,

```
const b = new BooleanExpressions('p and q or t');
```

To get the unique variables from that query, call:

```
// Would return ['p', 'q', 't']
const variables = b.getVariableNames();
```

To evaluate the expression with the given variables set to true, use:

```
// Evaluates the expression with p=true, q=true, and t=false
const result = b.evaluate(['p', 'q']);
```
