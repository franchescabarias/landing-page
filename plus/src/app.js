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