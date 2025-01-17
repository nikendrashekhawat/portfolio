import React from 'react'
import './Projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faFileCode} from '@fortawesome/free-solid-svg-icons'
import Chip from '@mui/material/Chip'
import projects_data from './projects_data'

const Projects = () => {
  return (
    <div className='projects'>
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project-container">
              {projects_data.map((project, index)=>{
                return (
                  <div className="project-box" key={index}>
                    <img src={project.bg_image} alt=''/>
                    <div className="project-overlay">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="project-flex-chips">
                          {project.tools.map((label, index) => (
                              <Chip key={index} className='project-tool-chip' label={label} />
                            ))}
                        </div>
                        <div className="project-link-icons">
                          <a href={project.link}><FontAwesomeIcon className='project-link' icon={faArrowUpRightFromSquare}/></a>
                          <a href={project.github}><FontAwesomeIcon className='project-code' icon={faFileCode}/></a>
                        </div>
                    </div>
                    <h3 className='project-title'>{project.title}</h3>    
                    </div>
                )})}
            </div>
        </div>
    </div>
  )
}

export default Projects