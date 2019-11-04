import React from 'react';
import './Navbar.css';

export default function Navbar(props) {

  const logout = () => {
    localStorage.clear('id')
  }

  return (

    <nav>
      <div className="logo-wrap">
        <a href={localStorage.id ? "/decks" : "/"}><img src={require('../../../docs/mnemosyne-logo.png')} alt="mnemosyne-logo" /></a>
      </div>
      <div>
        {localStorage.id && 
        <div className="button-wrap">
          <form className="btn-login" method="GET" action="/">
        <button type="submit" id="login-button" onClick={() => logout()}>
          <span id="login-span">Log out</span>
        </button>
        </form>
        </div>}
        {!localStorage.id &&
        <div className="button-wrap">
          <form className="btn-login" method="GET" action="/login">
        <button type="submit" id="login-button">
          <span id="login-span">Log in</span>
        </button>
        </form>
        <form className="btn-signup" method="GET" action="/register">
        <button type="submit" id="signup-button">
          <span id="signup-span">Sign up</span>
        </button>
        </form>
        </div>}
      </div> 
    </nav>

  )
}
