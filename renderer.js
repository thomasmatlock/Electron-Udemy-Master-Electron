// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { desktopCapturer } = require('electron');
var person = {
    firstName: 'John',
    lastName: 'Doe',
    id: 5566,
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};
// console.log(
//     person.getOwnPropertyNames(Math).filter(function(p) {
//         return typeof Math[p] === 'function';
//     })
// );
console.dir(person);
// console.log(person.getOwnPropertyNames);
console.log('hello from renderer.js'); // this is integrated into the browser window via html doc, and runs this JS there in the browser. I think NodeIntegration is important here