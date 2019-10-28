import React, { useState } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Redirect } from "react-router-dom";

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
        localStorage.setItem("id", res.data);
        setRedirect(true);
      })
      .catch(err => console.log(err))
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
    <div>
    <div>{redirectRender()}</div>
    <div className="login-form">
      <Form
        onSubmit={event => event.preventDefault()}>
        <Form.Group controlId="formGroupEmail">
          <Form.Control
            type="text"
            name="email"
            placeholder="Email address"
            onChange={event => setEmail(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            onChange={event => setPassword(event.target.value)}
          />
        </Form.Group>

        <div className="error">{error}</div>

        <Button
          variant="success"
          type="submit"
          onClick={() => validate()}>
          Log in
        </Button>
      </Form>
    </div>
    </div>
);
}