/* 1. 회원이 여러 명일 때 */

const users = [
  { id: 1, userid: "busanit", passwd: "12345", username: "coco", gender: "F" }, //배열0
  { id: 2, userid: "seoulit", passwd: "1234", username: "ruby", gender: "F" },
  { id: 3, userid: "daeguit", passwd: "123", username: "danbi", gender: "F" },
];
console.log(users[1].id);
console.log(users[2].gender);
console.log(" ");

for (let i = 0; i < users.length; i++) {
  console.log(users[i].username);
}
console.log(" ");

/* 
forEach -> 쪼갠다..?
객체값.forEach((별명) => {
  출력코드;
});

객체값.forEach((value, index) => {
  출력코드;
}); 

users.forEach((user, idx) => {
  console.log(`${idx}:${user}`); //출력은 별명으로!
});

users.forEach((user) => console.log(user));
*/

/*2. push ->배열에 삽입 ,중요하다~~~~~~~~~~~~~~~~~~~~~~~*/
const arr = [];
arr.push({ id: 4, userid: "busanit" }, { id: 5, userid: "busanit" });
console.log(arr.length + "명 입니다."); // => [ 'busanit' ] 이런식으로 나옴
