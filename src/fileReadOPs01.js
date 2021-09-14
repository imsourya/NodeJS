
// Dont mix Sync with Async Ops See Following Code inconsistentRead() =======================================================
// cache[filename] is Sync and readFile is Async, 

const fs = require('fs');
const path = require('path');
const cache = {};

const filename01 = path.join(__dirname, '../data/test.txt')

function inconsistentRead(filename, callback) {
  if(cache[filename]) {
 
    callback(cache[filename]);                           // Sync
  } else {
 
    fs.readFile(filename, 'utf8', (err, data) => {       //  Async
      cache[filename] = data;
      callback(data);
    });
  }
}

function createFileReader(filename) {
  const listeners = [];
  inconsistentRead(filename, value => {
    listeners.forEach(listener => listener(value));
  });

  return {
    onDataReady: listener => listeners.push(listener)
  };
}

const reader1 = createFileReader(filename01);
reader1.onDataReady(data => {
  console.log('>> First call data: \n' + data);

  // ...sometime later we try to read again from the same file.
  const reader2 = createFileReader(filename01);
  reader2.onDataReady( data => {
    console.log('>>> Second call data: \n' + data);
  });
});