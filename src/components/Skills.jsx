import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { 
  FaJava, FaJs, FaPython, FaHtml5, FaCss3Alt, 
  FaNodeJs, FaReact, FaBootstrap, FaDocker, 
  FaDatabase, FaGitAlt, FaGithub 
} from 'react-icons/fa'
import { 
  SiExpress, SiFastify, SiSpringboot, SiMysql, 
  SiMongodb, SiPostgresql, SiSequelize, SiPostman, 
  SiIntellijidea, SiVisualstudiocode 
} from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Java', icon: <FaJava />, color: '#007396' },
        { name: 'JavaScript (ES6+)', icon: <FaJs />, color: '#F7DF1E' },
        { name: 'Python (Basic)', icon: <FaPython />, color: '#3776AB' },
        { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
        { name: 'Express.js', icon: <SiExpress />, color: '#000000' },
        { name: 'Fastify', icon: <SiFastify />, color: '#000000' },
        { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
        { name: 'Spring Boot', icon: <SiSpringboot />, color: '#6DB33F' },
        { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952B3' }
      ]
    },
    {
      title: 'Databases & ORMs',
      skills: [
        { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
        { name: 'Sequelize', icon: <SiSequelize />, color: '#52B0E7' },
        { name: 'TypeORM (Basic)', icon: <FaDatabase />, color: '#FF4716' }
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
        { name: 'GitHub/GitLab', icon: <FaGithub />, color: '#181717' },
        { name: 'Docker (Basic)', icon: <FaDocker />, color: '#2496ED' },
        { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
        { name: 'VS Code', icon: <SiVisualstudiocode />, color: '#007ACC' },
        { name: 'IntelliJ IDEA', icon: <SiIntellijidea />, color: '#000000' }
      ]
    }
  ]

  return (
    <section id="skills" className="skills-section section-padding">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center mb-5">Technical Skills</h2>
        </motion.div>

        {skillCategories.map((category, catIndex) => (
          <div key={catIndex} className="skill-category mb-5">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="category-title"
            >
              {category.title}
            </motion.h3>
            <Row>
              {category.skills.map((skill, skillIndex) => (
                <Col xs={6} sm={4} md={3} lg={2} key={skillIndex} className="mb-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="skill-card"
                    whileHover={{ y: -10 }}
                  >
                    <div 
                      className="skill-icon"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </div>
                    <div className="skill-name">{skill.name}</div>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>
    </section>
  )
}

export default Skills

