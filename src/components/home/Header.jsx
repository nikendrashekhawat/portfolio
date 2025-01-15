import React from 'react'
import './Header.css'
import profile_image from '../../assets/profile_img.png'


const Profile = () => {
  return (
    <div className='profile'>
        <div className='profile-picture'><img src={profile_image} alt="" /></div>
        <div className='profile-info'>
          <h1><span>Nikendra Shekhawat</span></h1>
          <p>Data Scientist | Machine Learning & MLOps Engineer</p>
          <div className="profile-connect">
            <div className="profile-connect-contact">Connect with me</div>
            <div className="profile-connect-resume">My resume</div>
          </div>
        </div>
    </div>
  )
}

export default Profile