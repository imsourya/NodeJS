let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve({msg: "data received"}); }, 1000);
  });
  
  myPromise.then(function(value) {
     console.log(value); 
  });