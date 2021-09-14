const EventEmitter = require('events').EventEmitter;

function MyEvents() {
    const eventEmitter = new EventEmitter();
    setTimeout(() => eventEmitter.emit('complete', 'node-evt'), 100)
    return eventEmitter;
}

function MyCallback(cb) {
    setTimeout(() => cb(null, 'node-cb'), 100);
}

MyEvents().on('complete', message => console.log(message));
MyCallback((err, message) => console.log(message));