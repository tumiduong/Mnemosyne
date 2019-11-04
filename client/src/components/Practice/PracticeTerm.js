import React, { useState } from "react";
import './PracticeTerm.css';


export default function PracticeTerm(props) {
  const [className, setClassName] = useState("termCard");
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

  const switchClass = () => {
    if (className === "termCard") {
      setClassName("termCard flipped")
    } else if (className === "termCard flipped") {
      setClassName("termCard")
    }
  };

  return (

    <div className="flipTermCard" onClick={props.onClick}>

      <div className={className} onClick={() => switchClass()}>

        <div className="termSide termFront">

          <div className="termCard-front-top-border">
          </div>

          <div className="termCard">
            <p> {props.term} </p>
          </div>

        </div>


        <div className="termSide termBack">

          <div className="termCard-back-top-border">
          </div>

          <div className="termCard-definition">
            <p> {props.cheating} </p>
          </div>

          <div style={divStyle}>
          </div>

        </div>

      </div>

    </div>
  );
}