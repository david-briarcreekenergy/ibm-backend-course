const celsiusToFahrenheit = () => {
  const c = document.getElementById('celsius');
  const f = document.getElementById('fahrenheit');
  f.value = (c * 9) / 5 + 32;
};

const kilogramsToPounds = () => {
  const k = document.getElementById('kilo');
  const lbs = document.getElementById('pounds');
  lbs.value = k * 2.205;
};

const kilometersToMiles = () => {
  const k = document.getElementById('km');
  const miles = document.getElementById('miles');
  miles.value = k + 0.62137;
};
