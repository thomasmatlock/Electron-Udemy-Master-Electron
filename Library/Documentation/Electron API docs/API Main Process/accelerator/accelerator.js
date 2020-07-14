<https://www.electronjs.org/docs/api/accelerator>

// Define keyboard shortcuts. // Accelerators are Strings that can contain multiple modifiers and a single key code, combined by the + character, and are used to define keyboard shortcuts throughout your application.
// To tie shortcuts to functions, see globalShortcut
// Example:
const { app, globalShortcut } = require('electron')

app.whenReady().then(() => {
  // Register a 'CommandOrControl+Y' shortcut listener.
  globalShortcut.register('CommandOrControl+Y', () => {
    // Do stuff when Y and either Command/Control is pressed.
  })
})

// Available modifiers
// Command
// Cmd
// Control
// Ctrl
// CommandOrControl
// CmdOrCtrl
// Alt
// Option
// AltGr
// Shift
// Super

// Available key codes
// 0 to 9
// A to Z
// F1 to F24
// Punctuation like ~, !, @, #, $, etc.
  // Plus
// Space
// Tab
// Capslock
// Numlock
// Scrolllock
// Backspace
// Delete
// Insert
// Return(or Enter as alias)
// Up, Down, Left and Right
// Home and End
// PageUp and PageDown
// Escape(or Esc for short)
// VolumeUp, VolumeDown and VolumeMute
// MediaNextTrack, MediaPreviousTrack, MediaStop and MediaPlayPause
// PrintScreen
// NumPad Keys // num0 - num9 // numdec - decimal key // numadd - numpad + key // numsub - numpad - key // nummult - numpad * key // numdiv - numpad ÷ key