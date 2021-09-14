//Chain of promises
let p04 = new Promise((resolve, reject) => {
    console.log('p04 executor');
    setTimeout(resolve, 1000);
});

p04.then(() => new Promise((resolve, reject) => {
    console.log('p04b executor');
    setTimeout(resolve, 1000);
}))
    .then(() => new Promise((resolve, reject) => {
        console.log('p04c executor');
        setTimeout(resolve, 1000);
    }))
    .then(() => new Promise((resolve, reject) => {
        setTimeout(resolve, 1000);
        console.log('p04d executor');
       
    }));