import React from "react";
import './DeckList.css'
import DeckListItem from "./DeckListItem";
import Navbar from '../Navbar';
import Sidenav from '../Sidenav';


export default function DeckList(props) {

  const decks = props.deck.map(deck => {
    return (
      <DeckListItem
        key={deck.id}
        id={deck.id}
        name={deck.name}
        description={deck.description}
        subjectName={deck.subject_name}
        onClick={deck.toCards}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <div className="test">
        <Sidenav />
        <div className="deck-list"> {decks} </div>
      </div>
    </div>
  )
}


