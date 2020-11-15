// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
let max = 0;

const range = document.querySelector(".js-range"),
  form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  info = document.querySelector(".js-info"),
  numResult = document.querySelector(".js-numResult"),
  winResult = document.querySelector(".js-winResult");

function changeResult(num) {
  const machineNum = Math.floor(Math.random() * (max + 1));
  numResult.innerText = `You chose: ${num}, the machine chose: ${machineNum}.`;
  num === machineNum
    ? (winResult.innerText = "You won!")
    : (winResult.innerText = "You lost!");
}

function changeInfo(num) {
  info.innerText = `Generate a number between 0 and ${num}`;
}

function handleForm(event) {
  event.preventDefault();
  const chosenNum = input.valueAsNumber;
  changeResult(chosenNum);
}

function handleRange() {
  max = range.valueAsNumber;
  changeInfo(max);
}

function init() {
  setInterval(handleRange, 100);
  form.addEventListener("submit", handleForm);
}

init();
