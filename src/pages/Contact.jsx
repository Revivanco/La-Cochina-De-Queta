import React from "react";
import cochinaLeft from "../assets/cochinaLeft.jpg";
import "../styles/Contact.css";

const Contact = () => {
    return (
        <div
            className="contact"
            style={{ backgroundImage: `url(${cochinaLeft})` }}
        >
            <div className="formContainer">
                <h1>CONTACT US</h1>
                <form id="contact-form" method="POST">
                    <label htmlFor="name">Full Name</label>
                    <input name="name" placeholder="Enter full name..." type="text" />

                    <label htmlFor="email">Email</label>
                    <input name="email" placeholder="Enter email..." type="email" />

                    <label htmlFor="message">Message</label>
                    <textarea rows="6" placeholder="Enter message..."></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;

