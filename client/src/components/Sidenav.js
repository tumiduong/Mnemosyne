import React from 'react';
import './Sidenav.css';

export default function Sidenav(props) {

  return (

    <div className="sidenav">
      <div className="profile-div">
        <span id="welcome-message">Welcome back, Bill.</span>
        <span id="profile-info">Bill Gates</span>
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