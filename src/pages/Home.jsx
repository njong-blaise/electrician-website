import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaBolt, FaTools, FaSolarPanel, FaPowerOff, FaVideo, FaWrench, FaPhone, FaCheckCircle, FaAward, FaUsers } from 'react-icons/fa'

const Home = () => {
  const services = [
    { icon: FaBolt, title: 'House Wiring', description: 'Complete residential wiring solutions' },
    { icon: FaTools, title: 'Electrical Repairs', description: 'Quick and reliable repair services' },
    { icon: FaSolarPanel, title: 'Solar Installation', description: 'Eco-friendly solar power systems' },
    { icon: FaPowerOff, title: 'Generator Installation', description: 'Backup power solutions' },
    { icon: FaVideo, title: 'CCTV Installation', description: 'Security camera systems' },
    { icon: FaWrench, title: 'Electrical Maintenance', description: 'Regular maintenance services' },
  ]

  const stats = [
    { icon: FaAward, number: '15+', label: 'Years Experience' },
    { icon: FaCheckCircle, number: '500+', label: 'Projects Completed' },
    { icon: FaUsers, number: '400+', label: 'Happy Clients' },
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Reliable Electrical Services You Can Trust
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Professional electrician with over 15 years of experience providing quality electrical solutions for homes and businesses. Your safety and satisfaction are my top priorities.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="hero-buttons"
            >
              <a href="tel:+1234567890" className="btn btn-primary">
                <FaPhone />
                Call Now
              </a>
              <Link to="/contact" className="btn btn-secondary">
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-image"
          >
            <div className="hero-image-placeholder">
              <FaBolt className="hero-icon" />
              <p>Professional Electrician</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="section services-preview">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>Our Services</h2>
            <p>Comprehensive electrical solutions for all your needs</p>
          </motion.div>
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="service-card"
              >
                <service.icon className="service-icon" />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-cta"
          >
            <Link to="/services" className="btn btn-primary">
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="stat-card"
              >
                <stat.icon className="stat-icon" />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                  className="stat-number"
                >
                  {stat.number}
                </motion.div>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="cta-content"
          >
            <h2>Ready to Get Started?</h2>
            <p>Contact me today for a free consultation and quote</p>
            <div className="cta-buttons">
              <a href="tel:+237651252121" className="btn btn-primary">
                <FaPhone />
                Call Now
              </a>
              <Link to="/contact" className="btn btn-secondary">
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        .hero {
          background: linear-gradient(135deg, #007BFF 0%, #0056B3 100%);
          color: white;
          padding: 100px 0;
          min-height: 90vh;
          display: flex;
          align-items: center;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .hero-text h1 {
          font-size: 3.5rem;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          font-weight: 700;
        }

        .hero-text p {
          font-size: 1.2rem;
          line-height: 1.8;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s;
          border: none;
          text-decoration: none;
        }

        .btn-primary {
          background: #FFC107;
          color: #0056B3;
        }

        .btn-primary:hover {
          background: #FFD700;
          transform: translateY(-2px);
          box-shadow: 0 5px 20px rgba(255, 193, 7, 0.4);
        }

        .btn-secondary {
          background: white;
          color: #007BFF;
          border: 2px solid white;
        }

        .btn-secondary:hover {
          background: transparent;
          color: white;
          transform: translateY(-2px);
        }

        .hero-image-placeholder {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 60px;
          text-align: center;
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        .hero-icon {
          font-size: 8rem;
          color: #FFC107;
          margin-bottom: 1rem;
        }

        .hero-image-placeholder p {
          font-size: 1.5rem;
          font-weight: 600;
        }

        .services-preview {
          background: #F8F9FA;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-header h2 {
          font-size: 2.5rem;
          color: #333333;
          margin-bottom: 1rem;
        }

        .section-header p {
          font-size: 1.2rem;
          color: #666;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-bottom: 3rem;
        }

        .service-card {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .service-icon {
          font-size: 3rem;
          color: #007BFF;
          margin-bottom: 1rem;
        }

        .service-card h3 {
          font-size: 1.3rem;
          color: #333333;
          margin-bottom: 0.75rem;
        }

        .service-card p {
          color: #666;
          line-height: 1.6;
        }

        .section-cta {
          text-align: center;
        }

        .stats-section {
          background: #007BFF;
          color: white;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
        }

        .stat-card {
          text-align: center;
          padding: 2rem;
        }

        .stat-icon {
          font-size: 3rem;
          color: #FFC107;
          margin-bottom: 1rem;
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 1.2rem;
          opacity: 0.9;
        }

        .cta-section {
          background: #F8F9FA;
          text-align: center;
        }

        .cta-content h2 {
          font-size: 2.5rem;
          color: #333333;
          margin-bottom: 1rem;
        }

        .cta-content p {
          font-size: 1.2rem;
          color: #666;
          margin-bottom: 2rem;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 968px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero-text h1 {
            font-size: 2.5rem;
          }

          .hero-buttons {
            justify-content: center;
          }

          .hero-image-placeholder {
            padding: 40px;
          }

          .hero-icon {
            font-size: 6rem;
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding: 60px 0;
          }

          .hero-text h1 {
            font-size: 2rem;
          }

          .hero-text p {
            font-size: 1rem;
          }

          .section-header h2 {
            font-size: 2rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .cta-content h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Home
