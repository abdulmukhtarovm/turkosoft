// import React from 'react'

import { faFacebookF, faInstagram, faLinkedinIn, faTelegram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getText } from "../locales";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-lg-4 col-6">
                    <h6>{getText("author",)} {getText("company")}</h6>
                </div>
                <div className="col-lg-4 col-6">
                    <ul className="socials d-flex">
                        <li><a target="blink" href="https://www.instagram.com/turkosoftuz/"><FontAwesomeIcon icon={faInstagram}/></a></li>
                        <li><a target="blink" href="https://www.facebook.com/turkosoftuz/"><FontAwesomeIcon icon={faFacebookF}/></a></li>
                        <li><a target="blink" href="https://www.youtube.com/@Turkosoftuz"><FontAwesomeIcon icon={faYoutube}/></a></li>
                        <li><a target="blink" href="https://t.me/turkosoftuz"><FontAwesomeIcon icon={faTelegram}/></a></li>
                        <li><a target="blink" href="https://www.linkedin.com/in/turkosoftuz/"><FontAwesomeIcon icon={faLinkedinIn}/></a></li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
