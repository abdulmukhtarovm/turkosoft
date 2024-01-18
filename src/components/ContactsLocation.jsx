import { getText } from "../locales";

const ContactsLocation = () => {
  return (
    <div className="contactsLocation">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h1>{getText("ouradress")}</h1>
          </div>
          <div className="row align-items-center ">
            <div className="col-lg-6 ml-auto"></div>
          </div>
        </div>
        <div className="map">
          <iframe
            className="w-100"
            title="Location"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d537.2113744837891!2d71.79764787400728!3d40.38832276118418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDIzJzE3LjkiTiA3McKwNDcnNTIuMyJF!5e0!3m2!1sru!2s!4v1702739578826!5m2!1sru!2s"
          ></iframe>
      
        </div>
      </div>
    </div>
  );
};

export default ContactsLocation;
