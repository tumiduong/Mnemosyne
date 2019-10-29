import React, { useState, useEffect } from 'react';
import './Sidenav.css';
import axios from 'axios';

export default function Sidenav() {
  const [user, setUser] = useState([]);
  const userID = localStorage.id;

  useEffect(() => {
    axios.get(`/api/users/${userID}`)
      .then(res => {
        setUser(res.data[0]);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, []);

  const selected = props.selected;
  let divArr = ['learn-div', 'create-div', 'practice-div'];

  if (selected === "create") {
    divArr = ['learn-div', 'create-div selected', 'practice-div'];
  } else if (selected === "learn") {
    divArr = ['learn-div selected', 'create-div', 'practice-div'];
  } else if (selected === "practice") {
    divArr = ['learn-div', 'create-div', 'practice-div selected'];
  } 


  return (

    <div className="sidenav">
      <div className="profile-div">
        <span id="welcome-message"> {'Welcome back, ' + user.first_name + '.'}</span>
        <span id="profile-info">{user.first_name} {user.last_name}</span>
        <a id="view-profile" href="#viewprofile"> <u>View your profile</u></a>
      </div>
      <div className={divArr[0]}>
        <img src={require('../../../docs/learn-icon-white.png')} alt="mnemosyne-logo" className="icons" />
        <a href="/decks">Learn</a>
      </div>
      <div className={divArr[1]}>
        <img src={require('../../../docs/create-icon-white.png')} alt="mnemosyne-logo" className="icons" />
        <a href="/create">Create</a>
      </div>
      <div className={divArr[2]}>
        <img src={require('../../../docs/practice-icon-white.png')} alt="mnemosyne-logo" className="icons" />
        <a href="/practice">Practice</a>
      </div>
    </div>

  )
}