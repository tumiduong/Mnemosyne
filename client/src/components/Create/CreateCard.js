import React, { useState, useEffect } from 'react';
import './CreateCard.css';
import axios from 'axios';
import CardListItem from '../Learn/CardListItem';

export default function CreateCard(props) {

  const [term, setTerm] = useState("");
  const [definition, setDefinition] = useState("");
  const [checked, setChecked] = useState(false);


  const searchTerm = () => {
    return axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${term}?key=b2474d1c-a3fd-47bd-9b37-e2fc58547a29`)
      .then(res => {
        const definition = res.data[0].shortdef[0];
        setDefinition(definition);
      })
      .catch(function (error) {
        console.log(error);
      })
  };





  return (
    <div className="create-card-wrap" >
      <div className="create-form-wrap">
        <form autoComplete="off" onSubmit={event => event.preventDefault()} className="create-form">
          <div className="term-form">
            <div className="term-lookup">
              <span className="title">WORD LOOK UP </span>
              <input
                className="term-input"
                name="term"
                type="text"
                placeholder="Enter a title for your deck"
                value={term}
                onChange={event => setTerm(event.target.value)}
              />
              <div>
                <input type='checkbox' onChange={event => checked ? setChecked(false) : setChecked(true)} value='1' name='selfdestruct'id="fetch-checkbox" /> 
                <span id="fetch-question"> Fetch a related visual from Unsplash </span>
              </div>
            </div>
            <div id="lookup" onClick={() => searchTerm()} >
              <a >Search</a>
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
                onChange={event => setDefinition(event.target.value)}
              />

            </div>
      
          </div>

        </form>
        <div id="save-card"> <a>Save Card</a> </div>
        
      </div >
      <div className="card-preview-wrap">
      <span className="title">CARD PREVIEW</span>
      <CardListItem
         term={term}
         definition={definition}     
      />
      </div>
      

    </div>

  )
}