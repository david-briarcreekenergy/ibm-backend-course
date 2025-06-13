const thickness = n => {
  return 0.0005 * Math.pow(2, n);
};

console.log(thickness(1));
console.log(thickness(4));
console.log(thickness(21));

const moveCapitalLetters = str => {
  const capitalLetters = [];
  const lowerLetters = [];
  for (char of str) {
    if (char.toUpperCase() === char) {
      capitalLetters.push(char);
    } else {
      lowerLetters.push(char);
    }
  }

  let upperCase;
  let lowerCase;
  if (char >= 'A' && char <= 'Z') {
    upperCase += char;
  } else {
    lowerCase += char;
  }
  let finalStr = upperCase + lowerCase;
  return capitalLetters.concat(lowerLetters).join('');
};

console.log(moveCapitalLetters('hApPy'));
console.log(moveCapitalLetters('moveMENT'));
console.log(moveCapitalLetters('shOrtCAKE'));
