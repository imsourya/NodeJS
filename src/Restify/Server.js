const restify = require('restify'); 

const route01 = require('./route01');
const  route02 = require('./route02');
const port = 3000 ;

const server = restify.createServer({ name: 'api' });

route01(server);
route02(server);
server.listen(port, () => console.log("Restify server on: ", port ));