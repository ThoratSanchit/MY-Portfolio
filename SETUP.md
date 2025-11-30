# Portfolio Website - Setup Guide

## 📋 Quick Start

Follow these steps to get the portfolio website running on your local machine:

### 1. Prerequisites

Make sure you have the following installed:
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- A code editor (VS Code recommended)

### 2. Installation Steps

```bash
# Navigate to the project directory
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The website will automatically open in your browser at `http://localhost:3000`

### 3. Build for Production

```bash
# Create an optimized production build
npm run build

# Preview the production build locally
npm run preview
```

The production files will be in the `dist` folder.

## 🎨 Customization Guide

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Name, location, phone, email
   - Social media links

2. **About Section** (`src/components/About.jsx`):
   - Professional summary
   - Statistics and achievements

3. **Skills Section** (`src/components/Skills.jsx`):
   - Add/remove technical skills
   - Update skill categories

4. **Experience Section** (`src/components/Experience.jsx`):
   - Work experience details
   - Job responsibilities

5. **Projects Section** (`src/components/Projects.jsx`):
   - Project details
   - Technologies used
   - GitHub/demo links

6. **Education Section** (`src/components/Education.jsx`):
   - Degree information
   - University details

### Update Resume Download

In `src/components/Hero.jsx`, update the `handleDownloadResume` function:

```javascript
const handleDownloadResume = () => {
  // Replace with your resume file path
  const link = document.createElement('a')
  link.href = '/path-to-your-resume.pdf'
  link.download = 'Sanchit_Thorat_Resume.pdf'
  link.click()
}
```

### Configure EmailJS (Contact Form)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template with these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`
4. Get your Service ID, Template ID, and Public Key
5. Update `src/components/Contact.jsx`:

```javascript
emailjs.send(
  'YOUR_SERVICE_ID',      // Replace this
  'YOUR_TEMPLATE_ID',     // Replace this
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message
  },
  'YOUR_PUBLIC_KEY'       // Replace this
)
```

### Change Theme Colors

Edit `src/index.css`:

```css
:root {
  --primary-color: #0dcaf0;      /* Main accent color */
  --secondary-color: #00ADB5;    /* Secondary accent */
  --dark-bg: #0a0e27;            /* Dark mode background */
  --dark-card: #1a1f3a;          /* Dark mode cards */
  /* ... update other colors as needed */
}
```

### Add Your Photo

Replace the placeholder initials with an actual photo:

1. Add your photo to the `public` folder (e.g., `public/profile.jpg`)
2. Update `src/components/Hero.jsx`:

```jsx
<div className="hero-image-placeholder">
  <img src="/profile.jpg" alt="Sanchit Thorat" />
</div>
```

3. Add CSS in `src/components/Hero.css`:

```css
.hero-image-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
```

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/)
3. Import your GitHub repository
4. Vercel will auto-detect Vite and deploy

### Option 2: Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://www.netlify.com/)
3. Connect your GitHub repository
4. Build command: `npm run build`
5. Publish directory: `dist`

### Option 3: GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()]
})
```

4. Deploy:
```bash
npm run deploy
```

## 🐛 Troubleshooting

### Port Already in Use

If port 3000 is already in use, Vite will automatically use the next available port. Check the terminal output for the correct URL.

### Dependencies Issues

If you encounter dependency errors:

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

Make sure you're using Node.js v16 or higher:

```bash
node --version
```

## 📱 Browser Compatibility

This website works best on:
- Chrome (recommended)
- Firefox
- Safari
- Edge

## 💡 Tips

- **Test Responsive Design**: Use browser DevTools to test different screen sizes
- **Optimize Images**: Use WebP format and compress images before adding
- **Performance**: Run Lighthouse audit in Chrome DevTools
- **SEO**: Update meta tags in `index.html` for better search visibility

## 📞 Support

If you need help or have questions:
- Email: sanchitthorat05@gmail.com
- LinkedIn: [Sanchit Thorat](https://linkedin.com/in/sanchit-thorat-0169a4237)

---

Happy coding! 🚀

