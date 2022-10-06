import { useState } from "react";

function Buttons() {
  const [region, setRegion] = useState("busan");
  const [counter, setCounter] = useState(0);

  function changeRegion() {
    setRegion("Seoul"); //바꾸는 값은 set
  }
  function add() {
    setCounter(counter + 1);
  }
  function sub() {
    setCounter(counter - 1);
  }
  return (
    <div>
      {/* 버튼 누르면 글자 초기값을 바꾸는 event(hook : busan -> Seoul) */}
      <p>{region}</p>
      <button onClick={changeRegion}>지역 바꾸기</button>
      <p></p>
      <h2>counter : {counter}</h2>
      <button onClick={add}>ADD</button>
      <button onClick={sub}>SUB</button>
    </div>
  );
}

export default Buttons;
