import React from 'react'
import Navbar from './components/navbar/Navbar'
import Profile from './components/home/Header'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Profile/>
      <About/>
      <Experience/>
      <Projects/>
    </div>
  )
}

export default App