// function func3(func: (a: number)=> number):void {

    
// }

interface Obj{
    x: number,
    y: number,
}

const arr: Obj[] = [ { x: 4, y: 2}, { x: 1, y: 8 }, { x: 4, y: 2 } ];


function srednia(array: Obj[], symbol: string): number {
    const sum: number = array.reduce((prev: number, curr: Obj) => {
        if (symbol === "x")
            return prev + curr.x;
        else if (symbol === "y")
            return prev + curr.y;
        return prev;
    }, 0);

    return sum / array.length;
}

const resultX: number = srednia(arr,"x");
console.log(resultX);

const resultY: number = srednia(arr,"y");
console.log(resultY);