import React, { useState } from 'react'

function Tour({tour}) {
  const [readMore, setReadMore] = useState(false);
  return (
    <div>
        <section>
            <img src={tour.image} alt={tour.name} />
            <div>
                <h4>{tour.name}</h4>
                <h4>{tour.price}</h4>
            </div>
            <p>
                {tour.info.substring(0,100) + '...'}
                <button>펼쳐보기</button>
            </p>
        </section>
    </div>
  )
}

export default Tour