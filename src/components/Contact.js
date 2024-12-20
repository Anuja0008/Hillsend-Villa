import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .sendForm(
        "service_g9kvwvp", // Your Service ID
        "template_pd87anj", // Your Template ID
        e.target,           // The form data
        "xCPP9cbWxHHXNPwGW" // Your User ID (Public Key)
      )
      .then(
        (result) => {
          alert("Message Sent Successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
        },
        (error) => {
          alert("Error sending message, please try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container contact">
      <h2 className="main-title text-center">CONTACT</h2>
      <form onSubmit={handleSubmit}>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4 mb-1">
              <input
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="contact-input"
                required
              />
            </div>

            <div className="col-md-4 mb-1">
              <input
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="contact-input"
                required
              />
            </div>
            <div className="col-md-4 mb-1">
              <input
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="contact-input"
                required
              />
            </div>
          </div>
        </div>
        <br />
        <div className="col-md-12">
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="contact-textarea"
            required
          />
        </div>

        <br />
        <div className="row">
          <div className="col-md-12">
            <input className="form-btn" type="submit" value="Send Message" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
