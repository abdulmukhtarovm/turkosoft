import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getText } from "../locales";
import { useState } from "react";

const paragraphStyles = {
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  display: "-webkit-box",
};

const Feedback = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  return (
    <div className="feedback">
      <div className="row justify-content-center">
        <div className="col-10">
          <h2 className="mt-3 mt-lg-0 popular_title">{getText("otziv")}</h2>
          <div className="row justify-content-around">
            <div className="col-lg-4">
              <div className="card">
                <div className="top"></div>
                <div className="info">
                  <div className="myPading">
                    <div className="author">
                      <h6>{getText("feedback_auth1")}</h6>
                      <h5>{getText("feedback_kind1")}</h5>
                    </div>
                    <p style={isOpen1 ? null : paragraphStyles}>
                      <i>
                        <FontAwesomeIcon className="left" icon={faQuoteLeft} />
                      </i>
                      {getText("feedback_desc1")}
                    </p>
                    <button onClick={() => setIsOpen1(!isOpen1)}>
                      {isOpen1 ? getText("readless") : getText("readmore")}
                    </button>
                    <i>
                      <FontAwesomeIcon className="right" icon={faQuoteRight} />
                    </i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="top"></div>
                <div className="info">
                  <div className="myPading">
                    <div className="author">
                      <h6>{getText("feedback_auth2")}</h6>
                      <h5>{getText("feedback_kind2")}</h5>
                    </div>
                    <p style={isOpen2 ? null : paragraphStyles}>
                      <i>
                        <FontAwesomeIcon className="left" icon={faQuoteLeft} />
                      </i>
                      {getText("feedback_desc2")}
                    </p>
                    <button onClick={() => setIsOpen2(!isOpen2)}>
                      {isOpen2 ? getText("readless") : getText("readmore")}
                    </button>
                    <i>
                      <FontAwesomeIcon className="right" icon={faQuoteRight} />
                    </i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="top"></div>
                <div className="info">
                  <div className="myPading">
                    <div className="author">
                      <h6>{getText("feedback_auth3")}</h6>
                      <h5>{getText("feedback_kind3")}</h5>
                    </div>
                    <p style={isOpen3 ? null : paragraphStyles}>
                      <i>
                        <FontAwesomeIcon className="left" icon={faQuoteLeft} />
                      </i>
                      {getText("feedback_desc3")}
                    </p>
                    <button onClick={() => setIsOpen3(!isOpen3)}>
                      {isOpen3 ? getText("readless") : getText("readmore")}
                    </button>
                    <i>
                      <FontAwesomeIcon className="right" icon={faQuoteRight} />
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
