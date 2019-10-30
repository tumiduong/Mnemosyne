import React, { useState } from "react";
import './DeckListItem.css';
import { Redirect } from "react-router-dom";

export default function DeckListItem(props) {
  const [redirect, setRedirect] = useState(false);
  
  const toCards = (id) => {
    if (redirect) {
    return <Redirect push to={{pathname: `/decks/${id}/cards`}}/>
    }
  }

  return (

    <div className="deck-cover" onClick={() => {setRedirect(true)}}>
      <div>{toCards(props.id)}</div>
      <div className="deck-cover-top-border"></div>
      <div className="cover-subject">{(props.subjectName).toUpperCase()}</div>
      <div className="cover-title">
        {props.name}
      </div>
      <div className="cover-text">
        <span>{props.description}</span>
      </div>
    </div>

  );
}

