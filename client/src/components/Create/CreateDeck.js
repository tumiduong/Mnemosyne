import React from 'react';
import './CreateDeck.css';
import Navbar from '../Navbar';
import Sidenav from '../Sidenav';

export default function CreateDeck(props) {

  return (
    <div>
      <Navbar />
      <div className="test">
      <Sidenav selected="create"/>

        <div className="create-deck">
          <div className="create-custom-deck">
            <div id="custom-deck-wrap">
              <div className="deck-wrap-top-border">
              </div>
              <div className="explanation-title">
                <p>Create a custom deck</p>
              </div>
              <div className="explanation-text">
                <span>Add a term and definition,<br />
                  and let your creativity flow.
                </span>
              </div>
              <a type="submit" className="create-custom-button" href="/create/customdeck/" > Create </a>
            </div>

          </div>
          <div className="create-english-deck">
            <div id="custom-deck-wrap">
              <div className="deck-wrap-top-border-blue">
              </div>
              <div className="explanation-title-english">
                <p>Create a deck for <br /> English practice</p>
              </div>
              <div className="explanation-text">
                <span>Look up any word,<br />
                  and see the magic happen.
                </span>
              </div>
              <a type="submit" className="create-english-button" href="/create/englishdeck/" > Create</a>
            </div>


          </div>

        </div>
      </div>
    </div>
  )
}
