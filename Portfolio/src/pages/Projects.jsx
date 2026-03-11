import { useState } from "react";
import Footer from "../components/Footer";

export default function Projects() {

  const [projects] = useState([
    {
      title: "Spotify UI Clone",
      description: "Responsive music player built using HTML, CSS & JS."
    },
    {
      title: "To-Do App",
      description: "Task manager built with React and useState."
    },
    {
      title: "Healthcare Booking System",
      description: "Cloud-based system using Spring Boot & Microservices."
    }
  ]);

  return (
    <section id="projects" className="bg-light py-5">
      <div className="container">
        <h2 className="mb-4">Projects</h2>

        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card shadow h-100">
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <button className="btn btn-outline-primary btn-sm">
                    View Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
      <Footer/>
    </section>
  );
}