import "./topdeal.css"
import React from 'react'
import { FaCheck } from "react-icons/fa6";


function Topdeal() {
  return (
    <div className="topdealwrapper">
      <div className="topdealcontainer">
        <div className="topdealimg">
            <img src="https://cdn.shopify.com/s/files/1/0623/8303/0317/files/ecom-no-replace-WCBXATHOnIGroup_1000001779.png?v=1725526111" alt="" />
        </div>
        <div className="topdealdetail">
            <div className="topdealheading"><h1>TOP DEALS ON <br /> MUST-HAVE ITEMS</h1></div>
            <div className="topdealsubheading">
                <FaCheck className="tick"/>
                <span>Laptops & Tablets:</span> Save up to 30%
            </div>
            <div className="topdealsubheading">
                <FaCheck className="tick"/>
                <span>Stationery:</span> Buy 1 Get 1 Free on select items
            </div>
            <div className="topdealsubheading">
                <FaCheck className="tick"/>
                <span>Backpacks:</span> Up to 40% off on top brands
            </div>
            <div className="topdealsubheading">
                <FaCheck className="tick"/>
                <span>Clothing:</span> 20% off on new arrivals
            </div>
            <div className="button grabbutton">GRAB THE DEAL</div>
        </div>
      </div>
    </div>
  )
}

export default Topdeal
