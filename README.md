# Sanchit Thorat - Portfolio Website

A modern, professional portfolio website showcasing my work as a Full-Stack Developer.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with dark/light theme toggle
- **Responsive Design**: Fully mobile-responsive layout
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Interactive Components**: Dynamic typing effect, smooth scrolling, and hover effects
- **Contact Form**: Fully validated contact form with EmailJS integration ready
- **Performance Optimized**: Fast loading with Vite build tool
- **SEO Friendly**: Optimized meta tags for better discoverability

## 🛠 Tech Stack

- **Frontend**: React.js 18
- **Build Tool**: Vite
- **Styling**: Bootstrap 5 + Custom CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Smooth Scroll**: React Scroll
- **Type Animation**: React Type Animation
- **Form Integration**: EmailJS

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/ThoratSanchit/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## ⚙️ Configuration

### EmailJS Setup (Optional)

To enable the contact form to send emails:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Update `src/components/Contact.jsx` with your credentials:
   - Replace `YOUR_SERVICE_ID`
   - Replace `YOUR_TEMPLATE_ID`
   - Replace `YOUR_PUBLIC_KEY`
5. Uncomment the EmailJS integration code in the `handleSubmit` function

## 📱 Sections

- **Home**: Hero section with introduction and key information
- **About**: Professional summary and key statistics
- **Skills**: Technical skills organized by categories
- **Experience**: Work experience timeline
- **Projects**: Portfolio of selected projects
- **Education**: Academic background
- **Contact**: Contact form and information

## 🎨 Customization

### Theme Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #0dcaf0;
  --secondary-color: #00ADB5;
  /* ... other variables */
}
```

### Content

Update the content in respective component files:
- Personal info: `src/components/Hero.jsx`
- Skills: `src/components/Skills.jsx`
- Experience: `src/components/Experience.jsx`
- Projects: `src/components/Projects.jsx`
- Education: `src/components/Education.jsx`

## 📄 License

© 2025 Sanchit Thorat — All Rights Reserved

## 📧 Contact

- Email: sanchitthorat05@gmail.com
- LinkedIn: [linkedin.com/in/sanchit-thorat-0169a4237](https://linkedin.com/in/sanchit-thorat-0169a4237)
- GitHub: [github.com/ThoratSanchit](https://github.com/ThoratSanchit)

---

Made with ❤️ using React.js & Bootstrap

