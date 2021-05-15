---
id: command-line
title: Command Line
slug: /command-line
---

:::caution

Proceed with caution: This page is still under construction!

:::

## What is the command line?

The command line is an interface that allows you to provide text-based commands for computers to execute.

## Does my computer have a command line?

Every computer comes equipped with a system-wide command line interface (CLI) called a _shell_. Depending on the operating system of your computer, the default shell is:

- _Z shell_ or _Bash_ on macOS and Linux
- _PowerShell_ on Windows

These shells run programs within a _terminal_ application, such as Terminal on macOS. While shells all serve a similar purpose, they are each different in various ways, including their _command prompts_. The prompts are

- `%` for Z shell
- `$` for Bash
- `>` for PowerShell

## What makes something a command?

A _command_ is made up of a sequence of arguments. In most cases, the first argument of a command is the _command name_, so we will consider a command the combination of two conceptual parts:

1. The _command name_ to express the program you wish to use, and
2. The _arguments_ the program should consider (oftentimes split into _options_).

### Example commands in Bash

Let's consider a few example commands using Bash, meaning all commands will begin after the `$` prompt in a terminal. For this set of examples, suppose we start inside a folder called `parent` that has a child folder, `child`. Then, the child folder has two `.txt` files inside of it. This tree diagram may help visualize the nested file structure we've described:

```bash
parent
└── child
    ├── file-1.txt
    └── file-2.txt
```

To navigate from inside the `parent` folder to the `child` folder, run

```sh
$ cd child
```

which calls `cd` with an argument to go into the directory `child`. Then, if you'd like to see the contents of `child`, run

```sh
$ ls
```

which calls `ls` without arguments to list of the two files `file-1.txt` and `file-2.txt` inside of `child`. When it's time to navigate back to `parent`, run

```sh
$ cd ../parent
```

which calls `cd` with an argument to go up one directory (the `..`) in the tree and into the `parent` directory (the `/parent`).

## For Experienced Users

Once you feel more comfortable with the concept of command line tools, and have had some real experience using one for a project, it's time to step up your game. While many avenues are available, these referenced links include useful collections of materials to make your command line experience even better:

- [The Art of Command Line](https://github.com/jlevy/the-art-of-command-line)
- [MacOS Command Line](https://github.com/herrbischoff/awesome-macos-command-line)
