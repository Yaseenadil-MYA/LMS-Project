import React from "react";
import "./Contect.css";

const Contect = () => {
  return (
    <section className="contact">

      <div className="contact-header">
        <h1>Contact Us</h1>

        <p>
          Have a question or need help?
          Send us a message and we will get back to you.
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <p>
            We are here to help you with any questions
            about our courses and learning platform.
          </p>

          <div className="contact-item">
            <h3>📧 Email</h3>
            <p>mohammadyaseenfahim12@gmil.com</p>
          </div>

          <div className="contact-item">
            <h3>📞 Phone</h3>
            <p>+93 786517586</p>
          </div>

          <div className="contact-item">
            <h3>📍 Address</h3>
            <p>Afghanistan</p>
          </div>

        </div>

        <div className="contact-form">

          <h2>Send Us a Message</h2>

          <form>

            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
            />

            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
            />

            <label>Subject</label>
            <input
              type="text"
              placeholder="Enter subject"
            />

            <label>Message</label>
            <textarea
              rows="6"
              placeholder="Write your message..."
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};
export default Contect;