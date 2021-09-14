// Server with port 3001, 3002, 3003

const express = require('express');

const app1 = express();
const app2 = express();
const app3 = express();

const port01 = 3001; 
const port02 = 3002; 
const port03 = 3003; 

// Parse the request body as JSON
app1.use(express.json());
app2.use(express.json());
app3.use(express.json());

const handler = serverNum => (req, res) => {
  console.log(`Express server ${serverNum}: `, req.method, req.url, req.body);
  res.send(`Msg from server ${serverNum}.`);
};

// Only handle GET and POST requests
app1.get('*', handler(1)).post('*', handler(1));
app2.get('*', handler(2)).post('*', handler(2));
app3.get('*', handler(3)).post('*', handler(3));

app1.listen(port01, () => {console.log('Express01 listening on: ', port01)});
app2.listen(port02, () => {console.log('Express02 listening on: ', port02)});
app3.listen(port03, () => {console.log('Express03 listening on: ', port03)});