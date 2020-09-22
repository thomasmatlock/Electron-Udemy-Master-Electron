const { Menu, shell } = require('electron');

// Module function to create main app menu
module.exports = appWin => {
    // Menu template
    let template = [{
            label: 'Items',
            submenu: [{
                    label: 'Add New',
                    accelerator: 'CmdOrCtrl+O',
                    click: () => {
                        appWin.send('menu-show-modal');
                    }
                },
                {
                    label: 'Read Item',
                    accelerator: 'CmdOrCtrl+Enter',
                    click: () => {
                        appWin.send('menu-open-item');
                    }
                },
                {
                    label: 'Delete Item',
                    accelerator: 'CmdOrCtrl+Backspace',
                    click: () => {
                        appWin.send('menu-delete-item');
                    }
                },
                {
                    label: 'Open in browser',
                    accelerator: 'CmdOrCtrl+Shift+Enter',
                    click: () => appWin.send('menu-open-item-native')
                },
                {
                    label: 'Search items',
                    accelerator: 'CmdOrCtrl+S',
                    click: () => appWin.send('menu-focus-search')
                }
            ]
        },
        { role: 'editMenu' },
        { role: 'windowMenu' },
        {
            role: 'help',
            submenu: [{
                label: 'Learn More',
                click: () => {
                    shell.openExternal('https://warpdownload.com');
                }
            }]
        }
    ];

    // Create Mac app menu
    // 'darwin', 'linux', 'win32', 'win64'
    if (process.platform === 'darwin') template.unshift({ role: 'appMenu' }); // appMenu is a complete role solution, like editMenu, to use OS default menu

    // Build menu
    let menu = Menu.buildFromTemplate(template); // use template array

    // Set as main app menu
    Menu.setApplicationMenu(menu);
};