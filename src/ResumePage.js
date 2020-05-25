import NavComponent from "./Navbar";
import Profile from "./Home";
import NewParticle from "./realParticleJS.js";
import Resume from "./Resume";
import React from "react";
import "./styles.css";

export default function ResumePage() {
  return (
    <div>
      <div className="Paticles-JS">
        <NewParticle />
      </div>
      <div className="fitPage">
        <NavComponent />
        <Resume />
      </div>
    </div>
  );
}
