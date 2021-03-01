# Style Guidelines

This document outlines mandatory and recommended style guidelines when contributing content in Markdown.

## Mandatory style


## Recommended style

This section describes approaches to Markdown style that are not mandatory but which we prefer and would recommend you adopt too, when offering a content contribution.

### Links

When it comes to [links in markdown][links], we prefer the "reference" approach for absolute URLs. Absolute URLs are ones which normally contain a scheme (e.g. `https://`) and a fully qualified doman name (e.g. `help.sap.com`) followed by path info and other optional URL components.

This is the "inline" approach, where the URL follows the link text directly:

```markdown
See the [SAP Community](https://community.sap.com) for more information.
```

The preferred "reference" approach looks like this:

```markdown
See the [SAP Community](sapcommunity) for more information.

[sapcommunity]: https://community.sap.com
```

The URL is specified in a separate link label, which can appear anywhere in the document, but we recommend it be placed either at the end of the section or at the end of the document.

Note that for relative URLs (as opposed to absolute URLs), especially those referring to other documents in a documentation set, the "inline" approach is acceptable.

[links]: https://daringfireball.net/projects/markdown/syntax#link

