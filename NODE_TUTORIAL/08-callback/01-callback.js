function one() {
  //시간이 오래 걸리는 작업
  //setTimeout(작업내용,시간) -> 비동기 함수
  //비동기 : 시간이 걸린다, 지금은 아니지만 미래에 발생
  //비동기 함수 : 호출부에서 실행결과를 기다리지 않아도 되는 함수,순서를 지키지 않고 넘어가버린다.
  //setTimeout(() => console.log("One..."), 3000); //1초가 1000
  setTimeout(() => {
    console.log("One...:)");
  }, 5000);
}
function two() {
  //시간이 적게 걸리는 작업
  setTimeout(() => {
    console.log("Two...:)..(0_0)/");
  }, 2000);
}

one();
two();
