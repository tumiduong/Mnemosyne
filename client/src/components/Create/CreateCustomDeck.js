import React, { useState, useEffect } from 'react';
import './CreateCustomDeck.css'
import Navbar from '../Navbar';
import Sidenav from '../Sidenav';
import CreateCard from './CreateCard';

export default function CreateCustomDeck(props) {

  const [title, setTitle] = useState(props.name || "");
  const [description, setDescription] = useState(props.name || "");
  const [error, setError] = useState("");
  const [display, setDisplay] = useState("");


  const reset = () => {
    setTitle("");
    setDescription("");
    setError("");
  };

  const cancel = () => {
    reset();
    setDisplay("");
  };

  const validate = () => {
    if (title === "") {
      setError("Title cannot be blank");
      return;
    }
    if (description === "") {
      setError("Description cannot be blank");
      return;
    }
    setError("");
    setDisplay("show");
    props.onSave(title, description);
  }

  return (
    <div>
      <Navbar />
      <div className="test">
        <Sidenav selected="create" />

        <div className="custom-deck-creation">
          <div className="info-bar">
            <span className="info">You are now creating a custom deck.</span>
            <span className="info-else">Wanted to create a deck for English practice?</span>
            <a className="info-else-click" href="/create/englishdeck">Click here</a>
          </div>
          <div className="deck-details-bar">
            <div className="deck-details-bar-left">
              <form autoComplete="off" onSubmit={event => event.preventDefault()}>
                <input
                  className="deck-title-input"
                  name="title"
                  type="text"
                  placeholder="Enter a title for your deck"
                  value={title}
                  onChange={event => setTitle(event.target.value)}
                />
              </form>
              <form autoComplete="off" onSubmit={event => event.preventDefault()}>
                <input
                  className="deck-description-input"
                  name="description"
                  type="text"
                  placeholder="Describe your deck with few words"
                  value={description}
                  onChange={event => setDescription(event.target.value)}
                />
              </form>
              <section className="appointment__validation">{error}</section>

            </div>
            <div className="deck-details-bar-right">
              <section className="appointment__actions">
                <button className="button-cancel" onClick={() => cancel()}>Cancel</button>
                <button className="button-save" onClick={validate}> Next </button>
              </section>
              {display && <div>Hello</div>}


            </div>

          </div>



        </div>

      </div>
    </div>
  )
}
