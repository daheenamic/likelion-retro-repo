// ```javascript
// ## 📝 문제 1: 변수와 기본 연산
// // 다음 변수들을 선언하고 값을 할당하세요
// // 1. 당신의 이름 (문자열)
// // 2. 나이 (숫자)
// // 3. 학생 여부 (불린)

// // 그리고 이 정보들을 이용해 자기소개 문장을 만들어 console.log로 출력하세요
// // 예: "안녕하세요, 저는 김철수이고 25살입니다. 학생입니다."
// ```
console.log("=====1번=====");
let name = "jin";
let age = 26;
let isStudent = true;

console.log(
  "이름 : " + name + "\n나이 : " + age + "\n학생 여부 : " + isStudent
);

// ```javascript
// ## 📝 문제 2: 함수 만들기
// // 1. 두 숫자를 받아서 더한 결과를 반환하는 함수 add를 만드세요
// // 2. 원의 반지름을 받아서 넓이를 계산하는 함수 getCircleArea를 만드세요 (π는 3.14 사용)
// // 3. 이름을 받아서 "안녕하세요, [이름]님!"을 반환하는 함수 greet을 만드세요

// // 각 함수를 호출해서 결과를 확인해보세요
console.log("=====2번=====");
function add(a, b) {
  return a + b;
}
console.log(add(2, 3));

const getCircleArea = function (r) {
  const pie = 3.14;
  return pie * r * r;
};
console.log(getCircleArea(10));

const greet = (name) => {
  console.log(`안녕하세요. ${name}님`);
};

greet(name);

// ``````javascript
// ## 📝 문제 3: 객체 다루기
// // 학생 정보를 담은 객체를 만드세요
// // 포함할 정보: 이름, 나이, 학년, 좋아하는 과목들(배열)

// // 그리고 다음 작업들을 해보세요:
// // 1. 학생의 이름을 출력하기
// // 2. 학생의 나이를 1살 증가시키기
// // 3. 새로운 과목을 좋아하는 과목 배열에 추가하기
// // 4. 학생 정보를 모두 출력하기

console.log("=====3번=====");
const student = {
  name: "진",
  age: 26,
  grade: 4,
  favorites: ["수면학개론", "맛집투어개론"],
};

console.log(student.name);
console.log(student["age"]);
student["age"] += 1;
console.log(student.age);
student.favorites.push("escape");

console.log(
  `이름 : ${student.name}\n나이 : ${student.age}\n학년 : ${student.grade}\n좋아하는 과목 : ${student.favorites}`
);
// ``````javascript
// ## 📝 문제 4: 배열 조작
// // 1. 과일 이름들이 담긴 배열을 만드세요 (최소 5개)
// // 2. 배열의 첫 번째와 마지막 요소를 출력하세요
// // 3. 배열에 새로운 과일을 추가하세요
// // 4. 배열의 길이를 출력하세요
// // 5. 특정 과일이 배열에 있는지 확인하는 코드를 작성하세요
console.log("=====4번=====");
const fruits = ["메론", "복숭아", "사과", "수박", "망고"];
console.log(fruits[0]);
console.log(fruits[-1]);
console.log(fruits[fruits.length - 1]);
fruits.push("배");
console.log(fruits);
console.log(fruits.length);
let fruit = fruits.find((f) => f === "메론");
console.log(fruit);
fruit = fruits.find((f) => f === "딸기");
console.log(fruit);

// ``````javascript
// ## 📝 문제 5: 조건문 활용
// // 점수를 받아서 등급을 반환하는 함수를 만드세요
// // 90점 이상: A
// // 80점 이상: B
// // 70점 이상: C
// // 60점 이상: D
// // 60점 미만: F
// // 여러 점수로 테스트해보세요: 95, 87, 73, 65, 45
console.log("=====5번=====");
function grade(score) {
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 60) return "D";
  else return "F";
}
const scorelist = [95, 87, 73, 65, 45];
for (let i = 0; i < 5; i++) {
  console.log(grade(scorelist[i]));
}

// ``````javascript
// ## 📝 문제 6: switch문 활용
// // 요일 번호(1-7)를 받아서 요일명을 반환하는 함수를 만드세요
// // 1: 월요일, 2: 화요일, ... 7: 일요일
// // 잘못된 번호가 입력되면 "잘못된 요일 번호입니다" 반환

// // 1부터 8까지의 숫자로 테스트해보세요
console.log("=====6번=====");
for (let i = 1; i <= 8; i++) {
  switch (i) {
    case 1:
      console.log("월요일");
      break;
    case 2:
      console.log("화요일");
      break;
    case 3:
      console.log("수요일");
      break;
    case 4:
      console.log("목요일");
      break;
    case 5:
      console.log("금요일");
      break;
    case 6:
      console.log("토요일");
      break;
    case 7:
      console.log("일요일");
      break;
    default:
      console.log("잘못된 요일 번호입니다.");
  }
}
// ``````javascript
// ## 📝 문제 7: 종합 문제
// // 간단한 계산기 객체를 만드세요
// // 포함할 메서드:
// // - add(a, b): 덧셈
// // - subtract(a, b): 뺄셈
// // - multiply(a, b): 곱셈
// // - divide(a, b): 나눗셈 (0으로 나누기 체크)

// // 그리고 계산 결과를 예쁘게 출력하는 함수도 만드세요
// // 예: "10 + 5 = 15"
// ``````javascript
const calculator = {
  plus(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    if (b != 0) return a / b;
    else return undefined;
  },
  printResult(a, b, how, ab) {
    console.log(`${a} ${how} ${b} = ${ab}`);
  },
};
const result = calculator.plus(3, 4);
calculator.printResult(3, 4, "+", result);
// ## 📝 문제 8: 실전 응용
// // 도서관 시스템을 만들어보세요
// // 1. 책 객체들이 담긴 배열을 만드세요 (제목, 저자, 출간년도, 대여 상태)
// // 2. 책 제목으로 검색하는 함수를 만드세요
// // 3. 대여 가능한 책들의 제목만 출력하는 함수를 만드세요
// // 4. 새 책을 추가하는 함수를 만드세요

// ---

// ## 💡 해결 팁

// - 하나씩 차근차근 해보세요
// - console.log()를 자주 사용해서 결과를 확인하세요
// - 오류가 나면 콘솔을 확인해보세요
// - 각 문제를 완성한 후 다음 문제로 넘어가세요

// ```
