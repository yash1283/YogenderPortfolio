import BackgroundAnimation from "../components/BgAnimation";
import Socials from "../components/Socials"
import Footer from "../components/Footer";
export default function Hero() {
  return (
    <section className="bg-light py-5 container-fluid">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT SIDE - TEXT */}
          <div className="col-md-6">
            <h1 className="display-4 fw-bold">
              Hi, I'm Yogender Singh 👋
            </h1>

            <h4>
              Software developer, MERN specialist &
              <br />
              backend architect.
            </h4>

            <p className="lead">
              I'm Yogender, a dedicated MERN stack developer who builds end-to-end web applications using MongoDB, Express, React, and Node.js.
              From designing intuitive user interfaces to developing secure RESTful APIs,
              I transform ideas into scalable digital products.
            </p>

            <button className="btn btn-primary me-3">
              Hire Me
            </button>

            <button className="btn btn-outline-dark">
              Download CV
            </button>
          </div>

          {/* RIGHT SIDE - ANIMATION */}
          <div className="col-md-6 d-flex justify-content-center">
            <BackgroundAnimation />
          </div>

        </div>

      </div>
      <br />
      <br />
      <hr />
      <div className="container">
        <h2 className="fw-bold display-6">Training & Certifications</h2>
        <div className="">
          <br />
          <h3 className="lead fw-semibold">Apna College (MERN Stack)</h3>
          <p className="lead">
            Successfully completed a MERN Stack development program focused on building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Developed expertise in creating RESTful APIs, implementing authentication systems, handling client-server communication, managing databases, and deploying responsive applications. This course enhanced my ability to design, develop, and maintain scalable web solutions.
          </p>
          <hr />
          <h3 className="lead fw-semibold">G&P IT Solution (Front End Technologies)</h3>
          <p className="lead">
            I completed a professional MERN Stack certification where I learned to design and develop full-stack web applications using MongoDB, Express.js, React.js, and Node.js. I gained practical experience in API development, database schema design, user authentication (JWT), middleware implementation, state management, and integrating frontend with backend services. This training enhanced my understanding of modern web application architecture and scalable system design.
          </p>
        </div>
      </div>
      <Socials />
    </section>

  );
}