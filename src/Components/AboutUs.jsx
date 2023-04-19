import React, { useState } from 'react'

export default function AboutUs() {
  const [style, setstyle] = useState({
    color: "black",
    backgroundColor: "white",
  })

  const handlestyle = () => {
    if (style.color === "white") {
      setstyle({ color: "black", backgroundColor: "white" })
    }
    else {
      setstyle({ color: "white", backgroundColor: "black" })
    }
  }
  return (
    <div>
      <div className="card mb-3" style={style}>
        {/* <img src="..." className="card-img-top" alt="..."/> */}
        <div className="card-body">
          <h5 className="card-title">About Us</h5>
          <p className="card-text">Some quick example text to build on the card title and make
            up the bulk of the card's content.Some quick example text to build on the card title and make
            up the bulk of the card's content.</p>
          <p className="Card-text"><small className="text-muted">Last updated 2 mins ago</small></p>
          <button className="btn btn-primary" onClick={handlestyle}>Enable Dark Mode</button>
        </div>
      </div>
    </div>
  )
}
