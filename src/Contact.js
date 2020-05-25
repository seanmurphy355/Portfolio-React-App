import NavComponent from "./Navbar";
import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function Refresh() {}

export default function contact() {
  return (
    <div class="Container">
      <div class="ContactText">
        <h2>Get In Touch</h2>
        <div class="MyContainer">
          <form
            action="https://formspree.io/mdodboaz"
            method="POST"
            className="contact"
            target="_blank"
          >
            <div id="provideEmail">
              <label for="yourEamil" className="AboveText" id="address">
                Email Address:
              </label>
              <input type="email" name="email" id="yourEmail"></input>
            </div>

            <div id="Subject">
              <label for="emailSubject" className="AboveText">
                Enter Subject:
              </label>
              <input type="text" name="subject" id="emailSubject"></input>
            </div>

            <div id="Message">
              <label for="emailMessage" className="AboveText" id="box">
                Your Message:
                <div id="textbox">
                  <textarea
                    type="text"
                    name="message"
                    class="contact-message"
                    id="emailMessage"
                  ></textarea>
                </div>
                <div id="buttonlocation">
                  <Link to="/" style={{ textDecoration: "none" }}></Link>
                  <button onClick={Refresh()} className="btn" href="/Contact">
                    Sumbit
                  </button>
                </div>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
