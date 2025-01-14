import React from "react"
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons'
import Chip from '@mui/material/Chip';
import './About.css'

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
  "Azure "
]

const About = () => {
  return (
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
              <FontAwesomeIcon className='expertise-icon' icon={faReact} size="2x"/>
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
              <FontAwesomeIcon className='expertise-icon' icon={faPython} size="2x"/>
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
              <FontAwesomeIcon className='expertise-icon' icon={faDocker} size="2x"/>
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
    </div>
  )
}

export default About
