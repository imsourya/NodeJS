// Increa RPS using cluster ===========================================================================
 
const cluster = require( 'cluster');
const os = require( 'os');
const http = require( 'http');

const pid = process.pid;
const port = 3000;

if (cluster.isMaster) {
  const cpus = os.cpus().length;
  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code) => {
    if (code != 0) {
      console.log('Worker crashed. Starting a new worker');
      cluster.fork();
    }
  });
} else {

  http.createServer((req, res) => {
   // console.log(`Handling request from ${pid}`);
    res.end(`Status from ${pid}: Up. \n`);
  }).listen(port, () => {
    //console.log(`Express at ${port}, pid: ${pid}`);
  });
}