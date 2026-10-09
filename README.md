> Persian version: [README.fa.md](README.fa.md)

# Software Engineering Lab, Experiment 1: Git and GitHub

Lab report by Amirhossein Khoeiniha and Ali Rahimi.

## Introduction

This experiment covers Git and GitHub. The project built for it is a simple static front-end website (`index.html`, `styles.css`, `script.js`). The experiment also uses GitHub Actions, and the site is published on GitHub Pages.

## Creating the repository on GitHub

First, a repository was created on GitHub and then cloned to the local machine with:

`git clone [address]`

## Setting up GitHub Actions

After creating the `.github/workflows` folder, we added a YAML workflow file ([`deploy.yml`](.github/workflows/deploy.yml)) that deploys the site to GitHub Pages. It first sets the basic options, such as running on pushes to `main`, and then the steps needed to build the project. Next, we created a GitHub access token, stored it in the repository as a secret named `GH_TOKEN`, and referenced it in the YAML file.

## Creating `.gitignore`

The `.gitignore` file tells Git which files and folders to ignore and not store in the repository. This keeps only the important project files, such as source code and configuration, under version control, and keeps out large files and external dependencies that can be recreated when the project is installed. The entries in our `.gitignore` are:

1. `/node_modules`: the folder where `npm` stores the project's dependencies. These files are usually very large and can easily be downloaded again with `npm install`.
2. `*.npm-debug.log`, `*.log`, `*.logs`: `npm` logs and other log and error files used for debugging, which normally do not need version control.
3. `lib-cov`: the folder used by coverage tools such as `jscoverage`/`JSCover` for instrumented libraries.
4. `coverage`: the folder where tools such as `istanbul` store code coverage reports.
5. `grunt`: the folder where `Grunt` stores temporary files.
6. `bower_components`: the folder where `Bower` stores the project's dependencies.
7. `*.swp`, `*.vscode`, `*.idea`: settings and data of development environments such as `WebStorm` and `Visual Studio Code`, and `vim` swap files.
8. `DS_Store.*`: hidden files that `macOS` creates in every folder to store display metadata.
9. `*.tmp`, `*.temp`: temporary files that may be created while working on the project.
10. `build`, `dist`: folders for build output and the final distributable files.

Ignoring these files and folders keeps files that do not need version control out of the repository and stops it from growing unnecessarily.

## Implementing the project with branches

The project was built in branches, each covering a different part of the work, which were finally merged into `main`.

We used more than 20 commits. Besides `main`, we used three branches: `feature`, `dev` and `hotfix`. At the end we deliberately created 3 merge conflicts and resolved them. Each commit implemented one of the following steps:

Commits on `dev`:

1. Add the basic HTML structure.
2. Add basic CSS styles.
3. Add the basic JavaScript file.
4. Add the HTML structure for navigation.
5. Add CSS styles for navigation.
6. Add the form structure in HTML.
7. Add form styles in CSS.
8. Improve the JavaScript to update content dynamically.
9. Add event listeners to the navigation links.
10. Add the About and Contact sections to the HTML.

Commits on `feature`:

11. Add the HTML structure of the Home section.
12. Improve the JavaScript for the Home section.
13. Make the CSS responsive on mobile (add media queries).
14. Add a basic form to the Contact section in HTML.
15. Style the form in CSS.
16. Handle form submission in JavaScript.

Commits on `hotfix`:

17. Fix a CSS styling problem.
18. Add a favicon link to the HTML.
19. Small JavaScript improvement for form validation.

Finally, we merged the branches and resolved the conflicts that came up during the merges.

## Answers to the questions

**1. What is the `.git` folder? What information does it store? Which command creates it?**

The `.git` folder is a hidden directory that holds all the information and metadata of a Git repository, including the commit history, objects, branches and repository settings. It is created by `git init`.

**2. What does "atomic" mean in an atomic commit and an atomic pull request?**

An atomic commit contains all the changes for one unit of work (such as a feature or a bug fix) together: either all of the changes are applied, or none of them.

An atomic pull request contains all the changes needed for one feature or bug fix. If it is accepted, all of its changes are applied together; if it is rejected, none of them are.

**3. Explain the differences between `fetch`, `pull`, `merge`, `rebase` and `cherry-pick`.**

- `pull`: downloads new changes from the remote repository and then merges them into the current branch.
- `fetch`: downloads the changes without merging them.
- `merge`: combines the changes of another branch into the current branch.
- `rebase`: replays the commits of the current branch on top of a new base branch.
- `cherry-pick`: applies one or more specific commits from another branch to the current branch.

**4. Explain the differences between `reset`, `revert`, `restore`, `switch` and `checkout`.**

- `reset`: moves the current branch back to an earlier point and can remove changes from the history.
- `revert`: undoes a commit by creating a new commit that reverses its changes.
- `restore`: restores files in the working tree from the history or the staging area.
- `switch`: switches between branches.
- `checkout`: switches branches or restores files.

**5. What is the stage (index)? What does `stash` do?**

- Stage / index: a temporary area between the working directory and the history, where file changes are placed before they are committed.
- `stash`: temporarily saves the current uncommitted changes and returns the working tree to a clean state, so the saved changes can be reapplied later.

**6. What does "snapshot" mean, and how does it relate to a commit?**

- Snapshot: a complete picture of the state of all files at a given moment. Every Git commit is a snapshot of the project at that moment.
- Commit: stores a snapshot of the project's changes and records it in the project history.

**7. What are the differences between a local and a remote repository?**

- Local repository: the copy of a Git repository on the user's own computer. The user makes and commits changes in this copy.
- Remote repository: a copy of the repository on an external server, usually used to share work between several people. Changes are exchanged between local and remote repositories with commands such as `fetch`, `pull` and `push`.
