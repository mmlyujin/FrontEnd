import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import GetUsers from "./components/pages/GetUsers";
import AddUsers from "./components/pages/AddUsers";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<GetUsers />} />
        <Route path="addUser" element={<AddUsers />} />
      </Routes>
    </Router>
  );
}

export default App;
