/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable one-var */
// Modules

const { screen } = require('electron');

// let displays, devScreen, usePrimaryMonitor;

// exports.setupDisplays = () => {
//     displays = screen.getAllDisplays();
//     console.log(displays);
//     console.log('Hello from displayController');

//     test = 1;
//     if (displays.length == 1) {
//         devScreen = displays[0];
//     } else {
//         devScreen = displays[1];
//     }
//     // console.log(devScreen);
//     // return devScreen;

//     // devScreen.size.height >= 1080 ?
//     //     (usePrimaryMonitor = false) :
//     //     (usePrimaryMonitor = true);

//     if (devScreen.size.height >= 1080) {
//         usePrimaryMonitor = false;
//     } else {
//         usePrimaryMonitor = true;
//     }
//     const xAdditive = usePrimaryMonitor ? 0 : 2500;
//     const yAdditive = usePrimaryMonitor ? 0 : 250;
//     // console.log(usePrimaryMonitor);
// };

// exports.winDefaults = {
//     height: Math.round(devScreen.bounds.height * 0.8),
//     widthByScreen: Math.round(devScreen.bounds.width * 0.7),
//     x: Math.round(devScreen.bounds.width * 0.3) + xAdditive,
//     y: Math.round(devScreen.bounds.height * 0.1) + yAdditive
// };

class displayController {
    constructor() {
        this.displays = screen.getAllDisplays();
        this.devScreen =
            this.displays.length == 1 ?
            (this.devScreen = this.displays[0]) :
            (this.devScreen = this.displays[1]);
        this.usePrimaryMonitor =
            this.devScreen.size.height >= 1080 ?
            (this.usePrimaryMonitor = false) :
            (this.usePrimaryMonitor = true);
        this.xAdditive = this.usePrimaryMonitor ? 0 : 2500;
        this.yAdditive = this.usePrimaryMonitor ? 0 : 250;
        this.winDefaults = {
            height: Math.round(this.devScreen.bounds.height * 0.8),
            widthByScreen: Math.round(this.devScreen.bounds.width * 0.7),
            x: Math.round(this.devScreen.bounds.width * 0.3) + this.xAdditive,
            y: Math.round(this.devScreen.bounds.height * 0.1) + this.yAdditive
        };
    }

    // setupDisplays() {
    // displays = screen.getAllDisplays();
    // console.log(displays);
    // console.log('Hello from displayController');
    // if (displays.length == 1) {
    //     devScreen = displays[0];
    // } else {
    //     devScreen = displays[1];
    // }
    // console.log(devScreen);
    // return devScreen;
    // devScreen.size.height >= 1080 ?
    //     (usePrimaryMonitor = false) :
    //     (usePrimaryMonitor = true);
    // if (devScreen.size.height >= 1080) {
    //     usePrimaryMonitor = false;
    // } else {
    //     usePrimaryMonitor = true;
    // }
    // console.log(usePrimaryMonitor);
    // }
}

module.exports = displayController;