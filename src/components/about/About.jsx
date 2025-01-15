import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFull, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons'
import Chip from '@mui/material/Chip';
import './About.css'

import project1 from '../../assets/project_1.png';
import project2 from '../../assets/project_2.png';
import project3 from '../../assets/project_3.png';
import project4 from '../../assets/project_4.png';
import project5 from '../../assets/project_5.png';

const main_tools = [
  "SQL",
  "PostgreSQL",
  "MySQL",
  "Python",
  "Jupyter Notebook",
  "R",
  "RStudio",
  "Excel",
  "Tableau",
  "PowerBI",
]

const python_libraries = [
  "Pandas",
  "NumPy",
  "SciPy",
  "Statsmodels",
  "Matplotlib",
  "Seaborn",
  "Plotly",
  "Bokeh",
  "Dask",
  "NLTK",
  "SpaCy",
  "Scikit-learn",
  "Tensorflow",
  "Keras",
]

const devops_tools = [
  "Linux",
  "Bash Scripting",
  "MLOps",
  "Git",
  "GitHub Actions",
  "DVC",
  "CML",
  "Docker",
  "PySpark",
  "MLFlow",
]

const cloudtools = [
  "BigQuery",
  "Google Analytics",
  "Azure Data Factory",
  "Azure"
]

const certifications = [
  { name: "Certification 1", img: project1 },
  { name: "Certification 2", img: project2 },
  { name: "Certification 3", img: project3 },
  { name: "Certification 4", img: project4 },
  { name: "Certification 5", img: project5 },
];

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
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % certifications.length);
      setVisibleCerts((prevCerts) => {
        const newCerts = certifications.slice(index, index + 3);
        if (newCerts.length < 3) {
          newCerts.push(...certifications.slice(0, 3 - newCerts.length));
        }
        return newCerts;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  console.log("Rendering About component");

  return (
    <ErrorBoundary>
      <div className="about">
        <div className="about-header">
          <h1>Hi, a little about <span>me</span>!</h1>
          <div className="about-para">
            <p>I graduated with a Bachelor of Science in Electronics from Seneca College, Toronto, Canada.
              I have been working in business and data analytics for the past 4 years. I have worked on 
              various projects in inventory management, logistics, retail, sales, and marketing.
            </p>  
            <p>Currently, I am learning MLOps. On my inquisitive side, I also have a keen 
              interest in DNN and Computer Vision.
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
              <p></p>
              <div className="flex-chips">
                  {main_tools.map((label, index) => (
                    <Chip key={index} className='chip' label={label} />
                  ))}
              </div>
            </div>
            <div className="skills">
              <div className="title">
                <FontAwesomeIcon className='expertise-icon' icon={faPython} />
                <h3>Packages</h3>
              </div>
              <p></p>
              <div className="flex-chips">
                {python_libraries.map((label, index) => (
                    <Chip key={index} className='chip' label={label} />
                  ))}
              </div>
            </div>
            <div className="skills">
              <div className="title">
                <FontAwesomeIcon className='expertise-icon' icon={faDocker} />
                <h3>DevOps</h3>
              </div>
              <p></p>
              <div className="flex-chips">
                  {devops_tools.map((label, index) => (
                    <Chip key={index} className='chip' label={label} />
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="about-certifications">
            <h1>Certifications</h1>
            <div className="certifications-grid">
              {visibleCerts.map((cert, idx) => (
                <div key={idx} className="certification">
                  <img src={cert.img} alt={cert.name} />
                  <p>{cert.name}</p>
                </div>
                ))}
            </div>
          </div>
      </div>
    </ErrorBoundary>
  )
}
export default About
