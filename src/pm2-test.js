//  pm2 // npm install -g pm2

const express = require('express');
const app = express();
const router = express.Router();

router.get('/',function(req,res) {
    console.log("url: ", req.url) ;
    res.send("Using Express with pm2...");
});

router.get('/about',function(req,res) {
    console.log("url: ", req.url) ;
    res.send("about us ...");
});

router.get('*',function(req,res) {
    console.log("unmatched url: ", req.url) ;
    res.send("unmatched path");
});

app.use('/',router);
app.listen(3000, () => console.log(" express server on 3000"));

// ----------- on Another CMd 

// $  pm2  start server.js
// $  pm2 monit

// Login to app.pm2.io to get web dashboard