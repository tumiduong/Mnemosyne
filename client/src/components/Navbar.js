import React from 'react';
import './Navbar.css';

export default function Navbar(props) {

  return (

    <nav>
      <div className="logo-wrap">
        <img src={require('../../../docs/mnemosyne-logo.png')} alt="mnemosyne-logo" />
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

  )
}
