// events module
// most of the other modules are built based on this one
// simply put: like kafka => raise a signal event whenever required, listen to the raised signal type & handle accordingly

// exported entity is a class, so we are declaring the class variable EventEmitter here
// class is a container for properties and functions called methods
const EventEmitter = require('events')

// ES6 style based import 
// import EventEmitter from 'events';
console.log(`Events: ${EventEmitter}`)

// create an object instance
// example: class: Human; object (actual instance of the class): Sathya Nadella
const emitter = new EventEmitter()

// rule of thumb: always register the event listener before raising/emitting the event

// Registering the listener
emitter.on("hello", () => {
    console.log(`'hello' event being emitted is listened...`)
})

// Raising an event or emitting a signal event
console.log("emitting hello event...")
emitter.emit("hello")

// create & listen to events using arguments

emitter.on("message", (msg) => {
    console.log(`Message received as: ${msg}`)
    if(msg === "Vivek") console.log("Vivek as arg received...")
    else if(msg === "Iavshali") console.log("Iavshali as arg received...")
    else if(msg === "") console.log("no arg being received...")
    else console.log("send some damn msg arg...")
})

emitter.emit("message", "Vivek")
emitter.emit("message", "")
emitter.emit("message")

// you could emit from a different module and listen on a different module
// eventemitter in loggereventemitter.js
// eventlistener in loggereventlistener.js

// emitter.emit("startlog", {"id": 4567, "name": "startLogger", "type": "function"})

/*
Output:
vsurulimuthu@LUSC02WJ09CHTDH  ~/Vivek/ProjectWorks/NodeJsApplnTryout   master ● ?  node modulestryout/events/events.js                                                                                              ✔  4690  16:05:13
Events: function EventEmitter() {
  EventEmitter.init.call(this);
}
emitting hello event...
'hello' event being emitted is listened...
Message received as: Vivek
Vivek as arg received...
Message received as:
no arg being received...
Message received as: undefined
send some damn msg arg...
 vsurulimuthu@LUSC02WJ09CHTDH  ~/Vivek/ProjectWorks/NodeJsApplnTryout   master ● ? 
*/