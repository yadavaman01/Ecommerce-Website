import Anotherquestion from "./components/anotherquestion/Anotherquestion"
import Footer from "./components/footer/Footer"
import Helpcenter from "./components/helpcenter/Helpcenter"
import Helpdesk from "./components/helpdesk/Helpdesk"
import Questions from "./components/questions/Questions"
import "./Contact.css"

function Contact() {
  return (
    <div>
      <Helpcenter/>
      <Helpdesk/>
      <Questions/>
      <Anotherquestion/>
      <Footer/>
    </div>
  )
}

export default Contact
