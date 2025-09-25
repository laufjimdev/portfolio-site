import React from "react";
import { ArrowRight, Sparkles, Code, Rocket } from "lucide-react";
import './Home.css';

export default function Home() {
  return (
    <div className="home min-vh-100 d-flex flex-column justify-content-center">
      {/* Hero Section */}
      <section className="position-relative px-3 py-5">
        <div className="container mt-5">
          <div className="row align-items-center g-4">
            {/* Left Content */}
            <div className="col-lg-6">
              <div className="mb-4">
                <div className="d-flex align-items-center text-light mb-3 sparkles-text">
                  <Sparkles className="me-2" />
                  <span className="small text-uppercase">Welcome to my world</span>
                </div>

                <h1 className="display-4 fw-bold text-white">
                  Hi, I'm <br />
                  <span className="gradient-text">Laura</span>
                </h1>

                <p className="lead text-secondary">
                  From blueprints to code.<br />
                  <span className="text-primary-custom">Industrial Engineer turned Developer</span>
                </p>
              </div>

              <p className="text-secondary mb-4">
                After 2 years of dedicated learning and just building my first React app, 
                I'm passionate about creating meaningful digital experiences. 
                Currently working on my startup idea while exploring the endless possibilities of code.
              </p>

              <div className="d-flex flex-column flex-sm-row gap-3">
                <a
                  className="btn btn-gradient d-flex align-items-center justify-content-center"
                >
                  View My Work <ArrowRight className="ms-2" />
                </a>
                <a
                  className="btn btn-outline-primary-custom d-flex align-items-center justify-content-center"
                >
                  My Story
                </a>
              </div>
            </div>

            {/* Right Content */}
            <div className="col-lg-6">
              <div className="floating-animation">
                <div className="glass-effect p-4 rounded-3xl">
                  <div className="d-flex align-items-center mb-3">
                    <Code className="me-2 icon-color" />
                    <h3 className="h5 text-white mb-0">Currently Building</h3>
                  </div>

                  <div className="mb-3">
                    <div className="glass-effect p-3 rounded-2xl mb-2">
                      <h4 className="fw-semibold text-secondary mb-2">First React App ✨</h4>
                      <p className="small text-primary-custom mb-0">
                        Just completed 2 weeks ago - a milestone in my coding journey
                      </p>
                    </div>

                    <div className="glass-effect p-3 rounded-2xl">
                      <div className="d-flex align-items-center mb-2">
                        <Rocket className="me-2 rocket-color" />
                        <h4 className="fw-semibold text-secondary mb-0">Startup Project</h4>
                      </div>
                      <p className="small text-primary-custom mb-0">
                        Working on my next big idea - stay tuned!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="position-absolute top-0 start-0 bg-purple-circle"></div>
        <div className="position-absolute bottom-0 end-0 bg-pink-circle"></div>
      </section>

      {/* Quick Stats */}
      <section className="px-3 pb-5">
        <div className="container">
          <div className="row g-3 text-center">
            <div className="col-md-4 glass-effect p-4 rounded-2xl">
              <div className="display-6 gradient-text mb-2">2</div>
              <p className="text-secondary mb-0">Years Learning</p>
            </div>
            <div className="col-md-4 glass-effect p-4 rounded-2xl">
              <div className="display-6 gradient-text mb-2">1</div>
              <p className="text-secondary mb-0">React App Built</p>
            </div>
            <div className="col-md-4 glass-effect p-4 rounded-2xl">
              <div className="display-6 gradient-text mb-2">∞</div>
              <p className="text-secondary mb-0">Dreams to Code</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
