import DeckListItem from "./DeckListItem";
import React, { useEffect, useState } from "react";
import { BrowserRouter as useParams } from "react-router-dom";
import axios from 'axios';

export default function DeckList() {
  const { id } = useParams();
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    axios.get(`/api/users/${id}/decks`)
      .then(res => {
        setDeck(res.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, []);

  const decks = deck.map(deck => {
    return (
        <DeckListItem
          key={deck.id}
          name={deck.name}
          description={deck.description}
          subject={deck.subject}
          />
      );
  });
  return <ul>{decks}</ul>;
}