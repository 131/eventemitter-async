eventemitter with async/await. [eventemitter-async](https://github.com/131/eventemitter-async) mimics `require('events').EventEmitter` API.


[![Build Status](https://travis-ci.org/131/eventemitter-async.svg?branch=master)](https://travis-ci.org/131/eventemitter-async)
[![Coverage Status](https://coveralls.io/repos/github/131/eventemitter-async/badge.svg?branch=master)](https://coveralls.io/github/131/eventemitter-async?branch=master)
[![Version](https://img.shields.io/npm/v/eventemitter-async.svg)](https://www.npmjs.com/package/eventemitter-async)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](http://opensource.org/licenses/MIT)


# API
```
var sleep = require('nyks/async/sleep');
var Event = require('eventemitter-async');
var event = new Event();

var cafe = {color:'black'};
event.on("start", async function() {
  await sleep(1);
  console.log("Hi, coffee is ", this.color);
}, cafe);


event.emit("start");
```

# Errors (&promises)
event.emit() will return a promise you can work with if you need [to handle errors](https://github.com/131/eventemitter-async/blob/master/test/errors.js)



# Notes
You can set an optional 3rd parameter and set the context ("this") in event registration.


# Credits
* [131](https://github.com/131)
* [uclass](https://github.com/131/uclass) a pure JS/browser compliant class design syntax (ES6 classes with bindings)


# Keywords / shout box
events, eventemitter2, uclass, promise, binding


