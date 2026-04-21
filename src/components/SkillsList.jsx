import { skills } from "../data/skills"
import "./SkillsList.css"

function SkillsList() {
  return (
    <div className="skillslist">
      <h4 className="skillslist__header">Skills & Technologies</h4>
      
      <div className="skillslist__group">
        <span className="skillslist__label">Primary</span>
        <div className="skillslist__chips">
          {skills.primary.map((skill) => (
            <span key={skill} className="skillslist__chip skillslist__chip--primary">{skill}</span>
          ))}
        </div>
      </div>

      <div className="skillslist__group">
        <span className="skillslist__label">Additional</span>
        <div className="skillslist__chips">
          {skills.secondary.map((skill) => (
            <span key={skill} className="skillslist__chip">{skill}</span>
          ))}
        </div>
      </div>

      <div className="skillslist__group">
        <span className="skillslist__label">Tools</span>
        <div className="skillslist__chips">
          {skills.tools.map((skill) => (
            <span key={skill} className="skillslist__chip">{skill}</span>
          ))}
        </div>
      </div>

      <div className="skillslist__group">
        <span className="skillslist__label">Principles</span>
        <div className="skillslist__chips">
          {skills.designPrinciples.map((skill) => (
            <span key={skill} className="skillslist__chip">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillsList