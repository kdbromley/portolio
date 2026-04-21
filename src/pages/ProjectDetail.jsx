import { useParams, useNavigate } from "react-router-dom"
import { projects } from "../data/projects"
import "./ProjectDetail.css"

function ProjectDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="projectdetail__overlay" onClick={() => navigate(-1)}>
        <div className="projectdetail__modal" onClick={(e) => e.stopPropagation()}>
          <p className="projectdetail__error">Project not found.</p>
          <button 
            onClick={() => navigate(-1)}
            className="projectdetail__error-goback"
            >Go back</button>
        </div>
      </div>
    )
  }

  return (
    <div className="projectdetail__overlay" onClick={() => navigate(-1)}>
      <div className="projectdetail__modal" onClick={(e) => e.stopPropagation()}>
        
        <button className="projectdetail__close" onClick={() => navigate(-1)}>✕</button>

        <div className="projectdetail__header">
          <h2 className="projectdetail__title">{project.title}</h2>
          <p className="projectdetail__meta">{project.role} · {project.employer} · {project.years}</p>
        </div>

        <div className="projectdetail__stack">
          {project.stack.map((tech) => (
            <span key={tech} className="projectdetail__chip">{tech}</span>
          ))}
        </div>

        <p className="projectdetail__description">{project.description}</p>

        <div className="projectdetail__footer">
          {project.link
            ? <a href={project.link} target="_blank" rel="noreferrer" className="projectdetail__link">
                visit {project.linkLabel} →
              </a>
            : <span className="projectdetail__nda">{project.linkLabel}</span>
          }
        </div>

      </div>
    </div>
  )
}

export default ProjectDetail