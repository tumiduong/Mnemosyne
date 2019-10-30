import React, {useState} from "react";
import './DeckList.css'
import DeckListItem from "./DeckListItem";
import Navbar from '../Navbar';
import Sidenav from '../Sidenav';


export default function DeckList(props) {

  const [display, setDisplay] = useState(false);
  const toggle = () => {
    if (!display) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  }


  const decks = props.deck.map(deck => {
    return (
      <DeckListItem
        key={deck.id}
        id={deck.id}
        name={deck.name}
        description={deck.description}
        subjectName={deck.subject_name}
        onClick={deck.toCards}
        display={display}
        onDelete={deck.remove}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <div className="test">
        <Sidenav selected="learn" />
        <div className="deck-big-wrap">
          <div className="deck-edit-bar">
            <span className="deck-edit-bar-info">{display ? "You are now editing your decks." : "You are now viewing your decks."}</span>
            <span className="deck-edit-bar-info-light">{display ? "Done editing?" : "Wanted to delete a deck?"} </span>
            <a className="deck-edit-button" onClick={() => toggle()}>{display ? "Save" : "Edit decks"}</a>
          </div>
          <div className="deck-list"> {decks} </div>
        </div>
      </div>
    </div>
  )
}


