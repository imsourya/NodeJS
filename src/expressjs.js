
var http = require('http');
const app = require('express');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Server Is UP");
  res.end();
}).listen(8080);

const port = 3000

app.get('/', (req, res) => {
res.send('server is up')
})

app.get('/contact', (req, res) => {
res.send({})
})

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
})
