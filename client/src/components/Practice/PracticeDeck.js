import React, { useState, useEffect } from "react";
import Navbar from '../Navbar';
import Sidenav from '../Sidenav';
import PracticeTerm from './PracticeTerm';
import PracticeDefinition from './PracticeDefinition';
import './PracticeDeck.css';
import axios from 'axios'

export default function PracticeDeck(props) {

  const { deckID } = props.match.params;
  const [cards, setCards] = useState([]);

  const subject = "subject";
  const title = "title";
  const description = "description";

  useEffect(() => {
    axios.get(`/api/rounds/${deckID}`)
      .then(res => {
        setCards(res.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  const playCards = cards.sort(function (a, b) { return 0.5 - Math.random() }).slice(0, 4);
  const preShuffle = [...playCards];
  const shufflePlayCards = preShuffle.sort(function (a, b) { return 0.5 - Math.random() });


  const playTerms = playCards.map(t => {
    return (
      <PracticeTerm
        key={t.id}
        id={t.id}
        term={t.term}
        definition={t.definition}
        image={t.image}
      />
    );
  });

  const playDefinitions = shufflePlayCards.map(d => {
    return (
      <PracticeDefinition
        key={d.id + 1000}
        id={d.id}
        definition={d.definition}
        image={d.image}
      />
    );
  });




  return (
    <div>
      <Navbar />
      <div className="test">
        <Sidenav selected="practice" />
        <div className="game-big-wrap">
          <div className="game-info-bar">
            <div className="deck-info-wrap">
              <span className="deck-subject">{subject.toUpperCase()}</span>
              <span className="deck-title">{title}</span>
              <span className="deck-description">{description}</span>
            </div>

            <div className="practice-card-number-container">
              <img src={require('../../../../docs/questions.png')} id="card-icon" />
              <div className="card-number">20/20</div>
            </div>
            <div className="practice-card-number-container">
              <img src={require('../../../../docs/right-answer.png')} id="card-icon" />
              <div className="centered-number">18</div>
            </div>
            <div className="practice-card-number-container">
              <img src={require('../../../../docs/wrong-answer.png')} id="card-icon" />
              <div className="centered-number">5</div>
            </div>
            <div id="start">
              <span id="starter">START</span>
            </div>

            <div>
            </div>

            <div className="game-info">

            </div>

          </div>
          <div className="playcards-list">
            {/* <div>TERM</div>
            <div>DEFINITION 1</div>
            <div>DEFINITION 2</div>
            <div>DEFINITION 3</div> */}
            {playTerms}
          </div>
        </div>
      </div>
    </div>
  )






}