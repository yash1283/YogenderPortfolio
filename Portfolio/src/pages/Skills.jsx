import { useState } from "react";
import "../css/Skills.css"

import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJava, FaPython, FaGit, FaLock, FaDatabase, FaBug } from "react-icons/fa";
import { SiJavascript, SiExpress, SiMongodb, SiCplusplus, SiJsonwebtokens } from "react-icons/si";
import { MdApi } from "react-icons/md";
import { GiBrain } from "react-icons/gi";
import { TbHierarchy2 } from "react-icons/tb";

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

  const [concepts] = useState([
    { name: "OOPs", icon: <TbHierarchy2 size={45} color="#6f42c1" /> },
    { name: "Data Structures", icon: <GiBrain size={45} color="#e83e8c" /> },
    { name: "Authentication", icon: <FaLock size={45} color="#dc3545" /> },
    { name: "Authorization", icon: <SiJsonwebtokens size={45} color="#fd7e14" /> },
    { name: "REST API", icon: <MdApi size={45} color="#20c997" /> },
    { name: "CRUD Operations", icon: <FaDatabase size={45} color="#0d6efd" /> },
    { name: "Database Design", icon: <FaDatabase size={45} color="#198754" /> },
    { name: "MVC Architecture", icon: <TbHierarchy2 size={45} color="#6f42c1" /> }
  ]);

  return (
    <section id="skills" className="container-fluid py-5">

      {/* Technical Skills */}

      <h2 className="mb-5 text-center fw-bold">Technical Skills</h2>

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


      {/* Core Concepts */}

      <h2 className="mt-5 mb-4 text-center fw-bold">Core Concepts</h2>

      <div className="row justify-content-center">

        {concepts.map((concept, index) => (
          <div className="col-md-3 col-sm-6 col-6 mb-4" key={index}>
            <div className="card shadow-sm text-center p-4 h-100 concept-card">

              <div className="mb-3">
                {concept.icon}
              </div>

              <h6 className="fw-semibold">{concept.name}</h6>

            </div>
          </div>
        ))}

      </div>

    </section>
  );
}