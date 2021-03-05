# Avoid using duplicate arguments name (no-duplicate-args)

Detect Duplicate arguments name in command class.

## Rule Details

This rule aims to avoid duplicate arguments name in command classes.

The following class is an example of command class in directory `src/commands/*.ts`.

```ts
import Command, {flags} from '@oclif/command'

export default class Foo extends Command {
  static args = [
    {
      name: 'image',
      description: 'image name',
      required: true,
    },
      name: 'image', //duplicate name
      description: 'image name',
      required: true,
    }
  ]
  async run() {}
}
```

**Note:** This rule only work for the classes in directory `src/commands/classname.ts`.
