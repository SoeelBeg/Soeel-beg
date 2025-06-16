import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/Layout/Footer';
import {Helmet} from 'react-helmet';

function App() {
  // Update title
  useEffect(() => {
    document.title = "SoeelBeg.dev";
  }, []);

  return (
    <ThemeProvider>
       <Helmet>
        <title>Soeel Beg | Frontend React Developer</title>
        <meta
          name="description"
          content="I'm Soeel Beg, a ReactJS developer who builds beautiful, responsive, and user-friendly websites and applications."
        />
        <meta
          name="keywords"
          content="React Developer, Frontend Developer,WordPress Developer,  Soeel Beg, JavaScript, Web Developer, Portfolio"
        />
        <meta name="author" content="Soeel Beg" />

        {/* Open Graph Meta Tags (for LinkedIn, Facebook) */}
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