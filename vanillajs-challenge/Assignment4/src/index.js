// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const backgroundColors = ["#3498db", "#9b59b6", "#f1c40f"];
const body = document.body;

function handleResize() {
  let width = window.innerWidth;
  if (width <= 500) {
    body.style.backgroundColor = backgroundColors[0];
  } else if (width <= 700) {
    body.style.backgroundColor = backgroundColors[1];
  } else {
    body.style.backgroundColor = backgroundColors[2];
  }
}

handleResize();
window.addEventListener("resize", handleResize);
