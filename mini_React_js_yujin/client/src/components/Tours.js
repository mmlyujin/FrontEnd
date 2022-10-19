import React, { useRef, useState } from "react";
//import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import Content from "./Content";

function Tours({ tours }) {
  const [visible, setVisible] = useState(false);
  //const { shownContent, setShownContent } = useState([]); //toggle할 것

  return (
    <div className="heritages-container">
      {/* map 바깥에 grid를 줘야함 !  */}
      {tours.map((tour, key) => {
        return (
          <div key={key} className="heritage">
            <div className="image-wrap">
              <img src={tour.fileurl1} alt={tour.MYONGCHING}></img>
            </div>
            <div className="heritage-contents-wrap">
              <div className="heritage-name">
                <h3>
                  {tour.MYONGCHING}({tour.MYONGCHING_HANMUN})
                </h3>
              </div>
              <div className="heritage-address">
                <h4>{tour.ADDRESS1}</h4>
              </div>
              <div className="heritage-content">
                <button
                  onClick={() => {
                    setVisible(!visible);
                  }}
                >
                  {visible ? "숨기기" : "상세보기"}
                </button>
                <hr />
                {visible && tour.CONTENT}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Tours;
