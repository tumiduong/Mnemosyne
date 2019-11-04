import React, {useState, useEffect} from "react";
import './Profile.css'
import Navbar from '../Navbar';
import Sidenav from '../Sidenav';
import ProfileDeckItem from './ProfileDeckItem';
import axios from 'axios';

export default function Profile(props) {
  const [rounds, setRounds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deck, setDeck] = useState([]);
  const [share, setShare] = useState(false);
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

  const toggle = () => {
    share ? setShare(false) : setShare(true);
  };

  const roundsPerDeck = (deckID) => {
    const byDeck = [...rounds].filter(round => round.deck_id === deckID);
    
    const stats = byDeck.map(round => {
      return (
        <div 
          key={round.id}>
          Score: {round.score + "/100"}
        </div>
      )
    })
    return stats;
  };

  const decks = deck.map(deck => {
    return (
      <ProfileDeckItem
        key={deck.id}
        id={deck.id}
        name={deck.name}
        description={deck.description}
        subjectName={deck.subject_name}
        link={deck.link}
        rounds={roundsPerDeck(deck.id)}
        share={share}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <div className="test">
        <Sidenav />
        <div className="profile-wrap">
        <div className="profile-bar">
            <span className="profile-bar-info">{share ? "Share with all your friends!" : "These are your decks and scores."}</span>
            <span className="profile-bar-info-light">{share ? "Done sharing?" : "Want to share your decks?"} </span>
            <a className="profile-button" onClick={() => toggle()}>{share ? "Close" : "Share decks"}</a>
          </div>
        <div className="profile-list">
        {!loading && decks}
        </div>
        </div>
      </div>
    </div>
  )
}