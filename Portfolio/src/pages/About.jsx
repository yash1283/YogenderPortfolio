import { FaGraduationCap } from "react-icons/fa";
import Footer from "../components/Footer";
export default function About() {
  return (
    <section id="about" className="container-fluid mt-5">

      {/* Hero Header */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">
          About <span className="text-primary">Yogender Singh</span>
        </h1>
        <p className="lead text-muted">
          MERN Stack Developer | Full-Stack Engineer | Backend & Frontend Specialist
        </p>
      </div>

      {/* About Me Section */}
      <div className="row align-items-start">
        <div className="col-lg-7">
          <h3 className="fw-bold mb-3">Who I Am</h3>
          <p>
            I am a passionate MERN stack developer with expertise in building
            responsive and scalable web applications using React, Node.js,
            Express.js, and MongoDB. I enjoy solving real-world problems and
            turning ideas into functional, dynamic web solutions.
          </p>
          <p>
            I am constantly learning new technologies, improving my skills, and
            working on projects that make an impact. I believe in clean code,
            performance optimization, and delightful user experience.
          </p>
        </div>

        <div className="col-lg-5 text-center">
          {/* You can put a profile picture here if you have one */}
          <img
            src="src\assets\profileImg.jpeg"
            alt="Profile"
            className="img-fluid rounded shadow"
            width="40%"
          />
        </div>
      </div>

      {/* Education/Certifications Timeline */}
      <div className="mt-5">
        <h3 className="fw-bold mb-4">Education & Certifications</h3>

        <ul className="timeline list-unstyled">

          {/* MCA */}
          <li className="mb-4">
            <h5 className="fw-semibold">
              <FaGraduationCap className="me-2 text-primary" />
              MCA – Chandigarh University, Punjab
            </h5>
            <p className="text-muted mb-1">
              2024 – 2026 | CGPA: 7.26
            </p>
            <p>
              Advanced full-stack application development and strong fundamentals
              in backend architectures, API design, and frontend integration.
            </p>
          </li>

          {/* BCA */}
          <li className="mb-4">
            <h5 className="fw-semibold">
              <FaGraduationCap className="me-2 text-primary" />
              BCA – Kurukshetra University
            </h5>
            <p className="text-muted mb-1">
              2021 – 2024 | 65%
            </p>
            <p>
              Built strong foundations in programming languages, web technologies,
              and software development lifecycle.
            </p>
          </li>

          {/* Senior Secondary */}
          <li className="mb-4">
            <h5 className="fw-semibold">
              <FaGraduationCap className="me-2 text-primary" />
              Senior Secondary – DAV Public School, Radaur
            </h5>
            <p className="text-muted mb-1">
              2019 – 2021 | 79%
            </p>
          </li>

          {/* Matriculation */}
          <li>
            <h5 className="fw-semibold">
              <FaGraduationCap className="me-2 text-primary" />
              Matriculation – DAV Public School, Radaur
            </h5>
            <p className="text-muted mb-1">
              2018 – 2019 | 63%
            </p>
          </li>

        </ul>
      </div>
      <Footer/>
    </section>
    
  );
}