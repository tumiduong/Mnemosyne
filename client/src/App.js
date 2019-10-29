import React, { useEffect, useState } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import CreateDeck from './components/Create/CreateDeck';
import axios from "axios";
import useApplicationData from './hooks/useApplicationData';
import DeckList from './components/Learn/DeckList';
import Register from './components/User/Register';
import Login from './components/User/Login';


function App() {
const [user, setUser] = useState([]);
const [deck, setDeck] = useState([]);
const userID = localStorage.id;

useEffect(() => {
  const getDecks = axios.get(`/api/users/${userID}/decks`);
  const getUser = axios.get(`/api/users/${userID}`);

  Promise.all([getDecks, getUser])
    .then(all => {
      setDeck(all[0].data);
      setUser(all[1].data);
    })
    .catch(function (error) {
      console.log(error);
    })
}, []);
  
  return (
    <Router>
      <Switch>
        <Route exact path="/create">
        <CreateDeck user={user} />
        </Route>
        <Route path="/decks" component={() => <DeckList deck={deck}/>} />
        <Route path="/cards">
          <Cards />
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

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

