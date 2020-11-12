const title = document.querySelector("#title"); // Javascript로 선택한 것은 Object가 된다.
const title1 = document.getElementById("title"); // same
// HTML을 DOM Object로 바꾼다.
// DOM : Documnet Object Module

console.log(title);
console.dir(title);
console.dir(document); // DOM (Object) 형식으로 볼 수 있다.
title.innerHTML = "Hi! From JS";
document.title = "I own you now";

const CLICKED_CLASS = "clicked";

function handleResize(event) {
  // addEventListener는 함수에 event argument를 넣어서 호출한다.
  console.log("I have been resized");
  console.log(event); // event는 Object이다.
}

function handleOffline() {
  console.log("bye bye");
}

function handleOnline() {
  console.log("Welcome back!");
}

function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  window.addEventListener("resize", handleResize); // 함수에 ()를 넣으면 그때 바로 호출되기 때문에 괄호 없이 넣어줘야함.
  window.addEventListener("offline", handleOffline);
  window.addEventListener("online", handleOnline);
  title.addEventListener("click", handleClick);
}

init();
