// function factorial(number){
//     for (let i = number; i >= 1; i--){
//         console.log(i);
//     }
// }

// // const result = factorial(7);
// factorial(7);
// // console.log(result);

function factorial(number){
    let result = 1;
    for (let i = number; i >= 1; i--){
        result *= i;
        console.log(i);
    }
    return result;
}
const number = 8;
const result = factorial(number);
console.log('Factorial of:', number, result);