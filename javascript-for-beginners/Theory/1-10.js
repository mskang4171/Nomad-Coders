// Object (data에 label이 존재)
const minsooInfo = {
    name: "Minsoo", // 여기서 name은 string이 아닌 variable이므로 ""를 사용하지 않는다.
    age: 23,
    gender: "Male",
    isHandsome: true,
    favMovies: ["Harry Potter", "Avatar", "Parasite"], // Array를 Object 안에 넣는 것도 가능
    favFood: [
        { name: "kimchi", fatty: false },
        { name: "cheese burger", fatty: true },
    ], // Array 안에 Object를 넣고 그걸 다시 Object에 넣는 것도 가능
};
// Array 처럼 선언 할 경우 SyntaxError: Unexpected token '}'

console.log(minsooInfo);
console.log(minsooInfo.gender);

minsooInfo.gender = "Female"; // object가 const라고 하더라도 내부의 값은 바꿀 수 있다.
// minsooInfo = true; // TypeError: Assignment to constant variable.

console.log(minsooInfo.gender);

console.log(minsooInfo.favFood[0].fatty);
