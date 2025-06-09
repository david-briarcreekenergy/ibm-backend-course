function compute() {
  p = document.getElementById('principal').value;
  const principal = document.getElementById('principal').value;
  const rate = document.getElementById('rate').value;
  const years = document.getElementById('years').value;
  const interest = (principal * years * rate) / 100;
  const amount = parseFloat(principal) + parseFloat(interest);
  const result = document.getElementById('result');

  const currentYear = new Date().getFullYear();
  const year = currentYear + parseInt(years);

  if (principal <= 0) {
    alert('Enter a positive number');
    document.getElementById('principal').focus();
  } else {
    const str = `If you deposit $${principal},<br>
    at an interest rate of ${rate}%,<br>
     you will receive an amount of $${amount.toFixed(2)},<br> in the year ${year}.`;
    result.innerHTML = str;
  }
}

const updateRate = () => {
  const rateVal = document.getElementById('rate').value;
  console.log(rateVal);
  const rateValSpan = document.getElementById('rate_val');
  rateValSpan.textContent = rateVal;
};
