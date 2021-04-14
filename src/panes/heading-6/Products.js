import React from "react";
import collaboration from "../../images/header-online1.png";
function Products() {
  return (
    <section className="pane products">
      <article>
        <h2>Design Collaboration</h2>
        <h1>Mockplus Cloud</h1>
        <p>Streamline collaboration between design and development.</p>
      </article>
      <article>
        <h2>Interactive Prototyping</h2>
        <h1>Mockplus Classic</h1>
        <p>The best desktop prototyping tool trusted by millions of users.</p>
      </article>
      <article className="collaboration">
        <img src={collaboration} alt="Collaboration" />
        <section>
          <h2>Online Team Tool</h2>
          <h1>Remote collaboration</h1>
          <p>Best remote work solution for design teams.</p>
        </section>
      </article>
    </section>
  );
}

export default Products;
