import { getText } from "../locales";

const AboutUs = () => {


  return (
    <>
      <div className="aboutUs mt-lg-5 mt-md-3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="info">
                <h2 className="mb-3">{getText("company")}</h2>
                <p>{getText("aboutUsP")}</p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
