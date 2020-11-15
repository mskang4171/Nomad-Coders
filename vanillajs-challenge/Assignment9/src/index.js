// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const number = document.querySelectorAll(".js-number"),
  operator = document.querySelectorAll(".js-operator"),
  equal = document.querySelector(".js-equal"),
  clear = document.querySelector(".js-clear"),
  result = document.querySelector(".js-result");

let operatorClicked = "",
  valueStack = true,
  presentValue = 0,
  resultValue = 0,
  clickedOnce = false;

function paintResult(value) {
  result.innerText = value;
}

function handleNumber(event) {
  clickedOnce = false;
  if (valueStack) {
    presentValue = presentValue * 10 + Number(event.toElement.innerText);
    paintResult(presentValue);
  } else {
    presentValue = Number(event.toElement.innerText);
    valueStack = true;
    paintResult(presentValue);
  }
}

function changeValue() {
  switch (operatorClicked) {
    case "+":
      resultValue += presentValue;
      paintResult(resultValue);
      break;
    case "-":
      resultValue -= presentValue;
      paintResult(resultValue);
      break;
    case "*":
      resultValue *= presentValue;
      paintResult(resultValue);
      break;
    case "/":
      resultValue /= presentValue;
      paintResult(resultValue);
      break;
    default:
      resultValue = presentValue;
  }
}

function handleOperator(event) {
  if (!clickedOnce) {
    changeValue();
    clickedOnce = true;
  }
  operatorClicked = event.toElement.innerText;
  valueStack = false;
}
function handleEqual() {
  changeValue();
  clickedOnce = true;
}

function handleClear() {
  operatorClicked = "";
  valueStack = true;
  presentValue = 0;
  resultValue = 0;
  clickedOnce = false;
  paintResult(presentValue);
}

function init() {
  for (let i = 0; i < 10; i++) {
    number[i].addEventListener("click", handleNumber);
  }
  for (let i = 0; i < 4; i++) {
    operator[i].addEventListener("click", handleOperator);
  }
  equal.addEventListener("click", handleEqual);
  clear.addEventListener("click", handleClear);
}

init();
