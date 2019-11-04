import React, { useState, useEffect } from "react";
import './SharedCardList.css';
import SharedCardListItem from "./SharedCardListItem";
import Navbar from '../Navbar';
import axios from 'axios';

export default function SharedCardList(props) {
  const { link } = props.match.params;
  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`/api/decks/share/${link}`)
      .then(res => {
        console.log(res.data)
        setCard(res.data);
        setLoading(false);
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
      <div className="shared-wrap">
          <div className="share-info-bar">
          {!loading && 
            <span className="share-info">You are now viewing {card[0].user_name}'s {card[0].deck_name} deck.</span>}
          </div>
        <div className="shared-card-list"> {cards} </div>
      </div>
    </div>
  )
}