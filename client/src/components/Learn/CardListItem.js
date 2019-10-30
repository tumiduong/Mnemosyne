import React from "react";
import './CardListItem.css'

export default function CardListItem(props) {

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
          <div style={divStyle}>
          </div>
        </div>
      </div>
    </div>
  );
}

