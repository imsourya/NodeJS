const fetch = require('node-fetch') ; //  npm install node-fetch

fetch("https://api.randomuser.me/?nat=US&results=10")
  .then(response => response.json())
  .then(members => console.log(members))
  .catch(err => console.error(err))