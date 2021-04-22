# Markdown Basics

[Markdown][markdown] is a lightweight markup language that is simple enough to master and can be edited in any text editor. In order to make it as easy as possible for you to collaborate with us, and offer contributions of content, the SAP documentation sources are presented in Markdown.

## Learning from Examples

Even more important than being simple to master, Markdown is also easy to read. This has immediate benefits. Most importantly for collaborating with us on documentation is that when editing the source for a particular page of SAP documentation, you're able to view the Markdown source directly. This helps enormously because you can see how the different Markdown elements are used, and where, and these can become examples for you to build upon.

In other words, when making a content contribution, take some time to look around the entire Markdown file, and get a feel for how different Markdown elements are used.

## A Quick Introduction

There are many introductory and advanced Markdown guides that are freely available, and we recommend that you take a look at some of those (see the appropriate section later in this document).

Nonetheless, we thought it would be helpful to give a quick introduction, so you can see how straightforward it is and how easy to use it can be.

Markdown has syntax to mark up various aspects of a document, aspects such as text emphasis and usage, lists, links, images and more. It also supports the appropriate rendering of programming and configuration languages, especially useful for showing examples and snippets.

### Text Emphasis and Usage

Headings in a document are introduced by `#` characters at the start of the line. The more characters, the lower the level of heading.

```markdown
# Top level heading (equates to <h1> in HTML)
## Second level heading (equates to <h2> in HTML)
### Third level heading
```

> For a real example, the heading introducing this section, that is "Text emphasis and usage", is marked up with `###` to denote a third level heading.

Text can be marked as italic, bold or even both, using `*` and `_` characters:

```markdown
_This will be emphasized in italics_, and *so will this*.
On the other hand, **this will be bold**, and __this will be bold too__.
And _**this**_ will be both bold and italic.
```

### Lists

Ordered and unordered lists can be created, and they support sub items. Here is an unordered list:

```markdown
- an item
- another item
  - a sub-item
```

Here is an ordered list:

```markdown
1. first item
1. second item
   1. first sub-item for the second item
   1. second sub-item for the second item
1. third item
```

> You can use absolute numbering (for example `1.`, `2.`, `3.`, and so on) or, as shown here, you can use `1.` to introduce each item in a list (or sublist), and the actual rendering will be ordered appropriately.

### Links and Images

In hypertext media, links are fundamental, and it's easy to present links in Markdown. Here's a simple example of the "inline" style:

```markdown
Check out the [SAP Community missions and badges](https://community.sap.com/resources/missions-badges) ...
```

Images are marked up in a similar fashion, the difference is that the markup is prefixed with a `!` character:

```markdown
![A screenshot showing the possible selections](selections-screenshot.png)
```

### Language Rendering

Perhaps one of the most useful aspects of Markdown is the simple way you can have code or configuration rendered. Lines of code or configuration can be introduced by three backtick characters, followed by the name of the language or configuration format. Three backticks also end the set of lines to be rendered. Take a look at the Markdown source for this very document to see examples of this.

There's also the single backtick variant, which can be used within a line to render something in a monospaced way, useful for constants, variable names, file names, and similar items:


```markdown
Check out the `CONTRIBUTING.md` file for more information.
```

## Further Reading

[The Markdown Guide][markdownguide] is a free and open source reference guide. In addition, we recommend you take a look at [Mastering Markdown][github-guides-mastering-markdown], one of the [GitHub Guides][github-guides].


[markdown]: https://en.wikipedia.org/wiki/Markdown
[markdownguide]: https://www.markdownguide.org/
[github-guides]: https://guides.github.com/
[github-guides-mastering-markdown]: https://guides.github.com/features/mastering-markdown/
