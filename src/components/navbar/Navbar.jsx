import React, { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css';
import logo from '../../assets/logo_dark.png';

const Navbar = () => {
  const [activeMenu, setActiveItem] = useState('Home');

  const menuItems = [
    { name: 'Home', href: '#profile' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    // Options for the observer
    const options = {
      threshold: 0.3, // Trigger when 30% of the section is visible
      rootMargin: '-80px 0px 0px 0px' // Offset for navbar height
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Remove the # from the id to match with our menu items
          const sectionName = entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1);
          setActiveItem(sectionName);
        }
      });
    }, options);

    // Observe all sections
    menuItems.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    });

    // Cleanup observer on component unmount
    return () => {
      menuItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) observer.unobserve(section);
      });
    };
  }, []); // Empty dependency array since we only want to set up the observer once

  return (
    <div id="nav-bar" className='nav-bar'>
      <img src={logo} alt="" />
      <ul className="nav-menu">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={activeMenu === item.name ? 'active' : ''}
          >
            <AnchorLink 
              href={item.href} 
              offset='50' 
              className="anchor-link"
              onClick={() => setActiveItem(item.name)}
            >
              {item.name}
            </AnchorLink>
          </li>
        ))}
      </ul>
      <div className="nav-connect">Connect with me</div>
    </div>
  );
};

export default Navbar;