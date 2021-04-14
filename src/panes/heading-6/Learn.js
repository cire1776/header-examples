import React from "react";
import { Link } from "gatsby";

function Learn() {
  return (
    <section className="pane learn">
      <article>
        <h1>Tutorial</h1>
        <p>User guides, training and support articles</p>
      </article>
      <article>
        <h1>Blog</h1>
        <p>Learn UI/UX design, get latest design, trends and inspiration</p>
      </article>
      <article>
        <h1>Community</h1>
        <p>Ask questions, give feedback and share ideas</p>
      </article>
      <article className="featured">
        <p>
          What's New <Link to="#">Learn More &gt;</Link>
        </p>
        <Link to="#">
          <figure></figure>
          <div>
            <span>New Feature: Mockplus Plugin Help Detect Artboard Size</span>
            <p>March 5, 2021</p>
          </div>
        </Link>
      </article>
    </section>
  );
}

export default Learn;
