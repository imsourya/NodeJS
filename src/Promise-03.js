// Promise All
  
const wait = (ts) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ts > 2000) {
                reject(`Rejected in ${ts}ms`);
            } else {
                resolve(`Resolved in ${ts}ms`);
            }
        }, ts);
    });
};

// Promise.all
Promise.all([
    wait(1500).catch(err => err),
    wait(2000).catch(err => err),
    wait(3000).catch(err => err)
]).then(results => console.log(results));