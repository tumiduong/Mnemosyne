import React from "react";
import './DeckListItem.css'

export default function DeckListItem(props) {
  return (

    <div id="deck-cover">
      <div className="deck-cover-top-border"></div>
      <div className="cover-subject">{(props.subjectName).toUpperCase()}</div>
      <div className="cover-title">
        <p>{props.name}</p>
      </div>
      <div className="cover-text">
        <span>{props.description}</span>
      </div>
    </div>

  );
}

