// with nodeIntegration disabled, all the preload script runs PRIOR to all that, and still has access to all nodejs functions and properties
const fs = require('fs');

const desktopPath = 'C:\\Users\\Tommy\\Desktop';
window.writeToFile = text =>
    fs.writeFile(desktopPath + '/app.txt', text, console.log);

window.versions = {
    node: process.versions.node,
    electron: process.versions.electron
};