// import React from 'react'
// import { getText } from '../locales';
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { getText } from "../locales/index";
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const Header = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      <div className="header">
        <Swiper
          navigation={true}
          loop={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
        >
          <SwiperSlide>
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-6">
                  <div className="info flex-column">
                    <div className="logo">
                      <img src="./img/okulaile.png" alt="" />
                    </div>
                    <h3>{getText("headerokulT")}</h3>
                    <p>{getText("headerokulP")}</p>
                    <Link to="okulaile" className="myBtn custom-btn btn-16" type="submit">
                      {getText("more")}
                    </Link>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="img">
                    <img className="w-100" src="./img/header2.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container">
              {/* partners, okulaile sertificate */}
              <div className="row align-items-center justify-content-center">
                <div className="col-md-6">
                  <div className="info flex-column">
                    <div className="logo p-0">
                      <img src="./img/mentalup.webp" alt="" />
                    </div>
                    <h3>{getText("headerMentalUpT")}</h3>
                    <p>{getText("headerMentalUpP")}</p>
                    <Link to="mentalup" className="myBtn custom-btn btn-16" type="submit">
                      {getText("more")}
                    </Link>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="img">
                    <img className="w-100" src="./img/header1.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Header;
