import React from "react";
import { useParams } from "react-router-dom";

function Content({ tours }) {
  let { num } = useParams();
  //route path의 parameter와 {} 이름 같아야함
  return (
    <div>
      <div className="content-container">
        <div className="content-text">
          <h1>도지정 문화재</h1>
          <hr></hr>
        </div>
        <div className="content-main">
          <img src={tours[num].fileurl1} alt={tours[num].MYONGCHING} />
          <div className="content-desc">
            <h2>
              {tours[num].MYONGCHING}
              <br />({tours[num].MYONGCHING_HANMUN})
            </h2>
            <div className="content-address">
              소재지 : {tours[num].ADDRESS1}
            </div>
            <div className="content-myonjuk">면적 : {tours[num].MYONJUK}</div>
          </div>
        </div>
        <div className="content-detail">{tours[num].CONTENT}</div>
      </div>
    </div>
  );
}

export default Content;
