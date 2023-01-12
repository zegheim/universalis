# universalis

A thin front end alternative around [universalis.app](https://universalis.app), an FFXIV market board data site with crowd-sourced information.

## Features

* Latest market board data
* Search by item name

## Contributing to `universalis`

There are many ways to contribute: logging bugs, submitting pull requests (PRs), reporting issues, and creating suggestions.

If you are contributing significant changes, please discuss with the [project maintainer](mailto:hello@aristakas.in) first before starting to work on the PR.

> Did you find any inconsistencies in this README? If so, [fork this repository](https://github.com/zegheim/universalis/fork) and send a PR!

### Prerequisites

In order to download necessary tools, clone the repository, and install dependencies via yarn, you need network access.

You'll need the following tools:

1. [Git](https://git-scm.com/)
2. [Node.js®](https://nodejs.org/en/), x64, version >=16.14.x
3. [Yarn 2+](https://yarnpkg.com/getting-started/install), version >=3.3.x

### Build and run

If you want to understand how `universalis` works or want to debug an issue, you'll want to get the source, build it, and run it locally.

#### Getting the sources

First, fork the `universalis` repository so that you can make a pull request. Then, clone your fork locally:

```bash
git clone git@github.com:<<<your-github-account>>>/universalis.git
```

Occasionally you will want to merge changes in the upstream repository (the official code repo) with your fork.

```bash
cd universalis
git checkout master
git pull git@github.com:zegheim/universalis.git master
```

Manage any merge conflicts, commit them, and then push them to your fork.

#### Build

Install and build all of the dependencies using Yarn:

```bash
cd universalis
yarn
```

#### Run

To test your changes, launch the development version of the app locally:

```bash
yarn dev
```

#### Unit testing

TBD

#### Linting

We use [eslint](https://eslint.org/) for linting our sources. You can run eslint across the sources by calling `yarn lint` from a terminal or command prompt. 

To lint the source as you make changes you can install the [eslint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

### Troubleshooting

TBD

###