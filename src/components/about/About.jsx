import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faAngleLeft, faAngleRight, faCloud } from '@fortawesome/free-solid-svg-icons'
import { faDocker, faPython } from '@fortawesome/free-brands-svg-icons'
import Chip from '@mui/material/Chip'
import './About.css'
import { main_tools, python_libraries, devops_tools, cloudtools, certifications } from './skills_data.js'


const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error) => {
      console.error("Error caught by ErrorBoundary:", error);
      setHasError(true);
    };

    window.addEventListener("error", errorHandler);
    return () => window.removeEventListener("error", errorHandler);
  }, []);

  if (hasError) {
    return <div>Something went wrong.</div>;
  }

  return children;
};

const About = () => {
  const [visibleCerts, setVisibleCerts] = useState(certifications.slice(0, 3));
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const updateVisibleCerts = () => {
      const newCerts = certifications.slice(index, index + 3);
      if (newCerts.length < 3) {
        newCerts.push(...certifications.slice(0, 3 - newCerts.length));
      }
      setVisibleCerts(newCerts);
    };

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % certifications.length);
    }, 5000);

    updateVisibleCerts();

    return () => clearInterval(interval);
  }, [index]);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + certifications.length) % certifications.length);
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % certifications.length);
  };

  return (
    <ErrorBoundary>
      <div id="about" className="about">
        <div className="about-header">
          <h1>Hi, a little about <span>me</span>!</h1>
          <div className="about-para">
            <p>I graduated with a Bachelor of Science in Electronics from Seneca College, Toronto, Canada.
              I have been working in business and data analytics for the past 4 years. I have worked on 
              various projects in financial, logistics, retail, sales, inventory, and marketing.
            </p>  
            <p>Additionally, I dedicate my time to learn Machine Learning Algorithms and have a keen interest
              in Deep Neural Networks and Computer Vision.
            </p>
          </div>
        </div>
        <div className="about-expertise">
          <h1>Expertise</h1>
          <div className="skill-grid">
            <div className="skills">
              <div className="title">
                <FontAwesomeIcon className='expertise-icon' icon={faLaptopCode} />
                <h3>Tools</h3>
              </div>
              <div className="flex-chips">
                  {main_tools.map((label, index) => (
                    <Chip key={index} className='chip' label={label} />
                  ))}
              </div>
            </div>
            <div className="skills">
              <div className="title">
                <FontAwesomeIcon className='expertise-icon' icon={faPython} />
                <h3>Frameworks</h3>
              </div>
              <div className="flex-chips">
                {python_libraries.map((label, index) => (
                    <Chip key={index} className='chip' label={label} />
                  ))}
              </div>
            </div>
            <div className="skills">
              <div className="title">
                <FontAwesomeIcon className='expertise-icon' icon={faDocker} />
                <h3>MLOps</h3>
              </div>
              <div className="flex-chips">
                  {devops_tools.map((label, index) => (
                    <Chip key={index} className='chip' label={label} />
                  ))}
              </div>
            </div>
            <div className="skills">
              <div className="title">
                <FontAwesomeIcon className='expertise-icon' icon={faCloud} />
                <h3>Cloud</h3>
              </div>
              <div className="flex-chips">
                  {cloudtools.map((label, index) => (
                    <Chip key={index} className='chip' label={label} />
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="about-certifications">
            <h1>Certifications</h1>
            <div className="certifications-grid-container">
            <div className="arrow-button">
                <button className="arrow-button-left" onClick={handleNext}>
                  <FontAwesomeIcon className='arrow-button-icon' icon={faAngleLeft} size='2x' />
                </button>
              </div>
              <div className="certifications-grid">
                {visibleCerts.map((cert, idx) => (
                  <div key={idx} className="certification">
                    <img src={cert.img} alt={cert.name} />
                    <div className="overlay">
                      <h3>{cert.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
              <div className="arrow-button">
                <button className="arrow-button-right" onClick={handlePrev}>
                  <FontAwesomeIcon className='arrow-button-icon' icon={faAngleRight} size='2x' />
                </button>
              </div>
            </div>
          </div>
      </div>
    </ErrorBoundary>
  )
}
export default About
