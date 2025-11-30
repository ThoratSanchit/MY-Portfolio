import { Container, Row, Col, Badge } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaAward } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'SimplyFyVMS',
      subtitle: 'U.S. VMS SaaS (Award-Winning)',
      description: 'Award-winning, AI-driven vendor management system recognized by Everest Group 2025 PEAK Matrix® as a Global Leader. Own sourcing & config modules (RFx, supplier onboarding, workflows).',
      technologies: ['Node.js', 'Fastify', 'MySQL', 'Sequelize', 'React.js'],
      highlights: [
        '500+ daily active users',
        '55% latency reduction',
        'SOC-2 ready architecture',
        'REST + WebSocket APIs'
      ],
      isAwardWinning: true,
      github: null,
      demo: null
    },
    {
      title: 'HireHQ',
      subtitle: 'AI-Driven Job Portal Backend',
      description: 'Backend for AI-driven U.S. job portal matching 1k+ recruiters with 5k+ candidates. Owned candidate module with fuzzy search and weighted ranking system.',
      technologies: ['Node.js', 'Fastify', 'Sequelize ORM', 'MySQL', 'Jest'],
      highlights: [
        '35% match accuracy boost',
        '70+ standard reports',
        'Custom Report Builder',
        'Zero-downtime releases'
      ],
      isAwardWinning: false,
      github: null,
      demo: null
    },
    {
      title: 'Farm Hub',
      subtitle: 'Personal Project',
      description: 'Farm-management solution for tractor owners in India. Comprehensive platform for service booking, work history tracking, client ledger management, and financial analytics.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      highlights: [
        'Service booking system',
        'Work history tracking',
        'Client ledger management',
        'Financial analytics dashboard'
      ],
      isAwardWinning: false,
      github: 'https://github.com/ThoratSanchit',
      demo: null
    }
  ]

  return (
    <section id="projects" className="projects-section section-padding">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center mb-5">Selected Projects</h2>
        </motion.div>

        <Row>
          {projects.map((project, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="project-card card-custom"
              >
                <div className="project-header">
                  {project.isAwardWinning && (
                    <div className="award-badge">
                      <FaAward /> Award-Winning
                    </div>
                  )}
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} className="tech-badge">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="project-highlights">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="highlight-item">
                      <span className="highlight-dot"></span>
                      {highlight}
                    </div>
                  ))}
                </div>
                
                <div className="project-links">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                  {!project.github && !project.demo && (
                    <span className="project-note">Enterprise/Confidential Project</span>
                  )}
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Projects

