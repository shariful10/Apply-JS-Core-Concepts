function findLeapYear(years) {
  let leapYears = [];
  for (let year of years) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      leapYears.push(year);
    }
  }
  console.log("Leap years:", leapYears);
  return leapYears;
}

let years = [2023, 2024, 2025, 2028, 2030];
let result = findLeapYear(years);
