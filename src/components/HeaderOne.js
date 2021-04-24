import React, { useState, useRef } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import Hamburger from "./Hamburger";
import { generateSubmenu } from "../components/header_common";
import "./header1.scss";

/*
  props:
  menus:
    Contains the main menus that are displayed
    first both in condensed mode and expanded.
  secondary:
    contains the menuitems that are displayed
    in expanded mode.
  tertiary:
    contains the menuitems that are displayed
    after the main items in the side menu in
    condensed mode.
  special:
    the menu, typically an icon, that is always
    displayed in the header.
*/
const HeaderOne = ({ menus, secondary, tertiary, special, children }) => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const showMenus = useState(false)[0];
  const menuFlag = useRef(null);
  const menuElement = useRef(null);
  const subMenus = useRef(null);

  React.useEffect(() => {}, [showMenus, activeSubmenu]);

  React.useEffect(() => {
    window.addEventListener("resize", detectWindowChange);

    return () => {
      window.removeEventListener("resize", detectWindowChange);
    };
  }, []);

  function toggleMenu() {
    const classList = menuFlag.current.classList;
    classList.toggle("slid");
    return classList.contains("slid");
  }

  function createLink(title, link) {
    if (link.includes(":")) {
      return <a href={link}>{title}</a>;
    }

    return <Link to={link}>{title}</Link>;
  }

  function detectWindowChange(event) {
    setActiveSubmenu(null);
  }

  function generateChevrons(shown) {
    return (
      <>
        <FontAwesomeIcon
          // make chevronDown the default
          icon={shown ? faChevronDown : faChevronRight}
          size="1x"
          className="condensed-only"
        />
        <FontAwesomeIcon
          icon={faChevronDown}
          size="1x"
          className="expanded-only"
        />
      </>
    );
  }

  function generateSubmenu1(menu, submenu, classNames) {
    const shown = menu.toUpperCase() === activeSubmenu;

    return generateSubmenu(menu, submenu, classNames, shown, generateChevrons);
  }

  function toggleSubmenu(event) {
    event.preventDefault();
    const menuName = event.target.innerText;

    if (menuName === activeSubmenu) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(menuName);
    }
  }

  return (
    <header className="header-1" ref={menuFlag}>
      {children}
      <nav>
        <Hamburger action={toggleMenu} />
        <figure className="special-menu condensed-only">
          {createLink(special[0], special[1])}
        </figure>
        <section className="menus" ref={menuElement}>
          <ul className="home-menu">
            <li key="home">
              <Link to="/">HOME</Link>
            </li>
          </ul>
          <ul
            className="main-menu"
            onClick={toggleSubmenu}
            ref={subMenus}
            role="presentation"
          >
            {Object.entries(menus).map(([menuName, submenu]) => {
              let link;
              if (typeof submenu === "string") {
                link = submenu;
                submenu = null;
              }

              if (link) {
                return (
                  <li className="main-item" key={menuName}>
                    {createLink(menuName, link)}
                  </li>
                );
              }
              const shown = menuName.toUpperCase() === activeSubmenu;
              return (
                <li className="main-item" key={menuName}>
                  {generateSubmenu1(menuName, submenu, "bubbles", shown)}
                </li>
              );
            })}
          </ul>
          <hr />
          <ul className="simple-menu condensed-only">
            {Object.entries(tertiary).map(([menuName, link]) => {
              return (
                <li key={menuName}>
                  <span>{createLink(menuName, link)}</span>
                </li>
              );
            })}
          </ul>

          <ul className="expanded-menu expanded-only">
            {secondary.map(([menuTitle, link]) => {
              return <li key={menuTitle}>{createLink(menuTitle, link)}</li>;
            })}
          </ul>
          <hr />
        </section>
      </nav>
    </header>
  );
};

export default HeaderOne;
