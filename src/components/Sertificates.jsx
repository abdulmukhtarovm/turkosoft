

import { getLanguage, getText } from "../locales";

const Sertificates = () => {
    let imageSrc;

    if (getLanguage() === "uz") {
      imageSrc = "img/guvohnoma_uz.jpg";
    } else if (getLanguage() === "ru") {
      imageSrc = "img/guvohnoma_ru.jpg";
    } else if (getLanguage() === "en") {
      imageSrc = "img/guvohnoma_eng.jpg";
    } else {
      imageSrc = "img/guvohnoma_eng.jpg";
    }
  return (
    <div className="sertificates mt-5">
      <div className="container">
      <h4 className="main-title">{getText("sertificate")}</h4>
        <div className="row">
          <div className="col-md-4 col-6">
            <div className="img">
              <img className="w-100" src={imageSrc} alt="Language Image" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="img">
              <img className="w-100" src="img/okulaile_sertifikat.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sertificates;
