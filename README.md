Last login: Sat Mar  7 19:11:47 on ttys000
VIRUS@Teresas-MacBook-Air:~|⇒  DevLeague
VIRUS@Teresas-MacBook-Air:~/DevLeague|
⇒  ls
100-Specs                        attHackathon
Angular-Todo                     bats
ArrayExercises                   css
ArrayFun                         dom-insertion
Be-Positive                      dont-string-me-along
Challenge-Even-Fibonacci-Numbers fastenate
Challenge-Multiples-of-3-and-5   globalGameJam
Express-Newsfeed                 jerkoff_jackpot
JQuery_Demo_Tree_Traversal       jquery_events_demo
Javascript_Constructors          js
MultiDimensional_Arrays          js-basics
PixelPainter                     js-functions
Project1                         js-zombies
Responsive_Flappy_App            live-reload
ShoppingList                     node_fs
StarFox-Travel-Agency            out-of-this-world-html
Todo-CRUD                        prototype-basics
Wakka                            rock-paper-fireball
andrew.html                      tmp
array-of-sunshine
VIRUS@Teresas-MacBook-Air:~/DevLeague|
⇒  Angular-Todo
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  ls
README.md
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  git commit -m "initial commit"
On branch master
Changes not staged for commit:
  deleted:    Angular-Todo

no changes added to commit
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  git add .
warning: You ran 'git add' with neither '-A (--all)' or '--ignore-removal',
whose behaviour will change in Git 2.0 with respect to paths you removed.
Paths like 'Angular-Todo' that are
removed from your working tree are ignored with this version of Git.

* 'git add --ignore-removal <pathspec>', which is the current default,
  ignores paths you removed from your working tree.

* 'git add --all <pathspec>' will let you also record the removals.

Run 'git status' to check the paths you removed from your working tree.

VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  git status
On branch master
Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

  deleted:    Angular-Todo

no changes added to commit (use "git add" and/or "git commit -a")
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  git rm Angular-Todo
rm 'Angular-Todo'
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  git commit -m "initial commit"
[master 883d5a2] initial commit
 1 file changed, 1 deletion(-)
 delete mode 160000 Angular-Todo
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master
⇒  git push
fatal: The current branch master has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin master

VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master
⇒  bower init
? name: Angular-Todo
? version: 0.0.0
? description:
? main file:
? what types of modules does this package expose?:
? keywords:
? authors: Teresa Nededog <tnededog@my.hpu.edu>
? license: MIT
? homepage: https://github.com/treindle/Angular-Todo
? set currently installed components as dependencies?: Yes
? add commonly ignored files to ignore list?: Yes
? would you like to mark this package as private which prevents it from being accidentall? would you like to mark this package as private which prevents it from being accidentally published to the registry?: No

{
  name: 'Angular-Todo',
  version: '0.0.0',
  homepage: 'https://github.com/treindle/Angular-Todo',
  authors: [
    'Teresa Nededog <tnededog@my.hpu.edu>'
  ],
  license: 'MIT',
  ignore: [
    '**/.*',
    'node_modules',
    'bower_components',
    'test',
    'tests'
  ]
}

? Looks good?: Yes
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  subl .
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  touch index.html
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  l
total 16
drwxr-xr-x   6 VIRUS  staff   204B Mar  9 10:08 .
drwxr-xr-x  41 VIRUS  staff   1.4K Mar  9 10:03 ..
drwxr-xr-x  16 VIRUS  staff   544B Mar  9 10:08 .git
-rw-r--r--   1 VIRUS  staff    15B Mar  9 10:03 README.md
-rw-r--r--   1 VIRUS  staff   292B Mar  9 10:07 bower.json
-rw-r--r--   1 VIRUS  staff     0B Mar  9 10:08 index.html
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  subl .gitignore
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  git status
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)

  .gitignore
  bower.json
  index.html

nothing added to commit but untracked files present (use "git add" to track)
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  git add .gitignore bower.json index.html
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

  new file:   .gitignore
  new file:   bower.json
  new file:   index.html

VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  git commit -m "Added .gitignore, bower and index"
[master 0d13059] Added .gitignore, bower and index
 3 files changed, 17 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 bower.json
 create mode 100644 index.html
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master
⇒  git push origin/master
fatal: 'origin/master' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master
⇒  git push
fatal: The current branch master has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin master

VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master
⇒  git fetch origin master
From github.com:treindle/Angular-Todo
 * branch            master     -> FETCH_HEAD
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master
⇒  git push origin master
To git@github.com:treindle/Angular-Todo.git
 ! [rejected]        master -> master (non-fast-forward)
