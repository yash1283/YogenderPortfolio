import { useState } from "react";
import emailjs from "@emailjs/browser";

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

    emailjs.send(
      "service_2fzg7en",      // replace with your service ID
      "template_lsz3sdc",     // replace with your template ID
      {
        name: formData.name,
        email: formData.email,
        message: formData.message
      },
      "9d-OtoTjZxp_SX8OP"    // replace with your public key
    )
    .then(() => {
      alert("Message Sent Successfully!");
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    })
    .catch(() => {
      alert("Failed to send message.");
    });
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
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="form-control mb-3"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          className="form-control mb-3"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button className="btn btn-primary">
          Send Message
        </button>

      </form>
    </section>
  );
}