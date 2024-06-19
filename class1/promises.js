//Promise is an object which represents eventual completion of an asynchronous operation.

//Promises helps us in making the code more readable, and the property of promises known as Promise Chaining helps us to get out of callback hell.

const cart = ["shoes", "cars", "table"];

createOrder(cart, function(orderId){
    proceedToPayment(orderId);
});

showOrderSummary()

const promise = createOrder(cart);

promise.then(function(orderId){
    proceedToPayment(orderId);
});

createOrder(cart)
.then((orderId) => proceedToPayment(orderId))
.then((paymentInfo) => showOrderSummary(paymentInfo))
.then((paymentInfo) => updateWalletBalance(paymentInfo));

