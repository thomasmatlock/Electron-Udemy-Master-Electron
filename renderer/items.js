const fs = require('fs');
const { shell } = require('electron');

// Dom nodes
let items = document.getElementById('items');

// Get readerJS content
let readerJS;
fs.readFile(`${__dirname}/reader.js`, (err, data) => {
    readerJS = data.toString();
});

// Track items in storage
exports.storage = JSON.parse(localStorage.getItem('readit-items')) || []; // loads this back into storage from localStorage // also JSON.parse converts strings back to array

// Listen for 'done' message from reader window
window.addEventListener('message', e => {
    // Delete item at certain index
    if (e.data.action === 'delete-reader-item') {
        this.delete(e.data.itemIndex);

        // Close the reader window for the users
        // console.log(e.source);
        e.source.close();
    }
    // console.log(e.data);
});

// Delete item
exports.delete = itemIndex => {
    // Remove item from DOM
    items.removeChild(items.childNodes[itemIndex]);

    // Remove item from storage
    this.storage.splice(itemIndex, 1);

    // Persist storage
    this.save();

    // Select previous item or new top item
    if (this.storage.length) {
        // Get new selected item index
        let = newSelectedItemIndex = itemIndex === 0 ? 0 : itemIndex - 1;

        // Select item at new index
        document
            .getElementsByClassName('read-item')[newSelectedItemIndex].classList.add('selected');
    }
};

// Get selected item index
exports.getSelectedItem = () => {
    // Get selected node
    let currentItem = document.getElementsByClassName('read-item selected')[0];

    // Get item index
    let itemIndex = 0;
    let child = currentItem;
    while ((child = child.previousElementSibling) != null) itemIndex++;

    // Return selected item and index
    return { node: currentItem, index: itemIndex };
};

// Persist storage
exports.save = () => {
    localStorage.setItem('readit-items', JSON.stringify(this.storage)); // localStorage supports strings only, use Json.stringify
};

// Set item as selected
exports.select = e => {
    // Remove currently selected item class
    this.getSelectedItem().node.classList.remove('selected');

    // Add to clicked item
    e.currentTarget.classList.add('selected');
};

// Move to newly selected item
exports.changeSelection = direction => {
    // Get currently selected item
    let currentItem = this.getSelectedItem();

    // Handle up/down
    if (direction === 'ArrowUp' && currentItem.node.previousElementSibling) {
        currentItem.node.classList.remove('selected'); // remove class
        currentItem.node.previousElementSibling.classList.add('selected'); // add class
    } else if (
        direction === 'ArrowDown' &&
        currentItem.node.nextElementSibling
    ) {
        currentItem.node.classList.remove('selected'); // remove class
        currentItem.node.nextElementSibling.classList.add('selected'); // add class
    }
};

// Open selected item in native browser
exports.openNative = () => {
    // Check if we even have items
    if (!this.storage.length) return;

    // Get selected item
    let selectedItem = this.getSelectedItem();

    // Get items url
    let contentURL = selectedItem.node.dataset.url;

    // Open in user default system browser
    shell.openExternal(contentURL);
};

// Open selected item
exports.open = () => {
    // Check if we even have items
    if (!this.storage.length) return;

    // Get selected item
    let selectedItem = this.getSelectedItem();

    // Get items url
    let contentURL = selectedItem.node.dataset.url;

    // Open item in proxy BrowserWindow
    let readerWin = window.open(
        contentURL,
        '',
        `
    maxWidth=2000, 
    maxHeight=2000, 
    width=600, 
    height=600, 
backgroundColor=#DEDEDE,
 nodeIntegration=0, 
contextIsolation=1
    `
    );

    // Inject JS (DOESNT WORK) with specific item index (selectedItem.index)
    readerWin.eval(readerJS.replace('{{index}}', selectedItem.index));
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