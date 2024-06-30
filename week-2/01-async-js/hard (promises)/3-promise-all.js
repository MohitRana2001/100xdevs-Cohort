/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`wait1 resolved after ${t} seconds`), t * 1000);
    });
}

function wait2(t) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`wait2 resolved after ${t} seconds`), t * 1000);
    });
}

function wait3(t) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`wait3 resolved after ${t} seconds`), t * 1000);
    });
}

function performOperation() {
    // Start time
    const startTime = performance.now();
    
    function calculateTime(t1, t2, t3) {
        return Promise.all([
            wait1(t1),
            wait2(t2),
            wait3(t3)
        ]).then(results => {
            // End time after all promises resolve
            const endTime = performance.now();

            // Calculate duration in milliseconds
            const duration = endTime - startTime;

            console.log(`Operation took ${duration} milliseconds to complete.`);
            console.log(results); // Log results of each promise
            return duration; // Return the time taken in milliseconds
        });
    }

    // Call calculateTime with desired times (1 second for wait1, 2 seconds for wait2, 3 seconds for wait3)
    calculateTime(1, 2, 3).then(totalTime => {
        console.log(`Total time taken: ${totalTime} milliseconds.`);
    }).catch(error => {
        console.error('Error:', error);
    });
}

// Call the function to perform the operation
performOperation();
