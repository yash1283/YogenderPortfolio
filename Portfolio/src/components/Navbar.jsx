import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArtstation } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {

  const closeNavbar = () => {
    const navbar = document.getElementById("navbarNav");
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">

        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <FontAwesomeIcon icon={faArtstation} />
          <span className="name-font">Yogender Singh</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={closeNavbar}>
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/skills" onClick={closeNavbar}>
                Skills
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/projects" onClick={closeNavbar}>
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={closeNavbar}>
                Contact
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}