import Helpdeskcard from "../helpdeskcards/Helpdeskcard"
import "./Helpdesk.css"

function Helpdesk() {
  return (
    <div>
      <div className="helpdeskwrapper">
        <div className="helpdeskcontainer">
            <div className="helpdeskheader"><h1>Browse our help desk</h1></div>
            <div className="helpdeskcards">
                <Helpdeskcard/>
                {/* <Helpdeskcard/>
                <Helpdeskcard/>
                <Helpdeskcard/>
                <Helpdeskcard/>
                <Helpdeskcard/> */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Helpdesk
