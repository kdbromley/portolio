import { NavLink, Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar" id="navbar">
     <div className="navbar__brand">
       <h3>k.d. Bromley</h3>
     </div>

     <div className="navbar__links">
      <NavLink
        to="/#work"
        id="navbar__link-work"
        className={({ isActive }) =>
          isActive ? "active" : ""
        }
      > Work </NavLink>
      <NavLink
        to="/#wrangling"
        id="navbar__link-wrangling"
        className={({ isActive }) =>
          isActive ? "active" : ""
        }
      > Wrangling </NavLink>
      <NavLink
        to="/#writing"
        id="navbar__link-writing"
        className={({ isActive }) =>
          isActive ? "active" : ""
        }
      > Writing </NavLink>
      </div>
    </nav>
  )
}

export default Navbar