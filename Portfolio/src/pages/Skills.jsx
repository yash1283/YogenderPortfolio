import { useState } from "react";
import Footer from "../components/Footer";

export default function Skills() {

  const [skills] = useState([
    "React",
    "JavaScript",
    "Bootstrap",
    "Node.js",
    "MongoDB",
    "Java"
  ]);

  return (
    <section id="skills" className="container-fluid py-5">
      <h2 className="mb-4">Skills</h2>

      <div className="row">
        {skills.map((skill, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="card shadow-sm text-center p-3">
              {skill}
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </section>
  );
}