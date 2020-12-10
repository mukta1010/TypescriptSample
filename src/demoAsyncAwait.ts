import * as fs from 'fs';
import * as util from 'util';

const fs_read_promise = util.promisify(fs.readFile);
const fs_write_promise = util.promisify(fs.writeFile);

const fiveSecTime = () => new Promise<string> ( (resolve, reject) => {
    setTimeout( ()=> {
        resolve("5 secs done");        
    }, 5000);
});

async function replicateFileAsync(inFile: string, outFile: string) {
    console.log("Starting to replicate file in 5 secs");
    const msg = await fiveSecTime();
    console.log(msg);
    const data = await fs_read_promise(inFile);
    console.log("File read - " + data);
    await fs_write_promise(outFile, data);
    console.log("File written");
}


replicateFileAsync(__filename, __filename + "_dup");

console.log("Finished program");
