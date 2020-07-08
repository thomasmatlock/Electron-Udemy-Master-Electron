/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
// https://www.w3schools.com/jsref/dom_obj_event.asp
// HTML DOM events allow JavaScript to register different event handlers on elements in an HTML document.
// Events are normally used in combination with functions, and the function will not be executed before the event occurs(such as when a user clicks a button).
// For a tutorial about Events, read our JavaScript Events Tutorial.

// HTML DOM Events
// Event; // Description // Belongs To:
abort; // The event occurs when the loading of a media is aborted // Belongs To: UiEvent , Event // https://www.w3schools.com/jsref/event_onabort_media.asp
afterprint; // The event occurs when a page has started printing, or if the print dialogue box has been closed // Belongs To: Event // https://www.w3schools.com/jsref/event_onafterprint.asp
animationend; // The event occurs when a CSS animation has completed // Belongs To: AnimationEvent // https://www.w3schools.com/jsref/event_animationend.asp
animationiteration; // The event occurs when a CSS animation is repeated // Belongs To: AnimationEvent // https://www.w3schools.com/jsref/event_animationiteration.asp
animationstart; // The event occurs when a CSS animation has started // Belongs To: AnimationEvent // https://www.w3schools.com/jsref/event_animationstart.asp
beforeprint; // The event occurs when a page is about to be printed // Belongs To: Event // https://www.w3schools.com/jsref/event_onbeforeprint.asp
beforeunload; // The event occurs before the document is about to be unloaded // Belongs To: UiEvent , Event // https://www.w3schools.com/jsref/event_onbeforeunload.asp
blur; // The event occurs when an element loses focus // Belongs To: FocusEvent // https://www.w3schools.com/jsref/event_onblur.asp
canplay; // The event occurs when the browser can start playing the media (when it has buffered enough to begin) // Belongs To: Event // https://www.w3schools.com/jsref/event_oncanplay.asp
canplaythrough; // The event occurs when the browser can play through the media without stopping for buffering // Belongs To: Event // https://www.w3schools.com/jsref/event_oncanplaythrough.asp
change; // The event occurs when the content of a form element, the selection, or the checked state have changed (for <input>, <select>, and <textarea>) // Belongs To: Event // https://www.w3schools.com/jsref/event_onchange.asp
click; // The event occurs when the user clicks on an element // Belongs To: MouseEvent // https://www.w3schools.com/jsref/event_onclick.asp
contextmenu; // The event occurs when the user right-clicks on an element to open a context menu // Belongs To: MouseEvent // https://www.w3schools.com/jsref/event_oncontextmenu.asp
copy; // The event occurs when the user copies the content of an element // Belongs To: ClipboardEvent // https://www.w3schools.com/jsref/event_oncopy.asp
cut; // The event occurs when the user cuts the content of an element // Belongs To: ClipboardEvent // https://www.w3schools.com/jsref/event_oncut.asp
dblclick; // The event occurs when the user double-clicks on an element // Belongs To: MouseEvent // https://www.w3schools.com/jsref/event_ondblclick.asp
drag; // The event occurs when an element is being dragged // Belongs To: DragEvent // https://www.w3schools.com/jsref/event_ondrag.asp
dragend; // The event occurs when the user has finished dragging an element // Belongs To: DragEvent // https://www.w3schools.com/jsref/event_ondragend.asp
dragenter; // The event occurs when the dragged element enters the drop target // Belongs To: DragEvent // https://www.w3schools.com/jsref/event_ondragenter.asp
dragleave; // The event occurs when the dragged element leaves the drop target // Belongs To: DragEvent // https://www.w3schools.com/jsref/event_ondragleave.asp
dragover; // The event occurs when the dragged element is over the drop target // Belongs To: DragEvent // https://www.w3schools.com/jsref/event_ondragover.asp
dragstart; // The event occurs when the user starts to drag an element // Belongs To: DragEvent // https://www.w3schools.com/jsref/event_ondragstart.asp
drop; // The event occurs when the dragged element is dropped on the drop target // Belongs To: DragEvent // https://www.w3schools.com/jsref/event_ondrop.asp
durationchange; // The event occurs when the duration of the media is changed // Belongs To: Event // https://www.w3schools.com/jsref/event_ondurationchange.asp
ended; // The event occurs when the media has reach the end (useful for messages like "thanks for listening") // Belongs To: Event // https://www.w3schools.com/jsref/event_onended.asp
error; // The event occurs when an error occurs while loading an external file // Belongs To: ProgressEvent , UiEvent , Event // https://www.w3schools.com/jsref/event_onerror.asp
focus; // The event occurs when an element gets focus // Belongs To: FocusEvent // https://www.w3schools.com/jsref/event_onfocus.asp
focusin; // The event occurs when an element is about to get focus // Belongs To: FocusEvent // https://www.w3schools.com/jsref/event_onfocusin.asp
focusout; // The event occurs when an element is about to lose focus // Belongs To: FocusEvent // https://www.w3schools.com/jsref/event_onfocusout.asp
fullscreenchange; // The event occurs when an element is displayed in fullscreen mode // Belongs To: Event // https://www.w3schools.com/jsref/event_fullscreenchange.asp
fullscreenerror; // The event occurs when an element can not be displayed in fullscreen mode // Belongs To: Event // https://www.w3schools.com/jsref/event_fullscreenerror.asp
hashchange; // The event occurs when there has been changes to the anchor part of a URL // Belongs To: HashChangeEvent // https://www.w3schools.com/jsref/event_onhashchange.asp
input; // The event occurs when an element gets user input // Belongs To: InputEvent , Event // https://www.w3schools.com/jsref/event_oninput.asp
invalid; // The event occurs when an element is invalid // Belongs To: Event // https://www.w3schools.com/jsref/event_oninvalid.asp
keydown; // The event occurs when the user is pressing a key // Belongs To: KeyboardEvent // https://www.w3schools.com/jsref/event_onkeydown.asp
keypress; // The event occurs when the user presses a key // Belongs To: KeyboardEvent // https://www.w3schools.com/jsref/event_onkeypress.asp
keyup; // The event occurs when the user releases a key // Belongs To: KeyboardEvent // https://www.w3schools.com/jsref/event_onkeyup.asp
load; // The event occurs when an object has loaded // Belongs To: UiEvent , Event // https://www.w3schools.com/jsref/event_onload.asp
loadeddata; // The event occurs when media data is loaded // Belongs To: Event // https://www.w3schools.com/jsref/event_onloadeddata.asp
loadedmetadata; // The event occurs when meta data (like dimensions and duration) are loaded // Belongs To: Event // https://www.w3schools.com/jsref/event_onloadedmetadata.asp
loadstart; // The event occurs when the browser starts looking for the specified media // Belongs To: ProgressEvent // https://www.w3schools.com/jsref/event_onloadstart.asp
message; // The event occurs when a message is received through the event source // Belongs To: Event // https://www.w3schools.com/jsref/event_onmessage_sse.asp
mousedown; // The event occurs when the user presses a mouse button over an element // Belongs To: MouseEvent // https://www.w3schools.com/jsref/event_onmousedown.asp
mouseenter; // The event occurs when the pointer is moved onto an element // Belongs To: MouseEvent // https://www.w3schools.com/jsref/event_onmouseenter.asp
mouseleave; // The event occurs when the pointer is moved out of an element // Belongs To: MouseEvent // https://www.w3schools.com/jsref/event_onmouseleave.asp
mousemove; // The event occurs when the pointer is moving while it is over an element // Belongs To: MouseEvent // https://www.w3schools.com/jsref/event_onmousemove.asp
mouseover; // The event occurs when the pointer is moved onto an element, or onto one of its children // Belongs To: MouseEvent // https://www.w3schools.com/jsref/event_onmouseover.asp
mouseout; // The event occurs when a user moves the mouse pointer out of an element, or out of one of its children // Belongs To: MouseEvent // https://www.w3schools.com/jsref/event_onmouseout.asp
mouseup; // The event occurs when a user releases a mouse button over an element // Belongs To: MouseEvent // https://www.w3schools.com/jsref/event_onmouseup.asp
mousewheel; // Deprecated. Use the wheel event instead // Belongs To: WheelEvent // https://www.w3schools.com/jsref/
offline; // The event occurs when the browser starts to work offline // Belongs To: Event // https://www.w3schools.com/jsref/event_onoffline.asp
online; // The event occurs when the browser starts to work online // Belongs To: Event // https://www.w3schools.com/jsref/event_ononline.asp
open; // The event occurs when a connection with the event source is opened // Belongs To: Event // https://www.w3schools.com/jsref/event_onopen_sse.asp
pagehide; // The event occurs when the user navigates away from a webpage // Belongs To: PageTransitionEvent // https://www.w3schools.com/jsref/event_onpagehide.asp
pageshow; // The event occurs when the user navigates to a webpage // Belongs To: PageTransitionEvent // https://www.w3schools.com/jsref/event_onpageshow.asp
paste; // The event occurs when the user pastes some content in an element // Belongs To: ClipboardEvent // https://www.w3schools.com/jsref/event_onpaste.asp
pause; // The event occurs when the media is paused either by the user or programmatically // Belongs To: Event // https://www.w3schools.com/jsref/event_onpause.asp
play; // The event occurs when the media has been started or is no longer paused // Belongs To: Event // https://www.w3schools.com/jsref/event_onplay.asp
playing; // The event occurs when the media is playing after having been paused or stopped for buffering // Belongs To: Event // https://www.w3schools.com/jsref/event_onplaying.asp
popstate; // The event occurs when the window's history changes // Belongs To: PopStateEvent // https://www.w3schools.com/jsref/
progress; // The event occurs when the browser is in the process of getting the media data (downloading the media) // Belongs To: Event // https://www.w3schools.com/jsref/event_onprogress.asp
ratechange; // The event occurs when the playing speed of the media is changed // Belongs To: Event // https://www.w3schools.com/jsref/event_onratechange.asp
resize; // The event occurs when the document view is resized // Belongs To: UiEvent , Event // https://www.w3schools.com/jsref/event_onresize.asp
reset; // The event occurs when a form is reset // Belongs To: Event // https://www.w3schools.com/jsref/event_onreset.asp
scroll; // The event occurs when an element's scrollbar is being scrolled // Belongs To: UiEvent , Event // https://www.w3schools.com/jsref/event_onscroll.asp
search; // The event occurs when the user writes something in a search field (for <input="search">) // Belongs To: Event // https://www.w3schools.com/jsref/event_onsearch.asp
seeked; // The event occurs when the user is finished moving/skipping to a new position in the media // Belongs To: Event // https://www.w3schools.com/jsref/event_onseeked.asp
seeking; // The event occurs when the user starts moving/skipping to a new position in the media // Belongs To: Event // https://www.w3schools.com/jsref/event_onseeking.asp
select; // The event occurs after the user selects some text (for <input> and <textarea>) // Belongs To: UiEvent , Event // https://www.w3schools.com/jsref/event_onselect.asp
show; // The event occurs when a <menu> element is shown as a context menu // Belongs To: Event // https://www.w3schools.com/jsref/event_onshow.asp
stalled; // The event occurs when the browser is trying to get media data, but data is not available // Belongs To: Event // https://www.w3schools.com/jsref/event_onstalled.asp
storage; // The event occurs when a Web Storage area is updated // Belongs To: StorageEvent // https://www.w3schools.com/jsref/
submit; // The event occurs when a form is submitted // Belongs To: Event // https://www.w3schools.com/jsref/event_onsubmit.asp
suspend; // The event occurs when the browser is intentionally not getting media data // Belongs To: Event // https://www.w3schools.com/jsref/event_onsuspend.asp
timeupdate; // The event occurs when the playing position has changed (like when the user fast forwards to a different point in the media) // Belongs To: Event // https://www.w3schools.com/jsref/event_ontimeupdate.asp
toggle; // The event occurs when the user opens or closes the <details> element // Belongs To: Event // https://www.w3schools.com/jsref/event_ontoggle.asp
touchcancel; // The event occurs when the touch is interrupted // Belongs To: TouchEvent // https://www.w3schools.com/jsref/event_touchcancel.asp
touchend; // The event occurs when a finger is removed from a touch screen // Belongs To: TouchEvent // https://www.w3schools.com/jsref/event_touchend.asp
touchmove; // The event occurs when a finger is dragged across the screen // Belongs To: TouchEvent // https://www.w3schools.com/jsref/event_touchmove.asp
touchstart; // The event occurs when a finger is placed on a touch screen // Belongs To: TouchEvent // https://www.w3schools.com/jsref/event_touchstart.asp
transitionend; // The event occurs when a CSS transition has completed // Belongs To: TransitionEvent // https://www.w3schools.com/jsref/event_transitionend.asp
unload; // The event occurs once a page has unloaded (for <body>) // Belongs To: UiEvent , Event // https://www.w3schools.com/jsref/event_onunload.asp
volumechange; // The event occurs when the volume of the media has changed (includes setting the volume to "mute") // Belongs To: Event // https://www.w3schools.com/jsref/event_onvolumechange.asp
waiting; // The event occurs when the media has paused but is expected to resume (like when the media pauses to buffer more data) // Belongs To: Event // https://www.w3schools.com/jsref/event_onwaiting.asp
wheel; // The event occurs when the mouse wheel rolls up or down over an element // Belongs To: WheelEvent // https://www.w3schools.com/jsref/event_onwheel.asp

