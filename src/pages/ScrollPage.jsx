import { Outlet } from 'react-router-dom'
import Hero from '../components/Hero'
import WebDev from '../components/WebDev'
import Wrangling from '../components/Wrangling'
import Writing from '../components/Writing'

function ScrollPage() {
  return (
    <div>
      <Hero />
      <WebDev />
      <Wrangling />
      <Writing />
      <Outlet />
    </div>
  )
}

export default ScrollPage