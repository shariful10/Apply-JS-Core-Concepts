// function isLeapYear(year){
//     const remainder = year % 4;
//     if (remainder === 0){
//         return true;
//     }
//     return false;
// }
// const isMyYearLeapYear = isLeapYear(1996);
// console.log('My Year:', isMyYearLeapYear, 'Lear Year');

// const isHerYearLeapYear = isLeapYear(2100);
// console.log('Her Year:', isHerYearLeapYear, 'Lear Year');

function leapyear(year) {
    // return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
    if (year % 100 === 0){
        return year % 400 === 0;
    } else {
        return year % 4 === 0;
    }
}
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(2012));
console.log(leapyear(2020));
console.log(leapyear(2024));