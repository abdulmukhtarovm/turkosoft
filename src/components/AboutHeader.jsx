import { getText } from "../locales";
// import videoBg from 'video/headervideo.mp4'
const AboutHeader = () => {
  return (
    <>
      <div className="aboutHeader headers mt-5">
        <div className="bg"></div>
        <video src="video/headervideo.mp4" loop autoPlay muted />
        <div className="content">
          <h1>{getText("about")}</h1>
        </div>
      </div>
    </>
  );
};

export default AboutHeader;
