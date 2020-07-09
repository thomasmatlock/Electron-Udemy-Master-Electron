/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
// https://www.w3schools.com/jsref/obj_events.asp
// All event objects in the DOM are based on the Event Object.
// Therefore, all other event objects(like MouseEvent and KeyboardEvent) has access to the Event Object's properties and methods.

// Event Properties & Methods
// Property || Method // Description // URL
event.bubbles; // Returns whether or not a specific event is a bubbling event // https://www.w3schools.com/jsref/event_bubbles.asp
event.cancelBubble; // Sets or returns whether the event should propagate up the hierarchy or     not // https://www.w3schools.com/jsref/event_cancelbubble.asp
event.cancelable; // Returns whether or not an event can have its default action prevented // https://www.w3schools.com/jsref/event_cancelable.asp
event.composed; // Returns whether the event is composed or not // https://www.w3schools.com/jsref/
event.createEvent(); // Creates a new event // https://www.w3schools.com/jsref/event_createevent.asp
event.composedPath(); // Returns the event's path // https://www.w3schools.com/jsref/event_composedpath.asp
event.currentTarget; // Returns the element whose event listeners triggered the event // https://www.w3schools.com/jsref/event_currenttarget.asp
event.defaultPrevented; // Returns whether or not the preventDefault() method was called for  the event // https://www.w3schools.com/jsref/event_defaultprevented.asp
event.eventPhase; // Returns which phase of the event flow is currently being evaluated // https://www.w3schools.com/jsref/event_eventphase.asp
event.isTrusted; // Returns whether or not an event is trusted // https://www.w3schools.com/jsref/event_istrusted.asp
event.preventDefault(); // Cancels the event if it is cancelable, meaning that the default  action that belongs to the event will not occur // https://www.w3schools.com/jsref/event_preventdefault.asp
event.stopImmediatePropagation(); // Prevents other listeners of the same event from being called // https://www.w3schools.com/jsref/event_stopimmediatepropagation.asp
event.stopPropagation(); // Prevents further propagation of an event during event flow // https://www.w3schools.com/jsref/event_stoppropagation.asp
event.target; // Returns the element that triggered the event // https://www.w3schools.com/jsref/event_target.asp
event.timeStamp; // Returns the time (in milliseconds relative to the epoch) at which  the event was created // https://www.w3schools.com/jsref/event_timestamp.asp
event.type; // Returns the name of the event // https://www.w3schools.com/jsref/event_type.asp

// Event Types
// These event types belongs to the Event Object:
Event; // Description // URL
abort; // The event occurs when the loading of a media is aborted // https://www.w3schools.com/jsref/event_onabort_media.asp
afterprint; // The event occurs when a page has started printing // https://www.w3schools.com/jsref/event_onafterprint.asp
beforeprint; // The event occurs when a page is about to be printed // https://www.w3schools.com/jsref/event_onbeforeprint.asp
beforeunload; // The event occurs before the document is about to be unloaded // https://www.w3schools.com/jsref/event_onbeforeunload.asp
canplay; // The event occurs when the browser can start playing the media (when it has buffered enough to begin) // https://www.w3schools.com/jsref/event_oncanplay.asp
canplaythrough; // The event occurs when the browser can play through the media without stopping for buffering // https://www.w3schools.com/jsref/event_oncanplaythrough.asp
change; // The event occurs when the content of a form element, the selection, or the checked state have changed (for <input>, <select>, and <textarea>) // https://www.w3schools.com/jsref/event_onchange.asp
error; // The event occurs when an error occurs while loading an external file // https://www.w3schools.com/jsref/event_onerror.asp
fullscreenchange; // The event occurs when an element is displayed in fullscreen mode // https://www.w3schools.com/jsref/event_fullscreenchange.asp
fullscreenerror; // The event occurs when an element can not be displayed in fullscreen mode // https://www.w3schools.com/jsref/event_fullscreenerror.asp
input; // The event occurs when an element gets user input // https://www.w3schools.com/jsref/event_oninput.asp
invalid; // The event occurs when an element is invalid // https://www.w3schools.com/jsref/event_oninvalid.asp
load; // The event occurs when an object has loaded // https://www.w3schools.com/jsref/event_onload.asp
loadeddata; // The event occurs when media data is loaded // https://www.w3schools.com/jsref/event_onloadeddata.asp
loadedmetadata; // The event occurs when meta data (like dimensions and duration) are loaded // https://www.w3schools.com/jsref/event_onloadedmetadata.asp
message; // The event occurs when a message is received through the event source // https://www.w3schools.com/jsref/event_onmessage_sse.asp
offline; // The event occurs when the browser starts to work offline // https://www.w3schools.com/jsref/event_onoffline.asp
online; // The event occurs when the browser starts to work online // https://www.w3schools.com/jsref/event_ononline.asp
open; // The event occurs when a connection with the event source is opened // https://www.w3schools.com/jsref/event_onopen_sse.asp
pause; // The event occurs when the media is paused either by the user or programmatically // https://www.w3schools.com/jsref/event_onpause.asp
play; // The event occurs when the media has been started or is no longer paused // https://www.w3schools.com/jsref/event_onplay.asp
playing; // The event occurs when the media is playing after having been paused or stopped for buffering // https://www.w3schools.com/jsref/event_onplaying.asp
progress; // The event occurs when the browser is in the process of getting the media data (downloading the media) // https://www.w3schools.com/jsref/event_onprogress.asp
ratechange; // The event occurs when the playing speed of the media is changed // https://www.w3schools.com/jsref/event_onratechange.asp
resize; // The event occurs when the document view is resized // https://www.w3schools.com/jsref/event_onresize.asp
reset; // The event occurs when a form is reset // https://www.w3schools.com/jsref/event_onreset.asp
scroll; // The event occurs when an element's scrollbar is being scrolled // https://www.w3schools.com/jsref/event_onscroll.asp
search; // The event occurs when the user writes something in a search field (for <input="search">) // https://www.w3schools.com/jsref/event_onsearch.asp
seeked; // The event occurs when the user is finished moving/skipping to a new position in the media // https://www.w3schools.com/jsref/event_onseeked.asp
seeking; // The event occurs when the user starts moving/skipping to a new position in the media // https://www.w3schools.com/jsref/event_onseeking.asp
select; // The event occurs after the user selects some text (for <input> and <textarea>) // https://www.w3schools.com/jsref/event_onselect.asp
show; // The event occurs when a <menu> element is shown as a context menu // https://www.w3schools.com/jsref/event_onshow.asp
stalled; // The event occurs when the browser is trying to get media data, but data is not available // https://www.w3schools.com/jsref/event_onstalled.asp
submit; // The event occurs when a form is submitted // https://www.w3schools.com/jsref/event_onsubmit.asp
suspend; // The event occurs when the browser is intentionally not getting media data // https://www.w3schools.com/jsref/event_onsuspend.asp
timeupdate; // The event occurs when the playing position has changed (like when the user fast forwards to a different point in the media) // https://www.w3schools.com/jsref/event_ontimeupdate.asp
toggle; // The event occurs when the user opens or closes the <details> element // https://www.w3schools.com/jsref/event_ontoggle.asp
unload; // The event occurs once a page has unloaded (for <body>) // https://www.w3schools.com/jsref/event_onunload.asp
waiting; // The event occurs when the media has paused but is expected to resume (like when the media pauses to buffer more data) // https://www.w3schools.com/jsref/event_onwaiting.asp
