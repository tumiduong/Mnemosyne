import React, { useEffect, useState } from "react";
import { BrowserRouter as useParams } from "react-router-dom";
import './DeckList.css'
import axios from 'axios';
import DeckListItem from "./DeckListItem";
import Navbar from '../Navbar';
import Sidenav from '../Sidenav';


export default function DeckList(props) {
  // const { id } = useParams();
  // console.log("id", id);
  const { id } = props.match.params
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
        subjectName={deck.subject_name}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <div className="test">
        <Sidenav selected="learn" />
        <div className="deck-list"> {decks} </div>
      </div>
    </div>
  )
}


