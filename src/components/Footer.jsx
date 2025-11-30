import { Container, Row, Col } from 'react-bootstrap'
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart, FaArrowUp } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            <div className="footer-brand">
              <span className="brand-initial">ST</span>
              <span className="brand-text">Sanchit Thorat</span>
            </div>
            <p className="footer-tagline">Full-Stack Developer</p>
          </Col>

          <Col md={4} className="text-center mb-3 mb-md-0">
            <div className="footer-social">
              <a 
                href="https://linkedin.com/in/sanchit-thorat-0169a4237" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://github.com/ThoratSanchit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="mailto:sanchitthorat05@gmail.com"
                className="footer-social-icon"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </Col>

          <Col md={4} className="text-center text-md-end">
            <button 
              onClick={scrollToTop} 
              className="scroll-top-btn"
              aria-label="Scroll to top"
            >
              <FaArrowUp />
            </button>
          </Col>
        </Row>

        <hr className="footer-divider" />

        <Row>
          <Col className="text-center">
            <p className="footer-copyright">
              © 2025 Sanchit Thorat — All Rights Reserved
            </p>
            <p className="footer-made-with">
              Made with <FaHeart className="heart-icon" /> using React.js & Bootstrap
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer

