# HTML/CSS
- add to html //         <button id="test-youtube">+</button>
- add css styling // #test-youtube { width: 50px;}

# RENDERER 
- add DOM node to app.js // testYoutube = document.getElementById('test-youtube');
- add event listener to DOM node in app.js // testYoutube.addEventListener('click', (e) => {}); (log event if you want)
- send event with ipcRenderer.send to main.js //     ipcRenderer.send('new-youtube')

# MAIN
- listen for event sent from app.js // ipcMain.on('new-youtube', (e, itemURL) => {});  (log event optional
- send event status back to app.js //  e.sender.send('new-youtube-success');

# RENDERER
- listen for event sent from main.js // ipcRenderer.on('new-youtube-success', (e, item) => {});
