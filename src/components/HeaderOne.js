import React, { useState, useRef } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

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

  function createLink(title, link) {
    if (link.includes(":")) {
      return <a href={link}>{title}</a>;
    }

    return <Link to={link}>{title}</Link>;
  }

  function detectWindowChange(event) {
    setActiveSubmenu(null);
  }

  function generateSubmenu(submenu, submenuItems, classNames) {
    if (!submenuItems) {
      return <></>;
    }
    const shown = submenu.toUpperCase() === activeSubmenu;

    return (
      <>
        <span>{submenu}</span>

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
        <ul className={`submenu ${classNames} ${shown ? "shown" : ""}`}>
          {submenuItems.map(([menuItem, link]) => {
            return <li>{createLink(menuItem, link)}</li>;
          })}
        </ul>
      </>
    );
  }

  function toggleMenu(event) {
    menuFlag.current.classList.toggle("slid");
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
        <i
          className="navbar-switch"
          onClick={toggleMenu}
          onKeyDown={toggleMenu}
          role="button"
          tabIndex={0}
        >
          <span className="top-bar"></span>
          <span className="middle-bar"></span>
          <span className="bottom-bar"></span>
        </i>
        <figure className="special-menu condensed-only">
          {createLink(special[0], special[1])}
        </figure>
        <section className="menus" ref={menuElement}>
          <ul className="home-menu">
            <li>
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

              return (
                <li className="main-item" key={menuName}>
                  {generateSubmenu(menuName, submenu, "bubbles")}
                </li>
              );
            })}
          </ul>
          <hr />
          <ul className="simple-menu condensed-only">
            {tertiary.map(([menuName, link]) => {
              return (
                <li>
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
