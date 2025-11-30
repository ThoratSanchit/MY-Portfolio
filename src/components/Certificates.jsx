import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { FaCertificate, FaCalendar, FaExternalLinkAlt } from 'react-icons/fa'
import './Certificates.css'

const Certificates = () => {
  const certificates = [
    {
      title: 'JavaScript 10 Projects in 10 Days Course for Beginners',
      issuer: 'Udemy',
      date: 'November 2025',
      credentialId: 'UC-a61c91d9-bcbf-423b-bd44-7b14f2fc6ab1',
      url: 'https://udemy-certificate.s3.amazonaws.com/image/UC-a61c91d9-bcbf-423b-bd44-7b14f2fc6ab1.jpg',
      description: 'Demonstrates expertise in JavaScript programming through hands-on project development.',
      skills: ['JavaScript', 'Web Development', 'Programming']
    },
    {
      title: 'Relational Databases & SQL: Complete Guide for Developers',
      issuer: 'Udemy',
      date: 'November 2025',
      credentialId: 'UC-5e5f6e39-5cd7-4fab-98b9-e12283c7d386',
      url: 'https://www.udemy.com/certificate/UC-5e5f6e39-5cd7-4fab-98b9-e12283c7d386/',
      description: 'Comprehensive understanding of relational databases, database architecture, and SQL.',
      skills: [
        'Relational Databases', 
        'SQL', 
        'Database Design', 
        'Database Architecture',
        'Query Optimization',
        'Normalization',
        'Transactions',
        'Indexing',
        'Stored Procedures',
        'Triggers',
        'Views',
        'ACID Properties'
      ]
    }
  ]

  return (
    <section id="certificates" className="certificates-section section-padding">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center mb-5">Certifications & Licenses</h2>
        </motion.div>

        <Row>
          {certificates.map((cert, index) => (
            <Col lg={6} key={index} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="certificate-card"
              >
                <div className="certificate-header">
                  <div className="certificate-icon">
                    <FaCertificate />
                  </div>
                  <div>
                    <h3 className="certificate-title">{cert.title}</h3>
                    <h4 className="certificate-issuer">{cert.issuer}</h4>
                  </div>
                </div>
                
                <div className="certificate-meta">
                  <span className="meta-item">
                    <FaCalendar /> {cert.date}
                  </span>
                </div>
                
                <p className="certificate-description">{cert.description}</p>
                
                <div className="certificate-skills">
                  {cert.skills.map((skill, idx) => (
                    <span key={idx} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="certificate-links">
                  <a 
                    href={cert.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="certificate-link"
                  >
                    <FaExternalLinkAlt /> View Certificate
                  </a>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Certificates