import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import image01 from "../images/heritage01.jpg";
function Navbar() {
  return (
    <div>
      <div className="navbar-container">
        <div className="navLeft-wrap">
          <Link to="/">
            <img
              src={logo}
              alt={logo}
              style={{ width: "230px", height: "65px", margin: "10px" }}
            ></img>
          </Link>
        </div>
        <div className="navRight-wrap">
          <ul>
            <li>경남명소</li>
            <li>테마여행</li>
            <li>관광정보</li>
          </ul>
        </div>
      </div>
      <div className="nav-image">
        <img src={image01} alt="heritageImage"></img>
      </div>
    </div>
  );
}

export default Navbar;
