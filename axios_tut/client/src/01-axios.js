/*
1. npm i axios
2. 사용할 파일 상단에 import axios from "axios";
3. const [] = useState([]); 저장 변수
4. get(외부데이터 가지고 올때), post(내부데이터를 외부에 저장할 때)
   - const fetchData = async function() { //async function
      const result = await axios.get(url); //await 메소드()
      console.log(result.data);
   }

   const fetchData = async () => {
    const result = await axios.post(url, {전송할데이터}); //전송할 데이터는 key:value 방식
      console.log(result.data);
   }
   
*/
import axios from "axios";
import { useState, useEffect } from "react";

function App() {

  const [store, setStore] = useState({});

  const fetchData = async function() {
    const result = await axios.get("https://course-api.com/react-store-products");
    console.log(result.data.data);
    setStore(result.data);

  }

  useEffect(() => {
    fetchData();
  }, []);

  // 객체명.map((별명, key) => {
  //   출력html
  // })
  return (
    <>
      
    </>    
  );
}

export default App;
