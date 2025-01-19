import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faLinkedin, faKaggle } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <hr/>
        <div className='footer-section'>
          <div className="footer-icons">
            <a href="https://www.github.com/nikendrashekhawat"><FontAwesomeIcon className='footer-icon' icon={faSquareGithub} /></a>
            <a href="https://www.linkedin.com/in/nikendrashekhawat/"><FontAwesomeIcon className='footer-icon' icon={faLinkedin} /></a>
            <a href="https://www.kaggle.com/nikendrashekhawat"><FontAwesomeIcon className='footer-icon' icon={faKaggle} /></a>
          </div>
          <div className="footer-copyright">
            <p>©2025 Nikendra Shekhawat</p>
          </div>
        </div>
    </div>
  )
}

export default Footer