function isEven(number){
    const remainder = number % 2;
    if (remainder === 0){
        return true;
    } else {
        return false;
    }
}
const myNumberIsEven = isEven(49);
console.log(myNumberIsEven);
const herNumberIsEven = isEven(40);
console.log(herNumberIsEven);


