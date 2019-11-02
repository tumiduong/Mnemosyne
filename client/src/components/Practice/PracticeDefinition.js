import React, { useState } from "react";
import './PracticeDefinition.css';


export default function PracticeDefinition(props) {

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

  const [className, setClassName] = useState("defCard flipped");

  const switchDefClass = () => {

    props.setClicked(true);
    
    if (props.clicked != true) {
      setClassName("defCard");
      props.validate();
    } 
  }


  let correctResults = [`Good job!`, `Yep, that's right!`, `Correct!`];
  let wrongResults = [`Oops, not quite!`, `Sorry, wrong answer!`, `Be careful next time!`];

  let resultBackground = props.result ? { backgroundColor: '#27AE60' } : { backgroundColor: '#EB5757' }


  
  let resultTopBackground = props.result ? { backgroundColor: '#84E296',position: 'absolute', width: '100%', height: '5%', borderRadius: '20px 20px 0px 0px' } : { backgroundColor: '#FFC09F',position: 'absolute', width: '100%', height: '5%', borderRadius: '20px 20px 0px 0px' }

  return (



    <div className={className} onClick={() => switchDefClass()}>


      <div style={resultBackground} className="defSide defFront">

        <div style={resultTopBackground} className="defCard-front-top-border">
        </div>

        <div className="defCard">
          <p> {props.result ? correctResults[Math.floor(Math.random() * 3)] : wrongResults[Math.floor(Math.random() * 3)]} </p>
        </div>

      </div>


      <div className="defSide defBack"  >

        <div className="defCard-back-top-border">
        </div>

        <div className="defCard-definition">
          <p> {props.definition} </p>
        </div>

        <div style={divStyle}>
        </div>

      </div>

    </div>


  );
}