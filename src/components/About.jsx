import React from "react";
import { DatabaseBackup, Blocks, Heart, Route, Target, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  
  return (
    <div className="container pt-8rem pb-5">
      <div className="mx-auto" style={{ maxWidth: "900px" }}>
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold gradient-text mb-3">My Story</h1>
          
        </div>

        {/* Story Timeline */}
        <div className="d-flex flex-column gap-5">
          <div className="card glass-effect rounded-4 p-4 border-0">
            <div className="d-flex gap-3">
              <div className="flex-shrink-0">
                <div className="d-flex align-items-center justify-content-center bg-brand-dark rounded-3" style={{ width: "48px", height: "48px" }}>
                  <DatabaseBackup className="text-white" size={24} />
                </div>
              </div>
              <div>
                <h3 className="h4 fw-semibold text-white mb-3">Engineering Systems, Data, and Continuous Improvement</h3>
                <p className="text-body lead">
                  My journey began with Industrial Engineering, where I learned to analyze processes, optimize systems, and solve complex operational problems. That experience taught me to think in terms of efficiency, scalability, and measurable outcomes—principles that continue to shape how I approach technology today.
              </p>

              <p className="text-body lead">
                  Over time, I became increasingly interested in the technical side of solving problems. I started studying software development to better understand how modern applications are built and how technology can automate complex workflows. Through that process, I discovered that the work I enjoyed most wasn't necessarily building user interfaces—it was working with data, automation, and systems behind the scenes.
              </p>
              </div>
            </div>
          </div>

          {/* The Spark */}
          <div className="card glass-effect rounded-4 p-4 border-0">
            <div className="d-flex gap-3">
              <div className="flex-shrink-0">
                <div className="d-flex align-items-center justify-content-center bg-purple rounded-3" style={{ width: "48px", height: "48px" }}>
                  <Route className="text-white" size={24} />
                </div>
              </div>
              <div>
                <h3 className="h4 fw-semibold text-white mb-3">Finding the Right Path</h3>
                <p className="text-body lead">
                  After exploring software development, I decided to focus my efforts on Data Engineering.
                </p>
                <p className="text-body lead">
                  The transition felt like a natural progression rather than a complete career change. Data engineering combines many of the things that originally attracted me to Industrial Engineering: process optimization, systems thinking, problem-solving, and creating reliable solutions that support decision-making at scale.
                </p>
                <p className="text-body lead">
                  Today, my learning focuses on SQL, Python, data modeling, ETL/ELT pipelines, data warehousing, cloud technologies, and workflow automation.
                </p>
              </div>
            </div>
          </div>

          {/* Learning Marathon */}
          <div className="card glass-effect rounded-4 p-4 border-0">
            <div className="d-flex gap-3">
              <div className="flex-shrink-0">
                <div className="d-flex align-items-center justify-content-center bg-brand-dark bg-opacity-25 rounded-3" style={{ width: "48px", height: "48px" }}>
                  <Blocks className="text-white" size={24} />
                </div>
              </div>
              <div>
                <h3 className="h4 fw-semibold text-white mb-3">The Learning Journey</h3>
                <p className="text-body lead mb-3">
                  For the past several years, I've invested significant time in developing technical skills through structured learning and hands-on projects. </p>
                <p className="text-body lead mb-3">
                  I believe the best way to learn is by building. Every project is an opportunity to apply new concepts, make mistakes, improve, and deepen my understanding of how data systems work in real-world environments.</p>
                <p className="text-body lead mb-3">
                  This portfolio documents that journey—showcasing both completed projects and the progression of skills I'm developing along the way.
                </p>

                {/* Tech grid */}
                <div className="row g-3 mt-3">
                  {["Python", "SQL", "Data Pipelines", "Cloud Solutions"].map((tech) => (
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
                <h3 className="h4 fw-semibold text-white mb-3">Building What's Next</h3>
                <p className="text-body lead">
                  My goal is to become a data engineer who can bridge business needs with technical solutions.
                <p className="text-body lead">
                  By combining my Industrial Engineering background with modern data engineering practices, I hope to help organizations transform raw data into reliable systems, efficient processes, and actionable insights.</p>
                <p className="text-body lead">
                  Every project I build is another step toward that goal.</p>
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
                <h3 className="h4 fw-semibold text-white mb-3">Beyond Technology</h3>
                <p className="text-body lead">
                  When I'm not at my computer, you’ll probably find me out in nature — hiking, journaling by the ocean, or planning my next adventure. I love learning, creating, and exploring new perspectives. Whether it’s a book, a side project, or a quiet sunrise, I’m always searching for inspiration that connects purpose and creativity.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <Link to="/contact" className="card glass-effect rounded-4 p-4 mt-5 text-center border-0" style={{ textDecoration: "none"}}>
          <div className="d-flex justify-content-center mb-3">
            <Star size={32} className="text-purple" />
          </div>
          <h3 className="h4 fw-semibold text-white mb-3">Let's Connect</h3>
          <p className="text-body lead">
            I'm always interested in connecting with other professionals, learners, and builders who are passionate about technology, data, and continuous improvement.
          </p>
        </Link>
      </div>
    </div>
  );
}
