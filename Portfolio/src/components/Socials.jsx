import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiCodepen } from "react-icons/si";

export default function Socials() {
  return (
    <section className="container py-5">
      
      {/* Heading */}
      <div className="text-center mb-4">
        <h2 className="fw-bold display-6">Socials</h2>
      </div>

      {/* Social Links */}
      <div className="d-flex flex-wrap justify-content-center gap-4 fs-5">

        <a href="https://github.com/yash1283" className="text-dark text-decoration-none d-flex align-items-center gap-2">
          <FaGithub /> GitHub
        </a>

        <a href="https://www.linkedin.com/in/yogender-singh-b67580271/" className="text-dark text-decoration-none d-flex align-items-center gap-2">
          <FaLinkedin /> LinkedIn
        </a>

        <a href="https://x.com/" className="text-dark text-decoration-none d-flex align-items-center gap-2">
          <FaXTwitter /> Twitter
        </a>

        <a href="https://www.instagram.com/" className="text-dark text-decoration-none d-flex align-items-center gap-2">
          <FaInstagram /> Instagram
        </a>

        <a href="https://www.youtube.com/" className="text-dark text-decoration-none d-flex align-items-center gap-2">
          <FaYoutube /> YouTube
        </a>

      </div>

    </section>
  );
}