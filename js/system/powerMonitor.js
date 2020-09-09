//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Main Process API, PowerMonitor
// taken from main.js

const electron = require('electron');
const powerMonitor = require('electron'); // we have to do this weird require electron twice if we use powerMonitor, then we can use powerMonitor directly from the electron module/ object
electron.powerMonitor.on('resume', e => {
    if (!mainWindow) {
        console.log('Resume');
        createWindow();
    }
});
electron.powerMonitor.on('suspend', e => {
    console.log('Saving some data before computer suspends operation....');
});