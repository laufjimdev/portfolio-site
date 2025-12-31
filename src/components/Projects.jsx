import React from "react";
import { ExternalLink, Github, Rocket, Calendar, Code, Sparkles } from "lucide-react";


export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "My First React App",
      description:
        "A milestone project that marked my transition from learner to builder. This application showcases fundamental React concepts and represents countless hours of dedicated learning.",
      tech: ["React", "JavaScript", "CSS", "HTML"],
      status: "Completed",
      date: "Summer 2025",
      category: "Learning Project",
      highlights: [
        "Component-based architecture",
        "State management with useState",
        "Responsive design implementation",
        "First deployed React application",
      ],
    },
    {
      id: 2,
      title: "Healing App — Emotional Wellness Platform (In Development)",
      description:
        "A digital wellness project focused on creating a safer, more supportive social experience for people going through heartbreak, grief, or emotional low points. The platform emphasizes positive, healing-oriented content and intentional user experience design.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      status: "In Progress",
      date: "Ongoing",
      category: "Startup",
      highlights: [
        "End-to-end full-stack development",
        "Emotionally safe UX and content flows",
        "User onboarding and personalization logic",
        "Community-focused feature design",
        "Early-stage product validation and user research"
      ],
    },
  ];

  return (
    <div className="container pt-8rem pb-5">
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold gradient-text mb-3">My Projects</h1>
        <p className="text-body mx-auto" style={{ maxWidth: "600px" }}>
          From learning exercises to startup dreams - here's what I've been building
        </p>
      </div>

      {/* Projects Grid */}
      <div className="row g-4">
        {projects.map((project) => (
          <div key={project.id} className="col-12">
            <div className="card shadow-sm border-0 rounded-4 glass-effect p-4">
              <div className="row g-4">
                {/* Project Info */}
                <div className="col-lg-8">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                      <div className="d-flex align-items-center mb-2">
                        <span
                          className={`badge me-2 ${
                            project.status === "Completed"
                              ? "bg-success bg-opacity-25 text-success"
                              : "bg-brand-dark bg-opacity-25 text-brand-dark"
                          }`}
                        >
                          {project.status}
                        </span>
                        <small className="text-lavander">{project.category}</small>
                      </div>
                      <h3 className="h4 fw-bold text-white">{project.title}</h3>
                    </div>
                    <div className="d-flex align-items-center text-purple small">
                      <Calendar size={16} className="me-1" />
                      {project.date}
                    </div>
                  </div>

                  <p className="text-body">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="mb-3">
                    <h5 className="fw-semibold text-white d-flex align-items-center mb-2">
                      <Code size={16} className="me-2" /> Technologies Used
                    </h5>
                    <div>
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="badge rounded-pill bg-brand-dark bg-opacity-25 text-body me-2 mb-2"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="d-flex gap-3">
                    <a href="https://github.com/laufjimdev/PersonalWeb" target="_blank" rel="noopener noreferrer" className="btn btn-brand-dark d-flex align-items-center">
                      <Github size={16} className="me-2" />
                      View Code
                    </a>
                    {project.status === "Completed" && (
                      <a href="https://laufjimdev.github.io/PersonalWeb/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-purple d-flex align-items-center">
                        <ExternalLink size={16} className="me-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Highlights */}
                <div className="col-lg-4">
                  <div className="card glass-effect rounded-4 p-3 mb-3">
                    <h5 className="fw-semibold text-white d-flex align-items-center mb-3">
                      <Sparkles size={16} className="me-2" /> Key Highlights
                    </h5>
                    <ul className="list-unstyled">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-body d-flex mb-2">
                          <div className="me-2 mt-1">
                            <span className="badge rounded-circle bg-purple">&nbsp;</span>
                          </div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.status === "In Progress" && (
                    <div className="card glass-effect rounded-4 p-3">
                      <div className="d-flex align-items-center mb-2">
                        <Rocket size={25} className="rocket-color me-2" />
                        <h5 className="fw-semibold text-white mb-0">Coming Soon</h5>
                      </div>
                      <p className="text-body small">
                        This project is actively being developed. Follow my journey as I build my startup from the ground up!
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Future Projects */}
      <div className="card glass-effect rounded-4 p-4 mt-5 text-center">
        <div className="mb-3">
          <div className="bg-primary bg-opacity-25 rounded-3 p-3 mx-auto d-inline-flex">
            <Code size={28} className=" bg-opacity-25 text-body" />
          </div>
        </div>
        <h3 className="fw-bold text-white">More Projects Coming Soon</h3>
        <p className="text-body mx-auto" style={{ maxWidth: "600px" }}>
          As I continue my development journey, I'm constantly working on new projects. 
          Each one teaches me something new and gets me closer to my goals. Stay tuned for updates!
        </p>
      </div>
    </div>
  );
}
