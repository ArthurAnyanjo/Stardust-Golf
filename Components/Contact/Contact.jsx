import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "17c9a985-e376-4f64-a90c-78b6d8edb915");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />{" "}
        </h3>
        <p>
          For further information on golf instruction or general enquiries and
          to contact us. Please use the following contact details.
        </p>

        <ul>
          <li>
            <img src={mail_icon} alt="" />
            Contact@stardust.golf
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +44 446-678-678
          </li>
          <li>
            <img src={location_icon} alt="" />
            123 Station Close, Oxford <br />
            M11 1FG United Kingdom
          </li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="">Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            id=""
            required
          />

          <label htmlFor="">Phone Number:</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            id=""
            required
          />
          <label htmlFor="">Write message here:</label>
          <textarea
            name="message"
            id=""
            rows="6"
            placeholder="Enter your message here"
            required
          ></textarea>

          <button type="submit" className="btn dark-btn">
            Submit now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
