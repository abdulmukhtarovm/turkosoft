import { useState } from "react";
import { getLanguage, getText } from "../locales/index";
import { LANGUAGE } from "../tools/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [burger, setBurger] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);

  const changeLanguage = (e) => {
    localStorage.setItem(LANGUAGE, e.target.value);
    document.location.reload(true);
  };
  const location = useLocation()

  return (
    <>
      <div className={`navBar ${navbar ? "active" : ""}`}>
        <div className="container">
          <div className="row justify-content-between align-items-center ">
            <div className="col-lg-2 col-md-4 col-6">
              <div className="logo">
                <a href="/">
                  <img className="w-100" src="../img/logo.png" alt="" />
                </a>
              </div>
            </div>

            <div className={`col-9 mobileWrap ${burger ? "" : "burgered"}`}>
              <ul className="nav-menu">
                <li>
                  <Link className={`${location.pathname === '/' ? 'active-link' : ''}`} onClick={() => setBurger(!burger)} to="/">
                    {getText("home")}
                  </Link>
                </li>
                <li>
                  <Link className={`${location.pathname === '/about' ? 'active-link' : ''}`} onClick={() => setBurger(!burger)} to="/about">
                    {getText("aboutUs")}
                  </Link>
                </li>
                <li className="dropdown_link">
                  <Link className={`${location.pathname === '/services' ? 'active-link' : ''}`} onClick={() => setBurger(!burger)} to="/services">
                    {getText("services")}
                    <ul className="dropdown-box">
                      <li> <Link className={`${location.pathname === '/about' ? 'active-link' : ''}`} onClick={() => setBurger(!burger)} to="/okulaile">
                        OkulAile
                      </Link></li>
                      <li> <Link className={`${location.pathname === '/about' ? 'active-link' : ''}`} onClick={() => setBurger(!burger)} to="/mentalup">
                        Mental Up
                      </Link></li>
                    </ul>
                  </Link>
                </li>
                <li>
                  <Link className={`${location.pathname === '/contacts' ? 'active-link' : ''}`} onClick={() => setBurger(!burger)} to="/contacts">
                    {getText("contacts")}
                  </Link>
                </li>

                <li className="d-flex align-items-center">
                  <span className="langIcon">
                    <FontAwesomeIcon icon={faGlobe} />
                  </span>
                  <select className="siteLang" onChange={changeLanguage}>
                    <option value="ru" selected={getLanguage() === "ru"}>
                      Русский
                    </option>
                    <option value="en" selected={getLanguage() === "en"}>
                      English
                    </option>
                    <option value="tr" selected={getLanguage() === "tr"}>
                      Türkçe
                    </option>
                    <option value="uz" selected={getLanguage() === "uz"}>
                      O‘zbek
                    </option>
                  </select>
                </li>
                {/* <li className="position-relative">
                  <form method="get" target="blink" action="./okulaile_katalog.pdf">
                    <button className="download custom-btn btn-16" type="submit">
                      {getText("download")}
                    </button>
                  </form>
                </li> */}
              </ul>
            </div>

            <div
              onClick={() => setBurger(!burger)}
              className={`burger pr-4 ml-auto d-flex d-lg-none ${burger ? "burgered" : ""
                }`}
            >
              <div className="burger1"></div>
              <div className="burger2"></div>
              <div className="burger3"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
