import React, { useState } from "react";
import './PracticeDefinition.css';

export default function PracticeDefinition(props) {
  let imgUrl = props.image;
  const [className, setClassName] = useState("defCard flipped");

  let divStyle = {
    backgroundImage: `url(${imgUrl})`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderRadius: '0px 0px 20px 20px'
  };

  const answerCard = () => {
    
    if (!props.clicked) {
      setClassName("defCard");
      setTimeout(() => setClassName("defCard flipped"), 1500)
      props.validate();
    }

    props.setClicked(true);

  };

  let correctBackground =  { backgroundColor: '#27AE60' };
  let wrongBackground = { backgroundColor: '#EB5757' };
  
  let correctBorder = { 
    backgroundColor: '#84E296',
    position: 'absolute', 
    width: '100%', 
    height: '5%', 
    borderRadius: '20px 20px 0px 0px' 
  };
  
  let wrongBorder = { 
    backgroundColor: '#FFC09F',
    position: 'absolute', 
    width: '100%', 
    height: '5%', 
    borderRadius: '20px 20px 0px 0px' 
  };

  return (

    <div className={className} onClick={() => answerCard()}>


      <div style={props.id === props.termID ? correctBackground : wrongBackground} className="defSide defFront">

        <div style={props.id === props.termID ? correctBorder : wrongBorder} className="defCard-front-top-border">
        </div>

        <div className="defCard">
          <p> {props.id === props.termID ? "Correct!" : "Wrong!"}</p>
        </div>

      </div>


      <div className="defSide defBack"  >

        <div className="defCard-back-top-border">
        </div>

        <div className="defCard-definition">
          <p> {props.definition}</p>
        </div>

        <div style={divStyle}>
        </div>

      </div>

    </div>


  );
}