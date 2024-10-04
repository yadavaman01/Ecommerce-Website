import "./nav.css"
import { Link } from "react-router-dom"
function Nav() {
  return (
    <div className="navwrapper">
        <div className="homepage">
            <Link to="/">Home Page</Link>
        </div>
        <div className="contactpage">
            <Link to="/contact">Contact Page</Link>
        </div>
    </div>
  )
}

export default Nav
