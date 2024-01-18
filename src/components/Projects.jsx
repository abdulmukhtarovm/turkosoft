// import React from 'react'
import { getText } from "../locales";
import Tilt from "react-vanilla-tilt";
// import Aos from "aos";

const Projects = () => {
  return (
    <>
      <div className="Projects mt-5">
        <div className="container">
          <h4 className="main-title">{getText("servicesTitle")}</h4>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6 col-12 mt-5">
              <Tilt
                options={{ glare: true, "max-glare": 0.5 }}
                className="tilt p-0 m-0 w-100 h-100"
              >
                <div className="card h-100">
                  <div className="card-body">
                    <div className="img">
                      <img className="w-100" src="./img/edu.png" alt="" />
                    </div>
                    <div className="info">
                      <h5>{getText("edu")}</h5>
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mt-5">
              <Tilt className="tilt p-0 m-0 w-100 h-100">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="img">
                      <img className="w-100" src="./img/hospital.jpg" alt="" />
                    </div>
                    <div className="info">
                      <h5>{getText("hospitality")}</h5>
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mt-5">
              <Tilt className="tilt p-0 m-0 w-100 h-100">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="img">
                      <img
                        className="w-100"
                        src="./img/hotel.webp"
                        alt=""
                      />
                    </div>
                    <div className="info">
                      <h5>{getText("hotel")}</h5>
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mt-5">
              <Tilt className="tilt p-0 m-0 w-100 h-100">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="img">
                      <img
                        className="w-100"
                        src="./img/contruction.jpg"
                        alt=""
                      />
                    </div>
                    <div className="info">
                      <h5>{getText("building")}</h5>
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
       
            <div className="col-lg-3 col-md-6 col-12 mt-5">
              <Tilt className="tilt p-0 m-0 w-100 h-100">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="img">
                      <img className="w-100" src="./img/crm.jpg" alt="" />
                    </div>
                    <div className="info">
                      <h5>CRM</h5>
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mt-5">
              <Tilt className="tilt p-0 m-0 w-100 h-100">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="img">
                      <img className="w-100" src="./img/pharmacy.jpg" alt="" />
                    </div>
                    <div className="info">
                      <h5>{getText("pharmacy")}</h5>
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mt-5">
              <Tilt className="tilt p-0 m-0 w-100 h-100">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="img">
                      <img
                        className="w-100"
                        src="./img/restaurant.jpg"
                        alt=""
                      />
                    </div>
                    <div className="info">
                      <h5>{getText("restaurant")}</h5>
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mt-5">
              <Tilt className="tilt p-0 m-0 w-100 h-100">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="img">
                      <img
                        className="w-100"
                        src="./img/university.webp"
                        alt=""
                      />
                    </div>
                    <div className="info">
                      <h5>{getText("university")}</h5>
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
