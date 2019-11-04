import React, { useState } from "react";
import './DeckListItem.css';
import { Redirect } from "react-router-dom";
import axios from "axios";

export default function DeckListItem(props) {
  const [redirect, setRedirect] = useState(false);

  const toCards = (id) => {
    if (props.mode === "practice" && redirect) {
      return <Redirect push to={{ pathname: `/practice/${id}` }} />
    } else if (props.mode === "learn" && redirect) {
      return <Redirect push to={{ pathname: `/decks/${id}/cards` }} />
    }
  };

  const remove = (id) => {
    return axios.post(`/api/decks/delete/${id}`)
      .then(res => {
        console.log("Successfully deleted.")
        document.location.reload(true)
      })
      .catch(err => {
        console.log(err);
      })
  };

  return (

    <div className="big-wrap">

      <div className="deck-cover" onClick={() => { setRedirect(true) }}>
        <div>{toCards(props.id)}</div>
        <div className="deck-cover-top-border"></div>
        <div className="cover-subject">{(props.subjectName).toUpperCase()}</div>
        <div className="cover-title">
          {props.name}
        </div>
        
        <div className="cover-text">
          <span>{props.description}</span>
          <span>{props.rounds && props.rounds}</span>
          

        </div>
      </div>
      {props.display && <div onClick={() => remove(props.id)} className="delete-button"> Delete</div>}
    </div>

  );
}

