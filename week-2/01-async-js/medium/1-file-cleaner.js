// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs');

const filePath = "./text.txt"

fs.readFile(filePath, "utf-8", (err,data) => {
    if(err) console.log(err);
    console.log(data);
    const lines = data.toString().split(/\s+/);
    console.log(lines);
    const newLines = lines.map(line => line.trim()).join(' ');
    console.log(newLines);
    fs.writeFile(filePath, newLines, (err) => {
        if(err) console.log(err);
    });
});