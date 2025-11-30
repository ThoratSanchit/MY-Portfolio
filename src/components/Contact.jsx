import { useState } from 'react'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa'
import emailjs from 'emailjs-com'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactInfo = [
    { icon: <FaEnvelope />, label: 'Email', value: 'sanchitthorat05@gmail.com', link: 'mailto:sanchitthorat05@gmail.com' },
    { icon: <FaPhone />, label: 'Phone', value: '+91 8208170915', link: 'tel:+918208170915' },
    { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Sangamner, Maharashtra, India', link: null },
    { icon: <FaLinkedin />, label: 'LinkedIn', value: 'linkedin.com/in/sanchit-thorat-0169a4237', link: 'https://linkedin.com/in/sanchit-thorat-0169a4237' },
    { icon: <FaGithub />, label: 'GitHub', value: 'github.com/ThoratSanchit', link: 'https://github.com/ThoratSanchit' }
  ]

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      setIsSubmitting(true)
      
      // EmailJS configuration (you'll need to set up EmailJS account and get these values)
      // For now, we'll simulate the submission
      
      // Uncomment and configure with your EmailJS credentials:
      /*
      emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        'YOUR_PUBLIC_KEY'
      )
      */
      
      // Simulated submission
      setTimeout(() => {
        setIsSubmitting(false)
        setShowSuccess(true)
        setFormData({ name: '', email: '', message: '' })
        
        setTimeout(() => {
          setShowSuccess(false)
        }, 5000)
      }, 1000)
      
      // Uncomment for actual EmailJS integration:
      /*
      .then(() => {
        setIsSubmitting(false)
        setShowSuccess(true)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setShowSuccess(false), 5000)
      })
      .catch(() => {
        setIsSubmitting(false)
        setShowError(true)
        setTimeout(() => setShowError(false), 5000)
      })
      */
    }
  }

  return (
    <section id="contact" className="contact-section section-padding">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center mb-5">Get In Touch</h2>
        </motion.div>

        <Row>
          <Col lg={5} className="mb-4 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="contact-info"
            >
              <h3 className="contact-info-title">Let's Connect!</h3>
              <p className="contact-info-text">
                I'm always open to discussing new projects, creative ideas, or opportunities 
                to be part of your vision. Feel free to reach out!
              </p>
              
              <div className="contact-details">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="contact-item"
                  >
                    <div className="contact-icon">{item.icon}</div>
                    <div className="contact-text">
                      <div className="contact-label">{item.label}</div>
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="contact-value">
                          {item.value}
                        </a>
                      ) : (
                        <div className="contact-value">{item.value}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Col>

          <Col lg={7}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="contact-form-wrapper"
            >
              {showSuccess && (
                <Alert variant="success" className="custom-alert">
                  <strong>Success!</strong> Your message has been sent successfully. I'll get back to you soon!
                </Alert>
              )}
              
              {showError && (
                <Alert variant="danger" className="custom-alert">
                  <strong>Error!</strong> Something went wrong. Please try again or contact me directly via email.
                </Alert>
              )}

              <Form onSubmit={handleSubmit} className="contact-form">
                <Form.Group className="mb-4">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    isInvalid={!!errors.name}
                    placeholder="Enter your name"
                    className="custom-input"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                    placeholder="Enter your email"
                    className="custom-input"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    isInvalid={!!errors.message}
                    placeholder="Enter your message"
                    className="custom-input"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button 
                  type="submit" 
                  className="btn-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <FaPaperPlane /> Send Message
                    </>
                  )}
                </Button>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact

