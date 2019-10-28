import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";




// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
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

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
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




<div className="layout">
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