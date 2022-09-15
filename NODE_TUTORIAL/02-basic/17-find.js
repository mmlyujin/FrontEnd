const employees = [
  { id: 1, username: "Kim", salary: 1000000 }, //0
  { id: 2, username: "Park", salary: 2000000 }, //1
  { id: 3, username: "Jeong", salary: 3000000 }, //2
];

//인덱스 번호로 찾기 :
//findIndex() : 숫자로 된 id를 이용하여 검색
//
const result3 = employees.findIndex((em) => em.id == 1);
console.log(result3);

//수정 : UPDATE 테이블이름 SET 바꿀컬럼명1="값",...where id= 바꿀pk;
//삭제 : DELETE FROM 테이블이름 WHERE id= 삭제할 pk;
//상세보기 : SELECT * FROM 테이블명 WHERE id = 상세보기할pk;

//id 2번 사람의 정보
const result = employees.find((emp) => emp.id == 2); //결과값을 return
console.log(result);

const result1 = employees.filter((emp) => emp.id == 3);
console.log(result1);

//유저네임이 kim 인 사람
const result2 = employees.find((emp) => {
  return emp.username == "Kim"; //if 쓰지 않고 바로 return
  /*
  if (emp.username == "Kim") {
    return true; // 참인 배열을 return
  }
  */
});
console.log(result2);
