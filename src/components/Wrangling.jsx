import { roles } from "../data/roles"
import wyoming from "../assets/images/wyoming-tall.jpeg"
import solo from "../assets/images/saguaro_solo.jpeg"
import river from "../assets/images/saguaro_water.jpg"
import beach from "../assets/images/beach-with-langdon.jpg"
import RoleCard from "./RoleCard"
import "./Wrangling.css"

function Wrangling() {
  return (
    <section className="wrangling" id="wrangling">
      <h3 className="wrangling__header">A few seasons offline</h3>
      <h4 className="wrangling__subheader">Wrangling and Trail Guiding</h4>

      <div className="wrangling__narrative">
        <p>I grew up on horseback. I started lessons at 8, spent the next 12 years jumping and competing, owned two horses, and practically lived at the barn on weekends — helping muck stalls, care for tack, and do whatever needed doing. Horses were just part of how I understood the world.</p>
        <p>I stepped away during college and then moved to Los Angeles to pursue web development. But a riding holiday through Catalonia in late 2022 made it immediately obvious what I'd been missing: time outside, physical work, animals, community — none of which LA was offering. I spent about a year researching and planning before landing a trail guide position in Palmdale, and then spent nearly two years working full seasons in California and Arizona.</p>
        <p>It was a deliberate choice and one I'm proud of. The work was real — preparing 20 to 45 horses before sunrise, leading rides for guests of every experience level, running multi-day camping trips, teaching horsemanship clinics, hauling horse trailers on mountain roads. It required the same things good development work requires: staying calm when things go sideways, communicating clearly with people who have very different needs, and taking responsibility for outcomes that affect other people. The hay throwing doesn't translate. A lot of the rest does.</p>
        <p>I'm back in web development now and glad to be here — but I carry that chapter with me, and I don't think my work is worse for it.</p>
      </div>
      <div className="wrangling__photos">
        <img src={solo} alt="" className="wrangling__photo" />
        <img src={wyoming} alt="" className="wrangling__photo" />
        <img src={river} alt="" className="wrangling__photo" />
        {/* <img src={beach} alt="" className="wrangling__photo" /> */}
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
        Managing a trail ride and managing a development project have more in common than they look. You're responsible for people with different needs, you're reading conditions in real time, and when something goes wrong you don't get to pause. Two seasons of that sharpened instincts I bring back to every technical problem I sit down with.
      </p>
    </section>
  )
}

export default Wrangling