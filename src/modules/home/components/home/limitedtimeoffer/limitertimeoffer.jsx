import Cards from "../../cards/cards"
import "./limitedtimeoffer.css"
import React from 'react'

function Limitertimeoffer() {
  return (
    <div>
      <div className="limitedtimewrapper">
        <div className="limitedtimecontainer">
            <div className="limitedofferheading"><h1>LIMITED-TIME OFFERS</h1></div>
            <div className="limitedoffersub-heading">HURRY BEFORE THEY'RE GONE!</div>
            <div className="time-remaining button">aman</div>
            <div className="cards">
              <Cards/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Limitertimeoffer
