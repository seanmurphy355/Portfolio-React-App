import NavComponent from "./Navbar";
import Profile from "./Home";
import NewParticle from "./realParticleJS.js";
import Contacts from "./Contact";
import React from "react";
import "./styles.css";

export default function ContactPage() {
  return (
    <div className="App">
      <div className="Paticles-JS">
        <NewParticle />
      </div>
      <NavComponent />
      <Contacts />
    </div>
  );
}
