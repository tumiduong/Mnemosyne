import React, { useEffect, useState } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateDeck from './components/Create/CreateDeck';
import CreateCustomDeck from './components/Create/CreateCustomDeck';
import axios from "axios";
import useApplicationData from './hooks/useApplicationData';
import DeckList from './components/Learn/DeckList';
import Register from './components/User/Register';
import Login from './components/User/Login';
import CardList from './components/Learn/CardList'


function App() {
const [deck, setDeck] = useState([]);
const userID = localStorage.id;

useEffect(() => {
  axios.get(`/api/users/${userID}/decks`)
    .then(res => {
      setDeck(res.data);
    })
    .catch(error => {
      console.log(error);
    })
}, []);
  
  return (
    <Router>
      <Switch>
        <Route exact path="/create" component={CreateDeck} />
        <Route exact path="/create/customdeck" component={CreateCustomDeck} />

        <Route path="/users/:id/decks" component={DeckList} />
        <Route path="/decks" component={() => <DeckList deck={deck}/>} />
        <Route path="/cards">
          <Cards />
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/decks/:deckID/cards" component={CardList}>
        </Route>

      </Switch>
    
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

