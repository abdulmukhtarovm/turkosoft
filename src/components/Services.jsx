import { useEffect } from "react";
import { Link } from "react-router-dom";
// import { getText } from '../locales';
import Aos from "aos";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Services = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1700,
    });
  }, []);
  return (
    <>
      <div className="services mt-4 mt-lg-0">
        <div className="container">
          <div className="d-flex align-items-center flex-lg-nowrap flex-wrap justify-content-center">
            <div className="card">
              <Link to="/okulAile">
                <div data-aos="fade-left"
                  className="card-body position-relative"
                >
                  <i className="w-100">
                    {" "}
                    <LazyLoadImage
                      effect="blur"
                      width="100%"
                      height="100%"
                      src="img/okulailecard.png"
                      alt=""
                      className="w-100"
                    />
                  </i>
                  <h5>OkulAile</h5>
                </div>
              </Link>
            </div>

            <div className="card">
              <Link to="/mentalup">
                <div
                  data-aos="fade-right"
                  className="card-body position-relative"
                >
                  <i className="w-100">
                    {" "}
                    <LazyLoadImage
                      effect="blur"
                      width="100%"
                      height="100%"
                      src="img/mentalupcard.png"
                      alt=""
                      className="w-100"
                    />
                  </i>
                  <h5>Mental Up</h5>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
