import Axios from "axios"
import Albums from "./components/Albums"
import "./App.css"
import { useEffect, useState } from "react";
import Loading from "./components/Loading"

function App() {

  const URL = "https://jsonplaceholder.typicode.com/albums";
  const [isLoading, setIsLoading] = useState(false);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchData = async function ()  {
      const result = await Axios.get(URL);
      setAlbums(result.data.slice(0, 20));
      setIsLoading(false);
    }

    setIsLoading(true);
    fetchData();
  }, []);

  if( isLoading ) {
    return(
      <Loading />
    );
  }

  return (
    <div>
      <Albums albums={albums} /> 
    </div>
  )
}

export default App