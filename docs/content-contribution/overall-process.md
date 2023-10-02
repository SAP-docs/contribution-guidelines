# The Overall Process

This section describes the overall process for content contributions based on pull requests. For a high-level view of contributions, see [Contributing to SAP Documentation](../contributing.md).

## Starting Point

The overall process for content contribution starts with you.

1. You're reading documentation on [SAP Help Portal](http://help.sap.com). You come across something you're not sure is entirely accurate, or you've spotted a typo, or you think that there's a small addition or amendment that you can offer that would help clarify or otherwise add value to what's already there.

2. You look for the *Edit page* option via the *Feedback* link in the function bar near the top of the page. If there is no such option, the documentation is not yet part of SAP's Open Documentation Initative.

![Content contribution link](../assets/content-contribution-link.png)

Great, you're all set to start.

## What's Next?

Your intention here is to offer a contribution of content, by making the appropriate change to the document source, and submitting that change. You can make your changes in your browser directly, you don't need any special software to collaborate.

The change that you make is automatically managed by [Git][git], and we follow the standard GitHub review process. To find out more, see [Collaborating with issues and pull requests][github-pull-request].

The document source is in a lightweight markup language called [Markdown][markdown]. The language is simple enough to master and can be edited either directly in the browser based editor on GitHub, or in any plain text editor.

You will submit your proposed change, which will be in the form of one or more commits, bundled into a [pull request][github-pull-request]. The pull request is the representation of your contribution.  It is a request for the relevant SAP documentation team to consider and merge your changes.

The pull request's status reflects the situation at any given point in time:

- **Open**: the pull request has been created and submitted. This status remains also throughout the entire contribution discussion.
- **Merged**: the pull request was accepted and the changes have been merged into the main set of sources.
- **Closed**: the pull request is no longer under consideration and the changes have not been merged. This is the case where the changes offered were not appropriate. It also may be because the circumstances in which the change was originally proposed, are now different. For example, the documentation might have been amended or removed.

[sap-help-portal]: https://help.sap.com
[markdown]: https://en.wikipedia.org/wiki/Markdown
[git]: https://en.wikipedia.org/wiki/Git
[github]: https://github.com
[github-pull-request]: https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests
