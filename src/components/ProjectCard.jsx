import "./ProjectCard.css"

function ProjectCard({ project }) {
  return ( 
    <div className="projectcard">
      <h4 className="projectcard__title">{project.title}</h4>
      <h5 className="projectcard__employer">{project.employer}</h5>
      {project.link 
        ? <a className="projectcard__link" href={project.link}>{project.linkLabel}</a>
        : <span className="projectcard__link">{project.linkLabel}</span>
      }
    </div>

  )
}

export default ProjectCard