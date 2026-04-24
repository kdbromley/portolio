import { roles } from "../data/roles"
import wyoming from "../assets/images/wyoming-tall.jpeg"
import solo from "../assets/images/saguaro_solo.jpeg"
import river from "../assets/images/saguaro_water.jpg"
import RoleCard from "./RoleCard"
import "./Wrangling.css"

function Wrangling() {
  return (
    <section className="wrangling" id="wrangling">
      <h3 className="wrangling__header">A few seasons offline</h3>
      <h4 className="wrangling__subheader">Wrangling and Trail Guiding</h4>

      <div className="wrangling__narrative">
        <p>I grew up on horseback. I started lessons at 8, spent the next 12 years jumping and competing, owned two horses, and practically lived at the barn on weekends and summer breaks — mucking stalls, cleaning tack, working horses.</p>
        <p>I stepped away during college. After graduation, I moved to Los Angeles and began my work in web development. But a riding holiday through Catalonia in late 2022 made it immediately obvious what I'd been missing: time outside, physical work, animals, community. I lacked balance, so after a year of consideration (and dreaming), when an opportunity to become a trail guide arose, I took it. I spent about two years working as a wrangler/trail guide in California, Wyoming, and Arizona.</p>
        <p>It was not an easy decision to step away from my career, but it's what I needed at the time, and the experience was invaluable. The work was challenging, but, more importantly, it gave me the change in perspective I needed to know what wasn't working for me and reorient my life.</p>
        <p>Now, I'm living a more balanced life in Arizona, with the horses as a dedicated hobby, and I'm returning to web development, glad to be here and looking to build my career. The saddling and hay throwing may not directly translate, but staying calm when things go sideways, communicating clearly with people who have very different needs, and taking responsibility for outcomes that affect other people are skills that I bring with me from my time as a wrangler. That, plus a few good stories.</p>
      </div>
      <div className="wrangling__photos">
        <img src={solo} alt="Solo shot of me riding a horse at Saguaro Lake Ranch Stable" className="wrangling__photo" />
        <img src={wyoming} alt="Myself and two other wranglers on a trail in Wyoming" className="wrangling__photo" />
        <img src={river} alt="Crossing the Salt River with another wrangler" className="wrangling__photo" />
      </div>
      <div className="wrangling__roles">
        <h4 className="wrangling__roles-header">Roles</h4>
        <div className="wrangling__roles-list">
          {roles.map((role) => (
            <RoleCard key={role.id} role={role} />
          ))}
        </div>
      </div>

      <p className="wrangling__transferable">
        Managing a trail ride and managing a development project have more in common than they look. You're responsible for people with different needs, you're endlessly adapting, and solving problems in real time. Two seasons of that sharpened instincts I bring back to every technical problem I sit down with.
      </p>
    </section>
  )
}

export default Wrangling