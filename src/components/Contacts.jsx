import { useState } from "react";
import { getText } from "../locales";
import InputMask from "react-input-mask";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Contacts = () => {
  const [form1] = useState(false);
  const [form2] = useState(false);
  const [form3] = useState(false);
  const [form4] = useState(false);
  const TOKEN = "6827718544:AAG3nzUm5DLy1JVvJYqbd_Zzm476jQaHbFU"
  const USERID = "-1001844045401"
  // import { CHAT_ID } from "../constants";
  


  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998");
  const [email, setEmail] = useState("");
  const [desription, setDescription] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  let text = `Name: ${name}.%0AMessage: ${desription}.%0APhone number: ${phone}%0AEmail: ${
    email.length == 0 ? "Email is empty" : email
  }.`;

  const sendFeedback = (e) => {
    setIsLoading(true);
    e.preventDefault();

      axios.post(
        `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${USERID}&text=${text}`
      );

      // https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}

      // da togri daaa
      toast.success(getText("success"));
      setIsLoading(false);
      setName("");
      setPhone("");
      setDescription("");
      setEmail("");
    
  };



  return (
    <>
      <div className="contacts">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
             <form onSubmit={sendFeedback}>
             <h3>{getText("contactsT1")}</h3>
              <div className="row">
                <div className="inputWrap col-sm-6">
                  <h6 className={`${form1 ? "active" : ""}`}>Имя*</h6>
                  <InputMask
                  onChange={e => setName(e.target.value)} value={name}
                    className="form-control"
                    name="name"
                    required
                    type="text"
                  />
                </div>
                <div className="inputWrap col-sm-6">
                  <h6 className={`${form2 ? "active" : ""}`}>Номер телефона</h6>
                  <InputMask
                   onChange={e => setPhone(e.target.value)}
                   value={phone}
                    className="form-control"
                    name="phone"
                    required
                    type="text"
                  />
                </div>
                <div className="inputWrap">
                  <h6 className={`${form3 ? "active" : ""}`}>Email</h6>
                  <InputMask
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    className="form-control"
                    name="email"
                    required
                    type="email"
                  />
                </div>
              </div>
              <div className="inputWrap">
                <h6 className={`last ${form4 ? "actives" : ""}`}>Сообщение*</h6>
                <textarea 
                  onChange={e => setDescription(e.target.value)}
                  value={desription}
                className="form-control" name="message" required />
              </div>
              <div className="row justify-content-end">
                <div className="col-6">
                  <button disabled={isLoading}
                   className="btn">
                   {isLoading ? <span style={{ color: '#fff' }} className='spinner-border-sm spinner-border ms-2'></span> : ''}
                    {getText("send")}
                   </button>
                  <ToastContainer />
                </div>
              </div>
             </form>
            </div>
            <div className="col-md-6 d-flex flex-column align-items-md-end">
                <h3 className="text-md-end">{getText("contactsT2")}</h3>
                <div className="info">
                <div className="wrap">
                    <div className="icon">
                        <FontAwesomeIcon icon={faLocationDot}/>
                    </div>
                    <div className="text">
                        <h5>{getText("adress")}</h5>
                    </div>
                </div>
                <div className="wrap">
                    <div className="icon">
                        <FontAwesomeIcon icon={faClock}/>
                    </div>
                    <div className="text">
                        <h5>{getText("working_hours")}</h5>
                        <p>{getText("working_hour")}</p>
                    </div>
                </div>
                <div className="wrap">
                    <div className="icon">
                        <FontAwesomeIcon icon={faPhone}/>
                    </div>
                    <div className="text">
                        <a href="tel:+998507034114">+998 50 703 41 14</a>
                    </div>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Contacts;
