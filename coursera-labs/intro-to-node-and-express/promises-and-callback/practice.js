const first = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('First Promise Resolved');
  }, 6000);
});
const second = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Second Promise Resolved');
  }, 3000);
});

// first.then(response => {
//   console.log(response);
//   second.then(response2 => {
//     console.log(response2);
//   });
// });

first.then(response => {
  console.log(response);
});

second.then(response2 => {
  console.log(response2);
});
