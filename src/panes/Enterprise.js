import React from "react";

import { createLink } from "../components/header_common";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import apple_logo from "../images/Apple_Logo.svg";
function Enterprise({ menu, classNames }) {
  return (
    <>
      <article>
        <ul className="enterprise">
          <h1>Enterprise</h1>

          {Object.entries(menu["Enterprise"]).map(([title, link]) => {
            return <li>{createLink(title, link)}</li>;
          })}
        </ul>
        <ul className="solution">
          <h1>Solutions</h1>
          {Object.entries(menu.Solutions).map(([title, link]) => {
            return <li>{createLink(title, link)}</li>;
          })}
        </ul>
      </article>
      <aside>
        <h1>
          Case Study <FontAwesomeIcon icon={faArrowRight} size="1x" />{" "}
          <sub>
            <img src={apple_logo} alt="Apple" />
          </sub>
        </h1>
        <p>
          Canada's largest grocer delivers sites 10x faster, while saving money.
        </p>
        <div className="stat-holder">
          <div className="circle">
            <figure>
              <h2>93%</h2>
              <p>Better Performance</p>
            </figure>
          </div>
          <div className="circle">
            <figure>
              <h2>$38k</h2>
              <p>Monthly Cost Savings</p>
            </figure>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Enterprise;
