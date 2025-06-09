const hoursIntoSeconds = hours => hours * 3600;

// console.log('2 => ', hoursIntoSeconds(2));
// console.log('10 =>  ', hoursIntoSeconds(10));
// console.log('24 => ', hoursIntoSeconds(24));

const charCount = (char, string) => {
  let count = 0;
  for (c of string) {
    if (c === char) {
      count++;
    }
  }
  return count;
};

console.log(charCount('a', 'edabit'));
console.log(charCount('c', 'Chamber of secrets'));
console.log(charCount('b', 'big fat bubble'));
