import './profile.css'
import profile from "../../image/person.png";
import Sidebar from '../Sidebar';
// import React, { useState, useEffect } from "react";
// import Input from "./Input";
// import axios from "axios";


const Profile = () => {
  return (
    <div className='profile' id='id-profile'>
    <Sidebar/>
    <div className="flex-container-2">
    <div className="desktop-11">
      <div className="flex-container">
        <div className="rectangle-107">Edit Profile</div>
        <br />
        <div className="rectangle-105">
          <img className="rectangle-106" src={profile} />
          <span className="name">Maureen Masau</span>
          <div className="flex-container-1">
            {/* <img className="vector" src={profile} /> */}
            <span className="location">Nairobi, Kenya</span>
          </div>
          <span className="text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&#39;s standard dummy
            text ever ... More
          </span>
        </div>
      </div>
      </div>
      </div>
      <div className="container-notes">
        <div className="cont-1">
          <span className="notifications">Notifications</span>
        </div>
        <div className="cont-2">
          <span className="tasks">Tasks</span>
        </div>
        <div className="cont-3">
          <span className="notifications-1">Notifications</span>
        </div>
      </div>
    </div>
  )
}
export default Profile;