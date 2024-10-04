import "./schooltoppicks.css"
import Cards from "../cards/cards"
import React from 'react'

function Schooltoppicks() {
  return (
    <div>
      <div className="limitedtimewrapper">
        <div className="limitedtimecontainer">
            <div className="limitedofferheading"><h1>TOP PICKS FOR BACK TO SCHOOL</h1></div>
            {/* <div className="limitedoffersub-heading">HURRY BEFORE THEY'RE GONE!</div>
            <div className="time-remaining button">aman</div> */}
            <div className="cards">
              <Cards/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Schooltoppicks
