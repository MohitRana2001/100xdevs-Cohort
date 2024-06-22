//Promise.all :- waits for all the promises to get finished or resolved.
//Promise.allSettled :- waits for all the promises to get settled (either resolved or rejected) (returns the values of promises in array).
//Promise.any :- waits for any of the promises to get resolved. (If all promises fail, then it will result an array of all errors) - (Aggregated errors).
//Promise.race :- waits for any of the promises to get settled (either resolved or rejected)
//Promise.resolve :- returns a resolved promise.
//Promise.reject :- returns a rejected promise.

//code example for Promise.all

const p1 = new Promise((resolve,reject) => {
    setTimeout(() => reject("p1 failed"), 3000);
});

const p2 = new Promise((resolve,reject) => {
    setTimeout(() => reject("p2 failed"), 5000);
});

const p3 = new Promise((resolve,reject) => {
    setTimeout(() => reject("p3 failed"), 2000);
});

// Promise.all([p1,p2,p3]).then(res => {
//     console.log(res); //output: ["p1 success", "p2 success", "p
// })
// .catch((err) => {
//     console.error(err); //output: "p2 failed"
// });

// Promise.allSettled([p1,p2,p3]).then(res => {
//     console.log(res); //output: ["p1 success", "p2 success", "p
// })
// .catch((err) => {
//     console.error(err); //output: "p2 failed"
// });

// Promise.race([p1,p2,p3]).then(res => {
//     console.log(res); //output: ["p1 success", "p2 success", "p
// })
// .catch((err) => {
//     console.error(err); //output: "p2 failed"
// });

Promise.any([p1,p2,p3]).then(res => {
    console.log(res); //output: ["p1 success", "p2 success", "p
})
.catch((err) => {
    console.error(err); //output: "p2 failed"
    console.log(err.errors);
});