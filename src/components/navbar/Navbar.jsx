import React, { useState, useEffect, useCallback } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css';
import logo from '../../assets/logo_dark.png';

const Navbar = () => {
  const [activeMenu, setActiveItem] = useState('Home');
  const [isScrolling, setIsScrolling] = useState(false);

  // Scroll settings
  const scrollDuration = 1000; // ms
  const intersectionThreshold = 0.4; // 40% visibility required
  const navbarHeight = 80; // px
  const scrollOffset = 50; // px

  // Debounce function for scroll events
  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  const menuItems = [
    { name: 'Home', href: '#profile' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleIntersection = useCallback(
    debounce((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1);
          setActiveItem(sectionName);
          setIsScrolling(true);
          setTimeout(() => setIsScrolling(false), 300);
        }
      });
    }, 100),
    []
  );

  useEffect(() => {
    const options = {
      threshold: intersectionThreshold,
      rootMargin: `-${navbarHeight}px 0px 0px 0px`
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    menuItems.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    });

    // Cleanup
    return () => {
      menuItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) observer.unobserve(section);
      });
    };
  }, [handleIntersection]);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const progress = (scrollPosition / (documentHeight - windowHeight)) * 100;
      
      const progressBar = document.querySelector('.scroll-progress');
      if (progressBar) {
        progressBar.style.width = `${progress}%`;
      }
    }, 10);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="scroll-progress-container">
        <div className="scroll-progress"></div>
      </div>
      <div id="nav-bar" className={`nav-bar ${isScrolling ? 'is-scrolling' : ''}`}>
        <img src={logo} alt="" />
        <ul className="nav-menu">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={`
                nav-item 
                ${activeMenu === item.name ? 'active' : ''}
                ${isScrolling ? 'scrolling' : ''}
              `}
            >
              <AnchorLink 
                href={item.href} 
                offset={scrollOffset} 
                className="anchor-link"
                onClick={() => {
                  setActiveItem(item.name);
                  setIsScrolling(true);
                  setTimeout(() => setIsScrolling(false), scrollDuration);
                }}
                duration={scrollDuration}
              >
                {item.name}
              </AnchorLink>
            </li>
          ))}
        </ul>
        <div className="nav-connect">Connect with me</div>
      </div>
    </>
  );
};

export default Navbar;