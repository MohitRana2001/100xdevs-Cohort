// const cart  =["shoes", "pants", "kurta"];

// const promise = createOrder(cart);

// promise.then(function(orderId) {
//     console.log(orderId);
//     // proceedToPayment(orderId);
// });

// function createOrder(cart){
//     const pr = new Promise(function(resolve, reject){

//         //createOrder
//         //validateCart
//         if(!validateCart(cart)){
//             const error = new Error("Invalid Cart")
//             reject(err);
//         }

//         const orderId = "12345";
//         if(orderId){
//             setTimeout(function(){
//                 resolve(orderId);
//             }, 5000)
//         }

//     });

//     return pr;
// }

// function validateCart(cart){
//     return true;
// }

const cart = ["Nike", "Adidas", "Puma"];

createOrder(cart).then(function(orderId) {
    return proceedToPayment(orderId);
}).then(function(orderId) {
    return showOrderSummary(orderId);
}).then(function(orderId){
    return updateWallet(orderId);
}).catch(function(err){
    console.log(err);
})



function createOrder(cart){
    const promise = new Promise(function(resolve, reject){
        if(!validateCart(cart)){
            const error = new Error("Invalid Cart");
            reject(error);
        }
        const orderId = "12345";
        if(orderId){
            setTimeout(function(){
                resolve(orderId);
            }, 5000);
        }
    });

    return promise;
}

function validateCart(cart){
    return true;
}

function proceedToPayment(orderId){
    return new Promise((resolve,reject) => {
        console.log("Payment Successful");
        resolve(orderId);
    });
}

function updateWallet(orderId){
    console.log("Updated Wallet Successfully");
}

function showOrderSummary(orderId){
    console.log(cart.map(x => x));
}