//onChange -> input 값을 입력하는 것
//onChange -> select 값을 바꿀 때

//사용할 때는 onChange={ (e)=>e.target }

import { useState } from "react";
function Form() {
  const [handelData, setHandleData] = useState(null);

  return (
    <div>
      <h3>{handelData}</h3>
      <input type="text" onChange={(e) => setHandleData(e.target.value)} />
    </div>
  );
}

export default Form;
