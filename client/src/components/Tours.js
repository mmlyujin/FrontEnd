import React from 'react'
import Tour from "./Tour"

function Tours({tours}) {
  return (
    <div>
        {
            tours.map((tour, key) => {
                return(
                    <Tour tour={tour} />
                );
            })
        }
    </div>
  )
}

export default Tours