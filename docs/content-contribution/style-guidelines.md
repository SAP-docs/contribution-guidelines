# Style Guidelines

This document outlines some style guidelines that we recommend when contributing content in Markdown. They are not mandatory, but they help us to include your contribution more easily.

* [Language](#language)
* [Section Headings](#section-headings)
* [Links](#links)
* [Formatting of Inline Elements](#formatting-of-inline-elements)
* [Code Snippet Formatting](#code-snippet-formatting)
* [Note Types](#note-types)

## Language

* Use US English.
* Keep it simple and use words that non-native English speakers are also familiar with.

## Section Headings

If you want to modify or create a new section heading, we recommend title case - capitalizing the first letter of each word except conjunctions and prepositions. For more information on title case, see the corresponding [Wikipedia article](https://en.wikipedia.org/wiki/Title_case).

## Links

If you're providing a hyperlink, we prefer the "inline" approach links in Markdown. See [Basic Syntax for Links](https://www.markdownguide.org/basic-syntax/#links) for more information.

This is the "inline" approach, where the URL follows the link text directly:

```markdown
See [SAP Community](https://community.sap.com) for more information.
```

## Formatting of Inline Elements

| Type of Text | Formatting | Markdown Syntax |
|:---|:---|:---|
| [User Interface Elements](#user-interface-elements) | *italics* | `Choose *Subaccounts*`. |
| [New Terms and Emphasis](#new-terms-and-emphasis) | **bold** | `Do **not** stop it.` |
| [Technical Names](#technical-names) | `code` | <code>Open file \`root.yaml\`.</code> |
| [Inline Code and Inline Commands](#inline-code-and-inline-commands)| `code` | <code>For declarative management, use \`kubectl apply\`.</code> |
| [Object Field Names and Field Values](#object-field-names-and-field-values)|`code` | <code>Set the value of \`image\` to \`nginx:1.8\`.</code> |


### User Interface Elements

When referring to UI elements, refrain from using verbs like "Click" or "Select with right mouse button". This level of detail is hardly ever needed and also invalidates a procedure if other devices are used. For example, for a tablet you'd say "Tap on".

Use *italics* when you refer to UI elements.

| UI Element | Standard Formulation | Markdown Syntax |
|:---|:---|:---|
| Button, menu path | Choose *UI Element*. | `Choose *UI Element*.` |
| Menu path, context menu, navigation path  |  Choose *System* \> *User Profile* \> *Own Data*. | `Choose *System* \> *User Profile* \> *Own Data*.` |
| Entry fields | Enter your password. | `Enter your password.` |
| Checkbox, radio button | Select *Filter*. | `Select *Filter*.` |
| Expandable screen elements | Expand *User Settings*.<br> Collapse *User Settings*. | `Expand *User Settings*`.<br> `Collapse *User Settings*.` |


### New Terms and Emphasis

Use **bold** to emphasize something or to introduce a new term.

|  Do  | Don't |
|:---|:---|
|  A **cluster** is a set of nodes ...  | A "cluster" is a set of nodes ...    |
|  The system does **not** delete your objects.   | The system does not(!) delete your objects.    |


### Technical Names

Use code style (using backticks) for filenames, technical componentes, directories, and paths.

|  Do  | Don't |
|:---|:---|
| Open file `envars.yaml`.   |  Open the envars.yaml file.   |
| Go to directory `/docs/tutorials`.   |  Go to the /docs/tutorials directory.   |
| Open file `/_data/concepts.yaml`.  | Open the /_data/concepts.yaml file. |


### Inline Code and Inline Commands

Use backticks (\`) for inline code.

|  Do  | Don't |
|:---|:---|
|  Use `cf marketplace` to list all services. | Use "cf marketplace" to list all services. |
|  For declarative management, use `kubectl apply`.  | For declarative management, use "kubectl apply".  |

### Object Field Names and Field Values

Use backticks (\`) for field names, and field values.

|  Do  | Don't |
|:---|:---|
| Set the value of the `replicas` field in the configuration file.   | Set the value of the "replicas" field in the configuration file.    |
| The value of the `exec` field is an `ExecAction` object.   | The value of the "exec" field is an ExecAction object.    |
| Set the value of `imagePullPolicy` to `Always`. | Set the value of `imagePullPolicy` to "Always". |
| Set the value of `image` to `nginx:1.8`. | the value of `image` to nginx:1.8. |


## Code Snippet Formatting

### Don't Include the Command Prompt

|  Do  | Don't |
|:---|:---|
| `cf marketplace`  | `$ cf marketplace` |


### Separate Commands From Output

> ### Example
>
> 3. Update the XSUAA service.
>
>         cf update-service myuaa -c xs-security.json
>
> 4. Open a browser window and enter your application’s URL.
>

## Note Types

Standard Markdown supports blockquotes, often used to highlight additional information. In SAP documentation you'd refer to them as **note types**. In the list below, you can find additional note types commonly used in SAP documentation, and how to introduce them in Markdown so that they are displayed properly on SAP Help Portal.

> ### Caution
> Overusing notes, tips, and so on diminishes their importance. As a general rule, do not use more than 2 items of advisory information per page. Also, do not put them directly after one another.

<details><summary>Standard Note</summary>

  Point out important or unusual information to the user. Something that they need to understand or that is not obvious. No direct action involved.

  Example:
  ```markdown
  > The pricing-relevant data needs to correspond to the data specified for the Web shop in the shop management tool.
  ```

  Result:
  > The pricing-relevant data needs to correspond to the data specified for the Web shop in the shop management tool.

</details>

<details><summary>Example</summary>

  Give small examples to illustrate your point.

  Example:
  ```markdown
  > ### Example
  > This is an example that I want to be set off from body text. It has an icon and a signal word. And this is the third sentence but there may be more sentences. 3–5 sentences are a rough guideline.
  ```

  Result:
  > ### Example
  > This is an example that I want to be set off from body text. It has an icon and a signal word. And this is the third sentence but there may be more sentences. 3–5 sentences are a rough guideline.

</details>

<details><summary>Tip</summary>

  Tips are usually optional. Advise the user to take an action (or refrain from it) to solve or avoid unwanted, minor issues. No risk of harm. The issues are relatively easy to repair.

  Example:
  ```markdown
  > ### Tip
  > If your system is running slowly, verify that memory configuration parameters are set to the recommended values.
  ```

  Result:
  > ### Tip
  > If your system is running slowly, verify that memory configuration parameters are set to the recommended values.

</details>

<details><summary>Caution</summary>

  Caution the user to avoid severe or dangerous hazards. Potential harm may range from damaged files over data loss and data inconsistency to system failure. The issues are not easy to repair.

  Example:
  ```markdown
  > ### Caution
  > Do not manually alter localization files. Doing so may cause unpredictable results, including data loss.
  ```

  Result:
  > ### Caution
  > Do not manually alter localization files. Doing so may cause unpredictable results, including data loss.

</details>

## Markdown Linting Rules

We run checks on Markdown content when it is added or changed using the [DavidAnson/markdownlint](https://github.com/DavidAnson/markdownlint) tool. This checking process, known as linting, runs automatically when pull requests are created, and help keep the use of markup consistent. The linting process is directed by rules that are used to check the Markdown. There are standard and custom rules.

### Standard Rules

The standard rules used are described in the following table; the rule names refer to the technical identifiers used in the configuration.

|Rule Description|Rule Name|
|-|-|
|Heading levels should only increment by one level at a time|`heading-increment`|
|The syntax for links should be the right way round|`no-reversed-links`|
|There must be a space after the hash or hashes on a heading|`no-missing-space-atx`|
|There must be only a single space after the hash or hashes on a heading|`no-multiple-space-atx`|

For more information on these rules, refer to the [Markdown linting rules documentation](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md).

### Custom Rules

There are custom rules that can be used; these rules are implemented with custom extensions used with the linting tool. Currently there is only a single custom rule in use:

* Headings should be written using title case.
