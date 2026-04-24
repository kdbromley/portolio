import { useParams, useNavigate } from "react-router-dom"
import { writing } from "../data/writing"
import "./css/WritingSamples.css"
import { createPortal } from "react-dom"

function WritingSamples() {
  //const { slug } = useParams()
  const navigate = useNavigate()
  const piece = writing[0] // For now, just show the first piece. In the future, we could add slugs to the writing pieces and useParams to find the right one.

  if (!piece) {
    return (
      <div className="writingsample__overlay" onClick={() => navigate(-1)}>
        <div className="writingsample__modal" onClick={(e) => e.stopPropagation()}>
          <p className="writingsample__error">Project not found.</p>
          <button 
            onClick={() => navigate(-1)}
            className="writingsample__error-goback"
            >Go back</button>
        </div>
      </div>
    )
  }

  return createPortal(
    <div className="writingsample__overlay" onClick={() => navigate(-1)}>
      <div className="writingsample__modal" onClick={(e) => e.stopPropagation()}>
        
        <button className="writingsample__close" onClick={() => navigate(-1)}>✕</button>

          <h2 className="writingsample__title">{piece.title}</h2>


        <p className="writingsample__text">{piece.content}</p>

      </div>
    </div>,
    document.body
  )
}

export default WritingSamples