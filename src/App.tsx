import React, { useState } from "react";
import "./App.css";
import Social from "./Social";

import { me } from "./Data";

function App() {
  return (
    <div className="main">
      <div className="container">
        <img src={me.picture} className="photo" alt={me.name} />
        <div className="detail">
          <h1 dangerouslySetInnerHTML={{ __html: `${me.name}, ${me.humor}` }} />
          <h5>{me.position}</h5>
        </div>
        <Social />
      </div>
    </div>
  );
}

export default App;
