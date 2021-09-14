// In place of 'then' we can use async await 

async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve({msg: "info"}), 1000)
    });
  
    let result = await promise; 
    console.log("result: ", result); 
  }
  
f();