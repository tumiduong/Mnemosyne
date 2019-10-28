import React from 'react';
import './CreateDeck.css'

export default function CreateDeck(props) {

  return (
    <div>
      <nav>
        <div className="logo-wrap">
          <img src={require('../../docs/mnemosyne-logo.png')} alt="mnemosyne-logo" />
        </div>
        <div className="button-wrap">
          <form className="btn-login" method="GET" action="/login">
            <button type="submit" id="login-button">
              <span id="login-span">Log in</span>
            </button>
          </form>
          <form className="btn-signup" method="GET" action="/signup">
            <button type="submit" id="signup-button">
              <span id="signup-span">Sign up</span>
            </button>
          </form>
        </div>
      </nav>
      <div className="test">
        <div className="sidenav">
          <div className="profile-div">
            <span id="welcome-message">Welcome back, Bill.</span>
            <span id="profile-info">Bill Gates</span>
            <a id="view-profile" href="#viewprofile"> <u>View your profile</u></a>
          </div>
          <div className="learn-div">
            <img src={require('../../docs/learn-icon-white.png')} alt="mnemosyne-logo" className="icons" />
            <a href="#about">Learn</a>
          </div>
          <div className="create-div">
            <img src={require('../../docs/create-icon-white.png')} alt="mnemosyne-logo" className="icons" />
            <a href="#services">Create</a>
          </div>
          <div className="practice-div">
            <img src={require('../../docs/practice-icon-white.png')} alt="mnemosyne-logo" className="icons" />
            <a href="#clients">Practice</a>
          </div>
        </div>

        <div className="create-deck">
          <div className="create-custom-deck">
            <div id="custom-deck-wrap">
              <div className="deck-wrap-top-border">
              </div>
              <div className="explanation-title">
                <p>Create a custom deck</p>
              </div>
              <div className="explanation-text">
                <span>Add a term and definition,<br />
                  and let your creativity flow.
                </span>
              </div>
              <button type="submit" className="create-button">
                <span id="signup-span">Create</span>
              </button>
            </div>

          </div>
          <div className="create-english-deck">
          <div id="custom-deck-wrap">
              <div className="deck-wrap-top-border-blue">
              </div>
              <div className="explanation-title-english">
                <p>Create a deck for <br /> English practice</p>
              </div>
              <div className="explanation-text">
                <span>Look up any word,<br />
                  and see the magic happen.
                </span>
              </div>
              <button type="submit" className="create-button">
                <span id="signup-span">Create</span>
              </button>
            </div>


          </div>

        </div>
      </div>
    </div>
  )
}
