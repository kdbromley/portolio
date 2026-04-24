import SkillsList from "./SkillsList"
import ProjectCard from "./ProjectCard"
import { projects } from "../data/projects"
import "./css/WebDev.css"


function WebDev() {
  return (
    <section className="webdev" id="webdev">
      <h3 className="webdev__header">Web Development</h3>    
      <p className="webdev__intro">
        My primary work experience comes from earning a Certificate in Software Engineering from Thinkful, and my time as a Junior Web Developer at Plucky, from 2021-2023. That role focused on front-end development in Wordpress and development and database management in Claris Filemaker. 
        During my time working as a wrangler, I picked up a few freelance gigs, largely in Shopify. It's been a few years, but I gained a solid foundation at Plucky, and I learn quickly and am excited to get back into web development.
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