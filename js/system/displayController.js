/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable one-var */

const { screen } = require('electron');
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
        this.coords = {
            height: Math.round(this.devScreen.bounds.height * 0.8),
            width: Math.round(this.devScreen.bounds.width * 0.7),
            x: Math.round(this.devScreen.bounds.width * 0.3) + this.xAdditive,
            y: Math.round(this.devScreen.bounds.height * 0.1) + this.yAdditive
        };
    }
}

module.exports = displayController;