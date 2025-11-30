import { Container, Row, Col } from 'react-bootstrap'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  const handleDownloadResume = () => {
    // Create a simple resume content
    alert('Resume download functionality - Connect with actual resume file')
  }

  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6} className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-greeting">Hi, I'm</h1>
              <h1 className="hero-name">Sanchit Thorat</h1>
              <div className="hero-title">
                <TypeAnimation
                  sequence={[
                    'Full-Stack Developer',
                    2000,
                    'Backend Specialist',
                    2000,
                    'React.js Developer',
                    2000,
                    'Node.js Expert',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
              <p className="hero-description">
                Results-driven Full-Stack Developer with 3+ years of hands-on experience
                delivering scalable web solutions for U.S.-based clients. Expert in Node.js,
                React.js, Java, Spring Boot, and cloud-ready REST APIs.
              </p>
              <div className="hero-info">
                <div className="info-item">
                  <FaMapMarkerAlt className="info-icon" />
                  <span>Sangamner, Maharashtra, India</span>
                </div>
                <div className="info-item">
                  <FaPhone className="info-icon" />
                  <span>8208170915</span>
                </div>
                <div className="info-item">
                  <FaEnvelope className="info-icon" />
                  <span>sanchitthorat05@gmail.com</span>
                </div>
              </div>
              <div className="hero-buttons">
                <button onClick={handleDownloadResume} className="btn-primary-custom">
                  Download Resume
                </button>
                <a href="#contact" className="btn-outline-custom">
                  Contact Me
                </a>
              </div>
              <div className="hero-social">
                <a 
                  href="https://linkedin.com/in/sanchit-thorat-0169a4237" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="https://github.com/ThoratSanchit" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaGithub />
                </a>
                <a 
                  href="mailto:sanchitthorat05@gmail.com"
                  className="social-icon"
                >
                  <FaEnvelope />
                </a>
              </div>
            </motion.div>
          </Col>
          <Col lg={6} className="hero-image-col">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-image-container"
            >
              <div className="hero-image-wrapper">
                <div className="hero-image-placeholder">
                  <span className="initials">ST</span>
                </div>
                <div className="hero-image-bg"></div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero

