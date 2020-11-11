if (10 > 5) {
  console.log("hi");
} else {
  console.log("ho");
}

if (10 === 5) {
  console.log("hi");
} else {
  console.log("ho");
}

if (true) {
  console.log("hi");
} else {
  console.log("ho");
}

if ("minsoo" === "minsu") {
  console.log("hi");
} else {
  console.log("ho");
}

if ("10" === 10) {
  console.log("hi");
} else if ("10" === "10") {
  console.log("lalala");
} else {
  console.log("ho");
}

if (20 > 5 && "minsoo" === "minsoo") {
  console.log("yes");
} else {
  console.log("no");
}

if (20 > 5 || "minsoo" === "minsoo") {
  console.log("yes");
} else {
  console.log("no");
}

console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);
console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);

const age = prompt("How old are you?"); // 요새는 안씀. alert도 안씀.

if (age >= 18 && age <= 21) {
  console.log("you can drink but you should not");
} else if (age > 21) {
  console.log("go ahead");
} else {
  console.log("too young");
}
