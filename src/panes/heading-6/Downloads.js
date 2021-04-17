import React from "react";
import { toSnakeCase } from "../../components/header_common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faSignature,
  faAd,
  faTv,
  faTabletAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faFigma, faSketch } from "@fortawesome/free-brands-svg-icons";

const ICONS = {
  Photoshop: faCamera,
  Figma: faFigma,
  Axure: faSignature,
  Sketch: faSketch,
  "Adobe XD": faAd,
  "Mockplus for Windows/Mac": faTv,
  "Mockplus for iOS/Android": faTabletAlt,
};

function Downloads({ menu, panes }) {
  return (
    <section className="pane downloads" key="downloads">
      {Object.entries(menu.Downloads).map(([title, object]) => {
        return (
          <article key={title} className={toSnakeCase(title)}>
            <h1>{title}</h1>
            <div className="layout">
              {Object.entries(object).map(([subtitle, [description, link]]) => {
                return (
                  <div className="brand-wrapper" key={subtitle}>
                    <FontAwesomeIcon
                      icon={ICONS[subtitle]}
                      size="2x"
                      className={toSnakeCase(subtitle)}
                    />
                    <div>
                      <h2>{subtitle}</h2>
                      <p>{description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default Downloads;
