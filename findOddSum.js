function getSumOfAnArray(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        // console.log(index, element, sum);
    }
    return sum;
}

// Get array Element, Index Position and Odd Numbers of an Array

// function getOddNumbersOfAnArray(numbers){
//     // const oddNumbers = [];
//     for (let i = 0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         if (element % 2 !== 0){
//             console.log(index, element);
//             oddNumbers.push(element);
//         }
//     }
//     return oddNumbers;
// }
// const myNumbers = [12, 65, 45, 78, 32, 45, 91];
// const oddNumbers = getOddNumbersOfAnArray(myNumbers);
// console.log(oddNumbers);
// getSumOfAnArray(myNumbers);

// Get Odd Numbers of an Array

// function findOddNumbers(numbers){
//     const oddNumbers = [];
//     for (let i = 0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         if (element % 2 !== 0){
//             oddNumbers.push(element);
//         }
//     }
//     return oddNumbers;
// }

// const myNumbers = [12, 65, 51, 78, 32, 45, 91, 96];
// const oddNumbers = findOddNumbers(myNumbers);
// console.log(oddNumbers);

// Get Odd Numbers of an Array (Alternative Syste)

function getOddNumbers(numbers) {
    return numbers.filter(function(odd) {
      return odd % 2 !== 0;
    });
  }
  
  const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const oddNumbers = getOddNumbers(myNumbers);
  console.log(oddNumbers); // [1, 3, 5, 7, 9]
  




