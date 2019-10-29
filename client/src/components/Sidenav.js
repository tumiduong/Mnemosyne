import React, { useState, useEffect } from 'react';
import './Sidenav.css';
import axios from 'axios';

export default function Sidenav() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState([]);
  const userID = localStorage.id;

  useEffect(() => {
    axios.get(`/api/users/${userID}`)
      .then(res => {
        setUser(res.data[0]);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, []);

  return (

    <div className="sidenav">
      <div className="profile-div">
        <span id="welcome-message"> {!loading && 'Welcome back, ' + user.first_name + '.'}</span>
        <span id="profile-info">{!loading && user.first_name} {!loading && user.last_name}</span>
        <a id="view-profile" href="#viewprofile"> <u>View your profile</u></a>
      </div>
      <div className="learn-div">
        <img src={require('../../../docs/learn-icon-white.png')} alt="mnemosyne-logo" className="icons" />
        <a href="/decks">Learn</a>
      </div>
      <div className="create-div">
        <img src={require('../../../docs/create-icon-white.png')} alt="mnemosyne-logo" className="icons" />
        <a href="/create">Create</a>
      </div>
      <div className="practice-div">
        <img src={require('../../../docs/practice-icon-white.png')} alt="mnemosyne-logo" className="icons" />
        <a href="/practice">Practice</a>
      </div>
    </div>

  )
}