import axios from "axios";
import {useState, useEffect} from "react";
import "./App.css";
import Tours from "./components/Tours"

function App() {
  const URL = "https://course-api.com/react-tours-project";
  const [tours, setTours] = useState([]);

  useEffect(()=> {
    const fetchData = async function (err) {
        const result = await axios.get(URL);

        if(err) {
            throw err;
        }else{
            setTours(result.data);
        }
    }

    fetchData();
  }, []);

  console.log(tours)

  return (
    <div>
        <Tours tours={tours} />
    </div>
  )
}

export default App