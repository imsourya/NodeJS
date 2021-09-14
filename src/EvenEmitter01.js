let events = require("events");
let emitter = new events.EventEmitter();

let username = "nodeUser2";
let password = "password";

emitter.emit("userAdded", username, password);

emitter.on("userAdded", function(uname, pword) {
	console.log("Added user " + uname);
});

// add the user & then emit an event
emitter.emit("userAdded", username, password);
emitter.emit("userAdded", username, password);
emitter.emit("userAdded", username, password);