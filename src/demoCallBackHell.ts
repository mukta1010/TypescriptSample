import * as fs from 'fs';

function replicateFile(inFile: string, outFile: string) {
    console.log("Starting to replicate file in 5 secs");
    setTimeout( () => {
        fs.readFile(inFile, (err,data) => {
            console.log("File read - " + data);
            fs.writeFile(outFile, data, () => {
                console.log("File written");
            });
        });
    }, 5000);
}

replicateFile(__filename, __filename + "_dup");

console.log("Finished program");
