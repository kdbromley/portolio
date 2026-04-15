import ProjectCard from "./ProjectCard"
import { projects } from "../data/projects"
import "./WebDev.css"

function WebDev() {
  return (
    <section className="webdev" id="work">
      <h3>Web Development</h3>    
      <div className="webdev__projects">
        <h4>Selected Projects</h4>
        <div className="webdev__projects-list">
        {projects
        .filter((project) => project.featured === true)
        .map((project) => (
          <ProjectCard
            key={project.id}
            project={project} />
        ))}
        </div>
      </div>
    </section>
  )
}

export default WebDev