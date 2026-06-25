import { motion } from 'framer-motion'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope, FaBolt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ]

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="footer"
    >
      <div className="container footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <FaBolt className="footer-logo-icon" />
            <h3>ElectroPro</h3>
          </div>
          <p className="footer-description">
            Professional electrical services you can trust. Quality workmanship, reliable service, and customer satisfaction guaranteed.
          </p>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2, color: '#FFC107' }}
                transition={{ duration: 0.2 }}
                className="social-link"
                aria-label={social.label}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul className="contact-info">
            <li>
              <FaMapMarkerAlt />
              <span>Bamenda, Nwken</span>
            </li>
            <li>
              <FaPhone />
              <a href="tel:+237671760185"> (+237) 671760185</a>
            </li>
            <li>
              <FaEnvelope />
              <a href="muyablaise@gmail.com">muyablaise@gmail.com</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Working Hours</h3>
          <ul className="working-hours">
            <li>
              <span>Monday - Friday:</span>
              <span>8:00 AM - 6:00 PM</span>
            </li>
            <li>
              <span>Saturday:</span>
              <span>9:00 AM - 4:00 PM</span>
            </li>
            <li>
              <span>Sunday:</span>
              <span>Closed</span>
            </li>
            <li className="emergency">
              <span>24/7 Emergency Service Available</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} ElectroPro. All rights reserved.</p>
        </div>
      </div>

      <style>{`
        .footer {
          background: #0056B3;
          color: white;
          padding: 60px 0 0;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          padding-bottom: 40px;
        }

        .footer-section h3 {
          font-size: 1.3rem;
          margin-bottom: 1.5rem;
          color: #FFC107;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .footer-logo-icon {
          font-size: 2rem;
          color: #FFC107;
        }

        .footer-logo h3 {
          margin: 0;
          font-size: 1.5rem;
          color: white;
        }

        .footer-description {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: white;
          transition: all 0.3s;
        }

        .social-link:hover {
          background: #FFC107;
          color: #0056B3;
        }

        .footer-links {
          list-style: none;
        }

        .footer-links li {
          margin-bottom: 0.75rem;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.8);
          transition: color 0.3s;
        }

        .footer-links a:hover {
          color: #FFC107;
        }

        .contact-info {
          list-style: none;
        }

        .contact-info li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 1rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .contact-info li svg {
          margin-top: 0.25rem;
          color: #FFC107;
        }

        .contact-info a {
          color: rgba(255, 255, 255, 0.8);
          transition: color 0.3s;
        }

        .contact-info a:hover {
          color: #FFC107;
        }

        .working-hours {
          list-style: none;
        }

        .working-hours li {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.75rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .working-hours li.emergency {
          color: #FFC107;
          font-weight: 600;
          margin-top: 1rem;
        }

        .footer-bottom {
          background: rgba(0, 0, 0, 0.2);
          padding: 20px 0;
          text-align: center;
        }

        .footer-bottom p {
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }
      `}</style>
    </motion.footer>
  )
}

export default Footer