// HTML DOM Event Properties and Methods
Property / Method // Description // Belongs To // URL
altKey // Returns whether the "ALT" key was pressed when the mouse event was triggered // MouseEvent // https://www.w3schools.com/jsref/event_altkey.asp
altKey // Returns whether the "ALT" key was pressed when the key event was triggered // KeyboardEvent , TouchEvent // https://www.w3schools.com/jsref/event_key_altkey.asp
animationName // Returns the name of the animation // AnimationEvent // https://www.w3schools.com/jsref/event_animation_animationName.asp
bubbles // Returns whether or not a specific event is a bubbling event // Event // https://www.w3schools.com/jsref/event_bubbles.asp
button // Returns which mouse button was pressed when the mouse event was triggered // MouseEvent // https://www.w3schools.com/jsref/event_button.asp
buttons // Returns which mouse buttons were pressed when the mouse event was triggered // MouseEvent // https://www.w3schools.com/jsref/event_buttons.asp
cancelable // Returns whether or not an event can have its default action prevented // Event // https://www.w3schools.com/jsref/event_cancelable.asp
charCode // Returns the Unicode character code of the key that triggered the  onkeypress event // KeyboardEvent // https://www.w3schools.com/jsref/event_key_charcode.asp
changeTouches // Returns a list of all the touch objects whose state changed between the     previous touch and this touch // TouchEvent
clientX // Returns the horizontal coordinate of the mouse pointer, relative to the current window, when  the mouse event was triggered // MouseEvent , TouchEvent // https://www.w3schools.com/jsref/event_clientx.asp
clientY // Returns the vertical coordinate of the mouse pointer, relative to the current window, when  the mouse event was triggered // MouseEvent , TouchEvent // https://www.w3schools.com/jsref/event_clienty.asp
clipboardData // Returns an object containing the data affected by the clipboard     operation // ClipboardData
code // Returns the code of the key that triggered the event // KeyboardEvent // https://www.w3schools.com/jsref/event_key_code.asp
composed // Returns whether the event is composed or not // Event
createEvent() // Creates a new event // Event // https://www.w3schools.com/jsref/event_createevent.asp
ctrlKey // Returns whether the "CTRL" key was pressed when the mouse event was triggered // MouseEvent // https://www.w3schools.com/jsref/event_ctrlkey.asp
ctrlKey // Returns whether the "CTRL" key was pressed when the key event was triggered // KeyboardEvent , TouchEvent // https://www.w3schools.com/jsref/event_key_ctrlkey.asp
currentTarget // Returns the element whose event listeners triggered the event // Event // https://www.w3schools.com/jsref/event_currenttarget.asp
data // Returns the inserted characters // InputEvent // https://www.w3schools.com/jsref/event_inputevent_data.asp
dataTransfer // Returns an object containing the data being dragged/dropped, or     inserted/deleted // DragEvent , InputEvent
defaultPrevented // Returns whether or not the preventDefault() method was called for  the event // Event // https://www.w3schools.com/jsref/event_defaultprevented.asp
deltaX // Returns the horizontal scroll amount of a mouse wheel (x-axis) // WheelEvent // https://www.w3schools.com/jsref/event_wheel_deltax.asp
deltaY // Returns the vertical scroll amount of a mouse wheel (y-axis) // WheelEvent // https://www.w3schools.com/jsref/event_wheel_deltay.asp
deltaZ // Returns the scroll amount of a mouse wheel for the z-axis // WheelEvent // https://www.w3schools.com/jsref/event_wheel_deltaz.asp
deltaMode // Returns a number that represents the unit of measurements for delta values (pixels, lines or pages) // WheelEvent // https://www.w3schools.com/jsref/event_wheel_deltamode.asp
detail // Returns a number that indicates how many times the mouse was clicked // UiEvent // https://www.w3schools.com/jsref/event_detail.asp
elapsedTime // Returns the number of seconds an animation has been running // AnimationEvent // https://www.w3schools.com/jsref/event_animation_elapsedtime.asp
elapsedTime // Returns the number of seconds a transition has been running // https://www.w3schools.com/jsref/event_transition_elapsedtime.asp
eventPhase // Returns which phase of the event flow is currently being evaluated // Event // https://www.w3schools.com/jsref/event_eventphase.asp
getTargetRanges() // Returns an array containing target ranges that will be affected by the     insertion/deletion // InputEvent
getModifierState() // Returns an array containing target ranges that will be affected by the     insertion/deletion // MouseEvent // https://www.w3schools.com/jsref/event_mouse_getmodifierstate.asp
inputType // Returns the type of the change (i.e "inserting" or "deleting") // InputEvent // https://www.w3schools.com/jsref/event_inputevent_inputtype.asp
isComposing // Returns whether the state of the event is composing or not // InputEvent , KeyboardEvent
isTrusted // Returns whether or not an event is trusted // Event // https://www.w3schools.com/jsref/event_istrusted.asp
key // Returns the key value of the key represented by the event // KeyboardEvent // https://www.w3schools.com/jsref/event_key_key.asp
key // Returns the key of the changed storage item // StorageEvent // https://www.w3schools.com/jsref/event_key_keycode.asp
keyCode // Returns the Unicode character code of the key that triggered the onkeypress event, or the Unicode key code of the key that triggered the onkeydown or onkeyup event // KeyboardEvent
location // Returns the location of a key on the keyboard or device // KeyboardEvent // https://www.w3schools.com/jsref/event_key_location.asp
lengthComputable // Returns whether the length of the progress can be computable or not // ProgressEvent
loaded // Returns how much work has been loaded // ProgressEvent
metaKey // Returns whether the "META" key was pressed when an event was triggered // MouseEvent // https://www.w3schools.com/jsref/event_metakey.asp
metaKey // Returns whether the "meta" key was pressed when the key event was triggered // KeyboardEvent , TouchEvent // https://www.w3schools.com/jsref/event_key_metakey.asp
MovementX // Returns the horizontal coordinate of the mouse pointer relative to the position of the last mousemove event // MouseEvent
MovementY // Returns the vertical coordinate of the mouse pointer relative to the position of the last mousemove event // MouseEvent
newValue // Returns the new value of the changed storage item // StorageEvent
newURL // Returns the URL of the document, after the hash has been changed // HasChangeEvent // https://www.w3schools.com/jsref/event_hashchange_newurl.asp
offsetX // Returns the horizontal coordinate of the mouse pointer relative to the position of the edge of the target element // MouseEvent
offsetY // Returns the vertical coordinate of the mouse pointer relative to the position of the edge of the target element // MouseEvent
oldValue // Returns the old value of the changed storage item // StorageEvent
oldURL // Returns the URL of the document, before the hash was changed // HasChangeEvent // https://www.w3schools.com/jsref/event_hashchange_oldurl.asp
onemptied // The event occurs when something bad happens and the media file is suddenly unavailable (like unexpectedly disconnects)
pageX // Returns the horizontal coordinate of the mouse pointer, relative to the document, when  the mouse event was triggered // MouseEvent // https://www.w3schools.com/jsref/event_pagex.asp
pageY // Returns the vertical coordinate of the mouse pointer, relative to the document, when  the mouse event was triggered // MouseEvent // https://www.w3schools.com/jsref/event_pagey.asp
persisted // Returns whether the webpage was cached by the browser // PageTransitionEvent // https://www.w3schools.com/jsref/event_pagetransition_persisted.asp
preventDefault() // Cancels the event if it is cancelable, meaning that the default  action that belongs to the event will not occur // Event // https://www.w3schools.com/jsref/event_preventdefault.asp
propertyName // Returns the name of the CSS property associated with the animation or transition // AnimationEvent , TransitionEvent // https://www.w3schools.com/jsref/event_transition_propertyName.asp
pseudoElement // Returns the name of the pseudo-element of the animation or transition // AnimationEvent , TransitionEvent
region // MouseEvent
relatedTarget // Returns the element related to the element that triggered the mouse event // MouseEvent // https://www.w3schools.com/jsref/event_relatedtarget.asp
relatedTarget // Returns the element related to the element that triggered the event // FocusEvent // https://www.w3schools.com/jsref/event_focus_relatedtarget.asp
repeat // Returns whether a key is being hold down repeatedly, or not // KeyboardEvent
screenX // Returns the horizontal coordinate of the mouse pointer, relative to the screen, when an event was triggered // MouseEvent // https://www.w3schools.com/jsref/event_screenx.asp
screenY // Returns the vertical coordinate of the mouse pointer, relative to  the screen, when an event was triggered // MouseEvent // https://www.w3schools.com/jsref/event_screeny.asp
shiftKey // Returns whether the "SHIFT" key was pressed when an event was triggered // MouseEvent // https://www.w3schools.com/jsref/event_shiftkey.asp
shiftKey // Returns whether the "SHIFT" key was pressed when the key event was triggered // KeyboardEvent , TouchEvent // https://www.w3schools.com/jsref/event_key_shiftkey.asp
state // Returns an object containing a copy of the history entries // PopStateEvent
stopImmediatePropagation() // Event // https://www.w3schools.com/jsref/event_stopimmediatepropagation.asp
stopPropagation() // Prevents further propagation of an event during event flow // Event // https://www.w3schools.com/jsref/event_stoppropagation.asp
storageArea // Returns an object representing the affected storage object // StorageEvent
target // Returns the element that triggered the event // Event // https://www.w3schools.com/jsref/event_target.asp
targetTouches // Returns a list of all the touch objects that are in contact with the   surface and where the touchstart event occured on the same target element as   the current target element // TouchEvent // https://www.w3schools.com/jsref/event_touch_targettouches.asp
timeStamp // Returns the time (in milliseconds relative to the epoch) at which  the event was created // Event // https://www.w3schools.com/jsref/event_timestamp.asp
total // Returns the total amount of work that will be loaded // ProgressEvent
touches // Returns a list of all the touch objects that are currently in contact with   the surface // TouchEvent // https://www.w3schools.com/jsref/event_touch_touches.asp
transitionend // The event occurs when a CSS transition has completed // TransitionEvent // https://www.w3schools.com/jsref/event_transitionend.asp
type // Returns the name of the event // Event // https://www.w3schools.com/jsref/event_type.asp
url // Returns the URL of the changed item's document // StorageEvent
which // Returns which mouse button was pressed when the mouse event was triggered // MouseEvent // https://www.w3schools.com/jsref/event_which.asp
which // Returns the Unicode character code of the key that triggered the onkeypress event, or the Unicode key code of the key that triggered the onkeydown or onkeyup event // KeyboardEvent // https://www.w3schools.com/jsref/event_key_which.asp
view // Returns a reference to the Window object where the event occurred // UiEvent // https://www.w3schools.com/jsref/event_view.asp