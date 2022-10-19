import React, { useState } from "react";

function Tour({ tour }) {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <div className="heritage">
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
              className="content-toggle-btn"
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
    </div>
  );
}

export default Tour;
