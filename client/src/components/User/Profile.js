import React, {useState, useEffect} from "react";
import './Profile.css'
import Navbar from '../Navbar';
import Sidenav from '../Sidenav';
import DeckListItem from '../Learn/DeckListItem';
import axios from 'axios';


export default function Profile(props) {
  const [rounds, setRounds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deck, setDeck] = useState([]);
  const userID = localStorage.id;

  useEffect(() => {
    const getRounds = axios.get(`/api/users/${userID}/rounds`);
    const getDecks = axios.get(`/api/users/${userID}/decks`);

    Promise.all([getRounds, getDecks])
      .then(all => {
        setRounds(all[0].data);
        setDeck(all[1].data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);


  const roundsPerDeck = (deckID) => {
    const byDeck = [...rounds].filter(round => round.deck_id === deckID);
    
    const stats = byDeck.map(round => {
      return (
        <div>
          Score: {round.score}
        </div>
      )
    })
    return stats;
  }

  const decks = deck.map(deck => {
    return (
      <DeckListItem
        key={deck.id}
        id={deck.id}
        subjectName={deck.name}
        rounds={roundsPerDeck(deck.id)}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <div className="test">
        <Sidenav />
        <div className="profile-list">
        {!loading && decks}
        </div>
        
      </div>
    </div>
  )
}