error: failed to push some refs to 'git@github.com:treindle/Angular-Todo.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master
⇒  git push branch master
fatal: 'branch' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master
⇒  git push master branch
fatal: 'master' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master
⇒  bower install angular
bower not-cached    git://github.com/angular/bower-angular.git#*
bower resolve       git://github.com/angular/bower-angular.git#*
bower download      https://github.com/angular/bower-angular/archive/v1.3.14.tar.gz
bower extract       angular#* archive.tar.gz
bower resolved      git://github.com/angular/bower-angular.git#1.3.14
bower install       angular#1.3.14

angular#1.3.14 bower_components/angular
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master
⇒  git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

  modified:   index.html

no changes added to commit (use "git add" and/or "git commit -a")
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  git add .
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

  modified:   index.html

VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  git push
fatal: The current branch master has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin master

VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  git push --set-upstream origin master
To git@github.com:treindle/Angular-Todo.git
 ! [rejected]        master -> master (non-fast-forward)
error: failed to push some refs to 'git@github.com:treindle/Angular-Todo.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  git pull
There is no tracking information for the current branch.
Please specify which branch you want to merge with.
See git-pull(1) for details

    git pull <remote> <branch>

If you wish to set tracking information for this branch you can do so with:

    git branch --set-upstream-to=origin/<branch> master

VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  git remote --v
origin  git@github.com:treindle/Angular-Todo.git (fetch)
origin  git@github.com:treindle/Angular-Todo.git (push)
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

  modified:   index.html

VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  git reset --hard
HEAD is now at 0d13059 Added .gitignore, bower and index
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master
⇒  git status
On branch master
nothing to commit, working directory clean
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master
⇒  git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

  modified:   index.html

no changes added to commit (use "git add" and/or "git commit -a")
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  git add index.html
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  git commit -m "syncing git with localhost"
[master f235553] syncing git with localhost
 1 file changed, 16 insertions(+)
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master
⇒  git push
fatal: The current branch master has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin master

VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master
⇒  git push -u origin master
To git@github.com:treindle/Angular-Todo.git
 ! [rejected]        master -> master (non-fast-forward)
error: failed to push some refs to 'git@github.com:treindle/Angular-Todo.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
















E325: ATTENTION
Found a swap file by the name "~/DevLeague/Angular-Todo/.git/.MERGE_MSG.swp"
          owned by: VIRUS   dated: Mon Mar  9 10:06:48 2015
         file name: ~VIRUS/DevLeague/Angular-Todo/.git/MERGE_MSG
          modified: YES
         user name: VIRUS   host name: Teresas-MacBook-Air.local
        process ID: 70162
While opening file "/Users/VIRUS/DevLeague/Angular-Todo/.git/MERGE_MSG"
             dated: Mon Mar  9 10:20:44 2015
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master
⇒  git pull
There is no tracking information for the current branch.
Please specify which branch you want to merge with.
See git-pull(1) for details

    git pull <remote> <branch>

If you wish to set tracking information for this branch you can do so with:

    git branch --set-upstream-to=origin/<branch> master

VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master
⇒  git pull origin master
From github.com:treindle/Angular-Todo
 * branch            master     -> FETCH_HEAD
error: There was a problem with the editor 'vi'.
Not committing merge; use 'git commit' to complete the merge.
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master
⇒  git clean -f
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master
⇒  git status
On branch master
All conflicts fixed but you are still merging.
  (use "git commit" to conclude merge)

nothing to commit, working directory clean
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master
⇒  git commit
[master 72758ca] Merge branch 'master' of github.com:treindle/Angular-Todo
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master
⇒  git status
On branch master
nothing to commit, working directory clean
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master
⇒  git push
fatal: The current branch master has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin master

VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master
⇒  git push -u origin master
Counting objects: 14, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (11/11), done.
Writing objects: 100% (13/13), 1.60 KiB | 0 bytes/s, done.
Total 13 (delta 3), reused 0 (delta 0)
To git@github.com:treindle/Angular-Todo.git
   d297d18..72758ca  master -> master
Branch master set up to track remote branch master from origin.
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master
⇒  gcm "Angular hello world"
error: pathspec 'Angular hello world' did not match any file(s) known to git.
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  git commit "Angular hello world"
error: pathspec 'Angular hello world' did not match any file(s) known to git.
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  git commit -m "Angular hello world"
On branch master
Your branch is up-to-date with 'origin/master'.

Changes not staged for commit:
  modified:   index.html

no changes added to commit
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  git add .
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  git commit -m "Angular hello world"
[master 3f63d03] Angular hello world
 1 file changed, 3 insertions(+), 6 deletions(-)
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master
⇒  git push
Counting objects: 5, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 322 bytes | 0 bytes/s, done.
Total 3 (delta 2), reused 0 (delta 0)
To git@github.com:treindle/Angular-Todo.git
   72758ca..3f63d03  master -> master
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master
⇒  git status
On branch master
Your branch is up-to-date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

  modified:   index.html

