// Generator Use case as an Iterator 
function* iteratorGenerator(arr) {
    
    for (let i in  arr) {
        yield arr[i];
    }
}

const iterator = iteratorGenerator(['apple', 'orange', 'watermelon']);
let currentItem = iterator.next();

while (!currentItem.done) {
    console.log(currentItem.value);
    currentItem = iterator.next();
}