import { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/Layout/Footer';
import { Helmet } from 'react-helmet';
// import ChatBot from './components/UI/ChatBot';
import ChatBotLauncher from './components/UI/ChatBotLauncher';


function App() {
  useEffect(() => {
    document.title = "SoeelBeg.dev | React Developer | Responsive Web Apps | WordPress";
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
        {/* ... your SEO meta tags remain same */}
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
        <ChatBotLauncher /> {/* Added custom ChatBot component */}
      </div>
    </ThemeProvider>
  );
}

export default App;
