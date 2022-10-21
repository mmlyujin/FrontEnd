import { Link } from "react-router-dom";
//1. 이미지 클릭 시 해당하는 배열의 상세페이지로 이동 구현
//2. 상세페이지에서는 해당하는 배열의 내용만 맵에서 가져오기
//3. 헤더 만들기 (누르면 홈으로 이동하게끔)

function Tour({ tour, index }) {
  return (
    <div>
      <div className="heritage">
        <div className="heritage-image">
          <Link to={"Content/" + index}>
            {/*링크에 key(parameter) 넣어서 지정해줌 */}
            <img src={tour.fileurl1} alt={tour.MYONGCHING} />
          </Link>
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
        </div>
      </div>
    </div>
  );
}

export default Tour;
