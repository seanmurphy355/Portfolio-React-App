import NavComponent from "./Navbar";
import Profile from "./Home";
import NewParticle from "./realParticleJS.js";
import Project from "./Project";
import MyCard from "./Card";
import React from "react";
import SpacingGrid from "./grid";
import "./styles.css";

export default function ProjectPage() {
  return (
    <div className="App">
      <div className="Paticles-JS">
        <NewParticle />
      </div>
      <Project />
      <div className="theGrid">
        <SpacingGrid />
      </div>
      <NavComponent />
    </div>
  );
}
