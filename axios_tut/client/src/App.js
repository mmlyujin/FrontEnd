import "./App.css";
import Users from "./components/Users";
import Loading from "./components/Loading";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const URL = "https://dummyjson.com/products";
  const fetchData = async function (err) {
    const result = await axios.get(URL);
    if (err) {
      throw err;
    } else {
      //읽어서 저장하기 전 까지 시간 차(흰 화면)를 Loading ...(true로딩중, false 데이터 전송 완료) 으로 띄우기
      setLoading(false); //데이터가 정상적으로 fetch
      setProducts(result.data.products); //데이터 저장
    }
    // console.log(result.data.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    //loading = true(로딩 중)
    //로딩중 이라면 Loading.js 띄운다.
    return (
      <div>
        <Loading></Loading>;
      </div>
    );
  }

  return <Users products={products} />;
}

export default App;
