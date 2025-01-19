import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin, faKaggle} from '@fortawesome/free-brands-svg-icons';
import './Header.css'
import profile_image from '../../assets/profile_img.png'


const Profile = () => {
  return (
    <div id="profile" className='profile'>
        <div className='profile-picture'><img src={profile_image} alt="" /></div>
        <div className='profile-info'>
          <div className="profile-icons">
            <a href="https://www.github.com/nikendrashekhawat"> <FontAwesomeIcon className="profile-icon" icon={faSquareGithub} /></a>
            <a href="https://www.linkedin.com/in/nikendrashekhawat/"> <FontAwesomeIcon className="profile-icon" icon={faLinkedin} /></a>
            <a href="https://www.kaggle.com/nikendrashekhawat"><FontAwesomeIcon className='profile-icon' icon={faKaggle} /></a>
          </div>
          <h1><span>Nikendra Shekhawat</span></h1>
          <p>Data Scientist | Machine Learning Engineer</p>
          <div className="profile-connect">
            <div className="profile-connect-contact">Connect with me</div>
            <div className="profile-connect-resume">My resume</div>
          </div>
        </div>
    </div>
  )
}

export default Profile