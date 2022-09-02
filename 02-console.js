/*1. console.log(커맨드&콘솔 출력) :  debugging
command 창에서 node 파일명 입력하면 출력함
*/

console.log("Welcome Nodejs"); //browser -> res.send();
console.log("----------------------------------------------------");
/*2. variable 
    let : 값을 재할당할 수 있다. - 반복
    const : x -나머지는 전부
*/
const number = 10;
console.log(number);
console.log("변수 값은" + number);
console.log(`변수 값은 ${number}`);
console.log("변수 값은 %d", number);
console.log("변수 값은 %i", number);
console.log("----------------------------------------------------");

/* 3. function */
function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(10, 20));

const calc = (num3, num4) => num3 + num4;
console.log(calc(50, 50));

const add = (num5, num6) => {
  return num5 + num6;
};
console.log(add(100, 100));
console.log("----------------------------------------------------");

/* 4. Object : Javascript object <-> JSON Object 
    (1) javascript object : 화면에 출력할 때 -key 따옴표X
    (2) json object : 인터넷으로 주고 받을 때 -Stringify, parse - key 따옴표O
*/
//객체 하나만 사용할 때는 {} , 객체를 여러 개 사용할 때는 [{},{},...]
const jsObj = {
  id: 1,
  userid: "busanit",
  passwd: "12345",
  username: "busan It academy",
  gender: "F",
};
/*jsObj <--> jsonObj : json.stringify(객체명) */
const jsonResult = JSON.stringify(jsObj, null, 2); //JSON타입으로 jsObj를 변환해주세요~ null, 2 를 해주면 보기에 편하다.
console.log(jsonResult);
/*{ json object 라서 key에 따옴표가 붙는다.
  "id": 1,
  "userid": "busanit",
  "passwd": "12345",
  "username": "busan It academy",
  "gender": "F"
} */

/* jsonObj -> jsObj */
/**
 *  변수위에 주석 달면 그 변수에 설명을 붙일 수 있다.
 */
const jsResult = JSON.parse(jsonResult);
console.log(jsResult);
/*{
    id: 1,
    userid: 'busanit',
    passwd: '12345',
    username: 'busan It academy',
    gender: 'F'
  } */

console.log(jsObj.userid);
console.log(jsObj.passwd);
