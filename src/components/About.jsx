import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { FaAward, FaUsers, FaCode, FaRocket } from 'react-icons/fa'
import './About.css'

const About = () => {
  const stats = [
    { icon: <FaCode />, number: '3+', label: 'Years Experience' },
    { icon: <FaUsers />, number: '500+', label: 'Active Users' },
    { icon: <FaAward />, number: '2', label: 'Award-Winning Projects' },
    { icon: <FaRocket />, number: '55%', label: 'Performance Boost' }
  ]

  return (
    <section id="about" className="about-section section-padding">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center mb-5">About Me</h2>
        </motion.div>

        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="about-content"
            >
              <h3 className="about-subtitle">Full-Stack Developer</h3>
              <p className="about-text">
                I'm a results-driven Full-Stack Developer with over 3 years of hands-on 
                experience delivering scalable web solutions for U.S.-based clients. 
                Currently completing my Bachelor of Computer Applications while working 
                full-time at TheBaapCompany.
              </p>
              <p className="about-text">
                My expertise spans across Node.js, React.js, Java, Spring Boot, MySQL, 
                MongoDB, and Sequelize ORM. I've architected award-winning projects like 
                <strong> SimplyFyVMS</strong>, an AI-driven vehicle management SaaS recognized 
                by Everest Group 2025 PEAK Matrix® as a Global Leader, and <strong>HireHQ</strong>, 
                an AI-powered job portal serving thousands of users.
              </p>
              <p className="about-text">
                I'm passionate about building performant, scalable applications with clean 
                code architecture, and I thrive on solving complex problems that drive real 
                business value.
              </p>
            </motion.div>
          </Col>

          <Col lg={6}>
            <Row>
              {stats.map((stat, index) => (
                <Col xs={6} className="mb-4" key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="stat-card"
                  >
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About

