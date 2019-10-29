import React, { useState, useEffect } from 'react';
import './CreateCustomDeck.css'
import Navbar from '../Navbar';
import Sidenav from '../Sidenav';
import CreateCard from './CreateCard';
import axios from 'axios';

export default function CreateCustomDeck(props) {

  const [title, setTitle] = useState(props.title || "");
  const [description, setDescription] = useState(props.description || "");
  const [subject, setSubject] = useState(props.subject || "");
  const [error, setError] = useState("");
  const [display, setDisplay] = useState("");

  const create = () => {
    return axios
      .post('/api/decks/', {
        name: subject,
        user_id: localStorage.id,
        title: title,
        description,
        link: Math.random().toString(36).substr(2, 6)
      })
      .then(res => {
        console.log("DECK ID:", res.data)
      })
      .catch(err => console.log(err))
  }

  const reset = () => {
    setTitle("");
    setDescription("");
    setSubject("");
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
    create();
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

                <input
                  className="deck-description-input"
                  name="description"
                  type="text"
                  placeholder="Describe your deck with few words"
                  value={description}
                  onChange={event => setDescription(event.target.value)}
                />

                <input
                  className="deck-description-input"
                  name="subject"
                  type="text"
                  placeholder="Name the subject"
                  value={subject}
                  onChange={event => setSubject(event.target.value)}
                />
              </form>
              <section className="appointment__validation">{error}</section>

            </div>
            <div className="deck-details-bar-right">
              <section className="appointment__actions">
                <button className="button-cancel" onClick={() => cancel()}>Cancel</button>
                <button className="button-save" onClick={() => validate()}> Next </button>
              </section>
              {display && <div>Hello</div>}


            </div>

          </div>



        </div>

      </div>
    </div>
  )
}
