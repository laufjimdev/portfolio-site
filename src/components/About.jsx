import React from "react";
import { GraduationCap, Code, Heart, Lightbulb, Target, Star } from "lucide-react";

export default function About() {
  return (
    <div className="container pt-8rem pb-5">
      <div className="mx-auto" style={{ maxWidth: "900px" }}>
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold gradient-text mb-3">My Story</h1>
          <p className="lead text-body mx-auto" style={{ maxWidth: "600px" }}>
            The journey from designing systems to coding dreams – here's how I discovered my passion for development
          </p>
        </div>

        {/* Story Timeline */}
        <div className="d-flex flex-column gap-5">
          {/* Industrial Engineering Background */}
          <div className="card glass-effect rounded-4 p-4 border-0">
            <div className="d-flex gap-3">
              <div className="flex-shrink-0">
                <div className="d-flex align-items-center justify-content-center bg-brand-dark rounded-3" style={{ width: "48px", height: "48px" }}>
                  <GraduationCap className="text-white" size={24} />
                </div>
              </div>
              <div>
                <h3 className="h4 fw-semibold text-white mb-3">Industrial Engineering Foundation</h3>
                <p className="text-body lead">
                  My journey began with Industrial Engineering, where I learned to optimize systems, 
                  analyze processes, and solve complex problems. This analytical mindset became the 
                  perfect foundation for my transition into software development – after all, 
                  coding is just another way of designing efficient systems.
                </p>
              </div>
            </div>
          </div>

          {/* The Spark */}
          <div className="card glass-effect rounded-4 p-4 border-0">
            <div className="d-flex gap-3">
              <div className="flex-shrink-0">
                <div className="d-flex align-items-center justify-content-center bg-purple rounded-3" style={{ width: "48px", height: "48px" }}>
                  <Lightbulb className="text-white" size={24} />
                </div>
              </div>
              <div>
                <h3 className="h4 fw-semibold text-white mb-3">The Spark</h3>
                <p className="text-body lead">
                  Two years ago, I realized that the future I envisioned required more than traditional 
                  engineering. I wanted to build things that could reach people instantly, solve problems 
                  at scale, and create experiences that matter. That's when I decided to dive headfirst 
                  into the world of programming.
                </p>
              </div>
            </div>
          </div>

          {/* Learning Marathon */}
          <div className="card glass-effect rounded-4 p-4 border-0">
            <div className="d-flex gap-3">
              <div className="flex-shrink-0">
                <div className="d-flex align-items-center justify-content-center bg-brand-dark bg-opacity-25 rounded-3" style={{ width: "48px", height: "48px" }}>
                  <Code className="text-white" size={24} />
                </div>
              </div>
              <div>
                <h3 className="h4 fw-semibold text-white mb-3">The Learning Marathon</h3>
                <p className="text-body lead mb-3">
                  For the past two years, I've been completely immersed in learning. From HTML and CSS 
                  to JavaScript and React, every late night and weekend has been an investment in this dream. 
                  The moment I built my first React app just two weeks ago – seeing my code come to life 
                  in the browser – was pure magic.
                </p>

                {/* Tech grid */}
                <div className="row g-3 mt-3">
                  {["JavaScript", "React", "HTML/CSS", "Node.js"].map((tech) => (
                    <div key={tech} className="col-6 col-md-3">
                      <div className="card glass-effect text-center p-2 border-0 rounded-3">
                        <span className="text-body fw-medium">{tech}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Building My Future */}
          <div className="card glass-effect rounded-4 p-4 border-0">
            <div className="d-flex gap-3">
              <div className="flex-shrink-0">
                <div className="d-flex align-items-center justify-content-center bg-white bg-opacity-25 rounded-3" style={{ width: "48px", height: "48px" }}>
                  <Target className="text-lavander" size={24} />
                </div>
              </div>
              <div>
                <h3 className="h4 fw-semibold text-white mb-3">Building My Future</h3>
                <p className="text-body lead">
                  Today, I'm not just learning anymore – I'm building. My first React app was just the beginning. 
                  I'm currently working on a startup idea that combines my engineering background with my 
                  newfound coding skills. Every day brings new challenges and new possibilities.
                </p>
              </div>
            </div>
          </div>

          {/* Beyond the Code */}
          <div className="card glass-effect rounded-4 p-4 border-0">
            <div className="d-flex gap-3">
              <div className="flex-shrink-0">
                <div className="d-flex align-items-center justify-content-center btn-gradient rounded-3" style={{ width: "48px", height: "48px" }}>
                  <Heart className="text-white" size={24} />
                </div>
              </div>
              <div>
                <h3 className="h4 fw-semibold text-white mb-3">Beyond the Code</h3>
                <p className="text-body lead">
                  At 28, I'm proof that it's never too late to chase a new dream. When I'm not coding, 
                  you'll find me sketching out new app ideas, reading about the latest tech trends, 
                  or planning my next project. I believe in authentic growth, continuous learning, 
                  and building things that genuinely help people.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="card glass-effect rounded-4 p-4 mt-5 text-center border-0">
          <div className="d-flex justify-content-center mb-3">
            <Star size={32} className="text-purple" />
          </div>
          <h3 className="h4 fw-semibold text-white mb-3">Let's Build Something Together</h3>
          <p className="text-body lead">
            I'm always excited to connect with fellow developers, potential collaborators, 
            or anyone who shares a passion for innovative technology.
          </p>
        </div>
      </div>
    </div>
  );
}
