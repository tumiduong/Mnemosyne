import React, { useRef, useState } from "react";
import './ProfileDeckItem.css';

export default function ProfileDeckItem(props) {
  const [className, setClassName] = useState("profile-card");
  const linkRef = useRef(null);

  const copyToClipboard = () => {
    linkRef.current.select();
    document.execCommand('copy');
  };

  const flip = () => {
    if (className === "profile-card") {
      setClassName("profile-card flipped");
    } else if (className === "profile-card flipped") {
      setClassName("profile-card");
    }
  };

  return (
    <div>
    <div className="profile-flip">
      <div className={className} onClick={() => flip()}>
        <div className="side profile-deck-cover">
          <div className="profile-deck-cover-top-border"></div>
          <div className="profile-cover-subject">{(props.subjectName).toUpperCase()}</div>
          <div className="profile-cover-title">
            {props.name}
          </div>
          <div className="profile-cover-text">
            <span>{props.description}</span>
          </div>
        </div>
        <div className="side profile-deck-back">
          <div className="profile-deck-cover-back-border"></div>
          <div className="profile-back-text">
            <span>{props.rounds && props.rounds}</span>
          </div>
        </div>
      </div>
    </div>
      {props.share &&
      <div className="share-wrap">
        <input
          className="link-input"
          name="link"
          type="text"
          ref={linkRef}
          value={"localhost:3000/" + props.link}
        />
        <div className="share-button" onClick={() => copyToClipboard()}>Copy link</div>
      </div>}
    </div>
    

  );
}

