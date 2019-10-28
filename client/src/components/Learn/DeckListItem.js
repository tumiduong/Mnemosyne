import React from "react";

export default function DeckListItem(props) {
  return (
    <li>
      <h2>{props.name}</h2> 
      <h3>{props.subjectName}</h3>
      <h3>{props.description}</h3>
    </li>
  );
}