/*command =console =terminal : 브라우저 실행 
res.send() :브라우저에서 실행
*/

console.log("welcome");

/*
let 값의 변경이 있을 때(변수 재할당) 
-for (let i = 0;....)
그 외에는 모두 const
const pi =3.14;
pi =5; 재할당하면 에러
*/
console.log("1.-------------------------------------------------------------");
const num = 10;
const str = "it academy";

console.log(num);
console.log("숫자는 %d", num);
console.log("숫자는 %i", num);
console.log(str);
console.log("글자는 %s", str);

/*텍스트 +변수 */
console.log("출력되는 숫자 : " + num);
console.log(`출력되는 글자 : ${str}`);

console.log("");
console.log(
  "2.function-------------------------------------------------------------"
);
/* 함수
function() -> this 사용
() => this X, 중괄호를 x -> return X 
*/
function sum() {
  console.log("두 수의 합을 구합니다.");
}
sum();

const add = () => console.log("두 수의 합을 구합니다.");
sum();

console.log(
  "3.function return-------------------------------------------------------------"
);

function sum2(a, b) {
  return a + b;
}
console.log(sum2(10, 20));
const add2 = (a, b) => a + b; //중괄호 X -> return
console.log(add2(100, 200));

const add3 = (a, b) => {
  return a + b;
}; //add2 = add3
console.log(add3(50, 10));

function mul(a, b) {
  return a * b;
}
function disp() {
  console.log("두 수의 곱을 출력합니다.");
}

function close() {
  console.log("program close");
}
disp();
console.log(mul(10, 11));
close();

const print_open = (title) => console.log(title);
const print_close = (close) => console.log(close);
const div = (a, b) => a / b;

print_open("Welcome Calculator");
console.log(div(200, 50));
print_close("Program end....");
