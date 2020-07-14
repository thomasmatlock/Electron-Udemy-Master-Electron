/* eslint-disable no-restricted-globals */
/* eslint-disable no-delete-var */
/* eslint-disable no-undef */
// https://www.electronjs.org/docs/api/power-monitor#powermonitor
// This module cannot be used until the ready event of the app module is emitted.
// For example:
const { app, powerMonitor } = require('electron');

app.whenReady().then(() => {
    powerMonitor.on('suspend', () => {
        console.log('The system is going to sleep');
    });
});
