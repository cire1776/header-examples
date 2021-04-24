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
  faCaretDown,
  faCaretRight,
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

function togglePane(event) {
  event.target.parentNode.classList.toggle("open");
}

function toggleSinglePane(event, targetHeader) {
  const openItem = targetHeader(event.target);

  if (openItem) {
    openItem.classList.remove("open");
  }

  togglePane(event);
}

export function generateChevrons(dualArrows, isCaret) {
  return (
    <span>
      {dualArrows ? (
        <FontAwesomeIcon
          className="right-arrow"
          icon={isCaret ? faCaretRight : faChevronRight}
          size="1x"
        />
      ) : (
        ""
      )}
      <FontAwesomeIcon
        className="down-arrow"
        icon={isCaret ? faCaretDown : faChevronDown}
        size="1x"
      />
    </span>
  );
}

export function generateSubmenu(menu, submenu, classNames, shown, chevrons) {
  if (!submenu) {
    return;
  }

  if (typeof submenu === "string") {
    return createLink(menu, submenu);
  }

  if (Array.isArray(submenu)) {
    return createLink(submenu[0], submenu[1]);
  }

  if (chevrons === false) {
    chevrons = () => {};
  }

  if (!chevrons) {
    chevrons = () => {
      return generateChevrons(false);
    };
  }

  return (
    <>
      <span>{menu}</span>

      {chevrons(shown)}

      <div role="presentation" className={`pane`}>
        <ul className={`submenu ${classNames} ${shown ? "shown" : ""}`}>
          {Object.entries(submenu).map(([menuItem, link]) => {
            return (
              <li key={menuItem}>
                {generateSubmenu(menuItem, link, classNames, shown, chevrons)}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export function generatePane(
  title,
  submenu,
  classNames,
  pane,
  requireClick,
  targetQuery
) {
  function mouseOverPane(title, pane) {
    return (
      <div role="presentation" onMouseEnter={openPane} onMouseLeave={closePane}>
        {title} <FontAwesomeIcon icon={faChevronDown} size="1x" />
        <dialog className={`pane ${title.toLowerCase()}-pane`}>{pane}</dialog>
      </div>
    );
  }

  function clickPane(title, pane, targetQuery) {
    return (
      <>
        <div
          role="presentation"
          onClick={(event) => {
            toggleSinglePane(event, targetQuery);
          }}
        >
          {title}
        </div>
        {pane}
      </>
    );
  }

  if (!submenu) {
    return;
  }

  if (typeof submenu === "string") {
    return createLink(title, submenu);
  }

  if (requireClick) {
    return clickPane(title, pane, targetQuery);
  } else {
    return mouseOverPane(title, pane);
  }
}
