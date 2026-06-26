
let a:number = 10;
a = 20;
console.log(a);

let b: number|string = 10;
b = "Sagar";
b = 50.23265;
console.log(b);

let c: any = 10;
c = "Sagar";
c = false;
console.log(c);


// Function
function add(d:number, e:number): number{
    let f:number = d + e;
    return f;
}

console.log(add(10, 20));

// Interface
interface Student{
    name: string;
    age: number;
}

let std1:Student = {
    "name": "Sagar",
    "age": 32
    
}
console.log(std1);

// Tuple array

let arr: [number, string] = [10, "Sagar"];  // Fix size