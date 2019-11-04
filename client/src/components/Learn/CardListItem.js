import React, {useState} from "react";
import './CardListItem.css';

export default function CardListItem(props) {
  let imgUrl = props.image;
  const [ className, setClassName] = useState("cardList");
  
  let divStyle = {
    backgroundImage: `url(${imgUrl})`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderRadius: '0px 0px 20px 20px'
  };

  const switchClass = () => {
    if (className === "cardList") {
      setClassName("cardList flipped")
    } else if (className === "cardList flipped") {
      setClassName("cardList")
    }
  };

  return (

    <div className="flipCardList">
      <div className={className} onClick={ () => switchClass()}>
        <div className="sideList frontList">
          <div className="cardList-front-top-border"> </div>
          <div className="cardList-term">
            <p> {props.term} </p>
          </div>

        </div>
        <div className="sideList backList">
          <div className="cardList-back-top-border"> </div>
          <div className="cardList-definition">
            <p> {props.definition} </p>
          </div>

          <div style={divStyle}>

          </div>
        </div>
      </div>
    </div>
  );
}

