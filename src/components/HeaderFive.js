import React, { useRef } from "react";
import "./header-5.scss";
import {
  createLink,
  generatePane,
  generateSubmenu,
  generateChevrons,
  getClosest,
} from "./header_common";
import Hamburger, { Closeburger } from "../components/Hamburger";

function HeaderFive({
  menu,
  panes,
  secondaryMenu,
  search,
  login,
  children,
  classNames,
}) {
  const menuScreen = useRef(null);

  function toggleMenu() {
    menuScreen.current.classList.toggle("shown");
  }

  function toggleOpen(event) {
    const target = getClosest(event.target, "li");
    target.classList.toggle("open");
  }

  return (
    <>
      <dialog className="menuScreen header-5" ref={menuScreen}>
        <nav>
          <Closeburger action={toggleMenu} />
          <ul>
            <li className="search" key="search_small">
              {search && createLink("search_small", "/search")}
            </li>

            {Object.entries(menu).map(([title, submenu]) => {
              return (
                <li
                  role="presentation"
                  onClick={toggleOpen}
                  onKeyDown={toggleOpen}
                  key={title}
                >
                  {generateSubmenu(title, submenu, null, true, () => {
                    return generateChevrons(true);
                  })}
                </li>
              );
            })}

            {login && (
              <>
                <li key="Login">{createLink("Login", login[0])}</li>
                {createLink("Sign Up", login[1], "button")}
              </>
            )}
          </ul>
        </nav>
      </dialog>
      <header className="header-5">
        {children}

        <nav>
          <Hamburger action={toggleMenu} />
          <section className="menus">
            <ul className="main-menu">
              {Object.entries(menu).map(([title, submenu]) => {
                return (
                  <li key={title}>
                    {generatePane(
                      title,
                      submenu,
                      classNames,
                      panes[title],
                      false
                    )}
                  </li>
                );
              })}
            </ul>

            <ul className="secondary-menu">
              {search && (
                <li key="search">{createLink("search", "/search")}</li>
              )}

              {Object.entries(secondaryMenu).map(([title, submenu]) => {
                return (
                  <li className="volatile" key={title}>
                    {createLink(title, submenu)}
                  </li>
                );
              })}

              {login && (
                <>
                  <li key="Login">{createLink("Login", login[0])}</li>
                  <li>|</li>
                  <li key="Sign Up">{createLink("Sign Up", "/signup")}</li>
                </>
              )}
            </ul>
          </section>
        </nav>
      </header>
    </>
  );
}

export default HeaderFive;
