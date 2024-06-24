// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

const filePath = "./sample.txt";

const data = "hey I am changing the data of the file."
fs.writeFile(filePath, data, 'utf-8', (err) => {
    if(err) console.error(err);
    else console.log("File written successfully");

    fs.readFile(filePath, 'utf-8', (err, data) => {
        if(err) console.error(err);
        else console.log("File contents: ", data);
    });
});

const expensiveOperation = function() {
    let sum = 0;
    for (let i = 0; i < 10000000000; i++) {
        sum += i;
    }
    console.log("Expensive operation done");
};

expensiveOperation();