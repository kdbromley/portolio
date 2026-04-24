import "./css/Navbar.css"

function Navbar() {
  return (
    <nav className="navbar" id="navbar">
     <div className="navbar__brand">
       <h3>k.d. Bromley</h3>
     </div>

     <div className="navbar__links">
      <a
        href="#webdev"
        id="navbar__link-webdev"
      > Work </a>
      <a
        href="#wrangling"
        id="navbar__link-wrangling"
        > Wrangling </a>
      <a
        href="#writing"
        id="navbar__link-writing"
        > Writing </a>
      </div>
    </nav>
  )
}

export default Navbar