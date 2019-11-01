import React, {useState} from "react";
import './CardListItem.css';


export default function CardListItem(props) {

  let imgUrl = props.image;
  
  let divStyle = {
    backgroundImage: `url(${imgUrl})`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderRadius: '0px 0px 20px 20px'
  };

  const [ className, setClassName] = useState("card")

  const switchClass = () => {
    if (className === "card") {
      setClassName("card flipped")
    } else if (className === "card flipped") {
      setClassName("card")
    }
  }



  return (

    <div className="flipCard">
      <div className={className} onClick={ () => switchClass()}>
        <div className="side front">
          <div className="card-front-top-border"> </div>
          <div className="card-term">
            <p> {props.term} </p>
          </div>

        </div>
        <div className="side back">
          <div className="card-back-top-border"> </div>
          <div className="card-definition">
            <p> {props.definition} </p>
          </div>

          <div style={divStyle}>

          </div>
        </div>
      </div>
    </div>
  );
}

