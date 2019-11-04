import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateDeck from './components/Create/CreateDeck';
import CreateCustomDeck from './components/Create/CreateCustomDeck';
import DeckList from './components/Learn/DeckList';
import Register from './components/User/Register';
import Login from './components/User/Login';
import CardList from './components/Learn/CardList';
import CreateEnglishDeck from './components/Create/CreateEnglishDeck';
import AddEnglishDeck from './components/Create/AddEnglishDeck';
import AddCustomDeck from './components/Create/AddCustomDeck';
import SharedCardList from './components/Learn/SharedCardList';
import Practice from './components/Practice/Practice';
import PracticeDeck from './components/Practice/PracticeDeck';
import Profile from './components/User/Profile';
import Landing from './components/User/Landing';


function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={Profile} />

        <Route exact path="/create" component={CreateDeck} />
        <Route exact path="/create/customdeck" component={CreateCustomDeck} />
        <Route exact path="/edit/deck/:deckID/custom" component={AddCustomDeck} />
        <Route exact path="/create/englishdeck" component={CreateEnglishDeck} />
        <Route exact path="/edit/deck/:deckID/english" component={AddEnglishDeck} />

        <Route exact path="/decks" component={DeckList} />
        <Route exact path="/decks/:deckID/cards" component={CardList} />
        <Route exact path="/practice" component={Practice} />
        <Route exact path="/practice/:deckID" component={PracticeDeck} />
        <Route exact path="/:link" component={SharedCardList} />
        <Route exact path="/" component={Landing} />
      </Switch>
  </Router>
  );
}

export default App;