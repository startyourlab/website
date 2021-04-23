---
id: git-goals
title: Git Goals
description: Learn how to make your first real contribution on GitHub with the Git Goals Tutorial
keywords:
  - git
  - goal
  - profile
  - tutorial
  - github
  - learn
slug: /tutorials/git-goals
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Welcome to Start Your Lab's official page for the **Git Goals Tutorial**.
In this tutorial you will learn how to make your first real contribution
on GitHub!

## Prerequisites

Before continuing with this tutorial, you must create a user account on GitHub.
You can do so by [following these instructions](/docs/github-accounts#create-your-github-user-account).

You don't need any special software to do this tutorial - you'll participate using just the GitHub.com interface. The steps to follow for this tutorial are detailed here on this page.

### Pick the guide that's right for you

If you are working through this tutorial after participating in an official Start Your Lab workshop, you should select the **Workshop Participant** tab below. Otherwise, you should stick with the **Community Member** tab to follow along with this tutorial.

<Tabs
  groupId="participant-type"
  defaultValue="community"
  values={[
    {label: 'Community Member', value: 'community'},
    {label: 'Workshop Participant', value: 'workshop'},
  ]
} />

## Create your git goals file

The goal of this tutorial is to create a <i>git goals file</i>, where you will describe yourself with a professional summary, a fun fact, and a short description of a goal you have related to best practices. For example, you can view Ari Dyckovsky's git goals file [at this link](https://github.com/startyourlab/git-goals-tutorial/blob/main/git-goals-files/community/aridyckovsky.md).

<Tabs
  groupId="participant-type"
  defaultValue="community"
  values={[
    {label: 'Community', value: 'community'},
    {label: 'Workshop', value: 'workshop'},
  ]
}>
  <TabItem value="community">
    <p>
      To get started, open the <a href="https://github.com/startyourlab/git-goals-tutorial">Git Goal Tutorial's GitHub repository</a> in a new browser window, and then navigate into the <code>git-goals-files</code> folder on the tutorial's repository page.
      Then, open the <code>community</code> folder.
    </p>
    <p>
      While inside the <code>community</code> folder, click <b>Add file > Create new file</b>. Then, name your file
      using your GitHub username, like <code>username.md</code>. Make sure to include the file
      extension <code>.md</code>.
    </p>
    <p>
      You should now copy and paste the contents of the <a href="#template-for-git-goals-file-contents">template text below</a> into the live editor for your newly created git goals file.
    </p>
  </TabItem>
  <TabItem value="workshop">
    <p>
      To get started, open the <a href="https://github.com/startyourlab/git-goals-tutorial">Git Goal Tutorial's GitHub repository</a> in a new browser window, and then navigate into the <code>git-goals-files</code> folder on the tutorial's repository page.
      Then, open the <code>workshops</code> folder.
    </p>
    <p>
      Please navigate into your workshop's folder (it will have a descriptive name that identifies your workshop, such as <code>du-psych</code>).
      Open your <i>personal</i> git goals file by clicking on the file with your name ending in <code>.md</code>.
    </p>
    <p>
      <b>Can't find your named file?</b>
    </p>
    <p>
      If you can't find your named file in your workshop folder, please feel free to create one inside of your
      workshop's folder by clicking <b>Add file > Create new file</b>. Then, name your file
      using your first and last name, like <code>first-last.md</code>, and be sure to include the file
      extension <code>.md</code>. You should now copy and paste the contents of the <a href="#template-for-git-goals-file-contents">template text below</a> into the live editor for your newly created git goals file.
    </p>
  </TabItem>
</Tabs>

:::info

`.md` files are called Markdown files. They're a standard filetype that makes it easy to create formatted documents. You can learn more about Markdown documents (files ending in `.md`) using the [Markdown Guide](https://www.markdownguide.org/).

:::

### Template for git goals file contents

If you are creating a git goals file, use this template. If you already have a git goals file, just use the existing template in that file.

```md
# First Last (pronouns)

## :mortar_board: Professional Summary

A professional summary consisting of 2 or 3 sentences goes here.

## :smile: Personal Fun Fact

A personal fun fact goes here.

## :white_check_mark: Best Practices Learning Goal

A best practices learning goal that you intend to implement goes here.
```

:::note

This template uses [emoji codes](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md), i.e., `:mortar_board:` for 🎓.

:::

## Add your git goals

After locating and opening or creating your git goals file with the [template](#template-for-git-goals-file-contents), it's time to make some updates to reflect who you are and what your Git Goals are!

If you created the file and pasted in the template yourself, you're already editing it! If you found your file and clicked on it, you need to switch into <i>editing mode</i>. To do that, click on the small pencil icon over on the right of the screen (it'll be next to icons of a trash can and a computer). Click that pencil!

Now that you're in editing mode, for this tutorial we ask you to make the following changes:

1. Change `First Last` to your name
2. Add your pronouns next to your name
3. Update your professional summary
4. Include a personal fun fact
5. Write your best practices learning goal

When you think your git goals file is ready to go, you can click on the "Preview changes" button directly above the file's text. Simply click "Edit file" to go back to the editor. After you finish writing the contents of your git goals file, you need to "save" your changes. You'll do this by proposing your changes to the repository.

## Propose your changes

Below the file editor, there's a small form with the phrase **Propose changes** or **Propose new file** at the top. This is where you write a message that briefly describes what you just did, giving enough context that someone who later wants to understand what happened in the file could read your description and know roughly what changes were made.

Use the provided form to write a brief title message that describes the changes you made above (just a few words, e.g. "filled out git goals profile"). You can use the larger text box below to write an extended description, which can help provide more context around your file modifications for both you and your team. Then, click the button to submit the proposed changes.


:::tip

Part of the philosophy of Git is to always make changes _intentionally_. That means that every time you want to integrate a change into your main code, you have to fill out a message like this summarizing what you did. When the repository is not yours or one you've explicitly been granted access to, you **Propose** changes. When the repository is yours, or someone has given you special access to it, you **Commit** changes. They function very similarly in most other respects.

:::

## Create a pull request

<!-- TODO: Need to add some in-tutorial links to glossary when ready -->
After proposing your changes, you will be brought to a page titled "Comparing changes". This is where you will create a _pull request_, which informs the Start Your Lab team that you would like to add your completed git goals file to the tutorial repository. Click **Create pull request**, and it will bring you to a text editor to describe your pull request.

The title of your pull request should automatically use the summary description text that you wrote in the previous step,
and the body should look like this:

```md
# Summary of the changes made to your personal file

Please delete this line and replace it with a short summary of the changes made to your personal git goals file.

```

To fill out the pull request's template, simply replace the `Please delete ...` line with documentation of your changes.
There will be many other things on the page, but don't worry about them for this tutorial. When you've documented
the changes you made, simply click the green **Create pull request** button. This submits your request and notifies
the Start Your Lab team that you have made changes.

## After your pull request

Once you submit a pull request, the process isn't over, but that's all you need to do for now! At this point, a member of the Start Your Lab team will review the proposed changes to your git goals file and make sure everything works as expected. This
review is _not_ a test and serves only as an opportunity for you to receive constructive, friendly,
and supportive feedback on your first contribution from the Start Your Lab team.

If we happen to notice a way to improve your pull request, we'll let you know by leaving a
comment on the pull request page. If so, it's pretty easy to edit the file, and we'd be happy to guide you through that. Then, when everything
is in tip-top shape, we can approve your changes and _merge_ them into the
main, public-facing version of the project, called the _main branch_. Once your requested changes are pulled into the repository's main branch (the default, working version of the project), your pull request will be closed and you will be able to find your git goals file in the [main tutorial repository's `git-goals-files`](https://github.com/startyourlab/git-goals-tutorial/tree/main/git-goals-files) folder.

<!-- TODO: What happens after pull request submitted -->

## Congratulations on your first contribution!

You did it! You made your first real contribution to a GitHub repository. Not too bad, right?


### Tutorial feedback

This tutorial is relatively new! We welcome, value, and appreciate any feedback you may have about this tutorial. You can send your feedback to [feedback@startyourlab.com](mailto:feedback@startyourlab.com?subject=Git%20Goals%20Tutorial%20Feedback)
