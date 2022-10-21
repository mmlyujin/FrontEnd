import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Tours from "./components/Tours";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";

function App() {
  const URL =
    "https://apis.data.go.kr/6480000/gyeongnamcultural/gyeongnamculturallist?serviceKey=wIqdO7oStRf6L%2B0vgdXCMpUJ1HBt4qX4tfNfQnvieyAwfGxnUo9523lNS3Se6Vcm7dbpuGhNG5PtuoUA4hcv1Q%3D%3D&numOfRows=10&resultType=json";
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async function () {
      const result = await axios.get(URL);
      setTours(result.data.gyeongnamculturallist.body.items.item);
      setIsLoading(false);
    };

    setIsLoading(true);
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      {/* 고정되는 js파일 */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Tours tours={tours} />} />
        <Route path="Content/:num" element={<Content tours={tours} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
