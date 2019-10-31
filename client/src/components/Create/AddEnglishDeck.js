import React, { useState, useEffect } from 'react';
import './AddEnglishDeck.css'
import Navbar from '../Navbar';
import Sidenav from '../Sidenav';
import EnglishCards from './EnglishCards';
import axios from 'axios';

export default function AddEnglishDeck(props) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("");

  const { deckID } = props.match.params;

  useEffect(() => {
    axios.get(`/api/decks/${deckID}`)
      .then(res => {
        setTitle(res.data.name);
        setDescription(res.data.description);
        setSubject(res.data.subject_name);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <div>
      <Navbar />
      <div className="test">
        <Sidenav selected="create" />

        <div className="custom-deck-creation">
          <div className="info-bar">
            <span className="info">You are now creating an English deck.</span>
            <span className="info-else">Wanted to create a custom deck?</span>
            <a className="info-else-click" href="/create/customdeck">Click here</a>
          </div>
          <div className="deck-details-bar">
            <div className="deck-details-bar-left">
              
              <span>{title}</span>
              <span>{description}</span>
              <span>{subject}</span>

            </div>
          </div>
          <EnglishCards deckID={deckID}/>



        </div>
        

      </div>
    </div>
  )
}
