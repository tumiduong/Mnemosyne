import React from "react";
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


  return (

    <div >
      <div></div>
      <div >
        <p>{props.definition}</p>
      </div>
      <div style={divStyle}>
      </div>
    </div>
  );
}