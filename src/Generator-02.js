function* fruitGenerator() {
    yield 'apple';
    yield 'orange';
    return 'watermelon';
}
const newFruitGenerator = fruitGenerator();

let val =  newFruitGenerator.next()
console.log(val); 
while(! val.done){ 
	val = newFruitGenerator.next()
	console.log(val);
}