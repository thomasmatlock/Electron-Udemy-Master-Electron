# Text

Section 1: Overview

    - electron uses 2 processes:
    -  the main process, which is a nodejs process
    - the main nodejs process then creates instances of the chromium browser, sometimes multiple instances
    - simple: MAIN = nodejs, Renderer = Chromium
    - main process is like server side, renderer side is client side front end
    - when you call the electron in package.json scripts, it will look for an entry point, which here it is main.js
    - nodemon is great for reflecting changing in the main.js main nodejs process, and
    - 1.5
        - node native modules are compiled modules
        - so i think native modules are the ones that come with node, like bcrypt/hashing
        - npm modules are 3rd party modules
        -  we can use any npm module from npm registry that can normally use with nodejs anyway
        - so here he tries to use bcrypt, but it fails, because it uses a different version of node
        - however, with electron-rebuild, it rebuilds bcrypt to work with whatever version youve got installed
    - 1.6
        - if you wanna debug stuff, you can use chrome, and do by terminal: "electron --inspect=5858 ."
            - any port above 1023 will work. the --inspect flag will make it work great
            - the period at the end of anything means cwd/current working directory
            - then open a new chrome window and navigate to chrome://inspect > click configure targets > add localhost:5858
            - write debugger wherever you wanna put a breakpoint

Section 2: Developing with Electron
Section 3: Main Process API

    -   3.8 - go to electronjs.org/api/docs to see which methods belong to main, renderer, or are shared methods
    - 'app' is the most important object, it controls the main process
    - with 'app', we control our application's event life cycle, things like launching, relaunching, quitting,
        - events:
            - 'ready' event. emitted when electron has finished initializing
            - browserWindowBlur and browserWindowFocus

Section 4: Renderer Process API
Section 5: IPC Communication
Section 6: Shared API
Section 7: Features & Techniques
Section 8: Project
Section 9: Application Distribution
Section 10: MacOS Touch Bar
Section 11: Outro
