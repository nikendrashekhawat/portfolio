import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Profile from './components/home/Header'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  const [theme, setTheme] = useState(() => {
    // Get theme from localStorage or default to 'dark'
    return localStorage.getItem('theme') || 'dark';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, []);


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
      <Navbar theme={theme} toggleTheme={toggleTheme}/>
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