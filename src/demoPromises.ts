import * as fs from 'fs';

const fiveSecTime = () => 
    new Promise<string> ( resolve => {
        console.log("Starting to replicate file in 5 secs");
        setTimeout( ()=> {
            resolve("5 secs done")}, 5000) }
        )

const fileReadPromse = () => 
    new Promise<Buffer> ( (resolve, reject) => 
        fs.readFile(__filename, (err, data) => {
            if(err !== null)
                reject("Error while reading file");
            resolve(data);
        })
    )

const fileWritePromse = (data: Buffer) => 
    new Promise<string> ( (resolve, reject) => {
        fs.writeFile(__filename + "_dup", data, () => {
            resolve("File written by promise");
        })
    })

fiveSecTime()
.then((msg: string) => {
    console.log("5 secs elapsed. Now reading file")
    return fileReadPromse()
})
.then( (buffer: Buffer) => {
    console.log("File read by promise - " + buffer);
    return fileWritePromse(buffer);
})
.then( (msg: string) => {
    console.log(msg);
})
.catch( (msg: string) => console.log(msg))
.finally ( () => {
    console.log("All done");
})

console.log("Finished program");