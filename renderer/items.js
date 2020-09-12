// Dom nodes
let items = document.getElementById('items');

// Track items in storage
exports.storage = JSON.parse(localStorage.getItem('readit-items')) || []; // loads this back into storage from localStorage // also JSON.parse converts strings back to array

// Persist storage
exports.save = () => {
    localStorage.setItem('readit-items', JSON.stringify(this.storage)); // localStorage supports strings only, use Json.stringify
};

// Add new item
exports.addItem = (item, isNew = false) => {
    // console.log(item);
    // Create a new HTML Dom node
    let itemNode = document.createElement('div');

    // Assign "read-item" class
    itemNode.setAttribute('class', 'read-item');

    // Add inner HTML to new node
    itemNode.innerHTML = `<img src="${item.screenshot}"><h2>${item.title}</h2>`;

    // Append new item to "items" container
    items.appendChild(itemNode);

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