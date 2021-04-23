---
id: glossary
title: Glossary
description: An academic-centric glossary of terms used in Start Your Lab's documentation
slug: /glossary
---

:::caution

Proceed with caution: This page is still under construction!

:::

## GitHub Terms

The terms below are ordered roughly in terms of anticipated relevance to new users of GitHub.

### GitHub's philosophy

GitHub is based on ideas about how to help people collaborate effectively. Knowing what some of these ideas or goals are can help new users understand not just what or how, but _why_ things look and operate like they do.

Some of the central ideas include
- **Make changes in chunks.** Whether solving problems or adding something, do it one thing at a time. See [branches](#branch), [commits](#commit), and [pull requests](#pull-request), among others.
- **Describe what you're doing.** When making a single small change (see: [commit](#commit)) or a bunch of bigger changes (see: [pull request](#pull-request)), leave an informative note that describes that change. Allow flexible and interconnected naming of things like [branches](#branches), [issues](#issue), and more.
- **Track everything.** Keep track of _who_ does _what_ and _when_. Don't ever truly delete any conversations, messages, or documents. Log every event.
- **Be intentional.** Whenever taking action of any sort (making a change, reconciling different versions of a document, etc.), don't do it thoughtlessly - make it an active step that must be considered, executed, and logged.
- **More people is better.** Make it easy to tag other people using the @ symbol in all kinds of ways (to review code; to approve changes; to comment on something; etc.), and provide terms, procedures, and mechanisms to allow people, _lots_ of people to work simultaneously on and talk about a single project or document.

### Repository

**Repositories** are what many people would call a project, and in academic labs, are generally where you want to locate a research study's materials (e.g. you want to have a repository called "studyname" that contains all analysis files and documents for that study). Repositories can also be for other standalone objects (if you're developing a set of analysis scripts that aren't tied to a particular dataset, they should be their own repository).

A repository can contain many folders and files, multiple branches, and so on, and so serves to group related materials together at the broadest level.

### Organization

A GitHub **organization** serves as a way to group a number of different repositories (each with the materials for different studies or projects) together, and connect people who regularly collaborate on those different repositories.

Most academic groups (e.g. a research lab, a class) would make a dedicated GitHub _organization_ for that group to co-locate the group's different repositories and facilitate connection between e.g. the lab members, the class's students, etc.

### Issue

**Issues** provide a space to discuss things to do. Issues are often used to list, describe, track, and discuss desired improvements to materials, problems that need fixing, etc. In a research context, issues can also be used to keep track of things that need doing, and so can function as a to-do list that's closely connected to your code.

Every issue is given a number, and that number can be referenced in a variety of places (like pull requests, branch names, etc) to help people keep track of what materials are related to that issue. Issues are specific to a repository.

Issues are "opened" by someone, can feature labels to help organize many issues and identify the kind of issue (improvement, bug, etc), can be commented on multiple times, and once addressed, should be "closed".

### Branch

**Branches** are versions of a given repository. Generally speaking, each repository should have a `main` branch. The code in the `main` branch should be stable (i.e. bug-free), effective, and 'finished' in all ways. Other branches should mostly be temporary, and can be used as in-progress spaces where any major changes to the code are made, finalized, and then moved back into the `main` branch.

When making substantial changes to code, it's recommended to create a new branch that can be thought of as a temporary version, or work-in-progress version of the `main` branch (here we'll call this branch `develop`, though note there are best practices for branch naming that emphasize informative branch names, i.e. descriptive names, or names that reference [issues](#issue)). Changes can be made, code developed, errors fixed, features or analyses or documents added in this `develop` branch, all while the `main` branch remains untouched. Once the substantial changes in `develop` are done, and the code on the branch is commented, tested, and complete, generally you'll want to merge that branch with `main`, which will update `main` to include all the changes you just made. Then you can delete `develop`.

An analogy would be when working with a grant proposal, if you want to make major changes to a section, it can be a good idea to make a separate working copy of the proposal and make your big changes in there until you're satisfied that they're good enough to use. If you decide they're not, or if you mess up, or if a colleague suddenly wants to see the grant, or you run out of time, you can send them the stable version (not the working copy).

### Commit

### Push

### Pull request

### Merge

**Merging** is the process by which two versions of code are compared, reconciled, and ultimately combined to make one new version of that code. It is the final step in the GitHub cycle.

### Labels

**Labels** function a little like what might be called tags or flags in other domains. While there are default GitHub labels, you can change or configure them to suit your needs. Labels can be attached to issues or pull requests and used to organize and quickly identify them.

Repositories can have hundreds or thousands of issues and/or pull requests - so being able to identify all the issues related to bug fixes, for example, can be useful. Labels can also be used to flag issues that need attention or help, or to quickly indicate the status of an issue (e.g. not started, in progress, stuck).

## Slack Terms

### Workspace

**Workspaces** are for organizations or groups that communicate frequently. A lab, class, or interest group might have a Slack workspace they share. Workspaces contain multiple [channels](#channel), and a group of connected users. 

### Channel

A **channel** is a kind of chat room that can hold many people. Channels are generally designed around a topic, e.g. a channel to share recommended journal articles, a channel for sharing best practices, a channel about a specific study, etc. Channels can be public (any member of the [workspace](#workspace) can join) or private (only invited people can join).
