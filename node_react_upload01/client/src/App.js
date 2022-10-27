import './App.css';
import {
  BrowserRouter, 
  Routes, 
  Route} from 'react-router-dom';
import Navbar from './layout/Navbar';
import Home from './components/Home';
import Register from './components/Register';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />

        <div className="section">
          <Routes>              {/*  화면 변화 */}
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </BrowserRouter>
    </main>
  );
}

export default App;
