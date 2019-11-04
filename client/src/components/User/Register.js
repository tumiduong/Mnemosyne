import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Navbar from '../Navbar';
import './Register.css'

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState(false);

  const register = () => {
    return axios
      .post('/api/users/register', {
        first_name: firstName,
        last_name: lastName,
        email,
        password
      })
      .then(res => {
        localStorage.setItem("id", res.data)
        setRedirect(true);
      })
      .catch(err => console.log(err))
  };

  function validate() {
    if (firstName === "" || lastName === "" || email === "" || password === "") {
      setError("All fields must be filled.");
      return;
    }
    setError("");
    register();
  };

  const redirectRender = () => {
    if (redirect) {
      return <Redirect push to='/create' />
    }
  };

  return (
    <div className="register-page">
      <div>{redirectRender()}</div>
      <Navbar />
      <div className="register-area">
        <div className="register-form">
          <div className="register-form-top-border">
          </div>
          <div className="form-wrapper">
            <form autoComplete="off" className="form-inputs"
              onSubmit={event => event.preventDefault()}>

              <div className="register-instructions">Please enter your credentials to <strong>sign up</strong>.</div>

              <input
                className="input-typing"
                type="text"
                name="firstName"
                placeholder="First name"
                onChange={event => {
                  setFirstName(event.target.value);
                  setError("");
                }}
              />
              <input
                className="input-typing"
                type="text"
                name="lastName"
                placeholder="Last name"
                onChange={event => {
                  setLastName(event.target.value);
                  setError("");
                }}
              />
              <input
                className="input-typing"
                type="text"
                name="email"
                placeholder="Email address"
                onChange={event => {
                  setEmail(event.target.value);
                  setError("");
                }}
              />
              <input
                className="input-typing"
                type="password"
                name="password"
                placeholder="Password"
                onChange={event => {
                  setPassword(event.target.value);
                  setError("");
                }}
              />

              <div className="error">{error}</div>

              <button
                className="register-button"
                type="submit"
                onClick={() => validate()}>
                Sign up
          </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}