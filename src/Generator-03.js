// Generator Also use to accept data also , although not very common but it works
function* printer() {
    console.log("starting ...");
    console.log(yield);
    console.log(yield);
    console.log(yield);
    console.log("done.");
  }

  const counter = printer();
  counter.next(1); 
  counter.next(2);
  counter.next(3);