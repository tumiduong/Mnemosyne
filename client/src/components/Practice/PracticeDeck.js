import React, {useState, useEffect} from "react";
import Navbar from '../Navbar';
import Sidenav from '../Sidenav';
import PracticeTerm from './PracticeTerm';
import PracticeDefinition from './PracticeDefinition';

export default function PracticeDeck(props) {
  
  const { deckID } = props.match.params;
  const [ card, setCard ] = useState([]);

  useEffect(() => {
    axios.get(`/api/rounds/${deckID}`)
      .then(res => {
        setCard(res.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);




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
      <div className="practice-list"> GAME CARDS BELOW </div>
    </div>
      </div>
    </div>
  )






}