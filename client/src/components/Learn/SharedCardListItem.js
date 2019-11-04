import React from "react";
import './SharedCardListItem.css'

export default function SharedCardListItem(props) {
  let imgUrl = props.image;

  let divStyle = {
    backgroundImage: `url(${imgUrl})`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition:'center',
    borderRadius: '0px 0px 20px 20px'
  };
 
  return (

    <div className="share-card-cover">
      <div className="share-card-inner">
        <div className="share-card-front">
          <div className="share-card-cover-top-border"></div>
          <div className="share-card-term">
            <p>{props.term}</p>
          </div>
        </div>


        <div className="share-card-back">
          <div className="share-card-back-top-border"></div>
          <div className="share-card-definition">
            <p>{props.definition}</p>
          </div>
          <div style={divStyle}>
          </div>
        </div>
      </div>
    </div>
  );
}