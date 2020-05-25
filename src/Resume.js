import React from "react";
import "./styles.css";
import MyResume from "./Resume.pdf";

export default function Resume() {
  return (
    <center>
      <div className="moveResume">
        <h1>Resume</h1>
        <embed type="application/pdf" className="UserResume" src={MyResume} />
      </div>
    </center>
  );
}
