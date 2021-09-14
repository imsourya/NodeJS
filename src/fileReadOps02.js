const fs = require('fs');
const path = require('path');
const cache = {};

const filename01 = path.join(__dirname, '../data/test.txt');

function consistentReadSync(filename) {
    if(cache[filename]) {
      return cache[filename];
    } else {
      cache[filename] = fs.readFileSync(filename, 'utf8');
      return cache[filename];
    }
  }
  
  console.log("read_1: \n" + consistentReadSync( filename01));

  // the next call will read from the cache
  console.log("read_2: \n" + consistentReadSync(filename01));