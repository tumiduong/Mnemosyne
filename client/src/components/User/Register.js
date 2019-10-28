import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

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
  }

  function validate() {
    if (firstName === "" || lastName === "" || email === "" || password === "") {
      setError("All fields must be filled.");
      return;
    }
  
    setError("");
    register();
  }

  const redirectRender = () => {
    if (redirect) {
      return <Redirect to='/create' />
    }
  }

  return (
    <div>
      <div>{redirectRender()}</div>
      
      <div className="signup-form">
        <form
          onSubmit={event => event.preventDefault()}>
            
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            onChange={event => setFirstName(event.target.value)}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            onChange={event => setLastName(event.target.value)}
          />
          <input
            type="text"
            name="email"
            placeholder="Email address"
            onChange={event => setEmail(event.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={event => setPassword(event.target.value)}
          />

          <div className="error">{error}</div>

          <button
            type="submit"
            onClick={() => validate()}>
            Sign up
          </button>
        </form>
      </div>
    </div>
);
}