import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaClock, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Using mailto as a fallback since no backend
    const subject = encodeURIComponent('Contact from Electrician Website')
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:info@electropro.com?subject=${subject}&body=${body}`
    
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: '123 Electric Avenue, City, State 12345',
      link: null
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+1 (234) 567-890',
      link: 'tel:+1234567890'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'info@electropro.com',
      link: 'mailto:info@electropro.com'
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      value: '+1 (234) 567-890',
      link: 'https://wa.me/1234567890'
    }
  ]

  const workingHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ]

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="page-hero-content"
          >
            <h1>Contact Us</h1>
            <p>Get in touch for your electrical needs</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="contact-info"
            >
              <h2>Get In Touch</h2>
              <p className="contact-description">
                Have a question or need a quote? Reach out to us through any of the following channels. We're here to help with all your electrical needs.
              </p>
              
              <div className="contact-details">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="contact-item"
                  >
                    <item.icon className="contact-icon" />
                    <div className="contact-item-content">
                      <h3>{item.title}</h3>
                      {item.link ? (
                        <a href={item.link} className="contact-value">
                          {item.value}
                        </a>
                      ) : (
                        <span className="contact-value">{item.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="working-hours-section">
                <h3><FaClock /> Working Hours</h3>
                <ul className="working-hours">
                  {workingHours.map((item, index) => (
                    <li key={index}>
                      <span className="day">{item.day}</span>
                      <span className="hours">{item.hours}</span>
                    </li>
                  ))}
                </ul>
                <p className="emergency-note">
                  <strong>24/7 Emergency Service Available</strong>
                </p>
              </div>

              <div className="whatsapp-section">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-button"
                >
                  <FaWhatsapp />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="contact-form-wrapper"
            >
              <h2>Send a Message</h2>
              <p className="form-description">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us about your electrical needs..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="submit-button"
                >
                  <FaPaperPlane />
                  Send Message
                </motion.button>
              </form>

              <p className="form-note">
                * This form uses your email client to send the message. For faster response, consider calling us directly.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section map-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="map-container"
          >
            <h2>Find Us</h2>
            <div className="map-placeholder">
              <FaMapMarkerAlt className="map-icon" />
              <p>123 Electric Avenue, City, State 12345</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=123+Electric+Avenue"
                target="_blank"
                rel="noopener noreferrer"
                className="map-link"
              >
                Open in Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        .page-hero {
          background: linear-gradient(135deg, #007BFF 0%, #0056B3 100%);
          color: white;
          padding: 80px 0;
          text-align: center;
        }

        .page-hero-content h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .page-hero-content p {
          font-size: 1.2rem;
          opacity: 0.9;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
        }

        .contact-info h2,
        .contact-form-wrapper h2 {
          font-size: 2.5rem;
          color: #333;
          margin-bottom: 1rem;
        }

        .contact-description,
        .form-description {
          color: #666;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .contact-details {
          margin-bottom: 2rem;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.5rem;
          background: #F8F9FA;
          border-radius: 10px;
          margin-bottom: 1rem;
          transition: all 0.3s;
        }

        .contact-item:hover {
          background: #E9ECEF;
          transform: translateX(5px);
        }

        .contact-icon {
          font-size: 1.5rem;
          color: #007BFF;
          margin-top: 0.25rem;
        }

        .contact-item-content h3 {
          font-size: 1.1rem;
          color: #333;
          margin-bottom: 0.25rem;
        }

        .contact-value {
          color: #666;
          transition: color 0.3s;
        }

        .contact-value:hover {
          color: #007BFF;
        }

        .working-hours-section {
          background: #F8F9FA;
          padding: 1.5rem;
          border-radius: 10px;
          margin-bottom: 2rem;
        }

        .working-hours-section h3 {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.2rem;
          color: #333;
          margin-bottom: 1rem;
        }

        .working-hours {
          list-style: none;
          padding: 0;
        }

        .working-hours li {
          display: flex;
          justify-content: space-between;
          padding: 0.5rem 0;
          border-bottom: 1px solid #E0E0E0;
        }

        .working-hours li:last-child {
          border-bottom: none;
        }

        .day {
          color: #666;
        }

        .hours {
          color: #333;
          font-weight: 600;
        }

        .emergency-note {
          color: #FFC107;
          font-weight: 600;
          margin-top: 1rem;
          margin-bottom: 0;
        }

        .whatsapp-section {
          margin-top: 2rem;
        }

        .whatsapp-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          background: #25D366;
          color: white;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1.1rem;
          text-decoration: none;
          transition: all 0.3s;
          width: 100%;
        }

        .whatsapp-button:hover {
          background: #128C7E;
          transform: translateY(-2px);
          box-shadow: 0 5px 20px rgba(37, 211, 102, 0.4);
        }

        .contact-form {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: #333;
          font-weight: 600;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          border: 2px solid #E0E0E0;
          border-radius: 8px;
          font-size: 1rem;
          font-family: inherit;
          transition: all 0.3s;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #007BFF;
          box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
        }

        .form-group textarea {
          resize: vertical;
        }

        .submit-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          width: 100%;
          background: #007BFF;
          color: white;
          padding: 1rem 2rem;
          border: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s;
        }

        .submit-button:hover {
          background: #0056B3;
          box-shadow: 0 5px 20px rgba(0, 123, 255, 0.4);
        }

        .form-note {
          color: #999;
          font-size: 0.9rem;
          text-align: center;
          margin-top: 1rem;
        }

        .map-section {
          background: #F8F9FA;
        }

        .map-container {
          text-align: center;
        }

        .map-container h2 {
          font-size: 2.5rem;
          color: #333;
          margin-bottom: 2rem;
        }

        .map-placeholder {
          background: white;
          padding: 4rem 2rem;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
        }

        .map-icon {
          font-size: 4rem;
          color: #007BFF;
          margin-bottom: 1rem;
        }

        .map-placeholder p {
          font-size: 1.2rem;
          color: #333;
          margin-bottom: 1.5rem;
        }

        .map-link {
          display: inline-block;
          color: #007BFF;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.3s;
        }

        .map-link:hover {
          color: #0056B3;
          text-decoration: underline;
        }

        @media (max-width: 968px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .page-hero-content h1 {
            font-size: 2rem;
          }

          .contact-info h2,
          .contact-form-wrapper h2,
          .map-container h2 {
            font-size: 2rem;
          }

          .contact-form {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Contact
