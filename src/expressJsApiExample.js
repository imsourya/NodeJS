const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.end('Hello World!');
});

app.get('/github', async (req, res) => {
const result = await axios.get(`https://api.github.com/users/Rajesh`);
console.log(result.data)
res.json(result.data)
})

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });