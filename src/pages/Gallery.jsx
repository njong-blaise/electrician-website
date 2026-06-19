import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaChevronLeft, FaChevronRight, FaExpand } from 'react-icons/fa'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const projects = [
    {
      id: 1,
      title: 'Residential Wiring Project',
      category: 'House Wiring',
      description: 'Complete rewiring of a 3-bedroom house with modern electrical system',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
    },
    {
      id: 2,
      title: 'Solar Panel Installation',
      category: 'Solar Installation',
      description: '10kW solar power system installation for residential property',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop'
    },
    {
      id: 3,
      title: 'Commercial Lighting',
      category: 'Lighting',
      description: 'LED lighting upgrade for office building with smart controls',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop'
    },
    {
      id: 4,
      title: 'Generator Installation',
      category: 'Generator',
      description: 'Standby generator installation for backup power solution',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop'
    },
    {
      id: 5,
      title: 'CCTV Security System',
      category: 'Security',
      description: 'Complete CCTV installation with 16 cameras and remote monitoring',
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&h=600&fit=crop'
    },
    {
      id: 6,
      title: 'Industrial Electrical',
      category: 'Industrial',
      description: 'High-voltage electrical system for manufacturing facility',
      image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&h=600&fit=crop'
    },
    {
      id: 7,
      title: 'Smart Home Integration',
      category: 'Smart Home',
      description: 'Complete smart home electrical system with automation',
      image: 'https://images.unsplash.com/photo-1558002038-1091a1661116?w=800&h=600&fit=crop'
    },
    {
      id: 8,
      title: 'EV Charging Station',
      category: 'EV Charging',
      description: 'Electric vehicle charging station installation for commercial property',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=600&fit=crop'
    },
    {
      id: 9,
      title: 'Panel Upgrade',
      category: 'Electrical Panel',
      description: 'Electrical panel upgrade from 100A to 200A for increased capacity',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop'
    }
  ]

  const openLightbox = (index) => {
    setCurrentIndex(index)
    setSelectedImage(projects[index])
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction) => {
    if (direction === 'next') {
      setCurrentIndex((prev) => (prev + 1) % projects.length)
    } else {
      setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
    }
    setSelectedImage(projects[currentIndex])
  }

  const handleKeyDown = (e) => {
    if (!selectedImage) return
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowRight') navigateImage('next')
    if (e.key === 'ArrowLeft') navigateImage('prev')
  }

  return (
    <div className="gallery" onKeyDown={handleKeyDown}>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="page-hero-content"
          >
            <h1>Our Projects</h1>
            <p>Gallery of completed electrical projects</p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>Completed Projects</h2>
            <p>Browse through our portfolio of successful electrical installations</p>
          </motion.div>
          <div className="gallery-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                className="gallery-item"
                onClick={() => openLightbox(index)}
              >
                <div className="gallery-image-wrapper">
                  <img src={project.image} alt={project.title} className="gallery-image" />
                  <div className="gallery-overlay">
                    <FaExpand className="expand-icon" />
                    <div className="gallery-info">
                      <h3>{project.title}</h3>
                      <p>{project.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lightbox"
            onClick={closeLightbox}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="lightbox-close"
              onClick={(e) => {
                e.stopPropagation()
                closeLightbox()
              }}
            >
              <FaTimes />
            </motion.button>
            
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="lightbox-nav lightbox-prev"
              onClick={(e) => {
                e.stopPropagation()
                navigateImage('prev')
              }}
            >
              <FaChevronLeft />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage.image} alt={selectedImage.title} className="lightbox-image" />
              <div className="lightbox-caption">
                <h3>{selectedImage.title}</h3>
                <p className="lightbox-category">{selectedImage.category}</p>
                <p className="lightbox-description">{selectedImage.description}</p>
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2 }}
              className="lightbox-nav lightbox-next"
              onClick={(e) => {
                e.stopPropagation()
                navigateImage('next')
              }}
            >
              <FaChevronRight />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

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

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
        }

        .gallery-item {
          cursor: pointer;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
          transition: all 0.3s;
        }

        .gallery-item:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
        }

        .gallery-image-wrapper {
          position: relative;
          aspect-ratio: 4/3;
          overflow: hidden;
        }

        .gallery-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }

        .gallery-item:hover .gallery-image {
          transform: scale(1.1);
        }

        .gallery-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 2rem;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .expand-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 2rem;
          color: white;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .gallery-item:hover .expand-icon {
          opacity: 1;
        }

        .gallery-info {
          color: white;
          z-index: 1;
        }

        .gallery-info h3 {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
        }

        .gallery-info p {
          font-size: 0.95rem;
          opacity: 0.9;
        }

        .lightbox {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 2rem;
        }

        .lightbox-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          font-size: 1.5rem;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox-close:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: rotate(90deg);
        }

        .lightbox-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          font-size: 1.5rem;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox-nav:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .lightbox-prev {
          left: 20px;
        }

        .lightbox-next {
          right: 20px;
        }

        .lightbox-content {
          max-width: 900px;
          max-height: 80vh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .lightbox-image {
          max-width: 100%;
          max-height: 60vh;
          object-fit: contain;
          border-radius: 10px;
        }

        .lightbox-caption {
          color: white;
          text-align: center;
          margin-top: 1.5rem;
          padding: 0 1rem;
        }

        .lightbox-caption h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .lightbox-category {
          color: #FFC107;
          font-size: 1.1rem;
          margin-bottom: 0.75rem;
        }

        .lightbox-description {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .page-hero-content h1 {
            font-size: 2rem;
          }

          .section-header h2 {
            font-size: 2rem;
          }

          .gallery-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
          }

          .lightbox {
            padding: 1rem;
          }

          .lightbox-content {
            max-height: 70vh;
          }

          .lightbox-image {
            max-height: 50vh;
          }

          .lightbox-caption h3 {
            font-size: 1.2rem;
          }

          .lightbox-nav {
            width: 40px;
            height: 40px;
            font-size: 1.2rem;
          }

          .lightbox-close {
            width: 40px;
            height: 40px;
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Gallery
