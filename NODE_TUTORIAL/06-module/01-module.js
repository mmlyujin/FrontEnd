/*
custom module 사용하는 이유는
파일관리를 쉽게 하기 위해서 또는
파일 공유를 하기 위해서
module => 객체,interface
const fs =require();
메인은 일반적으로 기본적인 코드만 두고 실행 

controller  :주소관리
model :자료저장
service : 예외처리
view : 화면구성
*/

/*
---    1 번 방법  ------
const u = require("./users");
console.log(u.person);
console.log(u.color);
*/

/*     묶음    */

/*
const { person, color } = require("./users");
console.log(person);
*/
/*
const u = require("./users");
console.log(u.c1);
console.log(u.p1);
*/

const { p1, c1 } = require("./users");
console.log(p1);
console.log(c1);
