import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSync,
  faGlobe,
  faCloudMeatball,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import jamstack from "../images/Jamstack_Icon_Black.svg";
import react from "../images/React-icon.svg";
import gatsby from "../images/Gatsby.svg";

function Platform({ menu, classNames }) {
  const ICONS = {
    Build: faLayerGroup,
    Edge: faGlobe,
    Functions: faCloudMeatball,
    Workflow: faSync,
    Gatsby: gatsby,
    React: react,
    Jamstack: jamstack,
  };

  return (
    <>
      <article>
        <h1>The Platform</h1>
        <p>
          <strong>Instantly build</strong> and deploy your sites to our global
          network from Git. Custom domains, HTTPS, deploy previews, rollbacks,
          and much more.
        </p>
        <div className="features">
          <ul>
            {Object.entries(menu["The Platform"]).map(([title, link]) => {
              return (
                <li>
                  <Link to={link}>
                    <FontAwesomeIcon icon={ICONS[title]} size="1x" />
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </article>
      <aside>
        <h1>Key Features</h1>
        <ul className="key-features">
          {Object.entries(menu["Key Features"]).map(([title, link]) => {
            return (
              <li>
                <Link to={link}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </aside>
      <footer>
        <h1>Technologies:</h1>
        <ul>
          {Object.entries(menu["Technologies"]).map(([title, link]) => {
            return (
              <li>
                <Link to={link}>
                  <img
                    src={ICONS[title]}
                    alt={title}
                    className={`${title.toLowerCase()}-icon`}
                  />
                  <span>{title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </footer>
    </>
  );
}

export default Platform;
