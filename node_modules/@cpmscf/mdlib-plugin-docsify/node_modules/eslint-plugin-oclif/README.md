# eslint-plugin-oclif

This is a linter plugin for the [oclif](https://github.com/oclif/oclif) which is a framework for building CLIs in Javascript and Typescript.

## Getting Started

### Installing in your Project

__The version range of TypeScript currently supported by this plugin is >=3.2.1 <3.6.0.__

* `yarn add -D eslint@5.16.0 typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin`
* `yarn add -D eslint-plugin-oclif`
* Add `@typescript-eslint/parser` to the parser field and `oclif` to the plugins section of your `.eslintrc` configuration file:

    * If your CLI is in JavaScript

    ```json
    {
        "parser": "@typescript-eslint/parser",
        "plugins": ["oclif"],
        "rules": {
            // Add your rules here
        }
    }
    ```

    Add script in package.json

    ```json
    "scripts":{
        "lint": "eslint . --ext .js"
    }
    ```

    * If your CLI is in TypeScript

    ```json
    {
        "parser": "@typescript-eslint/parser",
        "plugins": ["oclif"],
        "parserOptions": {
            "project": "./tsconfig.json",
            "sourceType": "module",
        },
        "rules": {
            // Add your rules here
        }
    }
    ```

    Add script in package.json

    ```json
    "scripts":{
        "lint": "eslint . --ext .ts"
    }
    ```

* `yarn lint`

## Adding New Rules

1. Create `src/rules/<your-rule-here.ts>`
    * This file contains logic for our new rule.

2. Create `docs/rules/<your-rule-here.md>`
    * This file contains the documentation for our new rule.

3. Add the new rule in `src/rules/index.ts`
