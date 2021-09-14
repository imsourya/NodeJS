// ./src/Restify/Route01.js
const data01 = "r01 active"

function route01(server) {
    server.get('/r01', (req, res, next) => {
      res.send({data01});
      return next();
    });
  }

  module.exports = route01;

  // Add this in your package.json

// "scripts": {
//    "start": "node ./src/server"
//  } 
  
  
  //==================
  
  //see Processes and benchmark with pm2
  
  // $ pm2 start ./src/server.js -i MAX

  //	npm install -g pm2