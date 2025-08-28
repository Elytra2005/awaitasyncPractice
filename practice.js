// async makes a function return a promise
// await make a function wait for a promise



function coffeeOrder() {
    // takes 2 methods resolve and reject
    return new Promise((resolve, reject) => {
        let orderTaken;
        
        if(orderTaken) {
            resolve("Heres your Coffee");
        } else {
            reject("No Coffee");
        }
    });
}


async function orderTaker() {
    try {
      let takeOrder = await coffeeOrder();
      console.log(takeOrder);
    } catch(error) {
        console.error(error);
    }
}

orderTaker();

