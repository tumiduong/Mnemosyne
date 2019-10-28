import React, { useEffect, useState } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";

import axios from "axios";
import useApplicationData from './hooks/useApplicationData';
import DeckListItem from './components/Learn/DeckListItem'

function App() {

  
  return (
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/users/1/decks">Decks</Link>
        </li>
        <li>
          <Link to="/cards">Cards</Link>
        </li>
      </ul>

      <hr />
      <Switch>
        <Route exact path="/users">
          <Users />
        </Route>
        <Route path="/users/:id/decks">
          <DeckList />
        </Route>
        <Route path="/cards">
          <Cards />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;

function Users() {

  const {state, dispatch} = useApplicationData();
  const userList = state.users.map(user=> <li key={user.id}>{user.first_name} {user.last_name} {user.email}</li>)
  

  return (
  <div className="App">
    <h1>List of users</h1>
    <ul>
      {userList} 
    </ul>
  </div>
  );  
}

function DeckList() {
  const { id } = useParams();
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    axios.get(`/api/users/${id}/decks`)
      .then(res => {
        setDeck(res.data)
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, []);

  const decks = deck.map(deck => {
    return (
        <DeckListItem
          key={deck.id}
          name={deck.name}
          description={deck.description}
          subjectName={deck.subject_name}
          />
      );
  });
  return <ul>{decks}</ul>;
}

function Cards() {

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