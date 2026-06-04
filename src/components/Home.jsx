import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Database, Rocket } from "lucide-react";

export default function Home() {
  const getYearsLearning = () => {
    const learningStartDate = new Date(2023, 6, 1);
    const today = new Date();
    let years = today.getFullYear() - learningStartDate.getFullYear();
    const m = today.getMonth() - learningStartDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < learningStartDate.getDate())) {
      years--;
    }

    return Math.max(years, 0);
  };

  return (
    <div className="min-vh-100 d-flex flex-column justify-content-center">
      {/* Hero Section */}
      <section className="position-relative px-3 pt-8rem ">
        <div className="container mt-5">
          <div className="row align-items-center g-4">
            {/* Left Content */}
            <div className="col-lg-6">
              <div className="mb-4">
                <div className="d-flex align-items-center text-light mb-3 sparkles-text">
                  <Sparkles className="me-2" />
                  <span className="small text-uppercase text-body">
                    Welcome to my portfolio
                  </span>
                </div>

                <h1 className="display-1 fw-bold text-white">
                  Hi, I'm <br />
                  <span className="gradient-text">Laura</span>
                </h1>

                <p className="lead text-body">
                  Building modern data solutions
                  <br />
                  <span className="text-purple">
                    Industrial Engineer transitioning to Data Engineering
                  </span>
                </p>
              </div>

              <p className="text-body mb-4">
                I'm passionate about transforming raw data into reliable,
                scalable solutions. Currently building projects that strengthen
                my data engineering skills while exploring modern data
                architectures, pipelines, and analytics workflows.
              </p>

              <div className="d-flex flex-column flex-sm-row gap-3">
                <Link
                  to="/projects"
                  className="btn btn-gradient d-flex align-items-center justify-content-center px-4 py-3"
                >
                  View My Work <ArrowRight className="ms-2" />
                </Link>

                <Link
                  to="/about"
                  className="btn btn-outline-primary-custom d-flex align-items-center justify-content-center px-4 py-3"
                >
                  My Story
                </Link>
              </div>
            </div>

            {/* Right Content */}
            <div className="col-lg-6 py-4">
              <div className="floating-animation">
                <div className="glass-effect p-4 floated-card rounded-4">
                  <div className="d-flex align-items-center mb-3">
                    <Database className="me-2 icon-color" />
                    <h3 className="h5 text-white mb-0">Currently Building</h3>
                  </div>

                  <div className="mb-3">
                    <div className="glass-effect p-3 rounded-4 mb-2">
                      <h4 className="fw-semibold text-body mb-2">
                        Data Engineering Portfolio ✨
                      </h4>
                      <p className="small text-dark mb-0">
                        Showcasing projects, pipelines, and analytics solutions
                      </p>
                    </div>

                    <div className="glass-effect p-3 rounded-4">
                      <div className="d-flex align-items-center mb-2">
                        <Rocket size={25} className="me-2 rocket-color" />
                        <h4 className="fw-semibold text-body mb-0">
                          New Data Projects
                        </h4>
                      </div>
                      <p className="small text-dark mb-0">
                        Continuously learning and building with modern data
                        tools
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-3 py-5 justify-content-center">
        <div className="container">
          <div className="d-flex flex-column flex-md-row gap-4">
            {/* Project Card 1 */}
            <div
              className="col-12 col-md-4 glass-effect p-4 text-center shadow-lg rounded-4"
              style={{ minHeight: "320px" }}
            >
              <div
                className="rounded-4 mb-3 d-flex align-items-center justify-content-center"
                style={{
                  height: "140px",
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
              >
                <span className="text-body">Project Thumbnail</span>
              </div>

              <h4 className="text-white mb-2">Project Title</h4>

              <p className="text-body mb-4">
                Short project description goes here. Briefly explain the
                objective and technologies used.
              </p>

              <Link
                to="/projects"
                className="btn btn-outline-primary-custom"
              >
                See More
              </Link>
            </div>

            {/* Project Card 2 */}
            <div
              className="col-12 col-md-4 glass-effect p-4 text-center shadow-lg rounded-4"
              style={{ minHeight: "320px" }}
            >
              <div
                className="rounded-4 mb-3 d-flex align-items-center justify-content-center"
                style={{
                  height: "140px",
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
              >
                <span className="text-body">Project Thumbnail</span>
              </div>

              <h4 className="text-white mb-2">Project Title</h4>

              <p className="text-body mb-4">
                Short project description goes here. Briefly explain the
                objective and technologies used.
              </p>

              <Link
                to="/projects"
                className="btn btn-outline-primary-custom"
              >
                See More
              </Link>
            </div>

            {/* Project Card 3 */}
            <div
              className="col-12 col-md-4 glass-effect p-4 text-center shadow-lg rounded-4"
              style={{ minHeight: "320px" }}
            >
              <div
                className="rounded-4 mb-3 d-flex align-items-center justify-content-center"
                style={{
                  height: "140px",
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
              >
                <span className="text-body">Project Thumbnail</span>
              </div>

              <h4 className="text-white mb-2">Project Title</h4>

              <p className="text-body mb-4">
                Short project description goes here. Briefly explain the
                objective and technologies used.
              </p>

              <Link
                to="/projects"
                className="btn btn-outline-primary-custom"
              >
                See More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}