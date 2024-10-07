import "./Anotherquestion.css"
// import { Link } from "react-router-dom"

function Anotherquestion() {
  return (
    <div>
      <div className="anotherquestionwrapper">
        <div className="anotherquestioncontainer">
            <div className="anotherquestionheader">
              <h1>Any other questions?</h1>
            </div>
            <div className="anotherquestiondetail">
            We’re here to help. You can contact us: Weekdays: 6am to 6pm PT, Weekends: 6am to 6pm PT.
            </div>
            <div className="contactmethod">

              <div className="call method">
                <div className="contactimg">
                  <img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-YGrRM9IVGXicon-lc-1.png?v=1724638892" alt="" />
                </div>
                <div className="methodname" style={{fontWeight:"600"}}>Call</div>
                <div className="number type" style={{textDecoration:"underline"}}>
                  012-345-6789
                </div>
              </div>

              <div className="email method">
                <div className="contactimg">
                  <img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-Lv4LCle25Yicon-lc-2.png" alt="" />
                </div>
                <div className="methodname" style={{fontWeight:"600"}}>Email</div>
                <div className="number type" style={{textDecoration:"underline"}}>
                Contact Us
                </div>
              </div>

              <div className="chat method">
                <div className="contactimg">
                  <img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-nXKveOYRkzicon-lc-3.png?v=1724639522" alt="" />
                </div>
                <div className="methodname" style={{fontWeight:"600"}}>Chat</div>
                <div className="number type" style={{textDecoration:"underline"}}>
                Chat Now
                </div>
              </div>

              <div className="message method">
                <div className="contactimg">
                  <img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-Lv4LCle25Yicon-lc-2.png" alt="" />
                </div>
                <div className="methodname" style={{fontWeight:"600"}}>Message</div>
                <div className="number" style={{textDecoration:"underline"}}>
                Support Now
                </div>
              </div>

            </div>
        </div>
      </div>
      <hr style={{color:"#cdcdcd"}}/>
    </div>
  )
}

export default Anotherquestion
