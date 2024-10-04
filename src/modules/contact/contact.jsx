import Anotherquestion from "./components/anotherquestion/anotherquestion"
import Footer from "./components/footer/footer"
import Helpcenter from "./components/helpcenter"
import Helpdesk from "./components/helpdesk/helpdesk"
import Questions from "./components/questions/questions"
import "./contact.css"

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
