import React, { useState, useRef } from "react";
import { Link } from "gatsby";
import logo from "../images/apmlogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faChevronRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import mesh from "../images/pexels-photo-3636718.jpeg";

import "./main.scss";

const MENUS = {
  Domains: ["Search", "Transfer", "Premium"],
  "Website Builder": ["Website Builder", "Website Marketing"],
  Email: ["Office 365", "Google Workspace"],
  "Web Hosting": ["Website Hosting", "WordPress Hosting"],
  Security: [
    "SSL Certificates",
    "Domain Privacy & Protection",
    "SiteLock Security",
  ],
};

// markup
const IndexPage = () => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [showMenus, setShowMenus] = useState(false);
  const menuFlag = useRef(null);
  const menuElement = useRef(null);
  const subMenus = useRef(null);
  const clickArea = useRef(null);

  React.useEffect(() => {}, [showMenus, activeSubmenu]);

  React.useEffect(() => {
    window.addEventListener("resize", detectWindowChange);
    // document.addEventListener("click", detectClick);

    return () => {
      window.removeEventListener("resize", detectWindowChange);
      // document.removeEventListener("click", detectClick);
    };
  }, []);

  function detectWindowChange(event) {
    setActiveSubmenu(null);
  }

  function detectClick(event) {
    let element = event.target;

    while (element) {
      if (
        element === menuElement.current ||
        element === menuFlag.current ||
        element === subMenus.current
      ) {
        return;
      }

      if (element === clickArea.current) {
        break;
      }

      element = element.parentNode;
    }
    closeMenu();
  }

  function generateSubmenu(submenu, submenuItems) {
    if (!submenuItems) {
      return <></>;
    }

    const shown = submenu.toUpperCase() === activeSubmenu;

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
        <ul className={`submenu ${shown ? "shown" : ""}`}>
          {submenuItems.map((menuItem) => {
            return <li>{menuItem}</li>;
          })}
        </ul>
      </>
    );
  }

  function toggleMenu(event) {
    menuFlag.current.classList.toggle("slid");
  }

  function closeMenu() {
    menuFlag.current.classList.remove("slid");
    setActiveSubmenu(null);
  }

  function showMenu(event) {
    const possibleMenuName = event.target.innerText;
    const menuName = possibleMenuName.split("/\n/")[0].trim();
    setActiveSubmenu(menuName);
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
    <main>
      <section
        className="header-1"
        onClick={detectClick}
        // onMouseOver={(event) => closeMenu(event)}
        ref={clickArea}
      >
        <h1>Heading Example One</h1>
        <header className="" ref={menuFlag}>
          <img src={logo} className="logo" alt="stylized pegasus" />
          <h1>
            Alpha-Pegasus <span>Media</span>
          </h1>
          <nav>
            <i className="navbar-switch" onClick={toggleMenu}>
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </i>
            <figure className="shopping-cart condensed-only">
              <FontAwesomeIcon icon={faShoppingCart} size="2x" />
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
                // onMouseEnter={showMenu}
                ref={subMenus}
                role="presentation"
              >
                {Object.entries(MENUS).map(([menuName, submenu]) => {
                  return (
                    <li className="main-item" key={menuName}>
                      <span>{menuName}</span>

                      {generateSubmenu(menuName, submenu)}
                    </li>
                  );
                })}
              </ul>
              <hr />
              <ul className="simple-menu condensed-only">
                <li key="phone">
                  <span>
                    <a href="tel:8005551212">(800) 555-1212</a>
                  </span>
                </li>
                <li key="chat">
                  <span>Chat</span>
                </li>
                <li key="login">
                  <span>Login</span>
                </li>
                <li key="knowledge-base">
                  <span>Knowledge Base</span>
                </li>
              </ul>
              <ul className="expanded-menu expanded-only">
                <li key="help">Help</li>
                <li key="shopping-cart">
                  <FontAwesomeIcon icon={faShoppingCart} size="1x" />
                </li>
                <li key="login">Login</li>
              </ul>
              <hr />
            </section>
          </nav>
        </header>
        <img src={mesh} alt="red pomegrante seeds" />
      </section>
    </main>
  );
};

export default IndexPage;
