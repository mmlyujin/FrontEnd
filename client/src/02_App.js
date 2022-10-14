import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import "./App.css";

function App() {
  const URL = "https://jsonplaceholder.typicode.com/albums"; //url 확인

  const [albums, setAlbums] = useState([]);
  //boolean true, false : true일때는 로딩중 false
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    
    const fetchData = async function () {
      const result = await axios.get(URL);
      setAlbums(result.data.slice(0, 20));
      setIsLoading(false);
    }

    setIsLoading(true);
    fetchData();
  }, []);

  if( isLoading ) {
    return(
      <Loading />
    )
  }

  return (
    <div>
        {
          albums.map((album, key) => {
            return(
              <div key={key}>
                <h2>{album.id}</h2>
                <h1>{album.title}</h1>
              </div>
            );
          })
        }
    </div>
  )
}

export default App