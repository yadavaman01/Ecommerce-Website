import { FaCheck } from "react-icons/fa6";
import "./Lastsection.css"
function Lastsection() {
  return (
    <div style={{overflow:"visible"}}>
      <div className="lastsectionwrapper" style={{overflow:"visible"}}>
        <div className="lastsectioncontainer">
            <div className="lastsectionupper">
                <div className="lastsectionleft">
                    <h1>DON'T MISS OUT ON <br /> BACK-TO-SCHOOL DEALS</h1>
                    <p>Don't miss out on amazing back-to-school offers.</p>
                    <div className="leftdetails">
                        <div className="topdealsubheading">
                            <FaCheck className="tick"/>
                            Exclusive discounts
                        </div>
                        <div className="topdealsubheading">
                            <FaCheck className="tick"/>
                            Early access to sales
                        </div>
                        <div className="topdealsubheading">
                            <FaCheck className="tick"/>
                            Free gifts
                        </div>
                        <div className="topdealsubheading">
                            <FaCheck className="tick"/>
                            Entry into a contest or giveaway
                        </div>

                    </div>
                </div>

                <div className="lastsectionright">
                    
                    <div className="form">

                        <div className="dottedimg">
                            <img src="https://cdn.shopify.com/s/files/1/0623/8303/0317/files/ecom-no-replace-DG3DhorT0gradial_b37c.png?v=1726196329" alt="" />
                        </div>

                        <div className="formheading">JOIN OUR BACK-TO-SCHOOL CLUB!</div>
                        <div className="name">
                            <div className="firstname">
                                <input type="text" placeholder="First name" className="input"/>
                            </div>
                            <div className="lastname">
                                <input type="text" name="" id="" className="input" placeholder="Last name"/>
                            </div>
                        </div>
                    
                        <div className="email">
                            <input type="email" name="" id="" className="input" placeholder="Email"/>
                        </div>
                        <div className="message">
                            <textarea id="" name="" rows="8" cols="60" className="input" placeholder="Your Name"></textarea>
                        </div>
                        <div className="explore button">Explore</div>
                    </div>
                </div>
            </div>


            <div className="lastsectionlower">
                <div className="expressdelivery">
                    <div className="deliveryimg">
                        <img src="https://cdn.shopify.com/s/files/1/0623/8303/0317/files/ecom-no-replace-WAgSC8iJQudelivery-truck_2_1.png" alt="" />
                    </div>
                    <div className="deliveryheading">
                        <h2>EXPRESS DELIVERY</h2>
                    </div>
                    <div className="deliverydetails">
                        <p>
                        Need it fast? Choose express delivery at checkout and receive your order in just 1-2 business days!
                        </p>
                    </div>
                </div>

                <div className="expressdelivery">
                    <div className="deliveryimg">
                        <img src="https://cdn.shopify.com/s/files/1/0623/8303/0317/files/ecom-no-replace-WAgSC8iJQudelivery-truck_2_1.png" alt="" />
                    </div>
                    <div className="deliveryheading">
                        <h2>EXPRESS DELIVERY</h2>
                    </div>
                    <div className="deliverydetails">
                        <p>
                        Need it fast? Choose express delivery at checkout and receive your order in just 1-2 business days!
                        </p>
                    </div>
                </div>

                <div className="expressdelivery">
                    <div className="deliveryimg">
                        <img src="https://cdn.shopify.com/s/files/1/0623/8303/0317/files/ecom-no-replace-WAgSC8iJQudelivery-truck_2_1.png" alt="" />
                    </div>
                    <div className="deliveryheading">
                        <h2>EXPRESS DELIVERY</h2>
                    </div>
                    <div className="deliverydetails">
                        <p>
                        Need it fast? Choose express delivery at checkout and receive your order in just 1-2 business days!
                        </p>
                    </div>
                </div>

                {/* <div className="haslefree">

                </div>
                <div className="customer">

                </div> */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Lastsection
