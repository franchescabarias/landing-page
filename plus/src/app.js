/* 
🙀 Bonus Feature
Display a fake temperature (i.e 17) in Celsius and add a link to convert it to 
Fahrenheit. When clicking on it, it should convert the temperature to Fahrenheit. 
When clicking on Celsius, it should convert it back to Celsius.*/


function currentTime() {
  let currentTime = new Date();
  let minutes = String(currentTime.getMinutes()).padStart(2, '0');
  let fulltime = currentTime.getHours() + ':' + minutes;

  return fulltime;
}

let timeNow = document.querySelector('#time-now');
timeNow.innerHTML = `${currentTime()}`;

function formatDate() {
  let now = new Date();
  let day = now.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  day = days[now.getDay()];

  return day;
}
let currentDay = document.querySelector('#day');
currentDay.innerHTML = `${formatDate()}`;

let currentCity = document.querySelector('#search-form');
currentCity.addEventListener('submit', function searchCity(e) {
  e.preventDefault();
  let searchInput = document.querySelector('#search-input');
  const city = document.querySelector('#city');
  city.innerHTML = searchInput.value;
});