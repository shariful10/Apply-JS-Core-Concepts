function getFactorial(number){
    let factorial = 1;
    for (i = 1; i <= number; i++){
        factorial *= i;
        console.log(i, factorial);
    }
    return factorial;
}
const factorial = getFactorial(4);
console.log(factorial);