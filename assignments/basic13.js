// // The “Basic 13” The foundation “Basic 13” algorithm challenges.

// Print 1-255
// Print all the integers from 1 to 255.
const printOnetoTwoFiftyFive = () => {
  for (let i = 1; i <= 255; i++) {
    console.log(i);
  }
};
// printOnetoTwoFiftyFive();

// Print Sum 0-255
// Print integers from 0 to 255, and with each integer print the sum so far.
const printAndSum = () => {
  let sum = 0;
  for (let i = 0; i <= 255; i++) {
    sum += i;
    console.log(`i: ${i},  sum: ${sum}`);
  }
};
// printAndSum();

// Find and Print Max
// Given an array, find and print its largest element.
const findAndPrintArrayMax = array => {
  let largestElement = array.reduce((max, item) => (item > max ? item : max));
  console.log(largestElement);
};
// findAndPrintArrayMax([1, 5, 100, 20, 15, 68, 12]);

// Array with Odds
// Create an array with all the odd integers between 1 and 255 (inclusive).
const createArrayWithOdds = () => {
  const array = [];
  for (let i = 1; i <= 255; i++) {
    if (i % 2 !== 0) {
      array.push(i);
    }
  }
  return array;
};
// console.log(createArrayWithOdds());

// Greater Than Y
// Given an array and a value Y, count and print the number of array values greater than Y.
const greaterThanY = (array, y) => {
  let count = 0;
  for (const item of array) {
    if (item > y) {
      count++;
    }
  }
  console.log(`Count: ${count}`);
};
// greaterThanY([2, 4, 6, 8, 10, 12, 16, 18], 7);

// Max, Min, Average
// Given an array, print the max, min and average values for that array.
const maxMinAverage = array => {
  const max = array.reduce((max, item) => (item > max ? item : max));
  const min = array.reduce((min, item) => (item < min ? item : min));
  const avg = array.reduce((total, item) => (total += item)) / array.length;
  console.log(`Max: ${max}`);
  console.log(`Min: ${min}`);
  console.log(`Avg: ${avg}`);
};
// maxMinAverage([1, 2, 3, 4, 5]);

// Swap String For Array Negative Values
// Replace any negative array values with ​'Dojo'​.
const swapString = array => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      array[i] = 'Dojo';
    }
  }
  return array;
};
// console.log(swapString([1, -1, 2, -2, 3, -3]));

// Print Odds 1-255
// Print all odd integers from 1 to 255.
const printOdds = () => {
  for (let i = 0; i <= 255; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
};
// printOdds();

// Iterate and Print Array
// Iterate through a given array, printing each value.
const iterateThroughArray = array => {
  array.forEach(element => {
    console.log(element);
  });
};
// iterateThroughArray([5, 10, 15, 20, 25, 30]);

// Get and Print Average
// Analyze an array’s values and print the average.
const getAndPrintAverage = array => {
  const avg = array.reduce((total, item) => (total += item)) / array.length;
  console.log(`Average: ${avg}`);
};
getAndPrintAverage([1, 2, 3, 4, 5]);

// Square the Values
// Square each value in a given array, returning that same array with changed values.
const squareTheValues = array => {
  for (let i = 0; i < array.length; i++) {
    array[i] = Math.pow(array[i], 2);
  }
  return array;
};
// console.log(squareTheValues([1, 2, 3, 4]));

// Zero Out Negative Numbers
// Return the given array, after setting any negative values to zero.
const zeroOutNegativeNumbers = array => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      array[i] = 0;
    }
  }
  return array;
};
// console.log(zeroOutNegativeNumbers([-1, 1, -2, 2, -3, 3]));

// Shift Array Values
// Given an array, move all values forward by one index, dropping the first and leaving a ​'0'​ value at the end.
const shiftArrayValues = array => {
  for (let i = 0; i < array.length; i++) {
    array[i] = i === array.length - 1 ? 0 : array[i + 1];
  }
  return array;
};
// console.log(shiftArrayValues([1, 2, 3, 4, 5]));

const isPrime = n => {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

console.log(2, isPrime(2));
console.log(3, isPrime(3));
console.log(5, isPrime(5));
console.log(7, isPrime(7));
console.log(11, isPrime(11));
console.log(13, isPrime(13));
console.log(17, isPrime(17));
console.log(4, isPrime(4));