Untracked files:
  (use "git add <file>..." to include in what will be committed)

  js/

no changes added to commit (use "git add" and/or "git commit -a")
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  add .
zsh: command not found: add
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  git add .
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  git status
On branch master
Your branch is up-to-date with 'origin/master'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

  modified:   index.html
  new file:   js/app.js

VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  git push
Everything up-to-date
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  git commit -m "Playing with $scope"
[master 271a341] Playing with
 2 files changed, 30 insertions(+), 4 deletions(-)
 create mode 100644 js/app.js
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master
⇒  git push
Counting objects: 7, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (5/5), 864 bytes | 0 bytes/s, done.
Total 5 (delta 1), reused 0 (delta 0)
To git@github.com:treindle/Angular-Todo.git
   3f63d03..271a341  master -> master
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master
⇒  git status
On branch master
Your branch is up-to-date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

  modified:   index.html
  modified:   js/app.js

no changes added to commit (use "git add" and/or "git commit -a")
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  git add .
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  git commit -m "Deploying MEAN stack"
[master c44120c] Deploying MEAN stack
 2 files changed, 30 insertions(+), 5 deletions(-)
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master
⇒  git status
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working directory clean
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master
⇒  git push
Counting objects: 9, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (5/5), 947 bytes | 0 bytes/s, done.
Total 5 (delta 2), reused 0 (delta 0)
To git@github.com:treindle/Angular-Todo.git
   271a341..c44120c  master -> master
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master
⇒  ls
README.md        bower.json       bower_components index.html       js
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master
⇒  mkdir public
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master
⇒  mv bower_components public/
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master
⇒  mv index.html js public
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  ls
README.md  bower.json public
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  tree
zsh: command not found: tree
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  t
zsh: command not found: t
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  subl .bowerrc
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  brew install tree
==> Downloading https://downloads.sf.net/project/machomebrew/Bottles/tree-1.7.0.mavericks
######################################################################## 100.0%
==> Pouring tree-1.7.0.mavericks.bottle.tar.gz
🍺  /usr/local/Cellar/tree/1.7.0: 7 files, 128K
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  git status
On branch master
Your branch is up-to-date with 'origin/master'.

Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

  deleted:    js/app.js

Untracked files:
  (use "git add <file>..." to include in what will be committed)

  .bowerrc
  public/

no changes added to commit (use "git add" and/or "git commit -a")
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  git add .
warning: You ran 'git add' with neither '-A (--all)' or '--ignore-removal',
whose behaviour will change in Git 2.0 with respect to paths you removed.
Paths like 'js/app.js' that are
removed from your working tree are ignored with this version of Git.

* 'git add --ignore-removal <pathspec>', which is the current default,
  ignores paths you removed from your working tree.

* 'git add --all <pathspec>' will let you also record the removals.

Run 'git status' to check the paths you removed from your working tree.

VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  git status
On branch master
Your branch is up-to-date with 'origin/master'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

  new file:   .bowerrc
  new file:   public/index.html
  new file:   public/js/app.js

Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

  deleted:    js/app.js

VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  git rm js/app.js
rm 'js/app.js'
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  git status
On branch master
Your branch is up-to-date with 'origin/master'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

  new file:   .bowerrc
  new file:   public/index.html
  renamed:    js/app.js -> public/js/app.js

VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  git commit -m "Moving files to prepare for express"
[master a57ccfc] Moving files to prepare for express
 3 files changed, 36 insertions(+)
 create mode 100644 .bowerrc
 create mode 100644 public/index.html
 rename {js => public/js}/app.js (100%)
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master
⇒  tree
.
├── README.md
├── bower.json
├── index.html
└── public
    ├── bower_components
    │   └── angular
    │       ├── README.md
    │       ├── angular-csp.css
    │       ├── angular.js
    │       ├── angular.min.js
    │       ├── angular.min.js.gzip
    │       ├── angular.min.js.map
    │       ├── bower.json
    │       ├── index.js
    │       └── package.json
    ├── index.html
    └── js
        └── app.js

4 directories, 14 files
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master
⇒  git status
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

  deleted:    index.html

no changes added to commit (use "git add" and/or "git commit -a")
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  git rm index.html
rm 'index.html'
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  git status
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

  deleted:    index.html

VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  git add .
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  git commit -m "Removed root index.html"
[master 05e8637] Removed root index.html
 1 file changed, 33 deletions(-)
 delete mode 100644 index.html
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master
⇒  git status
On branch master
Your branch is ahead of 'origin/master' by 2 commits.
  (use "git push" to publish your local commits)

