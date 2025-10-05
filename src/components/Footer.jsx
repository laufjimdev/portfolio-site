import React from "react";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-top mt-5" style={{ borderColor: "rgba(109, 60, 136, 0.3)" }}>
      <div className="container py-5">
        <div className="text-center">
          <p className="text-body mb-3">
            Crafted with 💜 by Laura – From Industrial Engineering to Code
          </p>
          <div className="d-flex justify-content-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
              style={{ color: "#883C7D" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#c8b9d1")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#883C7D")}
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
              style={{ color: "#883C7D" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#c8b9d1")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#883C7D")}
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
