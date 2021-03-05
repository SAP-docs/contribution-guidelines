# Avoid using multiple flags with same character (no-multiple-flags)

Detect Duplicate flag char in command class.

## Rule Details

This rule aims to avoid duplicate flag char's in command classes.

The following class is an example of command class in directory `src/commands/*.ts`.

```ts
import Command, {flags} from '@oclif/command'

export default class Foo extends Command {
  static flags = {
    foo: flags.string({char: 'x'}),
    bar: flags.string({char: 'x'}), //duplicate flag char 'x'
  }
  async run() {}
}
```
**Note:** This rule only work for the classes in directory `src/commands/classname.ts`.