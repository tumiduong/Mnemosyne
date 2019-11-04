import React, { useState, useEffect } from "react";
import './CardList.css';
import CardListItem from "./CardListItem";
import Navbar from '../Navbar';
import Sidenav from '../Sidenav';
import axios from 'axios';

export default function CardList(props) {
  const { deckID } = props.match.params;
  const [card, setCard] = useState([]);
  const urlCustom = `/edit/deck/${deckID}/custom`;
  const urlEnglish = `/edit/deck/${deckID}/english`;

  useEffect(() => {
    axios.get(`/api/decks/${deckID}/cards`)
      .then(res => {
        setCard(res.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, []);

  const cards = card.map(card => {
    return (
      <CardListItem
        key={card.id}
        id={card.id}
        image={card.image}
        term={card.term}
        definition={card.definition}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <div className="test">
        <Sidenav selected="learn" />
        <div className="cardlist-big-wrap">
          <div className="cardlist-edit-bar">
            <span className="cardlist-edit-bar-info">You are now viewing your deck. Wanted to add cards?</span>
            <a href={urlEnglish} className="cardlist-edit-bar-customcard">Add an English practice card </a>
            <a href={urlCustom} className="cardlist-edit-bar-englishcard">Add a custom card</a>
          </div>
          <div className="card-list"> {cards} </div>
        </div>
      </div>
    </div>
  )
}