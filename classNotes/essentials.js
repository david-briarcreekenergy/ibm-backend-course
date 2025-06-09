// essentials
// arrays and objects
// functions and return
//  async coding

/*************************************** ARRAYS */
let arr = [1, 2, 3, 4, 5, 6];

// forEach
// arr.forEach(val => console.log(val));
/* function myFunction(item, index) {
  text += index + ': ' + item + '<br>';
}
const fruits = ['apple', 'orange', 'cherry'];
fruits.forEach(myFunction); */

// map
// creates NEW ARRAY, does NOT affect original array
let newArr = arr.map(val => val);
// console.log(newArr);

// filter
let filtered = arr.filter(val => val >= 3);
// console.log(filtered);

// find

let found = arr.find(val => val > 4);
console.log('found', found);

// indexOf
let index = arr.indexOf(2);
console.log('indexFound', index);
/************************************************* */

/********************OBJECTS*************** */
/* const me = {
  name: 'dw',
  age: 48,
  city: 'trenton',
  friends: ['t', 's'],
};
Object.freeze(me);

me.name = 'bill';
console.log(me.name, me['name']);
delete me.age;
console.log(me); */

/***************************************************** */

/***************************FUNCTION AND RETURN */
//  function call is equal to what it returns
/******************************************************** */

/**********************  ASYNC ************************** */
const url = 'https://randomuser.me/api';
const fetchData = async () => {
  return (await fetch(url)).json();
};

let data = await fetchData();
// console.log(data);

const notAwait = () => {
  return fetch(url)
    .then(data => data.json())
    .then(final => final)
    .catch(err => console.error(err));
};

let d = await notAwait();
console.log(d);
