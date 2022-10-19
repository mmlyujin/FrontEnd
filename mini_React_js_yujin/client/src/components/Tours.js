import React, { useState } from "react";
//import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import Content from "./Content";
import Tour from "./Tour";

function Tours({ tours }) {
  return (
    <div className="heritages-container">
      {/* map 바깥에 grid를 줘야함 !  */}
      {tours.map((tour, key) => {
        return <Tour tour={tour} />;
      })}
    </div>
  );
}

export default Tours;
