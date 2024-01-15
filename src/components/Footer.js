import * as React from "react";
import { Link } from "gatsby";

import linkedin from "../img/social/linkedin.svg";

const Footer = () => {
  return (
    <footer className="footer has-background-black has-text-white-ter">
      <div className="content has-text-centered">Taylor Kingsbery</div>
      <div className="content has-text-centered has-background-black has-text-white-ter">
        <div className="container has-background-black has-text-white-ter">
          <div style={{ maxWidth: "100vw" }} className="columns">
            <div className="column is-4">
              <section className="menu">
                <ul className="menu-list">
                  <li>
                    <Link to="/" className="navbar-item">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/about">
                      About
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
            <div className="column is-4">
              <section>
                <ul className="menu-list">
                  <li>
                    <Link className="navbar-item" to="/blog">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/posts/resume">
                      Resume
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
            <div className="column is-4 social">
              <a
                title="linkedin"
                href="https://www.linkedin.com/in/taylor-kingsbery-ms-mls-4340a094"
              >
                <img
                  src={linkedin}
                  alt="linkedin"
                  style={{ width: "1em", height: "1em", color: "#0a66c2" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
