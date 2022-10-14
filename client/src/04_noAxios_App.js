/*
  내부데이터 : axios X
*/
import { useState } from "react"
import fetchData from "./data/data" //axios = result.data
import Person from "./components/Person"
import "./App.css";

function App() {
  const [person, setPerson] = useState(fetchData);
  //console.log(person);
  return (
    <div>
      <button onClick={ () => setPerson([]) }>All Clear</button>
      <Person person = {person} />
    </div>
  )
}

export default App