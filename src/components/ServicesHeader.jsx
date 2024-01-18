import { getText } from "../locales";
const ServicesHeader = () => {
  return (
    <>
      <div className="ServicesHeader headers mt-5">
        <div className="bg"></div>
        <video src="video/headervideo.mp4" loop autoPlay muted />
        <div className="content">
          <h1>{getText("services")}</h1>
        </div>
      </div>
    </>
  );
};

export default ServicesHeader;
