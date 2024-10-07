import "./Helpdeskcard.css"
import { Link } from "react-router-dom"

function Helpdeskcard() {
  return (
    <div className="helpdeskcardcontainer">
      <div className="helpdeskcard">
        <div className="helpimg">
            <img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-TSKqG0pC2uic-hp-1.png?v=1724407135" alt="" />
        </div>
        <div className="helpdeskcardheader">
            <h2>Size Guide</h2>
        </div>
        <div className="helpdeskcarddetail">
            <p>Ensure your customers get the right fit</p>
        </div>
        <div className="viewmore">
            <Link to="#" className="viewmore">View more</Link>
        </div>

      </div>

      <div className="helpdeskcard">
        <div className="helpimg">
            <img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-ry1vhOiRg8ic-hp-2.png?v=1724407185" alt="" />
        </div>
        <div className="helpdeskcardheader">
            <h2>SLoyalty Program</h2>
        </div>
        <div className="helpdeskcarddetail">
            <p>Offer exclusive rewards</p>
        </div>
        <div className="viewmore">
            <Link to="#" className="viewmore">View more</Link>
        </div>

      </div>

      <div className="helpdeskcard">
        <div className="helpimg">
            <img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-1hx43OngFRic-hp-3.png" alt="" />
        </div>
        <div className="helpdeskcardheader">
            <h2>Order & Shipping</h2>
        </div>
        <div className="helpdeskcarddetail">
            <p>Looking for your order status</p>
        </div>
        <div className="viewmore">
            <Link to="#" className="viewmore">View more</Link>
        </div>

      </div>

      <div className="helpdeskcard">
        <div className="helpimg">
            <img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-JYbi3Qpv20ic-hp-4.png?v=1724634293" alt="" />
        </div>
        <div className="helpdeskcardheader">
            <h2>Payment & Gift cards</h2>
        </div>
        <div className="helpdeskcarddetail">
            <p>Wonder of what payment we accept?</p>
        </div>
        <div className="viewmore">
            <Link to="#" className="viewmore">View more</Link>
        </div>

      </div>

      <div className="helpdeskcard">
        <div className="helpimg">
            <img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-NcXYj3LOv3ic-hp-5.png?v=1724634338" alt="" />
        </div>
        <div className="helpdeskcardheader">
            <h2>Discount Codes</h2>
        </div>
        <div className="helpdeskcarddetail">
            <p>Have a discount you like to use?</p>
        </div>
        <div className="viewmore">
            <Link to="#" className="viewmore">View more</Link>
        </div>

      </div>

      <div className="helpdeskcard">
        <div className="helpimg">
            <img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-zO0BfEcTlSic-hp-6.png?v=1724634383" alt="" />
        </div>
        <div className="helpdeskcardheader">
            <h2>Store Location</h2>
        </div>
        <div className="helpdeskcarddetail">
            <p>Want to find a store near you?</p>
        </div>
        <div className="viewmore">
            <Link to="#" className="viewmore">View more</Link>
        </div>

      </div>
    </div>
  )
}

export default Helpdeskcard
