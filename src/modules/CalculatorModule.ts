
function add(x: number, y: number) : number {
    return x + y;
}

function subtract(x:number, y: number) : number {
    return x - y;
}

function addAll( ...args: number[]) :number {
    let result = 0;
    args.forEach(element => {
        result += element;
    });
    return result;
}

export {add, subtract, addAll};
