import React from "react";
import Navbar from '../Navbar';
import './Landing.css';

export default function Landing() {

  return (
    <div className="landing-page">
      <Navbar />
      <div className="landing-area">
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
        <img src={require('../../../../docs/landing-memorize1.png')} id="memorize-anything" />
        <div id="footer"> <p> Made with ❤️ by Berker Erol and Julie Duong </p> </div>
      </div>
    </div>

  );
}

