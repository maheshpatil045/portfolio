import React, { useState, useEffect, useRef } from 'react';
import './App.css';

// Import your local images
import emailjs from "@emailjs/browser";
import profile from "./1779530194737.png";
import certificate1 from "./deloite.jpg.jpg";
import certificate2 from "./Tata.jpg.jpg";
import certificate3 from "./ai.jpg";
import certificate4 from "./deloitetech.jpg.jpg";
import certificate5 from "./deloitetech.jpg.jpg";
import certificate6 from "./DBF.jpg";
import certificate7 from "./cbk.jpg";
import certificate8 from "./ssk.jpg";

export default function App()
 {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [galleryTab, setGalleryTab] = useState('certificates');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return 'morning';
    if (hour >= 12 && hour < 17) return 'afternoon';
    return 'night';
  });
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    setShowThemeMenu(false);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };
  const sendEmail = (e) => {
  e.preventDefault();

  emailjs.send(
    "service_snmq3rn",
    "template_wbh6zs3",
    {
      from_name: e.target.from_name.value,
      from_email: e.target.from_email.value,
      message: e.target.message.value
    },
    "PGucDR1TeQz2r54Qq"
  )
  .then(() => {
    alert("Message Sent Successfully!");
  })
  .catch((error) => {
    console.log(error);
    alert(error.text);
  });

  e.target.reset();
};
 
  const downloadResume = () => {
    alert('Resume download will be available soon!');
  };

  const skills = [
    { name: "Python", level: 85, icon: "fab fa-python", color: "#3776AB" },
    { name: "SQL", level: 80, icon: "fas fa-database", color: "#4479A1" },
    { name: "Power BI", level: 85, icon: "fas fa-chart-line", color: "#F2C811" },
    { name: "React", level: 75, icon: "fab fa-react", color: "#61DAFB" },
    { name: "JavaScript", level: 80, icon: "fab fa-js", color: "#F7DF1E" },
    { name: "Excel", level: 90, icon: "fas fa-file-excel", color: "#217346" },
    { name: "Gen AI", level: 75, icon: "fas fa-robot", color: "#00A67E" },
    { name: "Data Analysis", level: 85, icon: "fas fa-chart-bar", color: "#9B59B6" },
  ];

  const projects = [
    {
      title: "AdIndiaHub",
      description: "Advanced advertisement campaign management system",
      tech: ["Python", "Flask", "MySQL"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600",
      status: "live",
      github: "https://github.com/maheshpatil045"
    },
    {
      title: "Air Quality Index Forecasting",
      description: "ML model predicting AQI with 92% accuracy",
      tech: ["Python", "Scikit-learn", "XGBoost"],
      image: "https://images.unsplash.com/photo-1711078291729-7f8e60527e0a?w=600",
      status: "coming-soon"
    },
    {
      title: "Fake News Detection Using NLP",
      description: "Transformer-based model to classify news",
      tech: ["Python", "BERT", "NLTK"],
      image: "https://plus.unsplash.com/premium_photo-1707690324434-ed39913a983c?w=600",
      status: "coming-soon"
    },
    {
      title: "Real Estate Price Prediction",
      description: "Advanced regression model with feature engineering",
      tech: ["Python", "Pandas", "Scikit-learn"],
      image: "https://plus.unsplash.com/premium_photo-1681487767138-ddf2d67b35c1?w=600",
      status: "coming-soon"
    },
  ];

  const certificatesImages = [
    { url: certificate1, title: "Data Analytics Certificate - Deloitte" },
    { url: certificate2, title: "GenAI Powered Data Analytics - Tata" },
    { url: certificate3, title: "Generative AI Certificate" },
    { url: certificate4, title: "Technology Job Simulation - Deloitte" },
    { url: certificate4, title: "Technology Job Simulation - Deloitte" },
  ];

  const collageImages = [
    { url: "https://plus.unsplash.com/premium_photo-1673697239981-389164b7b87f?q=80&w=1444&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Nature Vibes Gallery" },
    { url: "https://images.unsplash.com/photo-1715763301856-a35dfe4f0be7?q=80&w=2004&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Green Plam View" },
    { url: "https://images.unsplash.com/photo-1637066742971-726bee8d9f56?q=80&w=1549&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Tea Garden View" },
    { url: "https://plus.unsplash.com/premium_photo-1697729588019-20a1f5a325d1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Wonder Of Ellora" },
  ];

  const handleImageClick = (imgUrl, title) => {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0,0,0,0.95)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = '2000';
    modal.style.cursor = 'pointer';
    const imgElem = document.createElement('img');
    imgElem.src = imgUrl;
    imgElem.style.maxWidth = '90%';
    imgElem.style.maxHeight = '90%';
    imgElem.style.borderRadius = '20px';
    modal.onclick = () => document.body.removeChild(modal);
    modal.appendChild(imgElem);
    document.body.appendChild(modal);
  };
  

  const currentGalleryItems = galleryTab === 'certificates' ? certificatesImages : collageImages;

  const getHeroImageTransform = () => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const rotateX = (mousePosition.y - centerY) / 50;
    const rotateY = (mousePosition.x - centerX) / 50;
    return `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  return (
    <div className="app">
      {/* 3D Background */}
      <div className="background-3d">
        <div className="gradient-sphere"></div>
        <div className="gradient-sphere-2"></div>
        <div className="grid-lines"></div>
      </div>

      {/* Theme Toggle */}
      <div className="theme-toggle" onClick={() => setShowThemeMenu(!showThemeMenu)}>
        <div className="theme-toggle-inner">
          {theme === 'morning' && <i className="fas fa-sun"></i>}
          {theme === 'afternoon' && <i className="fas fa-cloud-sun"></i>}
          {theme === 'night' && <i className="fas fa-moon"></i>}
        </div>
        <span className="theme-toggle-text">
          {theme === 'morning' && 'Morning'}
          {theme === 'afternoon' && 'Afternoon'}
          {theme === 'night' && 'Night'}
        </span>
      </div>

      {showThemeMenu && (
        <div className="theme-menu">
          <div className="theme-option" onClick={() => toggleTheme('morning')}>
            <i className="fas fa-sun"></i> 
          </div>
          <div className="theme-option" onClick={() => toggleTheme('afternoon')}>
            <i className="fas fa-cloud-sun"></i> 
          </div>
          <div className="theme-option" onClick={() => toggleTheme('night')}>
            <i className="fas fa-moon"></i> 
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className={`navbar ${scrollY > 50 ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <h1 className="logo" onClick={() => scrollToSection('home')}>
            <span className="logo-text">MAHESH</span>
            <span className="logo-dot">.</span>
          </h1>
          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li onClick={() => scrollToSection('home')}>Home<span className="nav-indicator"></span></li>
            <li onClick={() => scrollToSection('about')}>About<span className="nav-indicator"></span></li>
            <li onClick={() => scrollToSection('skills')}>Skills<span className="nav-indicator"></span></li>
            <li onClick={() => scrollToSection('projects')}>Projects<span className="nav-indicator"></span></li>
            <li onClick={() => scrollToSection('gallery')}>Gallery<span className="nav-indicator"></span></li>
            <li onClick={() => scrollToSection('contact')}>Contact<span className="nav-indicator"></span></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero" ref={heroRef}>
        <div className="hero-content">
          <div className="hero-text">
            {/* Welcome to my portfolio - Top Badge */}
            <div className="hero-greeting-badge">
              <span className="greeting-icon">👋</span>
              <span>Welcome to my portfolio</span>
            </div>
            
            {/* Hello I'm */}
            <div className="hero-hello">
              <span className="hello-text">Hello, I'm</span>
            </div>
            
            {/* Name */}
            <h1 className="hero-name">
              Mahesh <span className="highlight">Patil</span>
            </h1>
            
            {/* Role */}
            <div className="hero-role-container">
              <div className="hero-role">BCS Graduate</div>
              <div className="hero-role-divider">✦</div>
              <div className="hero-role">Data Science</div>
              <div className="hero-role-divider">✦</div>
              <div className="hero-role">GenAI Enthusiast</div>
            </div>
            
            {/* Description */}
            <p className="hero-description">
              Passionate about transforming data into meaningful insights and building intelligent solutions
              that make a real-world impact.
            </p>
            
            {/* Buttons */}
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => scrollToSection('projects')}>
                Explore My Work <i className="fas fa-arrow-right"></i>
              </button>
              <button className="btn-resume" onClick={downloadResume}>
                <i className="fas fa-download"></i> Download Resume
              </button>
            </div>
            
            {/* Stats */}
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="stat-number">6+</span>
                <span className="stat-label">Certifications</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">1</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">99%</span>
                <span className="stat-label">Consistency</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="hero-image-wrapper">
            <div className="hero-image-3d" style={{ transform: getHeroImageTransform() }}>
              <div className="image-glow"></div>
              <img src={profile} alt="Mahesh Patil" />
              <div className="floating-badge badge-1">
                <i className="fab fa-python"></i> Python
              </div>
              <div className="floating-badge badge-2">
                <i className="fas fa-robot"></i> AI/ML
              </div>
              <div className="floating-badge badge-3">
                <i className="fas fa-chart-line"></i> Data Science
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
          <span>Scroll Down</span>
          <i className="fas fa-chevron-down"></i>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title"><span className="title-icon">📖</span> About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>I'm a passionate BCS graduate with a strong foundation in Data Science and emerging technologies. My journey in tech started with curiosity about how data can drive decision-making, and that curiosity has evolved into a mission to build intelligent, impactful solutions.</p>
              <p>Currently diving deep into Generative AI, I'm exploring ways to leverage AI tools for creative problem-solving. I love building projects that make a difference and constantly push the boundaries of what's possible with technology.</p>
              
              <div className="academic-card">
                <h3><i className="fas fa-graduation-cap"></i> Academic Background</h3>
                <div className="education-item">
                  <div className="edu-header">
                    <h4>Bachelor of Computer Science (BCS)</h4>
                    <span className="edu-date">Nov 2026</span>
                  </div>
                  <div className="edu-institute">
                    {/* Display DBF logo correctly */}
                    <img src={certificate6} alt="DBF logo" className="collage-logo" style={{ width: '45px', height: '45px', objectFit: 'contain', marginRight: '10px', verticalAlign: 'middle' }} />
                    <span>D.B.F.Dayanand College Of Arts & Science Solapur</span>
                  </div>
                  <div className="edu-score">
                    <span className="score-label">CGPA:</span>
                    <span className="score-value">8.00 / 10.00</span>
                  </div>
                </div>
                <div className="education-item">
                  <div className="edu-header">
                    <h4>Higher Secondary Certificate (HSC)</h4>
                    <span className="edu-date">Apr 2023</span>
                  </div>
                  <div className="edu-institute">
                    {/* Display cbk logo correctly */}
                    <img src={certificate7} alt="cbk logo" className="collage-logo" style={{ width: '45px', height: '45px', objectFit: 'contain', marginRight: '10px', verticalAlign: 'middle' }} />
                    <span>C.B.Khedgi's Basaveshwar Science, Raja Vijaysinh Commerce & Raja Jaysinh Arts College Akkalkot</span>
                  </div>
                  <div className="edu-score">
                    <span className="score-label">Percentage:</span>
                    <span className="score-value">53.17%</span>
                  </div>
                </div>
                <div className="education-item">
                  <div className="edu-header">
                    <h4> Secondary School Certificate (SSC)</h4>
                    <span className="edu-date">Mar 2021</span>
                  </div>
                  <div className="edu-institute">
                    {/* Display cbk logo correctly */}
                    <img src={certificate8} alt="ssk logo" className="collage-logo" style={{ width: '45px', height: '45px', objectFit: 'contain', marginRight: '10px', verticalAlign: 'middle' }} />
                    <span> Sou . Surekha Kalyanshetti Vidyalay Akkalkot</span>
                  </div>
                  <div className="edu-score">
                    <span className="score-label">Percentage:</span>
                    <span className="score-value">83.00%</span>
                  </div>
                </div>
              </div>

              <div className="about-stats">
                <div className="stat"><h3>300+</h3><p>Hours of Coding</p></div>
                <div className="stat"><h3>5+</h3><p>Technologies</p></div>
                <div className="stat"><h3>99%</h3><p>Dedication</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title"><span className="title-icon">⚡</span> Technical Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card" style={{ '--skill-color': skill.color }}>
                <div className="skill-icon"><i className={skill.icon}></i></div>
                <h3>{skill.name}</h3>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: `${skill.level}%`, backgroundColor: skill.color }}>
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
          <h2 className="section-title"><span className="title-icon">🚀</span> Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <span className={`project-status ${project.status}`}>
                      {project.status === 'live' ? 'Watch Demo' : 'Coming Soon'}
                    </span>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (<span key={i} className="tech-tag">{tech}</span>))}
                  </div>
                  <div className="project-buttons">
                    {project.status === 'live' ? (
                      <button className="project-btn github-btn" onClick={() => window.open(project.github, '_blank')}>
                        <i className="fab fa-github"></i> View Code
                      </button>
                    ) : (
                      <button className="project-btn coming-soon-btn" disabled>
                        <i className="fas fa-hourglass-half"></i> Coming Soon
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery-section">
        <div className="container">
          <h2 className="section-title"><span className="title-icon">📸</span> Moments & Milestones</h2>
          <div className="gallery-tabs">
            <button className={`gallery-tab-btn ${galleryTab === 'certificates' ? 'active' : ''}`} onClick={() => setGalleryTab('certificates')}>
              <i className="fas fa-certificate"></i> Certificates
            </button>
            <button className={`gallery-tab-btn ${galleryTab === 'collage' ? 'active' : ''}`} onClick={() => setGalleryTab('collage')}>
              <i className="fas fa-images"></i> My Gallery
            </button>
          </div>
          <div className="gallery-grid">
            {currentGalleryItems.map((item, idx) => (
              <div key={idx} className="gallery-item" onClick={() => handleImageClick(item.url, item.title)}>
                <img src={item.url} alt={item.title} className="gallery-img" loading="lazy" />
                <div className="gallery-info">
                  <h4>{item.title}</h4>
                  <span className="gallery-badge">
                    {galleryTab === 'certificates' ? <i className="fas fa-award"></i> : <i className="fas fa-nature"></i>}
                    {galleryTab === 'certificates' ? ' Credential' : 'Nature🍃'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title"><span className="title-icon">📬</span> Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Connect</h3>
              <p>Have a project in mind? I'd love to hear about it!</p>
              <div className="contact-details">
                <p><i className="fas fa-envelope"></i> patilmahesh1586@gmail.com</p>
                <p><i className="fas fa-phone-alt"></i> +91 7666961350</p>
                <p><i className="fas fa-map-marker-alt"></i> Solapur, India</p>
              </div>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/mahesh-patil45" target="_blank" className="social-link"><i className="fab fa-linkedin"></i> LinkedIn</a>
                <a href="https://github.com/maheshpatil045" target="_blank" className="social-link"><i className="fab fa-github"></i> GitHub</a>
                <a href="https://wa.me/917666961350" target="_blank" className="social-link"><i className="fab fa-whatsapp"></i> WhatsApp</a>
                <a href="https://www.instagram.com/___mahesh__045/" target="_blank" className="social-link"><i className="fab fa-instagram"></i> Instagram</a>
              </div>
            </div>
            <form className="contact-form" onSubmit={sendEmail}>
  <input type="text" name="from_name" placeholder="Your Name" required />
  <input type="email" name="from_email" placeholder="Your Email" required />
  <textarea name="message" rows="4" placeholder="Your Message" required></textarea>
  <button type="submit" className="btn-primary">
    Send Message
  </button>
</form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>© 2026 Mahesh Patil. All rights reserved. | Built with React & ❤️</p>
        </div>
      </footer>
    </div>
  );
}