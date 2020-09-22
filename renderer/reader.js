// alert('Hello from readerJS');

// Create button in remote content to mark item as "Done"
let readitClose = document.createElement('div');
readitClose.innerHTML = 'Done';

// Style button
readitClose.style.position = 'fixed';
readitClose.style.bottom = '15px';
readitClose.style.right = '15px';
readitClose.style.padding = '5px 10px';
readitClose.style.fontSize = '20px';
readitClose.style.fontWeight = 'bold';
readitClose.style.background = 'dodgerblue';
readitClose.style.color = 'white';
readitClose.style.borderRadius = '4px';
readitClose.style.cursor = 'default';
readitClose.style.boxshadow = '2px 2px 2px rgba(0, 0, 0, 0.2)';
readitClose.style.zIndex = '9999';

// Attach click handler
readitClose.onclick = e => {
    // alert('Done with item.');

    // Message parent (opener) window
    window.opener.postMessage({
        action: 'delete-reader-item',
        itemIndex: {
            { index } }
    }, '*')
}

// Append button to body
document.getElementsByTagName('body')[0].append(readitClose)