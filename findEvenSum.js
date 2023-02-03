// Get Even Numbers of an Array
// function findEvenNumbers(numbers){
//     const evenNumbers = [];
//     for (let i = 0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         if (element % 2 === 0){
//             evenNumbers.push(element);
//         }
//     }
//     return evenNumbers;
// }

// const allNumbers = [12, 65, 51, 78, 32, 45, 91, 96];
// const evenNumbers = findEvenNumbers(allNumbers);
// console.log(evenNumbers);

// Get Even Numbers of an Array (Alternative System)

function getEvenNumbers(numbers) {
    return numbers.filter(function(even) {
      return even % 2 === 0;
    });
  }
  
  const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenNumbers = getEvenNumbers(myNumbers);
  console.log(evenNumbers);
  