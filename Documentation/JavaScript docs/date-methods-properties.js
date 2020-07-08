/* eslint-disable no-redeclare */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-labels */
/* eslint-disable prettier/prettier */
/* eslint-disable no-restricted-syntax */
/* eslint-disable vars-on-top */
/* eslint-disable no-labels */
/* eslint-disable no-var */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
https://www.w3schools.com/jsref/jsref_obj_date.asp
var d = new Date();
var d = new Date(milliseconds);
var d = new Date(dateString);
var d = new Date(year, month, day, hours, minutes, seconds, milliseconds);

Method // Description
getDate() // Returns the day of the month (from 1-31) // https://www.w3schools.com/jsref/jsref_getdate.asp
getDay() // Returns the day of the week (from 0-6) // https://www.w3schools.com/jsref/jsref_getday.asp
getFullYear() // Returns the year // https://www.w3schools.com/jsref/jsref_getfullyear.asp
getHours() // Returns the hour (from 0-23) // https://www.w3schools.com/jsref/jsref_gethours.asp
getMilliseconds() // Returns the milliseconds (from 0-999) // https://www.w3schools.com/jsref/jsref_getmilliseconds.asp
getMinutes() // Returns the minutes (from 0-59) // https://www.w3schools.com/jsref/jsref_getminutes.asp
getMonth() // Returns the month (from 0-11) // https://www.w3schools.com/jsref/jsref_getmonth.asp
getSeconds() // Returns the seconds (from 0-59) // https://www.w3schools.com/jsref/jsref_getseconds.asp
getTime() // Returns the number of milliseconds since midnight Jan 1 1970, and a specified date // https://www.w3schools.com/jsref/jsref_gettime.asp
getTimezoneOffset() // Returns the time difference between UTC time and local time, in minutes // https://www.w3schools.com/jsref/jsref_gettimezoneoffset.asp
getUTCDate() // Returns the day of the month, according to universal time (from 1-31) // https://www.w3schools.com/jsref/jsref_getutcdate.asp
getUTCDay() // Returns the day of the week, according to universal time (from 0-6) // https://www.w3schools.com/jsref/jsref_getutcday.asp
getUTCFullYear() // Returns the year, according to universal time // https://www.w3schools.com/jsref/jsref_getutcfullyear.asp
getUTCHours() // Returns the hour, according to universal time (from 0-23) // https://www.w3schools.com/jsref/jsref_getutchours.asp
getUTCMilliseconds() // Returns the milliseconds, according to universal time (from 0-999) // https://www.w3schools.com/jsref/jsref_getutcmilliseconds.asp
getUTCMinutes() // Returns the minutes, according to universal time (from 0-59) // https://www.w3schools.com/jsref/jsref_getutcminutes.asp
getUTCMonth() // Returns the month, according to universal time (from 0-11) // https://www.w3schools.com/jsref/jsref_getutcmonth.asp
getUTCSeconds() // Returns the seconds, according to universal time (from 0-59) // https://www.w3schools.com/jsref/jsref_getutcseconds.asp
getYear() // Deprecated. Use the getFullYear() method instead // https://www.w3schools.com/jsref/jsref_now.asp
now() // Returns the number of milliseconds since midnight Jan 1, 1970 // https://www.w3schools.com/jsref/jsref_parse.asp
parse() // Parses a date string and returns the number of milliseconds since January 1, 1970 // https://www.w3schools.com/jsref/jsref_prototype_date.asp
setDate() // Sets the day of the month of a date object // https://www.w3schools.com/jsref/jsref_setdate.asp
setFullYear() // Sets the year of a date object // https://www.w3schools.com/jsref/jsref_setfullyear.asp
setHours() // Sets the hour of a date object // https://www.w3schools.com/jsref/jsref_sethours.asp
setMilliseconds() // Sets the milliseconds of a date object // https://www.w3schools.com/jsref/jsref_setmilliseconds.asp
setMinutes() // Set the minutes of a date object // https://www.w3schools.com/jsref/jsref_setminutes.asp
setMonth() // Sets the month of a date object // https://www.w3schools.com/jsref/jsref_setmonth.asp
setSeconds() // Sets the seconds of a date object // https://www.w3schools.com/jsref/jsref_setseconds.asp
setTime() // Sets a date to a specified number of milliseconds after/before January 1, 1970 // https://www.w3schools.com/jsref/jsref_settime.asp
setUTCDate() // Sets the day of the month of a date object, according to universal time // https://www.w3schools.com/jsref/jsref_setutcdate.asp
setUTCFullYear() // Sets the year of a date object, according to universal time // https://www.w3schools.com/jsref/jsref_setutcfullyear.asp
setUTCHours() // Sets the hour of a date object, according to universal time // https://www.w3schools.com/jsref/jsref_setutchours.asp
setUTCMilliseconds() // Sets the milliseconds of a date object, according to universal time // https://www.w3schools.com/jsref/jsref_setutcmilliseconds.asp
setUTCMinutes() // Set the minutes of a date object, according to universal time // https://www.w3schools.com/jsref/jsref_setutcminutes.asp
setUTCMonth() // Sets the month of a date object, according to universal time // https://www.w3schools.com/jsref/jsref_setutcmonth.asp
setUTCSeconds() // Set the seconds of a date object, according to universal time // https://www.w3schools.com/jsref/jsref_setutcseconds.asp
toDateString() // Converts the date portion of a Date object into a readable string // https://www.w3schools.com/jsref/jsref_todatestring.asp
toISOString() // Returns the date as a string, using the ISO standard // https://www.w3schools.com/jsref/jsref_toisostring.asp
toJSON() // Returns the date as a string, formatted as a JSON date // https://www.w3schools.com/jsref/jsref_tojson.asp
toLocaleDateString() // Returns the date portion of a Date object as a string, using locale conventions // https://www.w3schools.com/jsref/jsref_tolocaledatestring.asp
toLocaleTimeString() // Returns the time portion of a Date object as a string, using locale conventions // https://www.w3schools.com/jsref/jsref_tolocaletimestring.asp
toLocaleString() // Converts a Date object to a string, using locale conventions // https://www.w3schools.com/jsref/jsref_tolocalestring.asp
toString() // Converts a Date object to a string // https://www.w3schools.com/jsref/jsref_tostring_date.asp
toTimeString() // Converts the time portion of a Date object to a string // https://www.w3schools.com/jsref/jsref_totimestring.asp
toUTCString() // Converts a Date object to a string, according to universal time // https://www.w3schools.com/jsref/jsref_toutcstring.asp
UTC() // Returns the number of milliseconds in a date since midnight of January 1, 1970, according to UTC time // https://www.w3schools.com/jsref/jsref_utc.asp
valueOf() // Returns the primitive value of a Date object // https://www.w3schools.com/jsref/jsref_valueof_date.asp

Property // Description
constructor // Returns the function that created the Date object's prototype
prototype // Allows you to add properties and methods to an object