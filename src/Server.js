const { createServer }  = require('http');
const  express = require( 'express');

const { pid } = process;
const port = 3000;

function myhttp01() {
  const server = createServer((req, res) => {
    //  console.log(`Handling request from ${pid}`);
    res.end(`  >>> Msg from ${pid}\n`);
  })

  server.listen(port, () => console.log(`http server at port: ${port}; handled by pid: ${pid}`));

}

myhttp01();