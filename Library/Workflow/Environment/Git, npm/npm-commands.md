- npm outdated // checks and displays current/latest versions for any outdated packages
- npm update --save/--save-dev // updates every package to latest minor version, not major so nothing breaks
- npm i <package>
- npm un <package>
- npm

// NODE
https://stackoverflow.com/questions/8191459/how-do-i-update-node-js

- node -v // node version
- nvm list available // table of latest node versions
- nvm install 'v13.8.7' // installs version of node
- nvm use '13.8.7' // switches to version you want to use

// node-sass giving me problems, throwing errors 'npm ERR! code ELIFECYCLE'
Step 1: 'npm cache clean --force'

Step 2: Delete node_modules by \$ rm -rf node_modules folder or delete it manually by going into the directory and right-click > delete / move to trash. Also, delete package-lock.json file too.

Step 3: 'npm install'

To start again, 'npm start'
