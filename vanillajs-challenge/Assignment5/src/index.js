// import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
const time = document.querySelector("h2");

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const presentDate = new Date();
  const remainTime = xmasDay - presentDate;
  const s = (remainTime - (remainTime % 1000)) / 1000;
  const remainSeconds = s % 60;
  const m = (s - remainSeconds) / 60;
  const remainMinutes = m % 60;
  const h = (m - remainMinutes) / 60;
  const remainHours = h % 24;
  const remainDays = (h - remainHours) / 24;

  time.innerText = `${remainDays < 10 ? `0${remainDays}` : remainDays}d \
  ${remainHours < 10 ? `0${remainHours}` : remainHours}h \
  ${remainMinutes < 10 ? `0${remainMinutes}` : remainMinutes}m \
  ${remainSeconds < 10 ? `0${remainSeconds}` : remainSeconds}s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
