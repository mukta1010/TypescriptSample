
// process.nextTick( ()=> {
//     console.log("In process next tick ");
// });

const printLine = (n: number): void => {
    console.log("Will print soon");
    setTimeout( ()=> {
        console.log(`Printing after ${n} millisecs`);
    }, n);
}

printLine(0);
console.log("Finished program");
