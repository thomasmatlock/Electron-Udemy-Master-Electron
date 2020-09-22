// npm i -g electron-builder // install it globally
// npm --help // for command line tools
// npm i -d electron-builder // install locally to be run via npm
// add script to package.json:         "build": "electron-builder --help" // https://www.electron.build/cli
// to build solely for a specifc platform, flag with --{mac|linux|win}
// appVeyor will build stuff for mac, windows will just build for win/linux
// https://cloudconvert.com/ does everything
// there are a lot of config values for all 3 platforms, and you just make sure they are in the package.json "build" section
// to build all 3, run: electron-builder -mwl (the mwl flag targets mac/win/linux)