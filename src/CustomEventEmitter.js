let events = require("events");
 
function Pulsar(timer, num) {
    const pulsar = new events.EventEmitter();
 
    const caller = setInterval(() => {
        pulsar.emit('pulse')}, timer);
    setTimeout(() => {
        clearInterval(caller);
    }, num*1000);
    return pulsar;
}
 
const pulsar = new Pulsar(1000, 8); // run every sec,  only 8 times.
 
pulsar.on('pulse', function(){
  console.log("process.mem: ", process.memoryUsage());
});