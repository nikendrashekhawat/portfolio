import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import './Header.css'
import profile_image from '../../assets/profile_img.png'
import resume from '../../assets/resume.pdf'


const Profile = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Nikendra_Shekhawat_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div id="profile" className='profile'>
        <div className='profile-picture'><img src={profile_image} alt="" /></div>
        <div className='profile-info'>
          <div className="profile-icons">
            <a href="https://www.github.com/nikendrashekhawat"> <FontAwesomeIcon className="profile-icon" icon={faSquareGithub} /></a>
            <a href="https://www.linkedin.com/in/nikendrashekhawat/"> <FontAwesomeIcon className="profile-icon" icon={faLinkedin} /></a>
          </div>
          <h1>Nikendra Shekhawat</h1>
          <p>Data Scientist | Machine Learning Engineer</p>
          <div className="profile-connect">
            <div className="profile-connect-contact">
              <AnchorLink className='anchor-link' offset='50' href='#contact'>
                <p>Connect with me</p>
                </AnchorLink>
              </div>
            <div 
            className="profile-connect-resume"
            onClick={handleDownload}
            role='button'
            tabIndex={0}
            >
              <p>Resume</p>
              <FontAwesomeIcon className='download-icon-resume' icon={faFileArrowDown}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Profile