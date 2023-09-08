const dayOfTheWeek = document.querySelector(".day");
const currentTime = document.querySelector(".time");

const today = new Date();
let secs = today.getUTCMilliseconds();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

dayOfTheWeek.innerHTML = `${days[today.getDay()]}`;
currentTime.innerHTML = `${today.getUTCMilliseconds()}`;

// window.setInterval(() => {

// }, 1000);
