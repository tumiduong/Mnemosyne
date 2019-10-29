import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Navbar from '../Navbar';
import './Login.css';

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState(false);

  const login = () => {
    return axios
      .post('/api/users/login', {
        email,
        password
      })
      .then(res => {
        if (res.data) {
          localStorage.setItem("id", res.data);
          setRedirect(true);
        } else {
          setError("Wrong combination of email/password.")
        }
      })
      .catch(error => console.log(error))
  }

  function validate() {
    if (email === "" || password === "") {
      setError("All fields must be filled.");
      return;
    }

    setError("");
    login();
  }

  const redirectRender = () => {
    if (redirect) {
      return <Redirect to='/create' />
    }
  }

  return (
    <div className="login-page">
      <div>{redirectRender()}</div>
      <Navbar />
      <div className="login-area">

        <div className="login-form">
          <div className="login-form-top-border">
          </div>
          <div className="form-wrapper">
            <form  className="form-inputs"
              onSubmit={event => event.preventDefault()}>
                
              <div className="login-instructions">Please enter your credentials to <strong>log in</strong>.</div>

              <input
                className="input-typing"
                type="text"
                name="email"
                placeholder="Email address"
                onChange={event => setEmail(event.target.value)}
              />

              <input
                className="input-typing"
                type="password"
                name="password"
                placeholder="Password"
                onChange={event => setPassword(event.target.value)}
              />

              <div className="error">{error}</div>

              <button 
                className="login-button"
                variant="success"
                type="submit"
                onClick={() => validate()}>
                Log in
              </button>
            </form>
          </div>

        </div>
      </div>


    </div>
  );
}

