import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBolt, FaBars, FaTimes, FaPhone } from 'react-icons/fa'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="navbar"
    >
      <div className="container navbar-container">
        <Link to="/" className="logo">
          <FaBolt className="logo-icon" />
          <span>ElectroPro</span>
        </Link>

        <div className="nav-menu desktop-only">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <a href="tel:+1234567890" className="nav-cta">
            <FaPhone />
            <span>Call Now</span>
          </a>
        </div>

        <button className="hamburger mobile-only" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mobile-menu mobile-only"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:+1234567890" className="mobile-nav-cta" onClick={toggleMenu}>
              <FaPhone />
              <span>Call Now</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .navbar {
          background: #FFFFFF;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 20px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.5rem;
          font-weight: bold;
          color: #007BFF;
        }

        .logo-icon {
          font-size: 1.8rem;
        }

        .nav-menu {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          color: #333333;
          font-weight: 500;
          transition: color 0.3s;
          position: relative;
        }

        .nav-link:hover {
          color: #007BFF;
        }

        .nav-link.active {
          color: #007BFF;
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #007BFF;
        }

        .nav-cta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #007BFF;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          font-weight: 600;
          transition: background 0.3s, transform 0.3s;
        }

        .nav-cta:hover {
          background: #0056B3;
          transform: translateY(-2px);
        }

        .hamburger {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          color: #333333;
          padding: 0.5rem;
        }

        .mobile-menu {
          background: #FFFFFF;
          border-top: 1px solid #eee;
          overflow: hidden;
        }

        .mobile-nav-link {
          display: block;
          padding: 1rem 20px;
          color: #333333;
          font-weight: 500;
          border-bottom: 1px solid #f0f0f0;
          transition: background 0.3s;
        }

        .mobile-nav-link:hover {
          background: #F8F9FA;
        }

        .mobile-nav-link.active {
          color: #007BFF;
          background: #F8F9FA;
        }

        .mobile-nav-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: #007BFF;
          color: white;
          padding: 1rem 20px;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .desktop-only {
            display: none !important;
          }

          .mobile-only {
            display: block !important;
          }

          .hamburger {
            display: block;
          }
        }

        @media (min-width: 769px) {
          .mobile-only {
            display: none !important;
          }
        }
      `}</style>
    </motion.nav>
  )
}

export default Navigation
