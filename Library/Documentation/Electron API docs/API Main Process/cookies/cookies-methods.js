//www.electronjs.org/docs/api/cookies#instance-methods

cookies.get(filter); //Returns Promise<Cookie[]> - A promise which resolves an array of cookie objects.
cookies.set(details); //Returns Promise<void> - A promise which resolves when the cookie has been set
cookies.remove(url, name); //Returns Promise<void> - A promise which resolves when the cookie has been removed
cookies.flushStore(); //Writes any unwritten cookies data to disk.
