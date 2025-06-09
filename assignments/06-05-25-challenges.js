const countTrue = arr => {
  let count = 0;
  for (i of arr) {
    if (i) count++;
  }
  return count;
};

const test = arr => arr.filter(Boolean).length;
console.log(`test: ${test([true, false, false, true, false])}`);

// countTrue([true, false, false, true, false]) ➞ 2
console.log(countTrue([true, false, false, true, false]));

// countTrue([false, false, false, false]) ➞ 0
console.log(countTrue([false, false, false, false]));

// countTrue([]) ➞ 0
console.log(countTrue([]));

const tree = h => {
  let arr = [];
  for (let i = 0; i < h; i++) {
    const spaceCount = h - i - 1;
    const charCount = i * 2 + 1;
    arr[i] = `${' '.repeat(spaceCount)}${'#'.repeat(charCount)}${' '.repeat(spaceCount)}`;
  }
  return arr;
};

console.log(tree(1));
console.log(tree(3));
console.log(tree(5));
