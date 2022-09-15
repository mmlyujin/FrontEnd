/*
Filter
1.데이터를 걸러내어 배열로 return
2.사용방법은 forEach 거의 동일
3.filter + forEach
*/

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
/*
const result = array.filter((arr) => {
  return arr % 2 == 0; //짝수
}); //배열로 출력

result.forEach((res) => console.log(res)); //하나씩 한 줄 출력
*/

/*Chaining */
const result = array
  .filter((arr) => {
    return arr % 2 == 0; //짝수
  })
  .forEach((res) => console.log(res)); //이어서 바로 forEach 붙인다.

/*jsObj + filter */
/* 권한(auth)이 false인 것만 출력 */
const users = [
  { id: 1, username: "L", auth: false },
  { id: 2, username: "M", auth: true },
  { id: 3, username: "A", auth: false },
];

/*
const result02 = users.filter((user) => {
  return users.auth == false; //false 내용이 array
});

result02.forEach((res) =>
  console.log(res.username + "님은 웹사이트에 접근할 수 없습니다.")
);*/

users
  .filter((user) => user.auth == false)
  .forEach((u) => console.log("Access denied : " + u.username));

/*
1.filter + push + spread Operator : 다른 배열에 저장
*/

const members = [
  { id: 1, Nation: "Korea", auth: 3 },
  { id: 2, Nation: "U.S.A", auth: 1 },
  { id: 3, Nation: "Canada", auth: 1 },
];
const guest = []; //[sp]

//auth 1인 값을 filtering 한 후 새로운 배열에 저장하시오.
members.filter((member) => {
  if (member.auth < 3) guest.push(member); //2,3
});
console.log(guest);
