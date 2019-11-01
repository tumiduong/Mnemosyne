import React, { useState, useEffect } from "react";
import Navbar from '../Navbar';
import Sidenav from '../Sidenav';
import PracticeTerm from './PracticeTerm';
import PracticeDefinition from './PracticeDefinition';
import axios from 'axios'

export default function PracticeDeckTest(props) {
  const { deckID } = props.match.params;
  const [cards, setCards] = useState([]);
  const [shuffled, setShuffled] = useState([]);
  const [index, setIndex] = useState(0);
  const [definitions, setDefinitions] = useState([])
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [score, setScore] = useState(0);
  const [start, setStart] = useState(false);
  
  useEffect(() => {
    axios.get(`/api/rounds/${deckID}`)
      .then(res => {
        setShuffled([...res.data].sort(function(a, b){return 0.5 - Math.random()}))
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  const t = shuffled[index];
  
  const shuffleDefinitions = (current) => {
    const term = current;
    const withoutTerm = [...shuffled].filter(element => element.id !== term.id);
      for (let i = withoutTerm.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [withoutTerm[i], withoutTerm[j]] = [withoutTerm[j], withoutTerm[i]];
      }
    const selected = [withoutTerm[0], term, withoutTerm[withoutTerm.length - 1]]
    setDefinitions([...selected].sort(function(a, b){return 0.5 - Math.random()}));
  };

  const renderDef = (def) => {
    const playDefinitions = def.map(d => {
      return (
        <PracticeDefinition
          key={d.id + 1000}
          id={d.id}
          definition={d.definition}
          image={d.image}
          onClick={(event) => validate(d.id)}
        />
      );
    });
    return playDefinitions;
  };

  const gameStart = () => {
    shuffleDefinitions(t);
    setStart(true);
  };

  const nextRound = () => {
    setIndex(index + 1);
    shuffleDefinitions(shuffled[index + 1]);
  }

  const validate = (id) => {
    if (t.id === id) {
      console.log("CORRECT")
      nextRound();
    } else {
      console.log("INCORRECT")
      nextRound();
    }
  };



  return (
    <div>
      <Navbar />
      <div className="test">
        <Sidenav selected="practice" />
        <div className="practice-big-wrap">
          <div className="practice-edit-bar">
            <span className="practice-edit-bar-info">Whatever</span>
            <span className="practice-edit-bar-info-light">Blabla </span>
            <a className="practice-edit-button" onClick={() => gameStart()}>Play</a>
          </div>
          <div className="playcards-list">
            <div >{start && <PracticeTerm key={t.id} id={t.id} term={t.term} onClick={(event) => console.log(t.id)}/>}</div>
            <div>{renderDef(definitions)}</div>
          </div>
        </div>
      </div>
    </div>
  )






}