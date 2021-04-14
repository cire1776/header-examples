import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faNewspaper } from "@fortawesome/free-solid-svg-icons";

function Pricing() {
  return (
    <section className="pane pricing">
      <article>
        <FontAwesomeIcon icon={faUsers} size="4x" />
        <section>
          <h1>Mockplus Cloud</h1>
          <p>
            One platform for design, prototype, hand-off and design systems -
            plans that scale with your team
          </p>
        </section>
      </article>
      <article>
        <FontAwesomeIcon icon={faNewspaper} size="4x" />
        <section>
          <h1>Mockplus Classic</h1>
          <p>Desktop prototyping tool - simple plans for everyone</p>
        </section>
      </article>
    </section>
  );
}

export default Pricing;
