import React, { useState } from 'react';
import './EnglishCards.css';
import axios from 'axios';
import CardListItem from '../Learn/CardListItem';

export default function EnglishCards(props) {
  const [term, setTerm] = useState("");
  const [definition, setDefinition] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");
  const [checked, setChecked] = useState(false);
  const deckID = props.deckID;
  const countCards = props.countCards;

  const create = () => {
    return axios.post(`/api/decks/${deckID}/cards`, {
      deck_id: deckID,
      term: term,
      definition: definition,
      image: image
    }, ['id'])
    .then(result => {
      setTerm("");
      setDefinition("");
      setImage("");
      setMessage("Card added! Add another if you'd like.")
      countCards();
    })
    .catch(error => {
      console.log(error);
    })
  };

  const imageFetch = () => {
    if (checked) {
      return axios.get(`https://api.unsplash.com/photos/random/?client_id=7b748622f472d0c2ef812b3ff212ea3fe883f7f939a06a62b40faf3f3f0ca21a&count=1&query=${term}`)
        .then(res => {
          setImage(res.data[0].urls.regular)
        })
        .catch(error => error ? setMessage("Sorry. Could not find a related photo.") : console.log(error))
    }

    if (!checked) {
      setImage("");
    }
  };

  const searchTerm = () => {
    return axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${term}?key=b2474d1c-a3fd-47bd-9b37-e2fc58547a29`)
      .then(res => {
        const definition = res.data[0].shortdef[0];
        setDefinition(definition);
        imageFetch();
      })
      .catch(error => error ? setMessage("Sorry. Could not find a definition.") : console.log(error))
  };

  const validate = () => {
    if (term === "") {
      setMessage("Term cannot be blank.");
      return;
    }
    if (definition === "") {
      setMessage("Definition cannot be blank.");
      return;
    }
    setMessage("");
    create();
  };

  return (
    <div className="create-card-wrap" >
      <div className="create-form-wrap">
        <form autoComplete="off" onSubmit={event => event.preventDefault()} className="create-form">
          <div className="term-form">
            <div className="term-lookup">
              <span className="title">WORD LOOK UP</span>
              <input
                className="term-input"
                name="term"
                type="text"
                placeholder="Enter a title for your deck"
                value={term}
                onChange={event => {
                  setTerm(event.target.value);
                  setMessage("");
                }}
              />
              <div>
                <input type='checkbox' onChange={event => checked ? setChecked(false) : setChecked(true)} value='1' name='selfdestruct'id="fetch-checkbox" /> 
                <span id="fetch-question"> Fetch a related visual from Unsplash </span>
              </div>
            </div>
            <div id="lookup" onClick={() => searchTerm()} >
              <a>Search</a>
            </div>
          </div>

          <div className="definition-form">
            <div className="definition-lookup">
              <span className="title">DEFINITION</span>
              <textarea
                rows="4"
                className="definition-input"
                name="definition"
                type="text"
                value={definition}
                placeholder="Enter a definition for your term, or use search to look up a definition."
                onChange={event => {
                  setDefinition(event.target.value);
                  setMessage("");
                }}
              />

            </div>
          </div>
        </form>
        
        <div id="save-card" onClick={() => validate()}> <a>Save Card</a> </div>
        <div id="error-msg">{message}</div>
        
      </div >
      <div className="card-preview-wrap">
      <span className="title">CARD PREVIEW</span>
      <CardListItem
         term={term}
         definition={definition}
         image={image}  
      />
      </div>
    </div>

  )
}