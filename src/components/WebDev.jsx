import SkillsList from "./SkillsList"
import ProjectCard from "./ProjectCard"
import { projects } from "../data/projects"
import "./WebDev.css"


function WebDev() {
  return (
    <section className="webdev" id="work">
      <h3 className="webdev__header">Web Development</h3>    
      <p className="webdev__intro">
        My primary work experience comes from my time as a Junior Web Developer at Plucky, from 2021-2023, primarily front-end development in Wordpress and development and database management in Claris Filemaker. 
        During my time working as a wrangler, I picked up a few freelance gigs, largely in Shopify. 
      </p>
      <div className="webdev__projects">
        <h4 className="webdev__projects-header">Selected Projects</h4>
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
      <div className="webdev__skills">
        <SkillsList />
      </div>
    </section>
  )
}

export default WebDev