/*
1.findIndex() :  검색된 내용의 인덱스를 리턴 : []
2.Object.keys(객체명)  : 객체배열 인덱스번호 또는 전체 개수 출력[{},{},{}]
사용방법 : forEach() =filter()=find()=findIndex()
*/

const names = ["Kim", "Lee", "Park"];
const idx = names.findIndex((n) => n == "Park");
console.log(idx); //2를 출력

//객체 안에 몇 개 있는지??
//객체 배열 번호도 출력
const users = [
  { id: 1, username: "coco" },
  { id: 2, username: "ruby" },
  { id: 3, username: "danbi" },
];
console.log(Object.keys(users)); //인덱스
console.log(Object.keys(users[0])); //key값 나온다.
console.log(Object.keys(users[1]));
console.log(Object.keys(users[2]));

console.log(users.length);
