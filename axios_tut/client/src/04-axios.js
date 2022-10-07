import axios from "axios";
import { useEffect, useState } from "react";
import Load from "./components/Load";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("U.S joke");
  const [loading, setLoading] = useState(true);
  const URL = "https://icanhazdadjoke.com";
  const fetchData = async function (err) {
    const result = await axios.get(URL, {
      headers: {
        Accept: "application/json",
      },
    }); //html형태를 json으로 변환해서 가져오기
    //console.log(result.data.joke);
    if (err) {
      throw err;
    } else {
      setLoading(false);
      setJoke(result.data.joke);
    }
  };
  /*
 useEffect( () => {}); ->화면 렌더링 (새로고침)이나 화면이 움직이는 동작을 할 때마다 실행

 useEffect( () => {},[]); ->화면 렌더링할 때 한번 실행

 useEffect( () => {},[변수명]); -> 변수값이 바뀔때마다 실행을 
*/
  useEffect(() => {
    fetchData();
  }, []);

  console.log(joke);

  if (loading) {
    <Load />;
  }

  return (
    <>
      <h1>{joke}</h1>
      <button onClick={fetchData}>Random Joke</button>
    </>
  );
}

export default App;
