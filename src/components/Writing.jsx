import { Link } from "react-router-dom"
import "./css/Writing.css"

function Writing() {
  return (
    <section className="writing" id="writing">
      <h3 className="writing__header">Outside the code</h3>

      <div className="writing__content">
        <div className="writing__text">
          <p className="writing__body">
            I write fiction — strange, gothic, somewhere between the American West and a fever dream. My writing is both a creative outlet and a skill-building asset in tandem with my technical work.
            I got a creative writing minor at CU Boulder, and it helped me develop a strong voice and style.
            My communication skills are one of my strongest assets, along with attention to detail, an adeptness with research, and comfort with critique and revision.
        
          </p>
          <p className="writing__body">
            I've been working on short stories seriously for a few years, and once I became a wrangler, I intentionally focused a significant amount of my (limited) free time on some writing projects I'd been neglecting.
            I've made a handful of submissions to literary magazines; nothing accepted yet, but I am also proud of my dedication. I have a few stories I'm excited to share here and I look forward to expanding this collection.
          </p>
        </div>

        <blockquote className="writing__excerpt">
          <p>
            I hit the devil going 45 last night. I shouldn't have been going that fast, not on 
            that road, not at night, not after those three beers I had at the party. I tried to 
            call my mom on my way, hoping maybe talking would make me feel better or at least 
            assure the fact I would make it home. She didn't answer, which was unusual considering 
            it was only 10pm.
          </p>
          <footer className="writing__excerpt-footer">
            <Link to={`/writing/samples`} className="writing__excerpt-router">read more →</Link>
          </footer>
        </blockquote>
      </div>
    </section>
  )
}

export default Writing