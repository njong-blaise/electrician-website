import { motion } from 'framer-motion'
import { FaBolt, FaTools, FaSolarPanel, FaPowerOff, FaVideo, FaWrench, FaHome, FaBuilding, FaIndustry, FaLightbulb, FaPlug, FaCogs } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: FaHome,
      title: 'House Wiring',
      description: 'Complete residential wiring solutions including new installations, rewiring, and upgrades. We ensure your home\'s electrical system is safe, efficient, and up to code.',
      features: ['New Construction Wiring', 'Rewiring Services', 'Panel Upgrades', 'Outlet & Switch Installation']
    },
    {
      icon: FaTools,
      title: 'Electrical Repairs',
      description: 'Quick and reliable electrical repair services for all types of issues. From minor fixes to major repairs, we handle it all with expertise and care.',
      features: ['Troubleshooting', 'Circuit Repairs', 'Outlet Replacement', 'Breaker Panel Repairs']
    },
    {
      icon: FaSolarPanel,
      title: 'Solar Installation',
      description: 'Professional solar power system installation for homes and businesses. Reduce your energy bills and contribute to a sustainable future with our solar solutions.',
      features: ['Solar Panel Installation', 'Inverter Setup', 'Battery Storage', 'Grid Connection']
    },
    {
      icon: FaPowerOff,
      title: 'Generator Installation',
      description: 'Backup power solutions to keep your home or business running during power outages. We install and maintain generators of all sizes.',
      features: ['Standby Generators', 'Portable Generator Hookup', 'Transfer Switches', 'Maintenance Services']
    },
    {
      icon: FaVideo,
      title: 'CCTV Installation',
      description: 'Security camera system installation for enhanced property protection. We design and install comprehensive surveillance solutions tailored to your needs.',
      features: ['Camera Installation', 'DVR/NVR Setup', 'Remote Monitoring', 'Motion Detection']
    },
    {
      icon: FaWrench,
      title: 'Electrical Maintenance',
      description: 'Regular maintenance services to keep your electrical systems running smoothly and safely. Preventive maintenance saves money and ensures reliability.',
      features: ['System Inspections', 'Preventive Maintenance', 'Safety Checks', 'Performance Optimization']
    },
    {
      icon: FaLightbulb,
      title: 'Lighting Solutions',
      description: 'Indoor and outdoor lighting installation and design services. From ambient lighting to task lighting, we create the perfect illumination for your space.',
      features: ['LED Upgrades', 'Landscape Lighting', 'Recessed Lighting', 'Smart Lighting']
    },
    {
      icon: FaBuilding,
      title: 'Commercial Services',
      description: 'Comprehensive electrical services for businesses and commercial properties. We understand the unique needs of commercial electrical systems.',
      features: ['Office Wiring', 'Retail Lighting', 'Signage Installation', 'Emergency Lighting']
    },
    {
      icon: FaIndustry,
      title: 'Industrial Services',
      description: 'Specialized electrical services for industrial facilities and manufacturing plants. We handle high-voltage systems and industrial equipment.',
      features: ['High-Voltage Systems', 'Motor Controls', 'Industrial Lighting', 'Equipment Wiring']
    },
    {
      icon: FaPlug,
      title: 'EV Charging Stations',
      description: 'Electric vehicle charging station installation for homes and businesses. Stay ahead with convenient EV charging solutions.',
      features: ['Home Charging Stations', 'Commercial Charging', 'Level 2 Chargers', 'Smart Charging']
    },
    {
      icon: FaCogs,
      title: 'Smart Home Integration',
      description: 'Modern smart home electrical systems integration. Control your lighting, climate, and security with advanced automation solutions.',
      features: ['Smart Switches', 'Home Automation', 'Voice Control', 'Energy Monitoring']
    },
    {
      icon: FaBolt,
      title: 'Emergency Services',
      description: '24/7 emergency electrical services for urgent situations. We\'re available around the clock for critical electrical issues.',
      features: ['24/7 Availability', 'Rapid Response', 'Emergency Repairs', 'Safety Assessment']
    }
  ]

  return (
    <div className="services">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="page-hero-content"
          >
            <h1>Our Services</h1>
            <p>Comprehensive electrical solutions for all your needs</p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>What We Offer</h2>
            <p>Professional electrical services tailored to your requirements</p>
          </motion.div>
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                className="service-card"
              >
                <div className="service-icon-wrapper">
                  <service.icon className="service-icon" />
                </div>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <FaBolt className="feature-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
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
            <h2>Need a Service Not Listed?</h2>
            <p>Contact us to discuss your specific electrical needs</p>
            <a href="tel:+1234567890" className="btn btn-primary">
              Call Us Today
            </a>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
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

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-header h2 {
          font-size: 2.5rem;
          color: #333;
          margin-bottom: 1rem;
        }

        .section-header p {
          font-size: 1.2rem;
          color: #666;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        .service-card {
          background: white;
          border-radius: 15px;
          padding: 2rem;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s;
          border: 2px solid transparent;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
          border-color: #007BFF;
        }

        .service-icon-wrapper {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #007BFF, #0056B3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .service-icon {
          font-size: 2rem;
          color: white;
        }

        .service-card h3 {
          font-size: 1.5rem;
          color: #333;
          margin-bottom: 1rem;
        }

        .service-description {
          color: #666;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .service-features {
          list-style: none;
          padding: 0;
        }

        .service-features li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.5rem 0;
          color: #555;
          font-size: 0.95rem;
        }

        .feature-icon {
          font-size: 0.8rem;
          color: #FFC107;
        }

        .cta-section {
          background: #F8F9FA;
          text-align: center;
        }

        .cta-content h2 {
          font-size: 2.5rem;
          color: #333;
          margin-bottom: 1rem;
        }

        .cta-content p {
          font-size: 1.2rem;
          color: #666;
          margin-bottom: 2rem;
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
          background: #007BFF;
          color: white;
        }

        .btn-primary:hover {
          background: #0056B3;
          transform: translateY(-2px);
          box-shadow: 0 5px 20px rgba(0, 123, 255, 0.4);
        }

        @media (max-width: 768px) {
          .page-hero-content h1 {
            font-size: 2rem;
          }

          .section-header h2 {
            font-size: 2rem;
          }

          .services-grid {
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

export default Services
