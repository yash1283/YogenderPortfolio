import { useState } from "react";
import Footer from "../components/Footer";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message Sent!");
  };

  return (
    <section id="contact" className="container py-5">
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit} className="mt-4">

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          className="form-control mb-3"
          rows="4"
          onChange={handleChange}
        />

        <button className="btn btn-primary">
          Send Message
        </button>

      </form>
    </section>
  );
}