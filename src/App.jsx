import React from 'react'
import Navbar from './components/navbar/Navbar'
import Profile from './components/home/Header'
import About from './components/about/About'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Profile/>
      <About/>
    </div>
  )
}

export default App