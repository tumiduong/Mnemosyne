import React, { useState } from 'react';
import './CustomCards.css';
import axios from 'axios';
import CardListItem from '../Learn/CardListItem';

export default function CustomCards(props) {
  const [term, setTerm] = useState("");
  const [definition, setDefinition] = useState("");
  const [image, setImage] = useState("")
  const [message, setMessage] = useState("");
  const [preview, setPreview] = useState(false);
  const deckID = props.deckID;


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
      props.countCards();
    })
    .catch(error => {
      console.log(error);
    })
  };

  const imagePreview = () => {
    if (preview) {
      setPreview(false);
      setImage("");
    } else {
      setPreview(true);
    }
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
              <span className="title">TERM</span>
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
              <span className="title">IMAGE</span>
              <input
                className="term-input"
                name="image"
                type="text"
                placeholder="Enter an image URL"
                value={image}
                onChange={event => {
                  setImage(event.target.value);
                  setMessage("");
                }}
              />
            </div>
            <div id="lookup" onClick={() => imagePreview()} >
              <a>{preview ? "Remove Image" : "Add Image"}</a>
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
         image={preview && image}   
      />
      </div>
      

    </div>

  )
}