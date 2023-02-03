function factorial(number){
    let i = number;
    let result = 1;
    while(i >= 1){
        result *= i;
        i--;
    }
    return result;
}

const result = factorial(7);
console.log(result);