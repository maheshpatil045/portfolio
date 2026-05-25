import { useState } from 'react';
import './App.css';
import profile from "./1779530194737.png";
import certificate1 from "./deloite.jpg.jpg";
import certificate2 from "./Tata.jpg.jpg";
import certificate3 from './ai.jpg';
import certificate4 from './deloitetech.jpg.jpg';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State for gallery tab (collage or certificates)
  const [galleryTab, setGalleryTab] = useState('collage');

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

  // ----- NEW: Gallery / Collage & Certificates data -----
  // Collage images (personal moments, work snapshots, learning events)
  const collageImages = [
    {
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600",
      title: "Team Meetup & Tech Talk",
      category: "collage"
    },
    {
      url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600",
      title: "Coding Workshop",
      category: "collage"
    },
    {
      url: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600",
      title: "AI Project Presentation",
      category: "collage"
    },
    {
      url: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600",
      title: "Data Science Hackathon",
      category: "collage"
    },
    {
      url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600",
      title: "Collaboration Session",
      category: "collage"
    },
    {
      url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600",
      title: "Learning Gen AI",
      category: "collage"
    }
  ];

  // Certificates images (achievements, courses, recognitions)
  const certificatesImages = [
    {
      url: "/src/deloite.jpg.jpg",
      title: "Data analytics Certificate",
      category: "certificate"
    },
    {
      url: "/src/Tata.jpg.jpg",
      title: "GenAI Powered Data analytics Certification",
      category: "certificate"
    },
    {
      url: "/src/ai.jpg",
      title: "Generative AI Certificate",
      category: "certificate"
    },
    {
        url: "/src/deloitetech.jpg.jpg",
        title: "Technology Job Simulation Certification",
      category: "certificate"
    },
    {
      url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600",
      title: "React & Frontend Development",
      category: "certificate"
    }
  ];

  // Function to handle image click (lightbox style)
  const handleImageClick = (imgUrl, title) => {
    // Simple modal/alert with visual feedback - preserves no theme change
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0,0,0,0.85)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = '2000';
    modal.style.cursor = 'pointer';
    const imgElem = document.createElement('img');
    imgElem.src = imgUrl;
    imgElem.alt = title;
    imgElem.style.maxWidth = '90%';
    imgElem.style.maxHeight = '90%';
    imgElem.style.borderRadius = '16px';
    imgElem.style.boxShadow = '0 25px 40px rgba(0,0,0,0.3)';
    imgElem.style.border = '3px solid white';
    const caption = document.createElement('p');
    caption.textContent = title;
    caption.style.color = 'white';
    caption.style.marginTop = '20px';
    caption.style.fontWeight = '500';
    caption.style.textAlign = 'center';
    caption.style.fontFamily = 'inherit';
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';
    container.appendChild(imgElem);
    container.appendChild(caption);
    modal.appendChild(container);
    modal.onclick = () => document.body.removeChild(modal);
    document.body.appendChild(modal);
  };

  // Get current gallery items based on selected tab
  const currentGalleryItems = galleryTab === 'collage' ? collageImages : certificatesImages;

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
            <li onClick={() => scrollToSection('gallery')}>Gallery</li>
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

      {/* NEW: Gallery & Certificates Section (Collage + Certificates) */}
      <section id="gallery" className="gallery-section">
        <div className="container">
          <h2 className="section-title">Moments & Milestones</h2>
          <div className="gallery-tabs">
            <button 
              className={`gallery-tab-btn ${galleryTab === 'collage' ? 'active' : ''}`}
              onClick={() => setGalleryTab('collage')}
            >
              <i className="fas fa-images"></i> My Gallery
            </button>
            <button 
              className={`gallery-tab-btn ${galleryTab === 'certificates' ? 'active' : ''}`}
              onClick={() => setGalleryTab('certificates')}
            >
              <i className="fas fa-certificate"></i> Certificates
            </button>
          </div>

          <div className="gallery-grid">
            {currentGalleryItems.map((item, idx) => (
              <div 
                key={idx} 
                className="gallery-item"
                onClick={() => handleImageClick(item.url, item.title)}
              >
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="gallery-img"
                  loading="lazy"
                />
                <div className="gallery-info">
                  <h4>{item.title}</h4>
                  <span className="gallery-badge">
                    {galleryTab === 'collage' ? <i className="fas fa-camera"></i> : <i className="fas fa-award"></i>}
                    {' '}{galleryTab === 'collage' ? 'Memory' : 'Credential'}
                  </span>
                </div>
              </div>
            ))}
          </div>
          {currentGalleryItems.length === 0 && (
            <p style={{ textAlign: 'center', marginTop: '2rem', color: '#64748b' }}>
              No items to display.
            </p>
          )}
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

      {/* Inline styles for gallery section (keeps theme untouched, just add required styles) */}
      <style>{`
        /* Gallery Section Styles - only new additions, no theme changes */
        .gallery-section {
          padding: 5rem 0;
          background: #ffffff;
        }
        .gallery-tabs {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }
        .gallery-tab-btn {
          background: #f1f5f9;
          border: none;
          padding: 0.7rem 1.8rem;
          border-radius: 40px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.2s;
          color: #1e293b;
          font-family: inherit;
        }
        .gallery-tab-btn.active {
          background: #2563eb;
          color: white;
          box-shadow: 0 4px 8px rgba(37,99,235,0.2);
        }
        .gallery-tab-btn:hover:not(.active) {
          background: #e2e8f0;
        }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.8rem;
        }
        .gallery-item {
          background: #fefefe;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 12px 20px -12px rgba(0,0,0,0.08);
          transition: transform 0.25s ease, box-shadow 0.2s;
          cursor: pointer;
        }
        .gallery-item:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 25px -12px rgba(0,0,0,0.12);
        }
        .gallery-img {
          width: 100%;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          display: block;
        }
        .gallery-info {
          padding: 1rem 1.2rem 1.2rem;
        }
        .gallery-info h4 {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.4rem;
          color: #0f172a;
        }
        .gallery-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          background: #eef2ff;
          padding: 0.2rem 0.7rem;
          border-radius: 30px;
          color: #2563eb;
          font-weight: 500;
        }
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block;
          }
          .nav-links {
            position: fixed;
            top: 70px;
            left: -100%;
            flex-direction: column;
            background: white;
            width: 100%;
            text-align: center;
            padding: 2rem 0;
            gap: 1.5rem;
            transition: 0.3s;
            box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
          }
          .nav-links.active {
            left: 0;
          }
          .hero-content {
            flex-direction: column-reverse;
            text-align: center;
          }
          .hero-buttons {
            justify-content: center;
          }
          .about-stats {
            flex-direction: column;
            gap: 1.2rem;
          }
          .section-title {
            font-size: 1.8rem;
          }
          .hero-name {
            font-size: 2.5rem;
          }
          .contact-content {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}