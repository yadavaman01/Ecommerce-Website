import React from 'react'
import "./hometop.css"
import discount from "../../../../assets/discount.png"

function Hometop() {
  return (
    <div>
      <div className="top-wrapper">
          <div className="topupperwrapper">
            <div className="topcontainer">
              <div className="subheading"><h4>FREE SHIPPING ON ALL ORDER</h4></div>
              <div className="heading"><h1>SCHOOL DEALS INSIDE!</h1></div>
              <div className="detail">
                <p>Discover unbeatable discounts on all essentials-school supplies, electronica, clothing, and more.</p>
              </div>
              <div className="explore button"><h3>EXPLORE DEALS</h3></div>
            </div>
          </div>
          <div className="lowerwrapper">
            <div className="lowercontainer">
              <div className="rotate">

                <div className="banner banner1">
                  <img src={discount} alt="" />
                  <h3>HUGE BACK-TO-SCHOOL DISCOUNTS! </h3>
                </div>
                {/* <div> /</div> */}
                <div className="banner banner2">
                  <img src={discount} alt="" />
                  <h3>EXCLUSIVE OFFERS THIS WEEK!</h3>
                </div>
                {/* <div> /</div> */}
                <div className="banner banner3">
                  <img src={discount} alt="" />
                  <h3>GOLDEN HOUR DEALS: SAVE BIG!</h3>
                </div>
                {/* <div> /</div> */}
              </div>
            </div>
            
          </div>
        
      </div>
      
    </div>
  )
}

export default Hometop
