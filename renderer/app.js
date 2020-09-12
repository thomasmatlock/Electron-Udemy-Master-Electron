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

// Filter items with "search"
search.addEventListener('keyup', e => {
    // Loop items
    Array.from(document.getElementsByClassName('read-item')).forEach(item => {
        // Hide items that dont match the search value
        let hasMatch = item.innerText.toLowerCase().includes(search.value);
    });
});

// listen for keyboard to showModal
document.addEventListener('keyup', e => {
    if (e.key === 'Enter') {
        showModal.click();
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
showModal.addEventListener('click', e => {
    modal.style.display = 'flex';
    itemURL.focus();
});

// Hide modal
closeModal.addEventListener('click', e => {
    modal.style.display = 'none';
});

// Handle new items
addItem.addEventListener('click', e => {
    // check a url exists
    if (itemURL.value) {
        // Send new item to main process
        ipcRenderer.send('new-item', itemURL.value);

        // Disable buttons
        toggleModalButtons();
    }
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
itemURL.addEventListener('keyup', e => {
    if (e.key === 'Enter') {
        addItem.click();
    }
});