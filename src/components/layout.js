import React from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

const Layout = (props) => {
  const data = useLocation();
  const { title, children, social } = props;
  // const path = props&&props.location&&props.location

  const [toggleNav, setToggleNav] = React.useState(false);
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="swup" className="site-head-left">
            <ul className="nav" role="menu">
              <li
                // className={`nav-home  ${data.pathname === "/" ? "nav-current" : ""} `}
                // role="menuitem"
              >
                {/* <Link to={`/`}></Link> */}
              </li>
               
              <li
                className={`nav-home  ${data.pathname.includes("/bio") ? "nav-current" : ""} `}
                role="menuitem"
              >
                <Link to={`/bio`}>beranda</Link>
              </li>
              <li
                className={`nav-home  ${data.pathname.includes("/work/work-3") ? "nav-current" : ""} `}
                role="menuitem"
              >
                <Link to={`/work/work-3`}>Manfaat</Link>
              </li>
              <li
                className={`nav-home  ${data.pathname.includes("/news/news-3") ? "nav-current" : ""} `}
                role="menuitem"
              >
                <Link to={`/news/news-3`}>Keunggulan</Link>
              </li>
              <li
                className={`nav-home  ${data.pathname.includes("/contact") ? "nav-current" : ""} `}
                role="menuitem"
              >
                <Link to={`/contact`}>Kontak</Link>
              </li>
              <li
                className={`nav-home  ${data.pathname.includes("/news/layanan") ? "nav-current" : ""} `}
                role="menuitem"
              >
                <Link to={`/news/layanan`}>Layanan</Link>
              </li>
              <li
                className={`nav-home  ${data.pathname.includes("/sold/") ? "nav-current" : ""} `}
                role="menuitem"
              >
                <Link to={`/sold/`}>Artikel</Link>
              </li>
            </ul>
          </nav>
          {/* <div className="">
            <Link className="" to={`/`}>
              {title}
            </Link>
          </div> */}
          <div className="site-head-right">
            <div className="social-links">
              <Link
                to={`${social.facebook}`}
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                
              </Link>
              <Link
                to={`${social.twitter}`}
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                
              </Link>

              <Link
                to={`https://api.whatsapp.com/send?phone=6285219507377&text=Hallo%20kak%2C%20saya%20Desi.%20Ada%20yang%20bisa%20saya%20bantu%3F`}
                title="Github"
                target="_blank"
                rel="noopener noreferrer"
              >WhatsApp
                
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main id="" className="">
        <div id="" className="">
          {children}
        </div>
      </main>
      {/* <footer className="site-foot">
        &copy; {new Date().getFullYear()} <Link to={`/bio`}>{title}</Link> &mdash;
        Built by {""}
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
        {""} & {""}
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </footer> */}
    </div>
  );
};

export default Layout;
