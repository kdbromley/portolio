import { Link } from "react-router-dom"
import "./css/ProjectCard.css"

function ProjectCard({ project }) {
  return ( 
    <div className="projectcard">
      <Link to={`/work/${project.slug}`} className="projectcard__router">
        <h4 className="projectcard__title">{project.title}</h4>
        <h5 className="projectcard__employer">{project.employer}</h5>
      </Link>
      <div className="projectcard__stack">
        {project.stack.map((tech) => (
          <span key={tech} className="projectcard__chip">{tech}</span>
        ))}
      </div>
      {project.link 
        ? <a className="projectcard__link" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel}</a>
        : <span className="projectcard__link--nda">{project.linkLabel}</span>
      }
    </div>
  )
}

export default ProjectCard