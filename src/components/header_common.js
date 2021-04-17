import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTwitter,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faSearch,
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const LINK_ICONS = {
  twitter: <FontAwesomeIcon icon={faTwitter} size="1x" />,
  facebook: <FontAwesomeIcon icon={faFacebook} size="1x" />,
  youtube: <FontAwesomeIcon icon={faYoutube} size="1x" />,
  search: <FontAwesomeIcon icon={faSearch} size="2x" />,
  search_small: <FontAwesomeIcon icon={faSearch} size="1x" />,
};

export function toSnakeCase(string) {
  return string.toLowerCase().replace(/\s|\//g, "-");
}

export function createLink(title, link, classNames) {
  if (LINK_ICONS[title]) {
    title = LINK_ICONS[title];
  }

  if (link.includes(":")) {
    return (
      <a className={classNames} href={link}>
        {title}
      </a>
    );
  }

  return (
    <Link className={classNames} to={link}>
      {title}
    </Link>
  );
}

export function getClosest(elem, selector) {
  // Element.matches() polyfill
  if (!Element.prototype.matches) {
    Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.oMatchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      function (s) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
          i = matches.length;
        while (--i >= 0 && matches.item(i) !== this) {}
        return i > -1;
      };
  }

  // Get the closest matching element
  for (; elem && elem !== document; elem = elem.parentNode) {
    if (elem.matches(selector)) return elem;
  }
  return null;
}

export function openPane(event) {
  event.stopPropagation();
  const target = getClosest(event.target, "li");
  target.classList.add("open");
}

export function closePane(event) {
  event.stopPropagation();
  const target = getClosest(event.target, "li");
  target.classList.remove("open");
}

export function generateSubmenu(submenu, classNames) {
  if (!submenu) {
    return;
  }

  return (
    <ul key="menu" className={`submenu ${classNames}`}>
      {submenu.map(([menu, link]) => {
        return <li key={menu}>{createLink(menu, link)}</li>;
      })}
    </ul>
  );
}

export function generateSubmenu2(title, submenu, classNames, dualArrows) {
  if (!submenu) {
    return;
  }

  if (typeof submenu === "string") {
    return createLink(title, submenu);
  }

  return (
    <>
      {title}{" "}
      <span>
        {dualArrows ? (
          <FontAwesomeIcon
            className="right-arrow"
            icon={faChevronRight}
            size="1x"
          />
        ) : (
          ""
        )}
        <FontAwesomeIcon
          className="down-arrow"
          icon={faChevronDown}
          size="1x"
        />
      </span>
      <div
        role="presentation"
        onMouseEnter={openPane}
        onMouseLeave={closePane}
        className={`pane`}
      >
        {submenu.pane}
      </div>
    </>
  );
}

export function generateSubmenu3(title, submenu, classNames, dualArrows) {
  if (!submenu) {
    return;
  }

  if (typeof submenu === "string") {
    return createLink(title, submenu);
  }

  return (
    <>
      {title}{" "}
      <span>
        {dualArrows ? (
          <FontAwesomeIcon
            className="right-arrow"
            icon={faChevronRight}
            size="1x"
          />
        ) : (
          ""
        )}
        <FontAwesomeIcon
          className="down-arrow"
          icon={faChevronDown}
          size="1x"
        />
      </span>
      <div role="presentation" className={`pane`}>
        <ul>
          {Object.entries(submenu).map(([title, submenu]) => {
            return (
              <li key={title}>
                {generateSubmenu3(title, submenu, null, true)}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
export function generatePane(title, submenu, classNames, panes) {
  if (!submenu) {
    return;
  }

  if (typeof submenu === "string") {
    return createLink(title, submenu);
  }

  return (
    <>
      {title} <FontAwesomeIcon icon={faChevronDown} size="1x" />
      <dialog
        role="presentation"
        onMouseEnter={openPane}
        onMouseLeave={closePane}
        className={`pane ${title.toLowerCase()}-pane`}
      >
        {panes[title]}
      </dialog>
    </>
  );
}
