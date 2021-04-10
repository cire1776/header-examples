import React from "react";
import { Link } from "gatsby";
import logo from "../../images/apmlogo.svg";
import bookcover from "../../images/6ea302f8-370.webp";
import { createLink } from "../../components/header_common";

function Jamstack({ menu, classNames }) {
  return (
    <>
      <article>
        <ul>
          <h1>Jamstack Architecture</h1>
          {Object.entries(menu).map(([title, link]) => {
            return <li>{createLink(title, link)}</li>;
          })}
        </ul>
      </article>
      <aside>
        <header>
          <img src={logo} className="logo" alt="stylized pegasus" />
          <h1>
            Alpha-Pegasus <span>Media</span>
          </h1>
        </header>
        <section className="book">
          <Link to={menu[`Jamstack Book`]}>
            <div className="blurb">
              <h3>New Techniques for Ultra Fast Sites and Web Applications</h3>
              <p>By Mathias Biilmann &amp; Phil Hawksworth</p>
            </div>
            <div className="bookcover">
              <img src={bookcover} alt="cover of book" />
            </div>
          </Link>
        </section>
      </aside>
    </>
  );
}

export default Jamstack;
