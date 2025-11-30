import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaCalendar, FaMapMarkerAlt, FaUniversity } from 'react-icons/fa'
import './Education.css'

const Education = () => {
  const education = {
    degree: 'Bachelor of Computer Applications (BCA)',
    university: 'University of Mysore',
    period: 'Aug 2022 – May 2025 (Expected)',
    location: 'Pune, Maharashtra',
    status: 'Currently Pursuing'
  }

  return (
    <section id="education" className="education-section section-padding">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center mb-5">Education</h2>
        </motion.div>

        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="education-card"
            >
              <div className="education-icon-wrapper">
                <div className="education-icon">
                  <FaGraduationCap />
                </div>
              </div>
              
              <div className="education-content">
                <div className="status-badge">{education.status}</div>
                <h3 className="education-degree">{education.degree}</h3>
                <h4 className="education-university">
                  <FaUniversity /> {education.university}
                </h4>
                
                <div className="education-meta">
                  <span className="meta-item">
                    <FaCalendar /> {education.period}
                  </span>
                  <span className="meta-item">
                    <FaMapMarkerAlt /> {education.location}
                  </span>
                </div>

                <div className="education-description">
                  <p>
                    Pursuing Bachelor's degree while simultaneously working full-time as a 
                    Full-Stack Developer, demonstrating strong time management and dedication 
                    to both academic excellence and professional growth.
                  </p>
                  <p className="highlight-text">
                    Successfully balancing academics with 3+ years of hands-on industry 
                    experience in building enterprise-grade applications.
                  </p>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Education

