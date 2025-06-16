import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/Layout/Footer';
import { Helmet } from 'react-helmet';

function App() {
  // Update title
  useEffect(() => {
    document.title = "SoeelBeg.dev | React Developer | Responsive Web Apps |WordPress";
  }, []);

  return (
    <ThemeProvider>
      <Helmet>
        <link rel="canonical" href="https://soeel-beg.vercel.app/" />
        <title>Soeel Beg | Frontend React Developer</title>
        <meta
          name="description"
          content="I'm Soeel Beg, a ReactJS developer specializing in building responsive, clean, and user-friendly web applications using modern tools like React, JavaScript, and APIs."
        />
        <meta
          name="keywords"
          content="React Developer, Frontend Developer, WordPress Developer, Soeel Beg, JavaScript, Web Developer, Portfolio"
        />
        <meta name="author" content="Soeel Beg" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Soeel Beg | React Developer" />
        <meta
          property="og:description"
          content="Portfolio of Soeel Beg – ReactJS developer building clean and responsive user interfaces."
        />
        <meta property="og:image" content="https://soeel-beg.vercel.app/preview.png" />
        <meta property="og:url" content="https://soeel-beg.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Soeel Beg | React Developer" />
        <meta
          name="twitter:description"
          content="React Developer Portfolio of Soeel Beg. Showcasing skills, projects and contact details."
        />
        <meta name="twitter:image" content="https://soeel-beg.vercel.app/preview.png" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Soeel Beg",
          "jobTitle": "Frontend Developer",
          "url": "https://soeel-beg.vercel.app",
          "sameAs": [
            "https://github.com/soeel-beg",
            "https://linkedin.com/in/soeel-beg"
          ]
        }
      `
          }}
        />
      </Helmet>


      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;