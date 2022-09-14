/*
1.spread Operator : 값을 출력하거나 이어 붙이기 =concat
배열의 값을 펼쳐준다. 브라켓 빼고 출력됨.

-(...객체명)
-([...old,...new]) : 배열 (index 번호로 저장)
-{...old,...new} : 객체 (key,value)
*/
const olds = [1, 2, 3, 4, 5];
const news = [6, 7, 8, 9, 0];
/*concat  : olds.concat(news)*/
console.log(olds.concat(news)); //브라켓이 같이 출력
console.log(...olds); //값만 출력

/*연결할 때는 bracket 모양을 확인하고 연결 */
console.log([...olds, ...news]); //원본에 [] 있으니 맞춰준다.

//두 개의 배열과 추가로 값 하나를 연결해서 출력
console.log([...olds, ...news, 11, 12]);
console.log("");
console.log("-------------------------------------------");

/*더하기 함수 만들어서 값을 출력하는 so */
/*
function add(x, y) {
  return x + y;
}

//console.log(add(10, 20));
const numbers = [10, 20];
console.log(...numbers);
console.log(add(...numbers));*/

const nums = [10, 20, 30];
function mul(a, b, c) {
  return a * b * c;
}

console.log(mul(...nums));

// {key:value}
const userid = {
  uid: "busan",
};
const password = {
  pwd: "12345",
};
const username = {
  uname: "yujin",
};

//3을 이어 붙혀서 key:value 형태로 만들기
console.log({ ...userid, ...password, ...username });

const users = [
  { id: 1, userid: "GENE", auth: "Y" },
  { id: 2, userid: "seoul", auth: "N" },
  { id: 3, userid: "daegu", auth: "N" },
];

const user = { id: 4, userid: "jeju", auth: "Y" };

//기존자료 3개가 ({})가 []안에 있는 것에 이어 붙일 때 {이어붙일객체}를 적어주면 됨.
//([...old,new])
//...
console.log([...users, user]);
