---
id: contributing
title: Contributing
description: Learn how you can contribute to Start Your Lab. We welcome community contributions.
---

<!-- Much of the content adapted from Docusaurus v2's contributing documentation -->

[Start Your Lab](https://www.startyourlab.com/) is currently in development. We have [early adopters who already use our Start Your Lab to work more effectively and efficiently together](/community/labs). We welcome you to collaborate with us on Start Your Lab's materials as a contributor.

The [Open Source Guides](https://opensource.guide/) website has a collection of resources for individuals, communities, and companies who want to learn how to run and contribute to an open source project like Start Your Lab. Contributors and people new to open source alike will find the following guides especially useful:

- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [Building Welcoming Communities](https://opensource.guide/building-community/)

## [Code of Conduct](https://github.com/startyourlab/.github/blob/main/CODE_OF_CONDUCT.md) {#code-of-conduct}

Start Your Lab has adopted a Code of Conduct that we expect our community members to adhere to. Please read [the full text](https://github.com/startyourlab/.github/blob/main/CODE_OF_CONDUCT.md) so that you can understand what behaviors will and will not be tolerated.

## Get involved {#get-involved}

There are many ways to contribute to Start Your Lab, and many of them **do not involve writing any code**. Here are a few ideas to get involved:

- Start using Start Your Lab! Check out the [docs](/docs), read the [blog](/blog), and learn more through our [resources](/community/resources). Does everything work as expected? If not, we're always looking for ways to improve this site's interface to support academic researchers like you. Let us know by [opening an issue](#reporting-new-issues).
- Look through the [open issues](https://github.com/startyourlab/website/issues). If you find an issue you would like to fix, [open a pull request](#your-first-pull-request). Issues tagged as [_good first issue_](https://github.com/startyourlab/website/labels/good%20first%20issue) are a good place to get started.
- Help us making the materials better. [File an issue](#reporting-new-issues) if you find anything that is confusing or can be improved.
- Take a look at the [features requested](https://github.com/startyourlab/website/labels/enhancement) by others in the community and consider opening a pull request if you see something you want to work on.

Contributions are very welcome. If you think you need help planning your contribution, please contact us on Twitter at [@startyourlab](https://twitter.com/startyourlab) and let us know you are looking for a bit of help. We typically respond within a day or two, and often faster!

## Our development process {#our-development-process}

Start Your Lab uses [GitHub](https://github.com/startyourlab/website) as its source of truth. The active team will be working directly there. All changes will be, and have been, public from the beginning.

When a change made on GitHub is approved, it will be checked by our continuous integration system that deploys our website to GitHub Pages.

### Reporting new issues {#reporting-new-issues}

When [opening a new issue](https://github.com/startyourlab/website/issues/new/choose), always make sure to fill out the issue template. **This step is very important!** Not doing so may result in your issue not being managed in a timely fashion by a member of the [active team](/community/team#active-team) that maintains Start Your Lab. If this happens, don't take it personally, and feel free to open a new issue once you've gathered all the information required by the template.

- **One bug, one issue:** Please report a single bug per issue.
- **Provide reproduction steps:** List all the steps necessary to reproduce the issue. The person reading your bug report should be able to follow these steps to reproduce your issue with minimal effort.

### Reporting bugs {#reporting-bugs}

We use [GitHub Issues](https://github.com/startyourlab/website/issues) for tracking, discussing, and fixing our site's bugs. If you would like to report a problem, take a look around and see if someone already opened an issue about it. If you a are certain this is a new, unreported bug, you can submit a [bug report](#reporting-new-issues).

If you have questions about using Start Your Lab, contact the Start Your Lab Twitter account at [@startyourlab](https://twitter.com/startyourlab), and we will do our best to answer your questions.

You can also file issues as [feature requests or enhancements](https://github.com/startyourlab/website/labels/feature). If you see anything you'd like to be implemented, create an issue with the [feature request template](https://github.com/startyourlab/website/issues/new?assignees=&labels=feature%2C+needs+triage&template=feature_request.md)

## Working on Start Your Lab code {#working-on-startyourlab-code}

:::note

This section _does_ require some experience with writing code.

:::

### Installation {#installation}

1. Ensure you have [Yarn](https://yarnpkg.com/) installed
2. After cloning the repository, run `yarn install` in the root of the repository
3. To start a local development server serving the Start Your Lab site, run `yarn start` from the root of the `website` repository.

### Semantic commit messages {#semantic-commit-messages}

See how a minor change to your commit message style can make you a better programmer.

Format: `<type>(<scope>): <subject>`

`<scope>` is optional

**Example**

```
feat: allow overriding of webpack config
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

The various types of commits:

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)

Please use **lower case commit messages**, not title case!

### Code conventions {#code-conventions}

#### Style guide {#style-guide}

[Prettier](https://prettier.io/) will catch most styling issues that may exist in your code. You can check the status of your code styling by simply running `npm run prettier`.

However, there are still some styles that Prettier cannot pick up.

#### General {#general}

- **Most important: Look around.** Match the style you see used in the rest of the project. This includes formatting, naming files, naming things in code, naming things in documentation.
- Ask us! If you aren't sure, we'd love to help you learn how to contribute great code.

#### Documentation {#documentation}

- Do not wrap lines at 80 characters. Please configure your editor to soft-wrap when editing documentation.

## Pull requests {#pull-requests}

### Your first pull request {#your-first-pull-request}

So you have decided to contribute code to our site by opening a pull request. You've invested a good chunk of time, and we appreciate it. We will do our best to work with you and get the pull request looked at.

Working on your first Pull Request via GitHub? We suggest trying our [Git Goals Tutorial](/docs/tutorials/git-goals) before anything else. You can also learn how from this free video series:

[**How to Contribute to an Open Source Project on GitHub**](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

We have a list of [beginner friendly issues](https://github.com/startyourlab/website/labels/good%20first%20issue) to help you get your feet wet in the Start Your Lab codebase and become familiar with our contribution process. This is a great place to get started.

### Proposing a change {#proposing-a-change}

If you would like to request a new feature or enhancement but are not yet thinking about opening a pull request, you can also file an issue with [feature template](https://github.com/startyourlab/website/issues/new?assignees=&labels=feature%2C+needs+triage&template=feature.md).

If you intend to change the public API (e.g., something in `docusaurus.config.js`), or make any non-trivial changes to the implementation, we recommend filing an issue with a [feature request template](https://github.com/startyourlab/website/issues/new?assignees=&labels=feature%2C+needs+triage&template=feature_request.md) and including `[Proposal]` in the title. This lets us reach an agreement on your proposal before you put significant effort into it. _These types of issues should be rare._

If you're only fixing a bug, it's fine to submit a pull request right away but we still recommend filing an issue detailing what you're fixing with the [bug report template](https://github.com/startyourlab/website/issues/new?assignees=&labels=bug%2C+needs+triage&template=bug_report.md). This is helpful in case we don't accept that specific fix but want to keep track of the issue.

### Sending a pull request {#sending-a-pull-request}

Small pull requests are much easier to review and more likely to get merged into our `production` branch. Make sure the pull request does only one thing, otherwise please split it into multiple, smaller, single-purpose pull requests. It is recommended to follow this [commit message style](#semantic-commit-messages).

All pull requests should be opened against the `production` branch.

#### Test plan {#test-plan}

A good test plan has the exact commands you ran and their output, provides screenshots or videos if the pull request changes UI.

- If you've changed APIs, update the documentation.

#### Breaking changes {#breaking-changes}

When adding a new breaking change, add this template to your pull request's body:

```md
### New breaking change here

- **Who does this affect**:
- **How to migrate**:
- **Why make this breaking change**:
- **Severity (number of people affected x effort)**:
```

#### Copyright header for source code {#copyright-header-for-source-code}

Copy and paste this to the top of your new file(s):

```js
/**
 * Copyright (c) Start Your Lab, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 */
```

### What happens next? {#what-happens-next}

The core Start Your Lab team will be monitoring for pull requests. Do help us by keeping pull requests consistent by following the guidelines above.

## License {#license}

By contributing to Start Your Lab, you agree that your contributions will be licensed under its MIT license.
