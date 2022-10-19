import React from "react";

function Content({ tours }) {
  return (
    <div>
      {tours.map((tour, key) => {
        return <div key={key}>{tour.CONTENT}</div>;
      })}
    </div>
  );
}

export default Content;
