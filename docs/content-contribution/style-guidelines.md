# Style Guidelines

This document outlines mandatory and recommended style guidelines when contributing content in Markdown.

## Mandatory style


## Recommended style

This section describes approaches to Markdown style that are not mandatory but which we prefer and would recommend you adopt too, when offering a content contribution.

### Links

When it comes to [links in markdown][links], we prefer the "reference" approach. This is the "inline" approach, where the URL follows the link text directly:

```markdown
See the [SAP Community](https://community.sap.com) for more information.
```

The preferred "reference" approach looks like this:

```markdown
See the [SAP Community](sapcommunity) for more information.

[sapcommunity]: https://community.sap.com
```

The URL is specified in a separate link label, which can appear anywhere in the document, but we recommend it be placed either at the end of the section or at the end of the document.

[links]: https://daringfireball.net/projects/markdown/syntax#link

