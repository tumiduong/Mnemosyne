import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Sidenav from '../Sidenav';
import axios from 'axios';
import DeckListItem from '../Learn/DeckListItem';
import './Practice.css';

export default function Practice(props) {
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

  const decks = deck.map(deck => {
    return (
      <DeckListItem 
      key={deck.id}
      id={deck.id}
      name={deck.name}
      description={deck.description}
      subjectName={deck.subject_name}
      onClick={deck.toCards}
      display={false}
      mode={"practice"}
      onDelete={deck.remove} />
    )
  })

  return (
    <div>
    <Navbar />
    <div className="test">
      <Sidenav selected="practice" />
      <div className="practice-big-wrap">
        <div className="practice-edit-bar">
          <span className="practice-edit-bar-info">Please click on the deck you want to practice.</span>
          <span className="practice-edit-bar-info-light"> </span>
          <a className="practice-edit-button"></a>
        </div>
        <div className="practice-list"> {decks} </div>
      </div>
    </div>
  </div>

  )
}