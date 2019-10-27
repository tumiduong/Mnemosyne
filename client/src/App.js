import React, { useEffect, useState } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import axios from "axios";
import useApplicationData from './hooks/useApplicationData';

function App() {

  
  return (
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/about">Decks</Link>
        </li>
        <li>
          <Link to="/dashboard">Cards</Link>
        </li>
      </ul>

      <hr />
      <Switch>
        <Route exact path="/users">
          <Users  />
        </Route>
        <Route path="/decks">
          <About />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;

function Users(props) {

  const {state, dispatch} = useApplicationData();
  const userList = state.users.map(user=> <li key={user.id}>{user.first_name} {user.last_name} {user.email}</li>)
  

  return (
  <div className="App">
    <h1>List of users</h1>
      <h2>Cool!</h2>
      <h3>Extra cool</h3>
    <ul>
      {userList}
    </ul>
  </div>
  );  
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {

  const [definition, setDefinition] = useState([]);

useEffect(() => {
  axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=b2474d1c-a3fd-47bd-9b37-e2fc58547a29`)
    .then( res => {
      const definition = res.data[0].shortdef[0];
      setDefinition(definition);
    })
    .catch(function (error) {
      console.log(error);
    })
}, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Voluminous</p>
      <p> {definition}</p>
    </div>
  );
}