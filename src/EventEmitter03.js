// EventEmitter02.js listener not get removed because its anonymus function.
//but when we use name function it removerListner will work. Here handle used.

const events = require("events");
const emitter = new events.EventEmitter();

function handler() {
	console.log("In evt1 handler");
}


emitter.on("evt1", handler);
emitter.emit("evt1");
emitter.removeListener("evt1", handler);

emitter.emit("evt1");