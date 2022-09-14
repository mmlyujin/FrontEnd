/*db 또는 file 에 회원가입한 사용자가 저장되어 있다고 가정 */
const p1 = ["KIM", "Lee", "Park", "Choi"];
const c1 = ["red", "green", "blue"];
/*
//module.exports.쓰고싶은 이름 =내보낼 변수
1번 방법
module.exports.person = p1;
module.exports.color = c1;
*/
/*
module.exports = {
  person: p1,
  color: c1,
};
*/

module.exports = {
  //변수 = 값 이름이 동일하면 한번 적으면 됨.
  p1,
  c1,
};
