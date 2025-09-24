const todos = [
  { id: 1, text: "자바스크립트 입문", done: false },
  { id: 2, text: "함수 배우기", done: true },
  { id: 3, text: "객체와 배열 배우기", done: true },
  { id: 4, text: "배열 내장함수 배우기", done: false },
];

//모든 할 일(`text`)을 한 줄씩 출력하세요.
console.log("1. 모든 할 일(`text`)을 한 줄씩 출력하세요.==================\n");

todos.forEach((todo) => {
  console.log(todo.text);
});

//각 할 일을 `"번호. 할 일"` 형식의 문자열 배열로 변환하세요.
//예) `["1. 자바스크립트 입문", "2. 함수 배우기", ...]`
console.log(
  "2.각 할 일을 번호. 할 일 형식의 문자열 배열로 변환하세요.==================\n"
);
let result = todos.map((todo) => (todo = ` ${todo.id}. ${todo.text}`));
console.log("text  => " + result);

// 3️⃣ `filter`
//완료된(`done: true`) 할 일만 새로운 배열로 추출하세요.
console.log(
  "3.완료된(`done: true`) 할 일만 새로운 배열로 추출하세요.==================\n"
);

result = todos.filter((todo) => todo.done === true);
console.log(result);

// 4️⃣ `find`
//아이디(`id`)가 3인 할 일을 찾아서 출력하세요.
console.log(
  "4.아이디(`id`)가 3인 할 일을 찾아서 출력하세요.==================\n"
);

result = todos.find((todo) => todo.id === 3);
console.log(result);

//## 5️⃣ `some`
//할 일 목록에 **완료되지 않은(`done: false`) 항목이 하나라도 있는지** 확인하세요.
console.log(
  "5.할 일 목록에 **완료되지 않은(`done: false`) 항목이 하나라도 있는지** 확인하세요.==================\n"
);

result = todos.some((todo) => !todo.done);
if (result) console.log("완료되지 않은 항목이 있습니다.");
else console.log("모든 할 일을 끝냈습니다.");

//console.log(result);

//## 6️⃣ `every`
//모든 할 일이 완료(`done: true`)되었는지 확인하세요.
console.log(
  "6.모든 할 일이 완료(`done: true`)되었는지 확인하세요.==================\n"
);

result = todos.every((todo) => todo.done);
if (result) console.log("모든 할 일을 끝냈습니다.");
else console.log("완료되지 않은 항목이 있습니다.");

//console.log(result);
//## 7️⃣ `reduce`
//
console.log(
  "7.완료된(`done: true`) 할 일이 몇 개인지 개수를 구하세요.==================\n"
);
result = todos.reduce((count, cur) => {
  if (cur.done) count++;
  //console.log(`${cur.done} , ${index}`);
  return count;
}, 0);

console.log(result);

//## 8️⃣ `sort`
//아이디(`id`) 기준으로 내림차순 정렬한 새 배열을 만드세요.
console.log(
  "8.아이디(`id`) 기준으로 내림차순 정렬한 새 배열을 만드세요.==================\n"
);
result = [...todos].sort((a, b) => b.id - a.id);
console.log(result);

//## 9️⃣ `findIndex`
console.log(
  "9.할 일 목록에서 배열 내장함수 배우기의 인덱스를 구하세요.==================\n"
);
//할 일 목록에서 `"배열 내장함수 배우기"`의 인덱스를 구하세요.
result = todos.findIndex((todo) => todo.text === "배열 내장함수 배우기");
//result = todos.findIndex((todo) => todo.text === "객체와 배열 배우기");
console.log(result);

//## 🔟 종합 응용
console.log(
  "10.done`이 `false`인 항목들만 모아서, 그 `text` 값들만 새로운 배열로 만들어 출력하세요.==================\n"
);
//`done`이 `false`인 항목들만 모아서, 그 `text` 값들만 새로운 배열로 만들어 출력하세요.
//👉 결과: `["자바스크립트 입문", "배열 내장함수 배우기"]`
result = todos.filter((todo) => !todo.done).map((todo) => todo.text);
console.log(result);
