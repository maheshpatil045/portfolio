import { useState } from 'react';
import './App.css';
import profile from "./1779530194737.png";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setIsMenuOpen(false); // Close mobile menu after click
    }
  };

  const skills = [
    { name: "Python", level: 85, icon: "fab fa-python" },
    { name: "SQL", level: 80, icon: "fas fa-database" },
    { name: "Power BI", level: 85, icon: "fas fa-chart-line" },
    { name: "React", level: 75, icon: "fab fa-react" },
    { name: "JavaScript", level: 80, icon: "fab fa-js" },
    { name: "Excel", level: 90, icon: "fas fa-file-excel" },
    { name: "Gen AI", level: 75, icon: "fas fa-robot" },
    { name: "Data Analysis", level: 85, icon: "fas fa-chart-bar" },
  ];

  const projects = [
    {
      title: "AI Content Generator",
      description: "Generative AI tool for automated content creation",
      tech: ["Python", "OpenAI", "React"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600",
    },
    {
      title: "Sales Analytics Dashboard",
      description: "Interactive Power BI dashboard for insights",
      tech: ["Power BI", "SQL", "DAX"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
    },
    {
      title: "E-commerce Database",
      description: "Database system with optimization",
      tech: ["PostgreSQL", "MongoDB"],
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a164?w=600",
    },
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="logo" onClick={() => scrollToSection('home')}>MAHESH</h1>
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li onClick={() => scrollToSection('home')}>Home</li>
            <li onClick={() => scrollToSection('about')}>About</li>
            <li onClick={() => scrollToSection('skills')}>Skills</li>
            <li onClick={() => scrollToSection('projects')}>Projects</li>
            <li onClick={() => scrollToSection('contact')}>Contact</li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-greeting">Hello, I'm</h2>
            <h1 className="hero-name">Mahesh Patil</h1>
            <p className="hero-role">BCS Graduate | Data Science & Gen AI Learner</p>
            <p className="hero-description">
              Passionate about transforming data into meaningful insights and building intelligent solutions
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => scrollToSection('projects')}>Explore My Work</button>
              <button className="btn-secondary" onClick={() => scrollToSection('contact')}>Contact Me</button>
            </div>
          </div>
          <div className="hero-image">
            <img
              src={profile}
              alt="profile"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate BCS graduate with a strong foundation in Data Science 
                and emerging technologies. My journey in tech started with curiosity about 
                how data can drive decision-making.
              </p>
              <p>
                Currently diving deep into Generative AI, I'm exploring ways to leverage AI 
                tools for creative problem-solving. I love building projects that make a difference.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <h3>1+</h3>
                  <p>Projects</p>
                </div>
                <div className="stat">
                  <h3>300+</h3>
                  <p>Hours of Coding</p>
                </div>
                <div className="stat">
                  <h3>5+</h3>
                  <p>Technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">My Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">
                  <i className={skill.icon}></i>
                </div>
                <h3>{skill.name}</h3>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: `${skill.level}%` }}>
                    <span>{skill.level}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-buttons">
                    <button className="project-btn" 
                     onClick={() => window.open('https://github.com', '_blank')}>
                      <i className="fab fa-github"></i> GitHub
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Connect</h3>
              <p>Have a project in mind? I'd love to hear about it!</p>
              <div className="contact-details">
                <p><i className="fas fa-envelope"></i> patilmahesh1586@gmail.com</p>
                <p><i className="fas fa-phone-alt"></i> +91 7666961350</p>
                <p><i className="fas fa-map-marker-alt"></i> solapur, India</p>
              </div>
              <div className="social-links">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-github"></i> GitHub
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </div>
            </div>
            <form className="contact-form" onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for your message! I will get back to you soon.');
              e.target.reset();
            }}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea rows="4" placeholder="Your Message" required></textarea>
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2026 Mahesh Patil. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}