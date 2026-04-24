import './Hero.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

function Hero() {
  return (
    <section className="hero" id="hero">
      <h1>k.d. Bromley</h1>
      <h2>Web Developer</h2>
      <p className='hero__bio'>I build things for the web and write about the strange corners of the American West. I spent a couple of years away from the tech industry chasing a lifelong dream of working on a ranch as a wrangler. Now I'm back, looking for a new role in web development to build my career.</p>
      <p className='hero__bio'>I hope my portfolio provides an authentic glimpse into my journey, my professional portfolio, my skillset, and the passion I can bring to my work.</p>
        <a className='hero__cta' href='#webdev'>see my work → </a> <a className='hero__cta'href='mailto:kd.bromley1@gmail.com'>get in touch → </a>
        <a href="https://linkedin.com/in/kd-bromley1" target="_blank" rel="noreferrer" className="hero__social" aria-label="Link to LinkedIn profile">
          <FaLinkedin className="hero__icon" aria-hidden={false} focusable="false" />
        </a>
        <a href="https://github.com/kdbromley" target="_blank" rel="noreferrer" className="hero__social" aria-label="Link to GitHub profile">
          <FaGithub className="hero__icon" aria-hidden={false} focusable="false" />
        </a>
    </section>
  )
}

export default Hero