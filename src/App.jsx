import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ExternalLink, Code2, Database, Layout, Terminal, Trophy, Award, ChevronRight, Sun, Moon } from 'lucide-react';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

// LeetCode SVG
const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.536-.536.554-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-7.27 0l-4.32 4.38C1.46 11.455 1 12.441 1 13.48c0 1.052.46 2.026 1.186 2.753l4.332 4.363c.961.96 2.217 1.404 3.427 1.404 1.21 0 2.466-.444 3.427-1.404l2.609-2.636c.515-.515.497-1.366-.039-1.901-.535-.536-1.386-.554-1.9-.039z"/>
  </svg>
);

const SectionHeader = ({ subtitle, title, highlight }) => (
  <motion.div variants={fadeInUp} className="section-header">
    <span className="section-subtitle">{subtitle}</span>
    <h2 className="heading-lg">{title} <span className="text-gradient">{highlight}</span></h2>
  </motion.div>
);

const Navbar = ({ isLight, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <div className="nav-brand text-gradient">RM.</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle Theme">
            {isLight ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a href="RajeshwariMughilan_Resume_latest (1).pdf" download className="nav-resume-btn">Resume</a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="hero container" id="about">
      <div className="hero-content">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.div variants={fadeInUp} className="badge">
            <span className="pulse-dot"></span> Open to Roles
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="heading-xl">
            Hi, I'm Rajeshwari.<br />
            <span className="text-gradient">Building Secure Systems.</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="lead" style={{ marginBottom: '2.5rem' }}>
            A DevOps and machine learning-focused engineer with hands-on experience building scalable systems, automating workflows, and delivering ML-driven solutions across Python, containerization, and backend development.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="hero-actions">
            <a href="RajeshwariMughilan_Resume_latest (1).pdf" download className="btn btn-primary" title="Download ML/DevOps Resume">
              <Download size={18} />
              Download Resume
            </a>
            
            <div className="social-pill">
              <a href="https://github.com/Rajeshwarimughilan" target="_blank" rel="noreferrer" title="GitHub"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/rajeshwari-mughilan" target="_blank" rel="noreferrer" title="LinkedIn"><Linkedin size={20} /></a>
              <a href="https://leetcode.com/" target="_blank" rel="noreferrer" title="LeetCode"><LeetCodeIcon /></a>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="hero-stats">
            <div className="stat-item">
              <h4>NTRO</h4>
              <p>Research Internship</p>
            </div>
            <div className="stat-item">
              <h4>SIH 2024</h4>
              <p>National Winner</p>
            </div>
            <div className="stat-item">
              <h4>8.37</h4>
              <p>CGPA (Kongu Eng. College)</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="hero-blob"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="container">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
        <SectionHeader subtitle="01 / Career" title="Professional" highlight="Experience" />
        
        <div className="minimal-timeline">
          <motion.div className="minimal-timeline-item" variants={fadeInUp}>
            <div className="timeline-date-side">
              Apr 2025 - Sep 2025<br/>
              <span style={{fontSize:'0.85rem', color:'var(--text-secondary)'}}>New Delhi, India</span>
            </div>
            <div className="timeline-divider">
              <div className="timeline-ring"></div>
            </div>
            <div className="timeline-content-side">
              <h3 className="text-gradient">Intern - Machine Learning & Cryptography Research</h3>
              <h4>National Technical Research Organization</h4>
              
              <div className="exp-subsection">
                <h5>Cipher Systems Research</h5>
                <ul>
                  <li><ChevronRight size={14} className="list-icon" /> Analyzed classical and mechanical cipher systems, studying their design, operational mechanisms, and inherent security limitations.</li>
                  <li><ChevronRight size={14} className="list-icon" /> Reverse engineered HC-series cipher machines to understand internal structures and identify potential vulnerabilities.</li>
                </ul>
              </div>

              <div className="exp-subsection">
                <h5>ML-Based Cipher Classification</h5>
                <ul>
                  <li><ChevronRight size={14} className="list-icon" /> Developed an end-to-end machine learning pipeline for cryptographic algorithm classification using datasets generated from binary files.</li>
                  <li><ChevronRight size={14} className="list-icon" /> Applied feature engineering using NIST statistical test suites to extract distinguishing cryptographic patterns.</li>
                  <li><ChevronRight size={14} className="list-icon" /> Evaluated multiple ML models and built an optimized classifier for accurate cipher identification.</li>
                </ul>
              </div>

              <div className="exp-subsection">
                <h5>Automated Reasoning System</h5>
                <ul>
                  <li><ChevronRight size={14} className="list-icon" /> Built a graph-based reasoning system using Neo4j to model relationships between cryptographic entities and enable structured analysis.</li>
                  <li><ChevronRight size={14} className="list-icon" /> Integrated a rule-based inference layer to enhance logical reasoning and support path discovery.</li>
                  <li><ChevronRight size={14} className="list-icon" /> Validated the system on classical ciphers (Caesar, Playfair, Vigenère), ensuring consistent classification.</li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          <motion.div className="minimal-timeline-item" variants={fadeInUp}>
            <div className="timeline-date-side">Nov 2025 - Present</div>
            <div className="timeline-divider">
              <div className="timeline-ring"></div>
            </div>
            <div className="timeline-content-side">
              <h3 className="text-gradient">B.Tech in Information Technology</h3>
              <h4>Kongu Engineering College</h4>
              <ul style={{marginTop: '1rem'}}>
                <li><ChevronRight size={14} className="list-icon" /> CGPA: 8.37/10</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "TorpedoX",
      desc: "ML-based cryptographic analysis tool using Python, PyTorch, Scikit-learn, NumPy, and Pandas to identify algorithms and hash functions with strong generalization. Designed and trained FFNN and Random Forest models with optimized feature extraction pipelines.",
      tags: ["PyTorch", "Scikit-learn", "Python", "NumPy", "Pandas"],
      link: "https://github.com/Rajeshwarimughilan/torpedox",
    },
    {
      title: "Classical Cryptanalysis Pipeline",
      desc: "Built a cryptanalysis pipeline to detect keystream reuse using Kappa Index of Coincidence with interactive crib dragging tooling. Applied statistical analysis to identify patterns and improve efficiency of cipher-only attack workflows.",
      tags: ["Cryptography", "Data Analysis", "Python"],
      link: "https://github.com/Rajeshwarimughilan/CipherDetection-ResearchWork"
    },
    {
      title: "Loyola CMS Platform",
      desc: "Built a CMS-driven web application using React, Node.js, Express, and SQLite (Prisma) with dynamic content delivery via RESTful APIs. Designed secure admin workflows with JWT authentication, validation, and rate limiting.",
      tags: ["React", "Node.js", "Express", "SQLite", "Prisma"],
      link: "https://github.com/Rajeshwarimughilan/loyola-cms"
    },
    {
      title: "InovTrack",
      desc: "A full-stack platform to map student skills to projects and support collaboration. Designed a dynamic UI and REST APIs for data discovery and profile management.",
      tags: ["React", "Node.js", "Express", "PostgreSQL"],
      link: "https://github.com/Rajeshwarimughilan/inovtrack"
    }
  ];

  return (
    <section id="projects" className="container">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
        <SectionHeader subtitle="02 / Portfolio" title="Featured" highlight="Projects" />
        
        <div className="project-showcase">
          {projects.map((proj, idx) => (
            <motion.div key={idx} className="project-row" variants={fadeInUp} whileHover={{ scale: 1.02 }}>
              <div className="project-number">0{idx + 1}</div>
              <div className="project-info">
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>
                <div className="project-tags">
                  {proj.tags.map((tag, i) => <span key={i} className="project-tag">{tag}</span>)}
                </div>
                <a href={proj.link} target="_blank" rel="noreferrer" className="inline-link">
                  View Source <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    { title: "Programming", skills: ["Python", "Java", "C", "JavaScript"] },
    { title: "Machine Learning", skills: ["Scikit-Learn", "Neural Networks", "Pandas", "NumPy", "PyTorch"] },
    { title: "DevOps & Cloud", skills: ["Docker", "CI/CD Pipelines", "GitHub Actions", "Cloud fundamentals"] },
    { title: "Backend", skills: ["Node.js", "Express"] },
    { title: "Databases", skills: ["MongoDB", "PostgreSQL", "Oracle DB", "SQLite"] },
    { title: "Systems & Tools", skills: ["Linux", "Bash", "Git", "GitHub"] }
  ];

  return (
    <section id="skills" className="container">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
        <SectionHeader subtitle="03 / Expertise" title="Technical" highlight="Skills" />
        
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} className="skill-category-card" variants={fadeInUp}>
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skills-cloud" style={{ justifyContent: 'flex-start' }}>
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-pill small">{skill}</div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const Achievements = () => {
  const items = [
    { type: "Hackathon", icon: <Trophy size={24} />, text: "Smart India Hackathon 2024 - National Winner" },
    { type: "Leadership", icon: <Award size={24} />, text: "Joint Secretary, IT Association" },
    { type: "Leadership", icon: <Layout size={24} />, text: "Student POC, Innovation Forum" },
    { type: "Certification", icon: <Code2 size={24} />, text: "GUVI DevOps Certification" },
    { type: "Certification", icon: <Database size={24} />, text: "NPTEL: Design of Human-Computer Interfaces" }
  ];

  return (
    <section id="achievements" className="container" style={{ paddingBottom: '8rem' }}>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
        <SectionHeader subtitle="04 / Milestones" title="Achievements &" highlight="Certifications" />
        
        <div className="achievements-grid">
          {items.map((item, idx) => (
            <motion.div key={idx} className="achievement-item" variants={fadeInUp} whileHover={{ x: 10 }}>
              <div className="achievement-icon">{item.icon}</div>
              <div className="achievement-text">
                <span className="achievement-type">{item.type}</span>
                <p>{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <h3 className="text-gradient" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Let's Connect</h3>
        <p style={{ marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
          Currently open to research and product roles. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className="social-links">
          <a href="mailto:rajeshwarimughilan@gmail.com" title="Email"><Mail size={20} /></a>
          <a href="https://github.com/Rajeshwarimughilan" target="_blank" rel="noreferrer" title="GitHub"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/rajeshwari-mughilan" target="_blank" rel="noreferrer" title="LinkedIn"><Linkedin size={20} /></a>
          <a href="https://leetcode.com/" target="_blank" rel="noreferrer" title="LeetCode"><LeetCodeIcon /></a>
        </div>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
          © {new Date().getFullYear()} Rajeshwari M. Built with React & Framer Motion.
        </p>
      </div>
    </footer>
  );
};

function App() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [isLight]);

  const toggleTheme = () => setIsLight(!isLight);

  return (
    <div className="app-container">
      <Navbar isLight={isLight} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
      </main>
      <Footer />
    </div>
  );
}

export default App;
