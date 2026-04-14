import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="hero">
      <h1>k.d. Bromley</h1>
      <h2>Web Developer</h2>
      <p className='bio'>I build things for the web and write about the strange corners of the American West. I spent a couple of years away from the tech industry chasing a lifelong dream of working on a ranch as a wrangler — now I'm back, looking to build my career.</p>
      <a className='cta' href='#webdev'>see my work → </a> <a className='cta'href='mailto:kd.bromley1@gmail.com'>get in touch → </a>
    </section>
  )
}

export default Hero