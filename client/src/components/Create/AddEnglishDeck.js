import React, { useState, useEffect } from 'react';
import './AddEnglishDeck.css';
import Navbar from '../Navbar';
import Sidenav from '../Sidenav';
import EnglishCards from './EnglishCards';
import axios from 'axios';

export default function AddEnglishDeck(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("");
  const [count, setCount] = useState(0);

  const countCards = () => {
    return axios.get(`/api/decks/${deckID}`)
      .then(res => {
        setCount(res.data.card_count);
      })
      .catch(err => {
        console.log(err);
      })
  };

  const { deckID } = props.match.params;

  useEffect(() => {
    axios.get(`/api/decks/${deckID}`)
      .then(res => {
        setTitle(res.data.name);
        setDescription(res.data.description);
        setSubject(res.data.subject_name);
        setCount(res.data.card_count);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  const pathName = `/decks/${deckID}/cards`;

  return (
    <div>
      <Navbar />
      <div className="test">
        <Sidenav selected="create" />

        <div className="custom-deck-creation">
          <div className="info-bar">
            <span className="info">You are now editing your {title} deck.</span>
            <span className="info-else"> Done editing?</span>
            <a className="info-else-click" href={pathName}>Save and learn</a>
          </div>
          <div className="the-deck-bar">
            <div className="deck-bar-left">

              <span className="deck-subject">{subject.toUpperCase()}</span>
              <span className="deck-title">{title}</span>
              <span className="deck-description">{description}</span>
              

            </div>
            <div className="deck-bar-right">
              <div className="deck-card-number-container">
              <img src ={require('../../../../docs/card-icon.png')} id="card-icon"/>
              <div id="centered-number">{count}</div>
              </div>
              <span id="card-number">You have {count} cards in your deck.</span>
              
            </div>
          </div>
          <EnglishCards countCards={() => countCards()} deckID={deckID}/>

        </div>
        
      </div>
    </div>
  )
}
