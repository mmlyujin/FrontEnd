import Tour from "./Tour";

function Tours({ tours }) {
  return (
    <div>
      <div className="main-text">
        <h1>경상남도 자주 찾는 문화재</h1>
      </div>
      <hr></hr>
      <div className="heritages-container">
        {/* map 바깥에 grid를 줘야함 !  */}
        {tours.map((tour, index) => {
          return <Tour tour={tour} index={index} />; //배열번호를 Tour에 넘김.
        })}
      </div>
    </div>
  );
}

export default Tours;
