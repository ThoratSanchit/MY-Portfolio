import { useState, useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { FaSun, FaMoon } from 'react-icons/fa'
import { Link } from 'react-scroll'
import './Navbar.css'

const Navigation = ({ darkMode, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand href="#home" className="brand-name">
          ST
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Link 
              to="home" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              className="nav-link-custom"
            >
              Home
            </Link>
            <Link 
              to="about" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              className="nav-link-custom"
            >
              About
            </Link>
            <Link 
              to="skills" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              className="nav-link-custom"
            >
              Skills
            </Link>
            <Link 
              to="experience" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              className="nav-link-custom"
            >
              Experience
            </Link>
            <Link 
              to="projects" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              className="nav-link-custom"
            >
              Projects
            </Link>
            <Link 
              to="education" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              className="nav-link-custom"
            >
              Education
            </Link>
            <Link 
              to="certificates" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              className="nav-link-custom"
            >
              Certificates
            </Link>
            <Link 
              to="contact" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              className="nav-link-custom"
            >
              Contact
            </Link>
            <button 
              onClick={toggleTheme} 
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation