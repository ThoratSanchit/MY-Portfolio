import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendar, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'The Baap Company',
      period: 'Nov 2025 – Present',
      location: 'Sangamner, Maharashtra',
      responsibilities: [
        'Improved SimplyFyVMS V4 API performance by 40% by restructuring SQL queries, indexing, and eliminating redundant data-fetch logic',
        'Refactored backend services during early development improving execution efficiency and reducing high-load response time by 25%',
        'Developing the Timesheet module including time logging, approvals, report analytics, and microservice synchronization',
        'Tech: Node.js, Fastify.js, React.js, MySQL, Redis, REST APIs'
      ]
    },
    {
      title: 'Software Intern',
      company: 'The Baap Company',
      period: 'Aug 2022 – Nov 2025',
      location: 'Sangamner, Maharashtra',
      responsibilities: [
        'Assisted in backend API development, debugging, and feature integrations using Node.js and MySQL',
        'Completed structured training in Java, React.js, Database Management and Software Engineering',
        'HireHQ (U.S. Client Project): Built the Candidate Module supporting profile creation, job applications, and resume search workflows',
        'HireHQ (U.S. Client Project): Improved AI-supported talent-matching accuracy by 35% through database and backend logic restructuring',
        'HireHQ (U.S. Client Project): Tech stack - Node.js, Fastify.js, MySQL, REST APIs'
      ]
    }
  ]

  return (
    <section id="experience" className="experience-section section-padding">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center mb-5">Work Experience</h2>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-content">
                <div className="experience-header">
                  <div className="experience-icon">
                    <FaBriefcase />
                  </div>
                  <div>
                    <h3 className="experience-title">{exp.title}</h3>
                    <h4 className="experience-company">{exp.company}</h4>
                  </div>
                </div>
                <div className="experience-meta">
                  <span className="meta-item">
                    <FaCalendar /> {exp.period}
                  </span>
                  <span className="meta-item">
                    <FaMapMarkerAlt /> {exp.location}
                  </span>
                </div>
                <ul className="experience-list">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>
                      <FaCheckCircle className="check-icon" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Experience

