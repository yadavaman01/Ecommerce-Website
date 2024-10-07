import AccordionUsage from "./accordion/Accordion"
import "./Questions.css"

function Questions() {
  return (
    <div>
      <div className="questionwrapper">
        <div className="questioncontainer">
            <div className="browseheader">
                <h1>Popular Searched Questions</h1>
            </div>
            <div className="question">
                <AccordionUsage/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Questions
