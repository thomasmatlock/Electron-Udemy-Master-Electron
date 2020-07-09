/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
//https://www.w3schools.com/jsref/api_storage.asp
// The Storage object of the Web Storage API provides access to the session storage or local storage for a particular domain.This allows you to read, add, modify, and delete stored data items.

Property / Method; // Description // URL
key(n); // Returns the name of the n th key in the storage // https://www.w3schools.com/jsref/met_storage_key.asp
length; // Returns the number of data items stored in the Storage object // https://www.w3schools.com/jsref/prop_storage_length.asp
getItem(keyname); // Returns the value of the specified key name // https://www.w3schools.com/jsref/met_storage_getitem.asp
setItem(keyname, value); // Adds that key to the storage, or update that key's value if it already     exists // https://www.w3schools.com/jsref/met_storage_setitem.asp
removeItem(keyname); // Removes that key from the storage // https://www.w3schools.com/jsref/met_storage_removeitem.asp
clear(); // Empty all key out of the storage // https://www.w3schools.com/jsref/met_storage_clear.asp
Property; // Description // URL
window.localStorage; // Allows to save key/value pairs in a web browser. Stores the data with no     expiration date // https://www.w3schools.com/jsref/prop_win_localstorage.asp
window.sessionStorage; // Allows to save key/value pairs in a web browser. Stores the data for one     session // https://www.w3schools.com/jsref/prop_win_sessionstorage.asp
