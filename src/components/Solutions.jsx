// import React from 'react'

import { getText } from "../locales";

const Solutions = () => {
  return (
    <>
      <div className="solutions">
        <div className="container">
          <h4 className="main-title">{getText("solution_Title")}</h4>
          <div className="row justify-content-around">
            <div className="col-md-4 mb-3 mb-lg-0">
              <div className="item d-flex">
                <div className="img">
                  <img src="img/portfolio.JPG" alt="" />
                </div>
                <div className="info">
                  <h5>{getText("solution_itemT1")}</h5>
                  <p>{getText("solution_itemP1")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-lg-0">
              <div className="item d-flex">
                <div className="img">
                  <img src="./img/comment.JPG" alt="" />
                </div>
                <div className="info">
                  <h5>{getText("solution_itemT2")}</h5>
                  <p>{getText("solution_itemP2")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-lg-0">
              <div className="item d-flex">
                <div className="img">
                  <img src="./img/hands.JPG" alt="" />
                </div>
                <div className="info">
                  <h5>{getText("solution_itemT3")}</h5>
                  <p>{getText("solution_itemP3")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Solutions;
