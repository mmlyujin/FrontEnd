/*
1.객체 여러개
    -for
    -spread operation ... =concat



*/
const users = [
  { id: 1, userid: "busanit", gender: "F" },
  { id: 2, userid: "seoulit", gender: "F" },
  { id: 3, userid: "jeju it", gender: "F" },
];
/*
for (let i = 0; i < users.length; ++i) {
console.log(
    "ID : " + users[i].id,
    "\t아이디 : " + users[i].userid + "\t성별 : " + users[i].gender
  );
  console.log(
    `ID : ${users[i].id} - 아이디 : ${users[i].userid} - 성별 : ${users[i].gender}`
  );
}
*/
const user = [
  { id: 4, userid: "daeguit", gender: "F" },
  { id: 5, userid: "daejeonit", gender: "F" },
];
const user1 = { id: 6, userid: "incheonit", gender: "F" };
const arr = []; //users + user
console.log("----------------------------------------------------");
//객체 또는 배열명.push 배열이나 객체 안에 삽입(맨 끝)
//객체 또는 배열명.pop 배열이나 객체 밖으로 빼낼 때(맨 끝)
//객체 브라켓 모양이 맞아야 함
arr.push(...users, ...user, { user1 }); //배열에 값 추가해서 넣기
console.log(arr.length);
console.log(arr);
