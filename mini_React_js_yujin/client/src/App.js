import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Tours from "./components/Tours";

function App() {
  const URL =
    "https://apis.data.go.kr/6480000/gyeongnamcultural/gyeongnamculturallist?serviceKey=wIqdO7oStRf6L%2B0vgdXCMpUJ1HBt4qX4tfNfQnvieyAwfGxnUo9523lNS3Se6Vcm7dbpuGhNG5PtuoUA4hcv1Q%3D%3D&numOfRows=10&resultType=json";
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchData = async function () {
      const result = await axios.get(URL);
      setTours(result.data.gyeongnamculturallist.body.items.item);
      //console.log(result.data.gyeongnamculturallist.body.items.item);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Tours tours={tours} />
    </div>
  );
}

export default App;
