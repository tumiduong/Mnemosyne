import React from "react";
import './CardListItem.css'

export default function CardListItem(props) {


  return (

    <div className="card-cover">
      <div className="card-inner">
        <div className="card-front">
          <div className="card-cover-top-border"></div>
          <div className="card-term">
            <p>{props.term}</p>
          </div>
        </div>


        <div className="card-back">
          <div className="card-back-top-border"></div>
          <div className="card-definition">
            <p>{props.definition}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