nothing to commit, working directory clean
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master
⇒  tree
.
├── README.md
├── bower.json
└── public
    ├── bower_components
    │   └── angular
    │       ├── README.md
    │       ├── angular-csp.css
    │       ├── angular.js
    │       ├── angular.min.js
    │       ├── angular.min.js.gzip
    │       ├── angular.min.js.map
    │       ├── bower.json
    │       ├── index.js
    │       └── package.json
    ├── index.html
    └── js
        └── app.js

4 directories, 13 files
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master
⇒  gs
zsh: command not found: gs
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master
⇒  npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sane defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (Angular-Todo)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository: (https://github.com/treindle/Angular-Todo.git)
keywords:
author:
license: (ISC)
About to write to /Users/VIRUS/DevLeague/Angular-Todo/package.json:

{
  "name": "Angular-Todo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/treindle/Angular-Todo.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/treindle/Angular-Todo/issues"
  },
  "homepage": "https://github.com/treindle/Angular-Todo"
}


Is this ok? (yes) yes
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒  npm i -S express mongoose body-parser
npm WARN package.json Angular-Todo@1.0.0 No description
npm WARN package.json Angular-Todo@1.0.0 No README data
/
> kerberos@0.0.9 install /Users/VIRUS/DevLeague/Angular-Todo/node_modules/mongoose/node_modules/mongodb/node_modules/kerberos
> (node-gyp rebuild 2> builderror.log) || (exit 0)

  CXX(target) Release/obj.target/kerberos/lib/kerberos.o
  CXX(target) Release/obj.target/kerberos/lib/worker.o
  CC(target) Release/obj.target/kerberos/lib/kerberosgss.o
  CC(target) Release/obj.target/kerberos/lib/base64.o
  CXX(target) Release/obj.target/kerberos/lib/kerberos_context.o
  SOLINK_MODULE(target) Release/kerberos.node
  SOLINK_MODULE(target) Release/kerberos.node: Finished

> bson@0.2.19 install /Users/VIRUS/DevLeague/Angular-Todo/node_modules/mongoose/node_modules/mongodb/node_modules/bson
> (node-gyp rebuild 2> builderror.log) || (exit 0)

  CXX(target) Release/obj.target/bson/ext/bson.o
  SOLINK_MODULE(target) Release/bson.node
  SOLINK_MODULE(target) Release/bson.node: Finished
express@4.12.2 node_modules/express
├── merge-descriptors@1.0.0
├── utils-merge@1.0.0
├── cookie-signature@1.0.6
├── methods@1.1.1
├── fresh@0.2.4
├── cookie@0.1.2
├── escape-html@1.0.1
├── range-parser@1.0.2
├── content-type@1.0.1
├── finalhandler@0.3.3
├── vary@1.0.0
├── parseurl@1.3.0
├── serve-static@1.9.1
├── content-disposition@0.5.0
├── path-to-regexp@0.1.3
├── depd@1.0.0
├── on-finished@2.2.0 (ee-first@1.1.0)
├── qs@2.3.3
├── debug@2.1.2 (ms@0.7.0)
├── proxy-addr@1.0.6 (forwarded@0.1.0, ipaddr.js@0.1.8)
├── etag@1.5.1 (crc@3.2.1)
├── send@0.12.1 (destroy@1.0.3, ms@0.7.0, mime@1.3.4)
├── accepts@1.2.4 (negotiator@0.5.1, mime-types@2.0.9)
└── type-is@1.6.0 (media-typer@0.3.0, mime-types@2.0.9)

body-parser@1.12.0 node_modules/body-parser
├── content-type@1.0.1
├── bytes@1.0.0
├── raw-body@1.3.3
├── depd@1.0.0
├── qs@2.3.3
├── iconv-lite@0.4.7
├── debug@2.1.2 (ms@0.7.0)
├── on-finished@2.2.0 (ee-first@1.1.0)
└── type-is@1.6.0 (media-typer@0.3.0, mime-types@2.0.9)

mongoose@3.8.24 node_modules/mongoose
├── regexp-clone@0.0.1
├── muri@0.3.1
├── sliced@0.0.5
├── hooks@0.2.1
├── mpath@0.1.1
├── mpromise@0.4.3
├── ms@0.1.0
├── mquery@0.8.0 (debug@0.7.4)
└── mongodb@1.4.31 (readable-stream@1.0.33, kerberos@0.0.9, bson@0.2.19)

VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒⇒  mkdir -p server/models
VIRUS@Teresas-MacBook-Air:~/DevLeague/Angular-Todo|master⚡
⇒