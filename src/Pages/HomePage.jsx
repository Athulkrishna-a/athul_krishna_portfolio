import React from 'react'
import About from '../components/routecomponenets/About'
import Experience from '../components/routecomponenets/Experience'
import Projects from '../components/routecomponenets/Projects'
import Skills from '../components/routecomponenets/Skills'
import ContactMe from '../components/routecomponenets/ContactMe'
import Education from '../components/routecomponenets/Education'
import ResumeDownload from '../components/routecomponenets/ResumeDownload'

const HomePage = () => {
  return (
    <>
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <ResumeDownload/>
      <ContactMe />
    </>
  )
}

export default HomePage
