const x = () => console.log("x함수를 실행중입니다.");
const y = () => console.log("y함수를 실행중입니다.");

function sum(a, b) {
  return a + b;
}

module.exports = {
  x,
  y,
  sum,
};
