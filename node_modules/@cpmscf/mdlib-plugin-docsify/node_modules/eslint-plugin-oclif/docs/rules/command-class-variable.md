# Require that command class should have static description and static example (command-class-variable)

Improve the quality of CLI by having some variables in Command classes

## Rule Details

This rule aims to add two variables `static description` and `static examples`.

The following class is an example of command class in directory `src/commands/*.ts`.

```ts
import {Command, flags} from '@oclif/command'

class foo extends Command {
  static description = 'describe the command here'
  static examples = ''

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({char: 'v'}),
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(foo)

    const name = flags.name || flags.checkname ||'world'
    this.log(`hello ${name} from ./src/index.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}

export = foo
```
**Note:** This rule only work for the classes in directory `src/commands/classname.ts`.