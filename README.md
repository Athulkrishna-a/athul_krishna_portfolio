# Portfolio Website

A modern, responsive personal portfolio website built with **React** and **Vite**, showcasing skills, projects, education, experience, and contact information.

## ✨ Features

- **About Section** – Personal introduction and background
- **Experience Section** – Internship and work experience highlights
- **Projects Showcase** – Display projects with images and descriptions
- **Skills Display** – Technical skills with icons and proficiency levels
- **Education Timeline** – Academic qualifications and achievements
- **Resume Download** – One-click PDF resume download
- **Contact Form** – Integrated email form (EmailJS or similar service)
- **Fully Responsive** – Optimized for all screen sizes
- **Component-Based Architecture** – Reusable and maintainable code structure

## 🚀 Demo

Host locally or deploy on:
- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [GitHub Pages](https://pages.github.com)

## 📁 Project Structure

```
portfolio-web/
│
├── public/
│   ├── athul_resume.pdf
│   └── vite.svg
│
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── athul.png
│   │       ├── athul_new.png
│   │       ├── ecom.png
│   │       ├── blob.svg
│   │       └── logos/
│   │
│   ├── components/
│   │   └── routecomponents/
│   │       ├── About.jsx
│   │       ├── ContactMe.jsx
│   │       ├── Education.jsx
│   │       ├── Experience.jsx
│   │       ├── Projects.jsx
│   │       ├── Skills.jsx
│   │       ├── ResumeDownload.jsx
│   │       ├── Navbar.jsx
│   │       ├── Footer.jsx
│   │       ├── EmailCard.jsx
│   │       └── LinkCard.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── node_modules/
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-web.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd portfolio-web
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**  
   Visit [http://localhost:5173/](http://localhost:5173/)

## 📦 Build & Deployment

### Build for production
```bash
npm run build
```

The optimized production build will be generated in the `dist/` folder.

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Deploy to GitHub Pages
```bash
npm run build
npm run deploy
```

## 🧰 Technologies Used

| Technology | Purpose |
|------------|---------|
| **React** | Frontend UI library |
| **Vite** | Fast build tool and dev server |
| **JavaScript (ES6+)** | Programming language |
| **HTML5 & CSS3** | Markup and styling |
| **EmailJS** | Contact form integration |
| **Responsive Design** | Mobile-first approach |

## 📝 Customization

### Update Personal Information
- Edit component files in `src/components/routecomponents/`
- Replace images in `src/assets/images/`
- Update resume PDF in `public/athul_resume.pdf`

### Modify Styling
- CSS modules or styled-components can be added
- Update component-specific styles in respective `.jsx` files

### Configure Contact Form
- Set up EmailJS account
- Add your service ID, template ID, and public key
- Update `ContactMe.jsx` component

## 🎨 Component Overview

### Core Components

- **Navbar** – Navigation menu with smooth scrolling
- **About** – Personal introduction and profile picture
- **Experience** – Professional work history
- **Projects** – Portfolio project showcase with images
- **Skills** – Technical skills with visual indicators
- **Education** – Academic background
- **ContactMe** – Email contact form
- **Footer** – Social media links and copyright

### Utility Components

- **LinkCard** – Reusable card for social/external links
- **EmailCard** – Email display card component
- **ResumeDownload** – Resume download button

## 🔧 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

#

## 🤝 Contributing

This is a personal portfolio project. Feel free to fork it for your own use or inspiration!

If you'd like to suggest improvements:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 🐛 Known Issues

No known issues at this time. Please report any bugs through the GitHub issues page.

## 📄 License

This project is licensed under the **MIT License**.
