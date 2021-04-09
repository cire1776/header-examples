import React from "react";

import "./main.scss";

import mesh from "../images/pexels-photo-3636718.jpeg";
import HeaderOne from "../components/HeaderOne";
import HeaderTwo from "../components/HeaderTwo";
import HeaderThree from "../components/HeaderThree";
import HeaderFour from "../components/HeaderFour";
import HeaderFive from "../components/HeaderFive";

import Platform from "../panes/Platform";
import Enterprise from "../panes/Enterprise";
import Jamstack from "../panes/Jamstack";
import Community from "../panes/Community";

import logo from "../images/apmlogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const MENUS = {
  Domains: [
    ["Search", "/search"],
    ["Transfer", "/transfer"],
    ["Premium", "/premium"],
  ],
  "Website Builder": [
    ["Website Builder", "/website_builder"],
    ["Website Marketing", "/marketing"],
  ],
  Email: [
    ["Office 365", "office365"],
    ["Google Workspace", "/google_workspace"],
  ],
  "Web Hosting": [
    ["Website Hosting", "hosting"],
    ["WordPress Hosting", "/wordpress_hosting"],
  ],
  Security: [
    ["SSL Certificates", "/ssl_certificates"],
    ["Domain Privacy", "/domain_protection"],
    ["SiteLock Security", "/sitelock"],
  ],
};

const SECONDARY_MENU = [
  ["Help", "/help"],
  [<FontAwesomeIcon icon={faShoppingCart} />, "/shopping"],
  ["Login", "/login"],
];

const TERTIARY_MENU = [
  ["(800) 555-1212", "tel:8005551212"],
  ["Chat", "/chat"],
  ["Login", "/login"],
  ["Knowledge Base", "/knowledge_base"],
];
const SPECIAL = [<FontAwesomeIcon icon={faShoppingCart} size="2x" />, "/cart"];

const MENUS_2 = {
  About: "/about",
  "Our Services": [
    ["Window Washing", "/window_washing"],
    ["Laundry", "/laundry"],
    ["Dusting", "/dusting"],
  ],
  Pricing: "/pricing",
  "Contact Us": [
    ["E-Mail", "/email]"],
    ["Call us", "/call_us"],
  ],
};

const SOCIAL = [
  ["twitter", "https://twitter.com"],
  ["facebook", "https://facebook.com"],
  ["youtube", "https://youtube.com"],
];

const TIERED_MENU = {
  Platform: {
    "The Platform": {
      Build: "/build",
      Edge: "/edge",
      Functions: "/functions",
      Workflow: "/workflow",
    },
    "Key Features": {
      "Deploy Preivew": "/deploy",
      "Split Testing": "/split-testing",
      Forms: "/forms",
      Identity: "/identity",
      Analytics: "/analytics",
      Security: "/security",
      "Build Plugins": "/build-plugins",
    },
    Technologies: {
      Jamstack: "/jamstack",
      React: "/react",
      Gatsby: "/gatsby",
    },
  },

  Pricing: "/pricing",

  Enterprise: {
    Enterprise: {
      "High-Performance Products": "/performance",
      Customers: "/customers",
      Resources: "/resources",
      "Enterprise Whitepaper": "/whitepaper",
      Security: "/security",
      "Technology Parters": "/technology-partners",
      "Agency Partner Program": "/agency-partner",
    },
    Solutions: {
      "E-commerce": "/ecommerce",
      "Web Applications": "/web-applications",
      "Large Sites": "/large-sites",
      "What others have built →": "/others-built",
    },
  },
  Jamstack: {
    "Jamstack Introduction": "/jamstack-intro",
    "Jamstack Book": "/jamstack-book",
    "Jamstack Conf": "/jamstack-conf",
  },

  Community: {
    Blog: "/blog",
    "Community Hub": "/community",
    "Support Forum": "/support-forum",
    "Jamstack Explorers": "/jamstack-exploreres",
    "Remotely Interesting Podcast": "/podcast",
    "Swag Store": "/store",
  },

  Docs: "/docs",
};

const PANES = {
  Platform: <Platform menu={TIERED_MENU.Platform} classNames="platform-pane" />,
  Enterprise: (
    <Enterprise menu={TIERED_MENU.Enterprise} classNames="enterprise-pane" />
  ),
  Jamstack: <Jamstack menu={TIERED_MENU.Jamstack} classNames="jamstack-pane" />,
  Community: (
    <Community menu={TIERED_MENU.Community} classNames="community-pane" />
  ),
};

// markup
const IndexPage = () => {
  const wholeScreen = React.useRef(null);

  return (
    <main>
      <section className="header-1">
        <h1>Header Example One</h1>
        <HeaderOne
          menus={MENUS}
          secondary={SECONDARY_MENU}
          tertiary={TERTIARY_MENU}
          special={SPECIAL}
        >
          <img src={logo} className="logo" alt="stylized pegasus" />
          <h1>
            Alpha-Pegasus <span>Media</span>
          </h1>
        </HeaderOne>
        <img src={mesh} alt="a view through a lattice window" />
      </section>

      <section className="header-2">
        <h1>Header Example Two</h1>
        <HeaderTwo menus={MENUS_2} socialMenus={SOCIAL}>
          <figure>
            <img src={logo} className="logo other" alt="stylized pegasus" />
            <h1>
              Alpha-Pegasus <br />
              <span>Media</span>
            </h1>
          </figure>
        </HeaderTwo>
        <img src={mesh} alt="a view through a lattice window" />
      </section>

      <section className="header-3">
        <h1>Header Example Three</h1>
        <main>
          <HeaderThree menus={MENUS_2} specialItem={["Special", "/special"]}>
            <figure>
              <img src={logo} className="logo other" alt="stylized pegasus" />
              <h1>
                Alpha-Pegasus <br />
                Media
              </h1>
            </figure>
          </HeaderThree>
          <img src={mesh} alt="a view through a lattice window" />
        </main>
      </section>

      <section className="header-4">
        <h1>Header Example Four</h1>
        <HeaderFour menus={MENUS} socialMenu={SOCIAL}>
          <figure>
            <img src={logo} alt="a stylized pegasus" />
            <h1>
              Alpha-
              <br />
              Pegasus
              <br />
              <span>Media</span>
            </h1>
          </figure>
        </HeaderFour>
      </section>

      <section className="header-5">
        <h1>Header Example Five</h1>
        <HeaderFive
          menu={TIERED_MENU}
          panes={PANES}
          secondaryMenu={{
            "Contact sales": "/contact_sales",
          }}
          search={true}
          login={["/login", "/signup"]}
          wholeScreen={wholeScreen}
        >
          <img src={logo} className="logo" alt="stylized pegasus" />
          <h1>
            Alpha-Pegasus <span>Media</span>
          </h1>
        </HeaderFive>
        <img src={mesh} alt="a view through a lattice window" />
      </section>
    </main>
  );
};

export default IndexPage;
