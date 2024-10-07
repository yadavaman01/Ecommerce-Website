import "./Helpcenter.css"
import { GoArrowRight } from "react-icons/go";
function Helpcenter() {
  return (
    <div >
      <div className="helpcentersection">
      <div className="helpcenterwrapper">
        

        <div className="helpcentercontainer">
          <div className="helpheader">HELP CENTER</div>
          <div className="helpdetail">Let us know how we may help you?</div>
          <div className="helpsearch">
            <input type="text" name="" id="" placeholder="search for answers.."/>
            <div className="searchbtn">Search</div>
          </div>


          <div className="orderreturn-container">
            <div className="order">
                <div className="ordericon">
                    <img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-Te8cHLsQU8icon-hc-1.png" alt="" style={{width:"42px"}}/>
                </div>
                <div className="orderheading">
                    Order Tracking
                </div>
                <div className="orderstatus">
                    Log in to check the status of your order
                </div>
                <div className="trackbtn">
                    Track your order <GoArrowRight style={{marginLeft:"10px"}}/>
                </div>
            </div>


            <div className="order">
                <div className="ordericon">
                    <img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-Cbwk5YMW5Dicon-hc-2.png" alt="" style={{width:"42px"}}/>
                </div>
                <div className="orderheading">
                Return & Exchange
                </div>
                <div className="orderstatus">
                We make it easy to return and exchange styles.
                </div>
                <div className="trackbtn">
                    Start a return <GoArrowRight style={{marginLeft:"10px"}}/>
                </div>
            </div>


            {/* <div className="track">Track</div> */}
          </div>
        </div>

      </div>
      </div>
    </div>
  )
}

export default Helpcenter
