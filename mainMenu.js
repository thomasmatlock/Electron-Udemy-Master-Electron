const { Menu, MenuItem } = require('electron');
// there are 2 ways to build menus, using newMenu(), or Menu.buildFromTemplate()
// method 1:
// const mainMenu = new Menu(); // create new menu with Menu class
// const menuItem1 = new MenuItem({
//     label: 'Electron test menu item',
//     submenu: [
//         {
//             label: 'Item 1'
//         },
//         {
//             label: 'Item 2',
//             submenu: [
//                 {
//                     label: 'Sub-item A'
//                 },
//                 {
//                     label: 'Sub-item B'
//                 }
//             ]
//         },
//         {
//             label: 'Item 3'
//         }
//     ]
// }); // create new menu item
// mainMenu.append(menuItem1); // add new menu item to newly created menu
// method 2:
// note you can set the entire editMenu and windowMenu if you want, check out the roles electron section
const mainMenu = Menu.buildFromTemplate([
    {
        label: 'Electron test menu item',
        submenu: [
            {
                label: 'Item 1'
            },
            {
                label: 'Item 2',
                submenu: [{ label: 'Sub-item A' }, { label: 'Sub-item B' }]
            },
            {
                label: 'Item 3'
            }
        ]
    },
    {
        label: 'Edit',
        submenu: [
            { role: 'undo' },
            { role: 'redo' },
            { role: 'copy' },
            { role: 'paste' }
        ]
    },
    {
        label: 'actions',
        submenu: [
            {
                label: 'Action 1'
                // icon: './build/favicon2_blue_1024x1024.ico'
                // enabled: false,
                // role: 'toggleDevTools'
            },
            {
                label: 'Greet',
                click: () => {
                    console.log('hello from the main menu');
                },
                accelerator: 'Ctrl+G',
                role: 'togglefullscreen'
            },
            {
                label: 'Action 3',
                submenu: [{ label: 'Sub-action 1' }, { label: 'Sub-action 2' }]
            }
        ]
    }
]);
module.exports = mainMenu;
