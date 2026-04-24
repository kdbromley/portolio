import "./css/Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__left">
          <span className="footer__name">k.d. Bromley</span>
          <span className="footer__built">built in React</span>
        </div>
        <div className="footer__links">
          <a href="mailto:kd.bromley1@gmail.com" className="footer__link">email</a>
          <a href="https://linkedin.com/in/kd-bromley1" target="_blank" rel="noreferrer" className="footer__link">linkedin</a>
          <a href="https://github.com/kdbromley" target="_blank" rel="noreferrer" className="footer__link">github</a>
        </div>
      </div>
      <p className="footer__copy">© {new Date().getFullYear()} k.d. Bromley</p>
    </footer>
  )
}

export default Footer