import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getText } from "../locales";
import {
  faAward,
  faBusinessTime,
  faFileContract,
  faPhotoFilm,
} from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-regular-svg-icons";

const OkulAile = () => {
  return (
    <div className="okulAile">
      <div className="headerOkul">
        <div className="content">
          <h1>OkulAile</h1>
        </div>
      </div>

      <section className="video_blog mt-5">
        <div className="container">
          <div className="video_youtube">
            <iframe
              className="w-100"
              height="615"
              src="https://www.youtube.com/embed/UO523a5EFPE?si=vdeN1bhIK4YZzNZr"
              title="OkulAIle O'zbekistonda!"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          </div>
        </div>
      </section>
      <section className="why_features mt-lg-5 mt-3">
        <div className="row justify-content-around">
          <div className="col-xxl-4 col-xl-5 col-lg-6">
            <h2 className="popular_title">{getText("whyIsIt")}</h2>
            <div className="why_blog">
              <div className="text">
                <p>{getText("whyIsIt_p")}</p>
              </div>
              <div className="img">
                <img className="w-100" src="img/whyisit.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-5 col-lg-6">
            <h2 className="mt-3 mt-lg-0 popular_title">{getText("feature")}</h2>
            <div className="feature_blog">
              <div className="img">
                <img className="w-100" src="img/feature.png" alt="" />
                <p>{getText("feature_img")}</p>
              </div>
              <div className="list">
                <ul>
                  <li>{getText("feature1")}</li>
                  <li>{getText("feature2")}</li>
                  <li>{getText("feature3")}</li>
                  <li>{getText("feature4")}</li>
                  <li>{getText("feature5")}</li>
                  <li>{getText("feature6")}</li>
                  <li>{getText("feature7")}</li>
                  <li>{getText("feature8")}</li>
                  <li>{getText("feature9")}</li>
                  <li>{getText("feature10")}</li>
                  <li>{getText("feature11")}</li>
                  <li>{getText("feature12")}</li>
                  <li>{getText("feature13")}</li>
                  <li>{getText("feature14")}</li>
                  <li>{getText("feature15")}</li>
                  <li>{getText("feature16")}</li>
                  <li>{getText("feature17")}</li>
                  <li>{getText("feature18")}</li>
                  <li>{getText("feature19")}</li>
                  <li>{getText("feature20")}</li>
                  <li>{getText("feature21")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="founder_ceo_blog mt-lg-5 mt-3">
        <div className="row justify-content-xl-around justify-content-center">
          <div className="col-xxl-4 col-lg-5 col-md-8 col-10">
            <h2 className="popular_title">{getText("founder_benefitT")}</h2>
            <div className="founders_benefit_blog">
              <div className="row">
                <div className="col-md-6 img">
                  <img className="w-100" src="img/founders_blog1.jpg" alt="" />
                </div>
                <div className="col-md-6 text">
                  <p>{getText("founder_benefitP")}</p>
                </div>
                <div className="col-12">
                  <img className="w-100" src="img/founders_blog2.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-5 col-md-8 col-10">
            <h2 className="mt-3 mt-lg-0 popular_title">
              {getText("ceo_benefitT")}
            </h2>
            <div className="ceo_benefit_blog">
              <div className="row">
                <div className="col-12 img mb-5">
                  <img className="w-100" src="img/ceo_blog.jpg" alt="" />
                </div>
                <div className="col-md-6">
                  <div className="okul_wrap">
                    <div className="top"></div>
                    <div className="d-flex">
                      <h6 className="okul_wrap_title">01</h6>
                      <p>{getText("ceo_benefit1")}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="okul_wrap">
                    <div className="top"></div>
                    <div className="d-flex">
                      <h6 className="okul_wrap_title">02</h6>
                      <p>{getText("ceo_benefit2")}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="okul_wrap">
                    <div className="top"></div>
                    <div className="d-flex">
                      <h6 className="okul_wrap_title">03</h6>
                      <p>{getText("ceo_benefit3")}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="okul_wrap">
                    <div className="top"></div>
                    <div className="d-flex">
                      <h6 className="okul_wrap_title">04</h6>
                      <p>{getText("ceo_benefit4")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="teacher_employee_blog mt-lg-5 mt-3">
        <div className="row justify-content-xl-around justify-content-center">
          <div className="col-xxl-4 col-lg-5 col-md-8 col-10">
            <h2 className="popular_title">{getText("teacher_benefitT")}</h2>
            <div className="teacher_benefit_blog">
              <div className="row">
                <div className="col-md-6 mb-5 img">
                  <img className="w-100" src="img/teachers_blog.jpg" alt="" />
                </div>
                <div className="col-md-6 mb-5 text d-flex align-items-end">
                  <div className="okul_wrap">
                    <div className="top"></div>
                    <div className="d-flex">
                      <h6 className="okul_wrap_title">
                        <FontAwesomeIcon icon={faBusinessTime} beatFade />
                      </h6>
                      <p>{getText("teacher_benefit1")}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="okul_wrap">
                    <div className="top"></div>
                    <div className="d-flex">
                      <h6 className="okul_wrap_title">
                        <FontAwesomeIcon icon={faFileContract} beatFade />
                      </h6>
                      <p>{getText("teacher_benefit2")}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="okul_wrap">
                    <div className="top"></div>
                    <div className="d-flex">
                      <h6 className="okul_wrap_title">
                        <FontAwesomeIcon icon={faPhotoFilm} beatFade />
                      </h6>
                      <p>{getText("teacher_benefit3")}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="okul_wrap">
                    <div className="top"></div>
                    <div className="d-flex">
                      <h6 className="okul_wrap_title">
                        <FontAwesomeIcon icon={faComments} beatFade />
                      </h6>
                      <p>{getText("teacher_benefit4")}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="okul_wrap">
                    <div className="top"></div>
                    <div className="d-flex">
                      <h6 className="okul_wrap_title">
                        <FontAwesomeIcon icon={faAward} beatFade />
                      </h6>
                      <p>{getText("teacher_benefit5")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-5 col-md-8 col-10">
            <h2 className="mt-3 mt-lg-0 popular_title">
              {getText("employees_benefitT")}
            </h2>
            <div className="ceo_benefit_blog">
              <div className="row">
                <div className="col-12 img mb-5">
                  <img className="w-100" src="img/employees_blog.jpg" alt="" />
                </div>
                <div className="col-md-6">
                  <div className="okul_wrap">
                    <div className="top"></div>
                    <div className="d-flex">
                      <h6 className="okul_wrap_title">01</h6>
                      <p>{getText("employees_benefit1")}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="okul_wrap">
                    <div className="top"></div>
                    <div className="d-flex">
                      <h6 className="okul_wrap_title">02</h6>
                      <p>{getText("employees_benefit2")}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="okul_wrap">
                    <div className="top"></div>
                    <div className="d-flex">
                      <h6 className="okul_wrap_title">03</h6>
                      <p>{getText("employees_benefit3")}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="okul_wrap">
                    <div className="top"></div>
                    <div className="d-flex">
                      <h6 className="okul_wrap_title">04</h6>
                      <p>{getText("employees_benefit4")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="parents_blog mt-lg-5 mt-3">
        <h2 className="popular_title">{getText("parent_benefitT")}</h2>
        <div className="row justify-content-xl-around justify-content-center">
          <div className="col-12 mb-5 mb-lg-0">
            <div className="background">
              <img
                className="w-100 d-md-block d-none"
                src="img/parents_blog.png"
                alt=""
              />
              <img
                className="w-100 d-md-none"
                src="img/parents_blog2.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-10 mt-5">
            <div id="grid">
              <div className="flap">
                <div className="num">
                  <h6>01</h6>
                </div>
                <h5>{getText("parent_benefit1")}</h5>
                <div className="ikonka">
                  <img className="w-100" src="img/parent_icon1.png" alt="" />
                </div>
              </div>
              <div className="flap">
                <div className="num">
                  <h6>02</h6>
                </div>
                <h5>{getText("parent_benefit2")}</h5>
                <div className="ikonka">
                  <img className="w-100" src="img/parent_icon2.png" alt="" />
                </div>
              </div>
              <div className="flap">
                <div className="num">
                  <h6>03</h6>
                </div>
                <h5>{getText("parent_benefit3")}</h5>
                <div className="ikonka">
                  <img className="w-100" src="img/parent_icon3.png" alt="" />
                </div>
              </div>
              <div className="flap">
                <div className="num">
                  <h6>04</h6>
                </div>
                <h5>{getText("parent_benefit4")}</h5>
                <div className="ikonka">
                  <img className="w-100" src="img/parent_icon4.png" alt="" />
                </div>
              </div>
              <div className="flap">
                <div className="num">
                  <h6>05</h6>
                </div>
                <h5>{getText("parent_benefit5")}</h5>
                <div className="ikonka">
                  <img className="w-100" src="img/parent_icon5.png" alt="" />
                </div>
              </div>
              <div className="flap">
                <div className="num">
                  <h6>06</h6>
                </div>
                <h5>{getText("parent_benefit6")}</h5>
                <div className="ikonka">
                  <img className="w-100" src="img/parent_icon6.png" alt="" />
                </div>
              </div>
              <div className="flap">
                <div className="num">
                  <h6>07</h6>
                </div>
                <h5>{getText("parent_benefit7")}</h5>
                <div className="ikonka">
                  <img className="w-100" src="img/parent_icon7.png" alt="" />
                </div>
              </div>
              <div className="flap">
                <div className="num">
                  <h6>08</h6>
                </div>
                <h5>{getText("parent_benefit8")}</h5>
                <div className="ikonka">
                  <img className="w-100" src="img/parent_icon8.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="children_howItWorks_blog mt-lg-5 mt-3">
        <div className="row justify-content-xl-around justify-content-center">
          <div className="col-xxl-4 col-lg-5 col-md-8 col-10">
            <h2 className="popular_title">{getText("children_benefitT")}</h2>
            <div className="children_blog">
              <div className="banner">
                <div className="img">
                  <img className="w-100" src="img/children1.jpg" alt="" />
                </div>
                <div className="paragraph">
                  <p>{getText("children_benefit1")}</p>
                </div>
              </div>
              <div className="banner">
                <div className="paragraph">
                  <p>{getText("children_benefit2")}</p>
                </div>
                <div className="img">
                  <img className="w-100" src="img/children2.jpg" alt="" />
                </div>
              </div>
              <div className="banner">
                <div className="img">
                  <img className="w-100" src="img/children3.jpg" alt="" />
                </div>
                <div className="paragraph">
                  <p>{getText("children_benefit3")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-5 col-md-8 col-10">
            <h2 className="mt-3 mt-lg-0 popular_title">
              {getText("howItWorksT")}
            </h2>
            <div className="howItWorks_blog">
              <div className="img">
                <img className="w-100" src="img/howitworks.jpg" alt="" />
              </div>
              <div className="list">
                <ul>
                  <li>
                    {" "}
                    <i>01</i>
                    {getText("howItWorks1")}
                  </li>
                  <li>
                    {" "}
                    <i>02</i>
                    {getText("howItWorks2")}
                  </li>
                  <li>
                    {" "}
                    <i>03</i>
                    {getText("howItWorks3")}
                  </li>
                  <li>
                    {" "}
                    <i>04</i>
                    {getText("howItWorks4")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="withApps_platform_blog mt-lg-5 mt-3">
        <div className="row justify-content-xl-around justify-content-center">
          <div className="col-xxl-4 col-lg-5 col-md-8 col-10">
            <h2 className="popular_title">{getText("withAppsT")}</h2>
            <div className="withApps_blog">
              <div className="row justify-content-center">
                <div className="col-12 mb-5 img">
                  <img className="w-100" src="img/withapps.jpg" alt="" />
                </div>
                <div className="col-sm-4 col-8 mb-5">
                  <div className="item">
                    <div className="img">
                      <img className="w-100" src="img/withapps1.jpg" alt="" />
                    </div>
                    <div className="context">
                      <p>{getText("withApps1")}</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-8 mb-5">
                  <div className="item">
                    <div className="img">
                      <img className="w-100" src="img/withapps2.jpg" alt="" />
                    </div>
                    <div className="context">
                      <p>{getText("withApps2")}</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-8 mb-5">
                  <div className="item">
                    <div className="img">
                      <img className="w-100" src="img/withapps3.jpg" alt="" />
                    </div>
                    <div className="context">
                      <p>{getText("withApps3")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-5 col-md-8 col-10">
            <h2 className="mt-3 mt-lg-0 popular_title">
              {getText("platformT")}
            </h2>
            <div className="platform_blog">
              <div className="row">
                <div className="col-12 mb-5 img">
                  <img className="w-100" src="img/header2.png" alt="" />
                </div>
                <div className="col-4">
                  <div className="item">
                    <div className="img">
                      <img className="w-100" src="img/platform1.jpg" alt="" />
                    </div>
                    <div className="context">
                      <p>{getText("platform1")}</p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="item">
                    <div className="img">
                      <img className="w-100" src="img/platform2.jpg" alt="" />
                    </div>
                    <div className="context">
                      <p>{getText("platform2")}</p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="item">
                    <div className="img">
                      <img className="w-100" src="img/platform3.jpg" alt="" />
                    </div>
                    <div className="context">
                      <p>{getText("platform3")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="crm_blog mt-lg-5 mt-3">
        <h2 className="popular_title">{getText("crm_benefitT")}</h2>
        <div className="row justify-content-xl-around justify-content-center">
          <div className="col-12 mb-5 mb-lg-0">
            <div className="background">
              <img
                className="w-100 d-md-block d-none"
                src="img/crm_blog.png"
                alt=""
              />
              <img className="w-100 d-md-none" src="img/crm_blog2.jpg" alt="" />
            </div>
          </div>
          <div className="col-10 mt-5">
            <div id="grid">
              <div className="okul_wrap">
                <div className="top"></div>
                <div className="d-flex">
                  <img
                    src="img/crmicon1.png"
                    alt=""
                    className="okul_wrap_title"
                  />
                  <p>{getText("crm_benefit1")}</p>
                </div>
              </div>
              <div className="okul_wrap">
                <div className="top"></div>
                <div className="d-flex">
                  <img
                    src="img/crmicon2.png"
                    alt=""
                    className="okul_wrap_title"
                  />
                  <p>{getText("crm_benefit2")}</p>
                </div>
              </div>
              <div className="okul_wrap">
                <div className="top"></div>
                <div className="d-flex">
                  <img
                    src="img/crmicon3.png"
                    alt=""
                    className="okul_wrap_title"
                  />
                  <p>{getText("crm_benefit3")}</p>
                </div>
              </div>
              <div className="okul_wrap">
                <div className="top"></div>
                <div className="d-flex">
                  <img
                    src="img/crmicon4.png"
                    alt=""
                    className="okul_wrap_title"
                  />
                  <p>{getText("crm_benefit4")}</p>
                </div>
              </div>
              <div className="okul_wrap">
                <div className="top"></div>
                <div className="d-flex">
                  <img
                    src="img/crmicon5.png"
                    alt=""
                    className="okul_wrap_title"
                  />
                  <p>{getText("crm_benefit5")}</p>
                </div>
              </div>
              <div className="okul_wrap">
                <div className="top"></div>
                <div className="d-flex">
                  <img
                    src="img/crmicon6.png"
                    alt=""
                    className="okul_wrap_title"
                  />
                  <p>{getText("crm_benefit6")}</p>
                </div>
              </div>
              <div className="okul_wrap">
                <div className="top"></div>
                <div className="d-flex">
                  <img
                    src="img/crmicon7.png"
                    alt=""
                    className="okul_wrap_title"
                  />
                  <p>{getText("crm_benefit7")}</p>
                </div>
              </div>
              <div className="okul_wrap">
                <div className="top"></div>
                <div className="d-flex">
                  <img
                    src="img/crmicon8.png"
                    alt=""
                    className="okul_wrap_title"
                  />
                  <p>{getText("crm_benefit8")}</p>
                </div>
              </div>
            </div>
            <form className="text-end" method="get" target="blink" action="./okulaile_katalog.pdf">
              <button className="download myBtn custom-btn btn-16" type="submit">
                {getText("download")}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OkulAile;
