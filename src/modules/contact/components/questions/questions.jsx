import AccordionUsage from "./accordion/accordion"
import "./questions.css"

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
