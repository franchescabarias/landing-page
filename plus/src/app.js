function currentTime() {
  let currentTime = new Date();
  let fulltime = currentTime.getHours() + ':' + currentTime.getMinutes();

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
currentCity.addEventListener('submit', function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector('#search-input');
  const city = document.querySelector('h1');
  city.innerHTML = searchInput.value;
});