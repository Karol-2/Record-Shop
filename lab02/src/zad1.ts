// function func3(func: (a: number)=> number):void {

    
// }

interface Obj{
    x: number,
    y: number,
}

const arr: Obj[] = [ { x: 4, y: 2}, { x: 1, y: 8 }, { x: 4, y: 2 } ];


function srednia(array: Obj[], symbol: string): void {

    const sum: number  = array.reduce((prev: Obj,curr: Obj)=>{
        if(symbol === "x")
        {
            prev.x += curr.x
        } else if (symbol === "y")
        {
            prev.y += curr.y
        }
            
            return prev;
    },0)

    console.log("Średnia: ",sum / array.length);

}


srednia(arr,"x");