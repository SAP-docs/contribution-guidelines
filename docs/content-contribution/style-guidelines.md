# Style Guidelines

This document outlines some style guidelines that we recommend when contributing content in Markdown. They are not mandatory, but they help us to include your contribution more easily to the SAP documentation.

* [Language](#language)
* [Section Headings](#section-headings)
* [Links](#links)
* [Formatting of Inline Elements](#formatting-of-inline-elements)
* [Code Snippet Formatting](#code-snippet-formatting)
  
## Language

* Use US English. 
* Keep it simple and use words that non-native English speakers are also familiar with.

## Section Headings

If you want to modify or create a new section heading, we recommend [title case](https://en.wikipedia.org/wiki/Title_case).


## Links

We prefer the "inline" approach for [links in Markdown](https://www.markdownguide.org/basic-syntax/#links).

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
| Button, Menu path | Choose *UI Element*. | `Choose *UI Element*.` |
| Menu path, context menu, navigation path  |  Choose *System* \> *User Profile* \> *Own Data*. | `Choose *System* \> *User Profile* \> *Own Data*.` |
| Entry fields | Enter your password. | `Enter your password.` |
| Checkbox, radio button | Select *Filter*. | `Select *Filter*.` |
| Expandable screen elements | Expand *User Settings*.<br>Collapse *User Settings*. | `Expand *User Settings*`.<br>`Collapse *User Settings*.` |


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

### Don't include the command prompt

|  Do  | Don't |
|:---|:---|
| `cf marketplace`  | `$ cf marketplace` |


### Separate commands from output

> ### Example
>
> 3. Update the XSUAA service.
> 
>         cf update-service myuaa -c xs-security.json
> 
> 4. Open a browser window and enter your application’s URL.
> 

