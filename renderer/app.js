/* eslint-disable one-var */
const { ipcRenderer } = require('electron');
const items = require('./items');

// Dom nodes
let showModal = document.getElementById('show-modal'),
    closeModal = document.getElementById('close-modal'),
    modal = document.getElementById('modal'),
    addItem = document.getElementById('add-item'),
    itemURL = document.getElementById('url');
search = document.getElementById('search');
testYoutube = document.getElementById('test-youtube');
// Open modal from menu
ipcRenderer.on('menu-show-modal', () => {
    showModal.click();
});

// Open selected item from menu
ipcRenderer.on('menu-open-item', () => {
    //    showModal.click();
    items.open();
});

// Delete selected item from menu
ipcRenderer.on('menu-delete-item', () => {
    let selectedItem = items.getSelectedItem();
    items.delete(selectedItem.index);
});

// Open selected item in native browser from menu
ipcRenderer.on('menu-open-item-native', () => {
    items.openNative();
});

// Focus search input from menu
ipcRenderer.on('menu-focus-search', () => {
    search.focus();
});

// Filter items with "search"
search.addEventListener('keyup', (e) => {
    // Loop items
    // getElementsByClassName returns an object of type HTML collection, very similar to normal JS array
    // we cant loop the object directly, but pass it to Array.from essentially converts its type to a standard array
    // this obv means we can now loop it. The elements in this array stay the same, so we can still use them
    Array.from(document.getElementsByClassName('read-item')).forEach((item) => {
        // Hide items that dont match the search value
        let hasMatch = item.innerText.toLowerCase().includes(search.value); // hasMatch will now hold a boolean value based on whether the item text matches the search text
        item.style.display = hasMatch ? 'flex' : 'none'; // if item text matches search text, display, else set display to none
    });
});

// Navigate item selection with up/down arrows
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        items.changeSelection(e.key);
    }
});

// Disable/Enable modal buttons
const toggleModalButtons = () => {
    // Check state of buttons
    if (addItem.disabled === true) {
        addItem.disabled = false;
        addItem.style.opacity = 1;
        addItem.innerText = 'Add Item';
        closeModal.style.display = 'inline';
    } else {
        addItem.disabled = true;
        addItem.style.opacity = 0.5;
        addItem.innerText = 'Adding...';
        closeModal.style.display = 'none';
    }
};

// Show modal
showModal.addEventListener('click', (e) => {
    modal.style.display = 'flex';
    itemURL.focus();
});

// Hide modal
closeModal.addEventListener('click', (e) => {
    modal.style.display = 'none';
});

// Handle new items
addItem.addEventListener('click', (e) => {
    // check a url exists
    if (itemURL.value) {
        // Send new item to main process
        ipcRenderer.send('new-item', itemURL.value);

        // Disable buttons
        toggleModalButtons();
    }
});

// test youtube
testYoutube.addEventListener('click', (e) => {
    // console.log('you clicked');
    ipcRenderer.send(
        'new-youtube',
        'https://www.youtube.com/watch?v=F9gEH2ilX1Q'
    );
});

ipcRenderer.on('new-youtube-success', (e, item) => {
    // console.log(item);
});

// listen for new item success from main process
ipcRenderer.on('new-item-success', (e, newItem) => {
    // console.log(newItem);
    // add new item to "items" node
    items.addItem(newItem, true);

    // Enable buttons
    toggleModalButtons();

    // Hide modal and clear input value
    modal.style.display = 'none';
    itemURL.value = '';
});

// Listen for keyboard submit
itemURL.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        addItem.click();
    }
});