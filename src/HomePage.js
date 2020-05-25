import NavComponent from "./Navbar";
import Profile from "./Home";
import NewParticle from "./realParticleJS.js";

import React from "react";
import "./styles.css";
export default function HomePage() {
  return (
    <div className="App">
      <div className="Paticles-JS">
        <NewParticle />
      </div>
      <NavComponent />
      <Profile />
    </div>
  );
}
