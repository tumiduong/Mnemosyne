import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidenav from '../Sidenav';
import PracticeTerm from './PracticeTerm';
import PracticeDefinition from './PracticeDefinition';
import './PracticeDeck.css';
import axios from 'axios';

export default function PracticeDeck(props) {
  const { deckID } = props.match.params;
  const [loading, setLoading] = useState(true);
  const [shuffled, setShuffled] = useState([]);
  const [index, setIndex] = useState(0);
  const [definitions, setDefinitions] = useState([]);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [start, setStart] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [counter, setCounter] = useState(0);
  const [back, setBack] = useState(false);

  useEffect(() => {
    axios.get(`/api/rounds/${deckID}`)
      .then(res => {
        setShuffled([...res.data].sort(function (a, b) { return 0.5 - Math.random() }));
      })
      .then(() => {
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  const t = shuffled[index];
  const deckLength = shuffled.length;

  const shuffleDefinitions = (current) => {
    const term = current;
    const withoutTerm = [...shuffled].filter(element => element.id !== term.id);
    for (let i = withoutTerm.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [withoutTerm[i], withoutTerm[j]] = [withoutTerm[j], withoutTerm[i]];
    }
    const selected = [withoutTerm[0], term, withoutTerm[withoutTerm.length - 1]]
    setDefinitions([...selected].sort(function (a, b) { return 0.5 - Math.random() }));
  };

  const renderDef = (def) => {
    const playDefinitions = def.map(d => {
      return (
        <div className="flipDefCard">
          <PracticeDefinition
            key={d.id + 1000}
            id={d.id}
            definition={d.definition}
            image={d.image}
            validate={(event) => validate(d.id)}
            termID={t.id}
            clicked={clicked}
            setClicked={setClicked}
          />
        </div>
      );
    });
    return playDefinitions;
  };

  const gameStart = () => {
    shuffleDefinitions(t);
    setStart(true);
    setCounter(1);
  };

  const gameCancel = () => {
    if (back) {
      return <Redirect push to="/practice" />;
    }
  };

  const nextRound = () => {
    setIndex(prev => prev + 1);
    setCounter(prev => prev + 1);
    shuffleDefinitions(shuffled[index + 1]);
    setClicked(prev => false);
  };

  const endGame = () => {
    setTimeout(() => setGameOver(true), 2000);
  };

  const sendScore = (score) => {
    return axios.post(`/api/rounds`, {
      user_id: localStorage.id,
      deck_id: deckID,
      score: score
    })
      .then(res => {
        setGameOver(false);
      })
      .catch(error => {
        console.log(error);
      })
  };

  const validate = (id) => {

      if (index + 1 != deckLength) {

        if (t.id === id) {
          setTimeout(() => nextRound(), 2000);
          setCorrect(prev => prev + 1);
        } else {
          setTimeout(() => nextRound(), 2000)
          setIncorrect(prev => prev + 1)
        }

      } else {

        if (t.id === id) {
          setCorrect(prev => prev + 1);
          const gameScore = Math.round(((correct + 1) / deckLength) * 100)
          sendScore(gameScore);
          endGame();
        } else {
          setIncorrect(prev => prev + 1)
          const gameScore = Math.round((correct / deckLength) * 100);
          sendScore(gameScore);
          endGame();
        }
      }
  };

  return (
    <div>
      <Navbar />
      <div className="test">
        <Sidenav selected="practice" />
        <div className="game-big-wrap">
          <div className="game-info-bar">
            {gameCancel()}

            <div className="deck-info-wrap">
              <span className="deck-subject">{!loading && shuffled[0].subject_name.toUpperCase()}</span>
              <span className="deck-title">{!loading && shuffled[0].deck_name}</span>
              <span className="deck-description">{!loading && shuffled[0].deck_description}</span>
            </div>

            <div className="practice-card-number-container">
              <img src={require('../../../../docs/questions.png')} id="card-icon" />
              <div className="card-number">{counter}/{deckLength}</div>
            </div>
            <div className="practice-card-number-container">
              <img src={require('../../../../docs/right-answer.png')} id="card-icon" />
              <div className="centered-number">{correct}</div>
            </div>
            <div className="practice-card-number-container">
              <img src={require('../../../../docs/wrong-answer.png')} id="card-icon" />
              <div className="centered-number">{incorrect}</div>
            </div>


            {!start && <div id="start" onClick={() => gameStart()}>
              <span id="starter">START</span>
            </div>}

            {start && <div id="exit" onClick={() => setBack(true)}>
              <span id="starter">EXIT</span>
            </div>}

            <div>
            </div>

            <div className="game-info">

            </div>

          </div>
          {!gameOver &&
            <div className="playcards-list">
              {start && <PracticeTerm key={t.id} id={t.id} term={t.term} cheating="That's cheating, my friend!" />}
              {start && renderDef(definitions)}
            </div>
          }
          {gameOver && 
          <div id="scorenote">
            <div id="grade">
              Congrats! You have answered {correct} cards correctly. Score: {Math.round((correct / deckLength) * 100)}/100
              <div className="link-scores">
                <a href="/profile" className="link-scores">View all scores</a>
              </div>
            </div>
          </div>}
        </div>
      </div>
    </div>
  )






}