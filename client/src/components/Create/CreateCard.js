import React, { useState, useEffect } from 'react';
import './CreateCard.css';
import axios from 'axios';

export default function CreateCard(props) {

  const [term, setTerm] = useState("");
  const [definition, setDefinition] = useState("");

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
    <div className="form-wrap">

      <form autoComplete="off" onSubmit={event => event.preventDefault()}>
        <div className="term-form">
          <div className="term-lookup-left">
            <span>Look up the word</span>
            <input
              className="term-input"
              name="term"
              type="text"
              placeholder="Enter a title for your deck"
              value={term}
              onChange={event => setTerm(event.target.value)}
            />
          </div>
          <div className="term-lookup-right">
            <a id="lookup" onClick={() => searchTerm()}>Search</a>
          </div>
        </div>
        <div className="definition-form">
          <div className="definition-lookup-left">
            <span>Definition</span>
            <textarea
              rows="4"
              className="definition-input"
              name="definition"
              type="text"
              value={definition}
              placeholder="Describe your deck with few words"
              onChange={event => setDefinition(event.target.value)}
            />

          </div>
          <div className="definition-lookup-right">
            <a>Edit definition</a>
          </div>
        </div>

      </form>
      <a className="create-card">Create card</a>

    </div>

  )
}