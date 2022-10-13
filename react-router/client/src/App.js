/*
 1. npm i react-router-dom@6
 2. 페이지 개수  + Navbar 1장  : 파일 생성
 3. App.js import 
      - BrowserRouter,  Routes, Route 모두 사용
    import {BrowserRouter,Routes,Route} from "react-router-dom";      
      -<Route path="경로" element={<파일이름 />}
 */
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import {BrowserRouter as Router,Routes,Route} from "react-router-dom"; as뒤에 줄일말 붙여서 사용가능
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import NotFound from "./components/pages/NotFound";
import Orders from "./components/pages/Orders";
import Products from "./components/pages/Products";
import Featured from "./components/pages/Featured";
import News from "./components/pages/News";
import Admin from "./components/pages/Admin";
import Users from "./components/pages/Users";
import UserDetail from "./components/pages/UserDetail";

function App() {
  return (
    <BrowserRouter>
      {/* 고정되어 있는 Nav 메뉴 */}
      <Navbar />

      {/* 페이지 전환이 일어나는 routes */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="orders" element={<Orders />} />
          {/* <Route> 중첩메뉴(nested)는 Route로 감싸줘야 함 </Route> */}
          <Route path="products" element={<Products />}>
            <Route index element={<Featured />}></Route>
            <Route path="news" element={<News />} />
          </Route>
          <Route path="admin" element={<Admin />}>
            <Route index element={<Users />} />
            <Route path="userDetail/:id" element={<UserDetail />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
