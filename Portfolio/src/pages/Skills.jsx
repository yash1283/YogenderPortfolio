import { useState } from "react";
import "../css/Skills.css"
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJava, FaPython, FaGit } from "react-icons/fa";
import { SiJavascript, SiExpress, SiMongodb, SiCplusplus } from "react-icons/si";

export default function Skills() {

  const [skills] = useState([
    { name: "HTML", icon: <FaHtml5 size={50} color="#E34F26" /> },
    { name: "CSS", icon: <FaCss3Alt size={50} color="#1572B6" /> },
    { name: "JavaScript", icon: <SiJavascript size={50} color="#F7DF1E" /> },
    { name: "React", icon: <FaReact size={50} color="#61DBFB" /> },
    { name: "Node.js", icon: <FaNodeJs size={50} color="#3C873A" /> },
    { name: "Express.js", icon: <SiExpress size={50} /> },
    { name: "MongoDB", icon: <SiMongodb size={50} color="#4DB33D" /> },
    { name: "Java", icon: <FaJava size={50} color="#f89820" /> },
    { name: "Python", icon: <FaPython size={50} color="#3776AB" /> },
    { name: "C/C++", icon: <SiCplusplus size={50} color="#00599C" /> },
    { name: "Git", icon: <FaGit size={50} color="#F1502F" /> }
  ]);

  return (
    <section id="skills" className="container-fluid py-5">
      <h2 className="mb-5 text-center fw-bold">Skills</h2>

      <div className="row justify-content-center">

        {skills.map((skill, index) => (
          <div className="col-md-3 col-sm-6 col-6 mb-4" key={index}>
            <div className="card shadow-sm text-center p-4 h-100 skill-card">

              <div className="mb-3">
                {skill.icon}
              </div>

              <h6 className="fw-semibold">{skill.name}</h6>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}