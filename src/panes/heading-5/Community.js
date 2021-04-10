import React from "react";
import { Link } from "gatsby";
import community from "../../images/masthead-community.svg";
import { createLink } from "../../components/header_common";

function Community({ menu, classNames }) {
  return (
    <>
      <article>
        <ul>
          <h1>Community</h1>
          {Object.entries(menu).map(([title, link]) => {
            return <li>{createLink(title, link)}</li>;
          })}
        </ul>
      </article>
      <aside>
        <Link to={menu["Community Hub"]}>
          <h2>Visit Our Community</h2>
          <p>Find resources, ask questions, and share your knowledge!</p>
          <img src={community} alt="community" />
        </Link>
      </aside>
    </>
  );
}

export default Community;
