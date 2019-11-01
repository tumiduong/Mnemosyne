import React, {useState, useEffect} from "react";
import Navbar from '../Navbar';
import Sidenav from '../Sidenav';
import PracticeTerm from './PracticeTerm';
import PracticeDefinition from './PracticeDefinition';
import axios from 'axios'

export default function PracticeDeck(props) {
  
  const { deckID } = props.match.params;
  const [ cards, setCards ] = useState([]);

  useEffect(() => {
    axios.get(`/api/rounds/${deckID}`)
      .then(res => {
        setCards(res.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  const playCards = cards.sort(function(a,b){return 0.5 - Math.random()}).slice(0,4);
  const preShuffle = [...playCards];
  const shufflePlayCards = preShuffle.sort(function(a,b){return 0.5 - Math.random()});


  const playTerms = playCards.map( t => {
    return (
      <PracticeTerm
        key={t.id}
        id={t.id}
        term={t.term}
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
        <div className="practice-big-wrap">
      <div className="practice-edit-bar">
        <span className="practice-edit-bar-info">Whatever</span>
        <span className="practice-edit-bar-info-light">Blabla </span>
        <a className="practice-edit-button">Play</a>
      </div>
      <div className="playcards-list">
        <div>{playTerms}</div>
        <div>{playDefinitions}</div>
      </div>
    </div>
      </div>
    </div>
  )






}