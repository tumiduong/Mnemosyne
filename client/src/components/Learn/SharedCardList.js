import React, { useState, useEffect } from "react";
import './SharedCardList.css';
import SharedCardListItem from "./SharedCardListItem";
import Navbar from '../Navbar';
import axios from 'axios';


export default function SharedCardList(props) {
  const { link } = props.match.params;
  const [card, setCard] = useState([]);

  useEffect(() => {
    axios.get(`/api/decks/share/${link}`)
      .then(res => {
        console.log(res.data)
        setCard(res.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, []);

  const cards = card.map(card => {
    return (
      <SharedCardListItem
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
        <div className="card-list"> {cards} </div>
      </div>
    </div>
  )
}