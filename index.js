// console.log('test');

// function calculate(a,b) {
//     console.log(`Skaičiaus ${a} ir ${b} suma lygi ${a+b}.`);
// }



const a1 = [10, 8, 2, 4];
const a2 = [1, 3, 5, 7, 9];
const a3 = [147, 258, 369, 123, 456, 789];


let suma = 0;
let vidurkis = 0;

function calculate(x) {
    x.forEach(e => {
        suma += e;
    })
    return vidurkis = suma / x.length;
}

console.log(`${a3} skačių vidurkis lygus ${calculate(a3)}`);