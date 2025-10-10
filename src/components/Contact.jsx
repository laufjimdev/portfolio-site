import React, { useState } from "react";
import { Mail, Github, Linkedin, Send, MessageCircle, Coffee } from "lucide-react";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await SendEmail({
        to: "your-email@example.com",
        subject: `Portfolio Contact: ${formData.subject}`,
        body: `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
        `,
      });
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
    }
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container pt-8rem pb-5">
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="fw-bold display-4 mb-3 gradient-text">
          Let's Connect
        </h1>
        <p className="lead text-body mx-auto">
          I'm always excited to discuss new opportunities, collaborate on projects, 
          or simply chat about the journey from engineering to development.
        </p>
      </div>

      <div className="row g-4">
        {/* Contact Form */}
        <div className="col-lg-6 p-4">
          <div className="rounded-4 p-4 glass-effect text-white">
            <h2 className="h4 mb-4 d-flex align-items-center">
              <MessageCircle size={22} className="me-2 text-white" />
              Send me a message
            </h2>

            {submitted ? (
              <div className="text-center py-4">
                <div className="d-flex justify-content-center align-items-center mb-3"
                     style={{ width: "64px", height: "64px", backgroundColor: "rgba(0,255,0,0.1)", borderRadius: "50%", margin: "0 auto" }}>
                  <Send className="text-success" size={28} />
                </div>
                <h3 className="fw-semibold">Message Sent!</h3>
                <p className="text-muted">Thank you for reaching out. I'll get back to you as soon as possible!</p>
                <button className="btn btn-primary" style={{ backgroundColor: "#6D3C88" }}
                        onClick={() => setSubmitted(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label text-body">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-control glass-effect text-white border-purple"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-body">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-control glass-effect text-white border-purple"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label text-body">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="form-control glass-effect text-white border-purple"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label text-body">Message</label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="form-control glass-effect text-white border-purple"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn w-100 text-white py-2"
                      style={{
                        background: "linear-gradient(90deg, #6D3C88, #883C7D)",
                        border: "none",
                      }}
                    >
                      {isSubmitting ? "Sending..." : (
                        <>
                          <Send size={16} className="me-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Contact Info + Social */}
        <div className="col-lg-6 d-flex flex-column gap-4 p-4">
          {/* Quick Contact */}
          <div className="rounded-4 p-4 glass-effect">
            <h2 className="h4 mb-4">Get in touch</h2>
            <div className="d-flex align-items-center mb-3">
              <div className="p-2 rounded-3 me-3" style={{ backgroundColor: "#6D3C88" }}>
                <Mail size={24} className="text-white" />
              </div>
              <div>
                <p className="mb-1 text-secondary">Email me directly</p>
                <p className="mb-0 text-purple">laura.dev@example.com</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div className="p-2 rounded-3 me-3" style={{ backgroundColor: "#883C7D" }}>
                <Coffee size={24} className="text-white" />
              </div>
              <div>
                <p className="mb-1 text-secondary">Let's grab coffee</p>
                <p className="mb-0 text-purple" >Virtual or in-person meetups</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="rounded-4 p-4 glass-effect text-white">
            <h2 className="h4 mb-4">Follow my journey</h2>
            <a
              href="https://github.com/laufjimdev"
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex align-items-center text-decoration-none text-white mb-3 p-2 rounded-3"
              style={{ transition: "background 0.3s" }}
              onMouseOver={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
              onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <div className="p-2 bg-secondary rounded-3 me-3 d-flex align-items-center justify-content-center">
                <Github size={20} />
              </div>
              <div>
                <p className="mb-0 fw-semibold">GitHub</p>
                <small className="text-purple">Check out my code</small>
              </div>
            </a>

            <a
              href=""https://linkedin.com/in/laura-jimenez-8a6592344"
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex align-items-center text-decoration-none text-white p-2 rounded-3"
              style={{ transition: "background 0.3s" }}
              onMouseOver={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
              onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <div className="p-2 glass-effect rounded-3 me-3 d-flex align-items-center justify-content-center">
                <Linkedin size={20} />
              </div>
              <div>
                <p className="mb-0 fw-semibold">LinkedIn</p>
                <small className="text-purple">Professional updates</small>
              </div>
            </a>
          </div>

          {/* Availability */}
          <div className="rounded-4 p-4 glass-effect text-white">
            <h2 className="h4 mb-3">Currently</h2>
            <ul className="list-unstyled mb-0">
              <li className="d-flex align-items-center mb-2">
                <span className="badge rounded-circle me-2" style={{ backgroundColor: "green", width: "10px", height: "15px" }}>&nbsp;</span>
                <span className="text-body">Open to opportunities</span>
              </li>
              <li className="d-flex align-items-center mb-2">
                <span className="badge rounded-circle me-2" style={{ backgroundColor: "#6D3C88", width: "10px", height: "15px" }}>&nbsp;</span>
                <span className="text-body">Building my startup</span>
              </li>
              <li className="d-flex align-items-center">
                <span className="badge rounded-circle me-2" style={{ backgroundColor: "#473C88", width: "10px", height: "15px" }}>&nbsp;</span>
                <span className="text-body">Learning new technologies</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
