import React, { useRef } from "react";
import { Link } from "gatsby";
import logo from "../images/apmlogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import "../pages/main.scss";

const SOCIAL_ICONS = {
  twitter: <FontAwesomeIcon icon={faTwitter} size="1x" />,
  facebook: <FontAwesomeIcon icon={faFacebook} size="1x" />,
  youtube: <FontAwesomeIcon icon={faYoutube} size="1x" />,
};

const HeaderTwo = ({ menus, socialMenus, children }) => {
  const menuElement2 = useRef(null);

  React.useEffect(() => {
    window.addEventListener("resize", detectWindowChange);

    return () => {
      window.removeEventListener("resize", detectWindowChange);
    };
  }, []);

  function detectWindowChange(event) {
    menuElement2.current.classList.remove("shown");
  }

  function generateSubmenu(submenu) {
    if (!submenu) {
      return;
    }
    return (
      <ul className="submenu">
        {submenu.map(([menu, link]) => {
          console.log(menu, link);
          return <li>{createLink(menu, link)}</li>;
        })}
      </ul>
    );
  }

  function createLink(title, link) {
    if (link.includes(":")) {
      return <a href={link}>{title}</a>;
    }

    return <Link to={link}>{title}</Link>;
  }

  function toggleMenus(event) {
    menuElement2.current.classList.toggle("shown");
  }

  return (
    <header>
      {children}
      <nav>
        <i
          className="hamburger"
          onClick={toggleMenus}
          onKeyDown={toggleMenus}
          role="button"
          tabIndex={0}
        >
          <span className="top-bar"></span>
          <span className="middle-bar"></span>
          <span className="bottom-bar"></span>
        </i>
        <section className="menus" ref={menuElement2}>
          <ul className="main-menu">
            {Object.entries(menus).map(([menu, submenu]) => {
              if (typeof submenu === "string") {
                return <li key={menu}>{createLink(menu, submenu)}</li>;
              }

              return (
                <li key={menu}>
                  {menu}{" "}
                  {submenu ? (
                    <>
                      <FontAwesomeIcon
                        className="caret-right"
                        icon={faCaretRight}
                        size="1x"
                      />
                      <FontAwesomeIcon
                        className="caret-down"
                        icon={faCaretDown}
                        size="1x"
                      />
                    </>
                  ) : (
                    ""
                  )}
                  {generateSubmenu(submenu)}
                </li>
              );
            })}
          </ul>
          <ul className="social-menu">
            {socialMenus.map(([menuName, link]) => {
              const icon = SOCIAL_ICONS[menuName];
              console.log(icon, menuName, link);
              return <li>{createLink(icon, link)}</li>;
            })}
          </ul>
        </section>
      </nav>
    </header>
  );
};

export default HeaderTwo;
