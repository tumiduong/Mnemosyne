import React from "react";
import './DeckList.css'
import DeckListItem from "./DeckListItem";
import Navbar from '../Navbar';
import Sidenav from '../Sidenav';


export default function DeckList(props) {
  // const { id } = useParams();
  // const { id } = props.match.params

  const decks = props.deck.map(deck => {
    return (
      <DeckListItem
        key={deck.id}
        name={deck.name}
        description={deck.description}
        subjectName={deck.subject_name}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <div className="test">
        <Sidenav selected="learn" />
        <div className="deck-list"> {decks} </div>
      </div>
    </div>
  )
}


