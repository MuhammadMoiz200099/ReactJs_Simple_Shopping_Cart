import React from "react";
import "./Landing.css";

import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <section className="header">
        <div className="container">
          <div className="row">
            <div className="hero-text text-center">
              <h1>Shop your Dreams</h1>
            </div>
            <div className="demo-text text-center">
              <p>
                Share Your Thought's With Us And We Will Acknowledge The World{" "}
                <br />
                Feel Free And Express Your Yourself To World
              </p>
            </div>
            <div className="value-buttons text-center">
              <Link className="buttonOne" to="/">
                Get Started
              </Link>
              <Link className="buttonTwo" to="/">
                Contact Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
