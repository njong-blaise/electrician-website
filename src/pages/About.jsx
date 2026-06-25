import { motion } from 'framer-motion'
import { FaGraduationCap, FaCertificate, FaTools, FaAward, FaShieldAlt, FaClock, FaUserTie } from 'react-icons/fa'

const About = () => {
  const skills = [
    { icon: FaTools, title: 'Residential Wiring', level: 95 },
    { icon: FaTools, title: 'Commercial Electrical', level: 90 },
    { icon: FaTools, title: 'Solar Installation', level: 85 },
    { icon: FaTools, title: 'Industrial Systems', level: 80 },
  ]

  const certifications = [
    { icon: FaCertificate, title: 'Licensed Electrician', description: 'State certified electrical contractor' },
    { icon: FaCertificate, title: 'Solar PV Certified', description: 'Professional solar installation certification' },
    { icon: FaCertificate, title: 'Safety Certified', description: 'OSHA compliant safety training' },
    { icon: FaCertificate, title: 'Master Electrician', description: 'Advanced electrical systems certification' },
  ]

  const values = [
    { icon: FaShieldAlt, title: 'Safety First', description: 'Prioritizing safety in every project' },
    { icon: FaAward, title: 'Quality Work', description: 'Delivering excellence in every job' },
    { icon: FaClock, title: 'Reliable Service', description: 'On-time, every time' },
    { icon: FaUserTie, title: 'Professional', description: 'Courteous and expert service' },
  ]

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="page-hero-content"
          >
            <h1>About Me</h1>
            <p>Learn more about my experience and qualifications</p>
          </motion.div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="about-image"
            >
              <div className="about-image-placeholder">
                <FaUserTie className="about-icon" />
                <p>Professional Electrician</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="about-text"
            >
              <h2>Professional Biography</h2>
              <p>
                With over 10 years of experience in the electrical industry, I have established myself as a trusted 
                electrician serving both residential and commercial clients. My journey began with a passion for 
                understanding how electrical systems work, which led me to pursue formal training and certifications.
              </p>
              <p>
                Throughout my career, I have completed hundreds of projects ranging from simple repairs to complex 
                installations. I specialize in house wiring, solar installations, generator systems, and CCTV 
                installations. My commitment to quality and safety has earned me a reputation for excellence in the community.
              </p>
              <p>
                I believe in continuous learning and staying updated with the latest technologies and safety standards. 
                This ensures that my clients receive the best possible service and solutions for their electrical needs.
              </p>
              <div className="about-highlights">
                <div className="highlight-item">
                  <FaGraduationCap />
                  <span>15+ Years Experience</span>
                </div>
                <div className="highlight-item">
                  <FaAward />
                  <span>500+ Projects Completed</span>
                </div>
                <div className="highlight-item">
                  <FaCertificate />
                  <span>Fully Licensed & Insured</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section skills-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>Skills & Expertise</h2>
            <p>Professional competencies and technical skills</p>
          </motion.div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="skill-item"
              >
                <div className="skill-header">
                  <skill.icon className="skill-icon" />
                  <span className="skill-title">{skill.title}</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                    className="skill-progress"
                  />
                </div>
                <span className="skill-level">{skill.level}%</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>Certifications & Qualifications</h2>
            <p>Professional credentials and areas of specialization</p>
          </motion.div>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="certification-card"
              >
                <cert.icon className="cert-icon" />
                <h3>{cert.title}</h3>
                <p>{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>Core Values</h2>
            <p>Principles that guide my work</p>
          </motion.div>
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="value-card"
              >
                <value.icon className="value-icon" />
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
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

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .about-image-placeholder {
          background: #F8F9FA;
          border-radius: 20px;
          padding: 60px;
          text-align: center;
          border: 2px solid #007BFF;
        }

        .about-icon {
          font-size: 8rem;
          color: #007BFF;
          margin-bottom: 1rem;
        }

        .about-image-placeholder p {
          font-size: 1.5rem;
          font-weight: 600;
          color: #333;
        }

        .about-text h2 {
          font-size: 2.5rem;
          color: #333;
          margin-bottom: 1.5rem;
        }

        .about-text p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #666;
          margin-bottom: 1rem;
        }

        .about-highlights {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-top: 2rem;
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
          background: #F8F9FA;
          border-radius: 10px;
        }

        .highlight-item svg {
          font-size: 1.5rem;
          color: #007BFF;
        }

        .highlight-item span {
          font-weight: 600;
          color: #333;
        }

        .skills-section {
          background: #F8F9FA;
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

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .skill-item {
          background: white;
          padding: 1.5rem;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
        }

        .skill-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .skill-icon {
          font-size: 1.5rem;
          color: #007BFF;
        }

        .skill-title {
          font-weight: 600;
          color: #333;
        }

        .skill-bar {
          height: 10px;
          background: #E0E0E0;
          border-radius: 5px;
          overflow: hidden;
          margin-bottom: 0.5rem;
        }

        .skill-progress {
          height: 100%;
          background: linear-gradient(90deg, #007BFF, #FFC107);
          border-radius: 5px;
        }

        .skill-level {
          font-size: 0.9rem;
          color: #666;
          font-weight: 600;
        }

        .certifications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .certification-card {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          border: 2px solid #F8F9FA;
          transition: all 0.3s;
        }

        .certification-card:hover {
          border-color: #007BFF;
          transform: translateY(-5px);
        }

        .cert-icon {
          font-size: 3rem;
          color: #FFC107;
          margin-bottom: 1rem;
        }

        .certification-card h3 {
          font-size: 1.3rem;
          color: #333;
          margin-bottom: 0.75rem;
        }

        .certification-card p {
          color: #666;
          line-height: 1.6;
        }

        .values-section {
          background: #F8F9FA;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .value-card {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
        }

        .value-icon {
          font-size: 3rem;
          color: #007BFF;
          margin-bottom: 1rem;
        }

        .value-card h3 {
          font-size: 1.3rem;
          color: #333;
          margin-bottom: 0.75rem;
        }

        .value-card p {
          color: #666;
          line-height: 1.6;
        }

        @media (max-width: 968px) {
          .about-grid {
            grid-template-columns: 1fr;
          }

          .about-image-placeholder {
            padding: 40px;
          }

          .about-icon {
            font-size: 6rem;
          }
        }

        @media (max-width: 768px) {
          .page-hero-content h1 {
            font-size: 2rem;
          }

          .about-text h2 {
            font-size: 2rem;
          }

          .section-header h2 {
            font-size: 2rem;
          }

          .skills-grid,
          .certifications-grid,
          .values-grid {
            grid-template-columns: 1fr;
          }

          .about-highlights {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export default About
