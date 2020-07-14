- LOCAL REPO
  - STAGING
    - git status // tells us the tracked changes/returns a list of what files we have changed in the cwd, and whether they are added to staging for a commit or not
    - git add -A // adds all the changed files to staging)
    - git add index.html // single file staging example: adds only the index.html file to staging
  - COMMIT
    - git commit -m 'Made the header orange and removed a line of text.' // commits all staged files to git, with a comment about the changes
- ROLLBACK/REVERT
  - git checkout -- . // restores repo to most previous commit
- SERVER REPO

  - git remote -v // checks the push/pull targets of the current repo
  - git remote add origin https://github.com/thomasmatlock/Warp-App.git // sets github repo target to push/pull to/from
  - git push origin master // pushes entire local repo to the github server repo

- REVISION
  - git log --oneline // prints list of commits w/ comments
  - git fetch –all // pulls entire server repo
  - git reset --hard origin/master // OVERWRITES everything local with master server repo
  - git reset --hard origin/<branch_name> // OVERWRITES everything local with branch_name repo

* UNUSED (https://www.git-tower.com/learn/git/faq/difference-between-git-fetch-git-pull)

  - git fetch origin // USEFUL IN TEAM SETTING. git fetch really only downloads new data from a remote repository - but it doesn't integrate any of this new data into your working files. Fetch is great for getting a fresh view on all the things that happened in a remote repository. Due to it's "harmless" nature, you can rest assured: fetch will never manipulate, destroy, or screw up anything. This means you can never fetch often enough.
  - git pull origin master // in contrast, pull is used with a different goal in mind: to update your current HEAD branch with the latest changes from the remote server. This means that pull not only downloads new data; it also directly integrates it into your current working copy files. This has a couple of consequences:

file:///C:/Program%20Files/Git/mingw64/share/doc/git-doc/git.html
