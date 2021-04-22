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

Before continuing with this tutorial, please create a user account on GitHub.
You can do so by [following these instructions](/docs/github-accounts#create-your-github-user-account).

## Setup

Open the [tutorial repository](https://github.com/startyourlab/git-goals-tutorial). You will
use GitHub's web interface to implement each of the steps detailed below.

## Create your git goals file

We invite you to develop what we call a <i>git goals file</i>. For example, [this is a completed git goals file](https://github.com/startyourlab/git-goals-tutorial/blob/main/community/aridyckovsky.md).

If you are working through this tutorial after participating in an official Start Your Lab workshop, you should select the **Workshop** tab below. Otherwise, you should stick with the **Community** tab to follow along with this tutorial.

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
      To get started, navigate into the <code>git-goals-files</code> folder on the tutorial's repository.
      Then, open the <code>community</code> folder.
    </p>
    <p>
      While inside the <code>community</code> folder, click <b>Add file > Create new file</b>. Then, name your file
      using your GitHub username, like <code>username.md</code>. Make sure to include the file
      extension <code>.md</code>.
    </p>
    <p>
      You should now copy and paste the contents of the following template text into the live editor for your new git goals file.
    </p>
  </TabItem>
  <TabItem value="workshop">
    <p>
      To get started, navigate into the <code>git-goals-files</code> folder.
      Then, open the <code>workshops</code> folder.
    </p>
    <p> 
      Please navigate into your workshop's folder, which you can find by looking for a blue
      folder icon next to a name that identifies your workshop, such as <code>du-psych</code>.
      Open your personal git goals file by clicking on the associated filename ending in <code>.md</code>.
    </p>
    <p>
      <b>Can't find your named file?</b>
    </p>
    <p>
      Please feel free to create one inside of your
      workshop's folder by clicking <b>Add file > Create new file</b>. Then, name your file
      using your first and last name, like <code>first-last.md</code>, and be sure to include the file
      extension <code>.md</code>.
      You should now copy and paste the contents of the following template text into the live editor for your newly created git goals file.
    </p>
  </TabItem>
</Tabs>

### Template for git goals file contents

```{md}
# First Last

## :mortar_board: Professional Summary

A professional summary consistening of 2 or 3 sentences goes here.

## :smile: Personal Fun Fact

A personal fun fact goes here.

## :white_check_mark: Best Practices Learning Goal

A best practices learning goal goes here.
```

:::info

You can learn more about files ending in `.md` using the the [Markdown Guide](https://www.markdownguide.org/).

:::

## Edit your git goals file

After creating your git goals file, including the [template](#template-for-git-goals-file-contents), it's time to make some updates to reflect who you are and what your Git Goals are.

For this tutorial, we ask you to make the following changes:

1. Change `First Last` to your name
2. Add your pronouns next to your name
3. Update your professional summary
4. Include a personal fun fact
5. Write your best practices learning goal

When you've completed these five steps, you should head to the next step to _commit
your changes_. Of course, after you finish this tutorial, we encourage using
your imagination to personalize your goals file even more.

:::tip

Use the **Preview** tab to check how the edits you make affect the file's appearance.

:::

<!-- TODO: Provide suggested next steps/ideas for personalizing -->

## Commit your changes

Scroll further down on the same page to the **Commit changes** form, and write a summary description of 
the changes you made above (just a few words). You can use the extra text field to write an extended description.

Then, select the option to “Create a **new branch** for this commit and start a pull request.”
In the provided text input, rename the branch (of the form `username-patch-1`) to `username-patch-descriptive-phrase`
(i.e., `username-patch-pronouns`). Click **Propose changes**.

## Create a pull request

After committing your changes, you will be asked to create a pull request.
The title of your pull request should be the summary description you wrote in the previous step,
and the body should look like the following code block: 

```md
# Summary of the changes made to your personal file

Please delete this line and replace it with a short summary of the changes made to your personal git goals file.

```

To fill out the template, simply replace the `Please delete ...` line with documentation of your changes.
There will be many other things on the page, but don't worry about them for this tutorial. When you've documented
the changes you made, simply click the green **Create pull request** button. This submits your request and notifies
the Start Your Lab team that you have made changes.

## After your pull request

Once you submit a pull request, a member of the Start Your Lab team will review the
proposed changes to your git goals file to make sure everything works as expected. This
review is _not_ a test and serves only as an opportunity for you to receive constructive, friendly,
and supportive feedback on your first contribution from the Start Your Lab team.

If we happen to notice a way to improve your pull request, we'll let you know by leaving a
comment on the pull request page. Then, when everything
is in tip-top shape, we can approve your changes and merge your changes into the
main, public-facing version of the project.

<!-- TODO: What happens after pull request submitted -->

## Congratulations on your first contribution!

You did it! You made your first real contribution to a GitHub repository.
