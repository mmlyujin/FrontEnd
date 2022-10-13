import React from "react";
import { Link, Outlet } from "react-router-dom";
//중첩할 때 Outlet 사용함.

function Products() {
  return (
    <>
      <div>
        <input type="search" placeholder="Search Product"></input>
        <button>search</button>
      </div>
      <div className="nested-navbar">
        <Link to="/products">Featured Lists</Link>
        <Link to="news">New Lists</Link>
      </div>
      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
}

export default Products;
