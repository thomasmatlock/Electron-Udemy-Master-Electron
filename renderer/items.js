const fs = require('fs');

// Dom nodes
let items = document.getElementById('items');

// Get readerJS content
let readerJS;
fs.readFile(`${__dirname}/reader.js`, (err, data) => {
    readerJS = data.toString();
});

// Track items in storage
exports.storage = JSON.parse(localStorage.getItem('readit-items')) || []; // loads this back into storage from localStorage // also JSON.parse converts strings back to array

// Persist storage
exports.save = () => {
    localStorage.setItem('readit-items', JSON.stringify(this.storage)); // localStorage supports strings only, use Json.stringify
};

// Set item as selected
exports.select = e => {
    // Remove currently selected item class
    document
        .getElementsByClassName('read-item selected')[0]
        .classList.remove('selected');

    // Add to clicked item
    e.currentTarget.classList.add('selected');
};

// Move to newly selected item
exports.changeSelection = direction => {
    // Get currently selected item
    let currentItem = document.getElementsByClassName('read-item selected')[0];

    // Handle up/down
    if (direction === 'ArrowUp' && currentItem.previousElementSibling) {
        currentItem.classList.remove('selected'); // remove class
        currentItem.previousElementSibling.classList.add('selected'); // add class
    } else if (direction === 'ArrowDown' && currentItem.nextElementSibling) {
        currentItem.classList.remove('selected'); // remove class
        currentItem.nextElementSibling.classList.add('selected'); // add class
    }
};

// Open selected item
exports.open = () => {
    // Check if we even have items
    if (!this.storage.length) return;

    // Get selected item
    let selectedItem = document.getElementsByClassName('read-item selected')[0];

    // Get items url
    let contentURL = selectedItem.dataset.url;

    // Open item in proxy BrowserWindow
    let readerWin = window.open(
        contentURL,
        '',
        `
    maxWidth=2000, 
    maxHeight=2000, 
    width=800, 
    height=600, 
backgroundColor=#DEDEDE,
 nodeIntegration=0, 
contextIsolation=1
    `
    );

    // Inject JS (DOESNT WORK)
    readerWin.eval(readerJS);
};

// Add new item
exports.addItem = (item, isNew = false) => {
    // console.log(item);
    // Create a new HTML Dom node
    let itemNode = document.createElement('div');

    // Assign "read-item" class
    itemNode.setAttribute('class', 'read-item');

    // Set item url as data attribute
    itemNode.setAttribute('data-url', item.url);

    // Add inner HTML to new node
    itemNode.innerHTML = `<img src="${item.screenshot}"><h2>${item.title}</h2>`;

    // Append new item to "items" container
    items.appendChild(itemNode);

    // Attach click handler to select
    itemNode.addEventListener('click', this.select); // when this element is clicked, it calls the select function

    // Attach double click handler to open
    itemNode.addEventListener('dblclick', this.open);

    // If this is the first item, select it
    if (document.getElementsByClassName('read-item').length === 1) {
        itemNode.classList.add('selected');
    }
    // Add item to storage array and persist
    if (isNew) {
        this.storage.push(item); // appends item to array
        this.save(); // saves array to local storage
    }
};

// Add items from storage when app loads
this.storage.forEach(item => {
    this.addItem(item);
});