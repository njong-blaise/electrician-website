# Electrician Portfolio Website

A modern, responsive portfolio website for an individual electrician built with React and Vite.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Single Page Application**: Built with React Router for smooth navigation
- **Modern Animations**: Framer Motion animations throughout the site
- **Beautiful UI**: Clean, professional design with custom color scheme
- **No Backend Required**: Contact form uses mailto functionality
- **WhatsApp Integration**: Direct WhatsApp contact button
- **Image Gallery**: Responsive gallery with lightbox effect
- **Service Cards**: Attractive service display with icons

## Pages

1. **Home**: Hero section, services preview, statistics, and call-to-action
2. **About**: Professional biography, skills, certifications, and core values
3. **Services**: Comprehensive service listings with detailed descriptions
4. **Gallery**: Project showcase with lightbox image viewer
5. **Contact**: Contact information, working hours, and contact form

## Color Scheme

- Primary Color: #007BFF (Electric Blue)
- Secondary Color: #FFC107 (Gold/Yellow)
- Background: #FFFFFF (White)
- Text: #333333 (Dark Gray)
- Footer: #0056B3 (Dark Blue)
- Light Section Background: #F8F9FA

## Technologies Used

- React 18.3.1
- Vite 5.1.0
- React Router DOM 6.22.0
- Framer Motion 11.0.0
- React Icons 5.0.1

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
electrician website/
├── public/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Gallery.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Customization

### Contact Information

Update the contact details in the following files:
- `src/components/Footer.jsx` - Footer contact info
- `src/pages/Contact.jsx` - Contact page information
- `src/components/Navigation.jsx` - Phone number in navigation

### Images

Replace placeholder images with actual project images in:
- `src/pages/Home.jsx` - Hero section
- `src/pages/About.jsx` - Profile image
- `src/pages/Gallery.jsx` - Gallery images

### Social Media Links

Update social media links in:
- `src/components/Footer.jsx` - Social media icons

### Services

Customize services in:
- `src/pages/Home.jsx` - Services preview
- `src/pages/Services.jsx` - Full services list

## Features Breakdown

### Navigation
- Responsive hamburger menu for mobile
- Sticky navigation bar
- Active link highlighting
- Call-to-action button

### Footer
- Contact information
- Social media links
- Quick navigation links
- Working hours
- Copyright section

### Home Page
- Hero section with professional electrician image
- Key services with icons
- Statistics (years of experience, projects completed, happy clients)
- Call-to-action buttons

### About Page
- Professional biography
- Skills with progress bars
- Certifications and qualifications
- Core values

### Services Page
- Service cards with icons
- Detailed descriptions
- Feature lists for each service
- Hover effects

### Gallery Page
- Responsive grid layout
- Lightbox effect for image viewing
- Navigation between images
- Project captions

### Contact Page
- Contact information with icons
- Working hours
- WhatsApp contact button
- Contact form (uses mailto)
- Map section

## Performance Optimization

- Lazy loading with React Router
- Optimized images
- Minimal bundle size with Vite
- CSS-in-JS for component-specific styles
- Efficient animations with Framer Motion

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available for personal and commercial use.

## Support

For issues or questions, please contact the developer or open an issue in the repository.
