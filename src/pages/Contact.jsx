import React from "react";
import "./Contact.css"; // Import the CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Me</h1>
      <p className="contact-description">
        Feel free to reach out to me through the following:
      </p>

      <div className="contact-details">
        <p>
          Email: <a href="mailto:omkarparuchuru49@gmail.com">omkarparuchuru49@gmail.com</a>
        </p>
        <p>Phone: +91 6302207891</p>
        <p>
          LinkedIn: <a href="https://www.linkedin.com/in/omkar-prem-arya-guptha-paruchuru-7b714b349/">omkar prem arya guptha paruchuru</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
