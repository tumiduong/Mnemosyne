import React, { useState, useEffect } from "react";
import './CardList.css';
import CardListItem from "./CardListItem";
import Navbar from '../Navbar';
import Sidenav from '../Sidenav';
import axios from 'axios';


export default function CardList(props) {
  const { deckID } = props.match.params
  const [card, setCard] = useState([]);

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
        <Sidenav selected="learn"/>
        <div className="card-list"> {cards} </div>
      </div>
    </div>
  )
}


