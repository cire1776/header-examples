import React, { useRef } from "react";
import "./header-5.scss";
import {
  createLink,
  generatePane,
  generateSubmenu3,
  openPane,
  closePane,
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
    event.target.classList.toggle("open");
  }

  return (
    <>
      <dialog id="menuScreen" ref={menuScreen}>
        <nav>
          <Closeburger action={toggleMenu} />
          <ul>
            <li className="search">
              {search && createLink("search_small", "/search")}
            </li>

            {Object.entries(menu).map(([title, submenu]) => {
              return (
                <li
                  role="presentation"
                  onClick={toggleOpen}
                  onKeyDown={toggleOpen}
                >
                  {generateSubmenu3(title, submenu, null, true)}{" "}
                </li>
              );
            })}

            {login && (
              <>
                <li>{createLink("Login", login[0])}</li>
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
                  <li
                    role="presentation"
                    onMouseEnter={openPane}
                    onMouseLeave={closePane}
                  >
                    {generatePane(title, submenu, classNames, panes)}
                  </li>
                );
              })}
            </ul>

            <ul className="secondary-menu">
              {search && <li>{createLink("search", "/search")}</li>}

              {Object.entries(secondaryMenu).map(([title, submenu]) => {
                return (
                  <li className="volatile">{createLink(title, submenu)}</li>
                );
              })}

              {login && (
                <>
                  <li>{createLink("Login", login[0])}</li>
                  <li>|</li>
                  <li>{createLink("Sign Up", "/signup")}</li>
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
