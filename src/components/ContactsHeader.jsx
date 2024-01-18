import { getText } from "../locales";
const ContactsHeader = () => {
  return (
    <>
      <div className="ContactsHeader headers mt-5">
        <div className="bg"></div>
        <video src="video/headervideo.mp4" loop autoPlay muted />
        <div className="content">
          <h1>{getText("contacts")}</h1>
        </div>
      </div>
    </>
  );
};

export default ContactsHeader;
