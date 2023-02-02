function KgToGram(gram){
    const Kilogram = gram / 1000;
    return Kilogram;
}
const myGram = 5000;
const myKilogram = KgToGram(myGram);
console.log('My KG', myKilogram);

const marufGram = 9000;
const marufKilogram = KgToGram(marufGram);
console.log('Maruf', marufKilogram, 'KG');

const sharifGram = 3000;
const sharifKilogram = KgToGram(sharifGram);
console.log('Sharif KG', sharifKilogram);

// // function takaToPoisa(poisa){
// //     const taka = poisa / 100;
// //     return taka;
// // }

// // const myPoisa = 5000;
// // const myTaka = takaToPoisa(myPoisa);
// // console.log(myTaka);

function dayToYear(day){
    const year = day / 365;
    return year;
}
const myDay = 9855;
const myYear = dayToYear(myDay);
console.log('I am', myYear, 'years old');