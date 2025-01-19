import React, { useEffect, useRef} from 'react'
import Navbar from './components/navbar/Navbar'
import Profile from './components/home/Header'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {

  useEffect(() => {
    const handleRefresh = () => {
      // Force scroll to top first
      window.scrollTo(0, 0);
      // Then set the hash to profile
      window.location.hash = 'profile';
    };

    // Run on mount and refresh
    handleRefresh();

    // Also handle the beforeunload event
    window.addEventListener('beforeunload', () => {
      window.location.hash = 'profile';
    });

    return () => {
      window.removeEventListener('beforeunload', () => {
        window.location.hash = 'profile';
      });
    };
  }, []);

  return (
    <div>
      <Navbar/>
      <Profile/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App