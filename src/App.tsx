
import { ThemeProvider } from './context/ThemeContext';

import Navbar from './components/Layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/Layout/Footer';
import ChatBotLauncher from './components/UI/ChatBotLauncher';

import { Helmet } from 'react-helmet';

function App() {
  const siteUrl = 'https://soeel-beg.vercel.app/';

  const pageTitle =
    'Soeel Beg | Full Stack Developer | Web & Software Solutions';

  const pageDescription =
    'Soeel Beg is a Full Stack Developer specializing in modern web development, React applications, ASP.NET Core, APIs, responsive websites and custom business management software.';

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteUrl}#person`,
        name: 'Soeel Beg',
        url: siteUrl,
        jobTitle: 'Full Stack Developer',
        description: pageDescription,
        email: 'mailto:soeelbeg@gmail.com',
        telephone: '+918690588536',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bhilwara',
          addressRegion: 'Rajasthan',
          addressCountry: 'IN',
        },
        sameAs: [
          'https://github.com/soeelbeg',
          'https://linkedin.com/in/soeelbeg',
          'https://twitter.com/soeelbeg',
        ],
        knowsAbout: [
          'Full Stack Web Development',
          'React',
          'JavaScript',
          'TypeScript',
          'ASP.NET Core',
          'Blazor',
          'REST API Development',
          'React Native',
          'Business Management Software',
          'ERP Systems',
          'Responsive Web Design',
          'Database Development',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}#website`,
        url: siteUrl,
        name: 'Soeel Beg | Developer Portfolio',
        description: pageDescription,
        inLanguage: 'en-IN',
        author: {
          '@id': `${siteUrl}#person`,
        },
      },
    ],
  };

  return (
    <ThemeProvider>

      {/* SEO Metadata */}
      <Helmet>

        {/* Primary SEO */}
        <html lang="en-IN" />

        <title>{pageTitle}</title>

        <meta
          name="description"
          content={pageDescription}
        />

        <meta
          name="author"
          content="Soeel Beg"
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <meta
          name="theme-color"
          content="#080b14"
        />

        <meta
          name="application-name"
          content="Soeel Beg Portfolio"
        />

        <link
          rel="canonical"
          href={siteUrl}
        />

        {/* Open Graph - Facebook / LinkedIn */}
        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:title"
          content={pageTitle}
        />

        <meta
          property="og:description"
          content="Explore Soeel Beg's developer portfolio featuring modern websites, full stack applications, APIs and custom business software solutions."
        />

        <meta
          property="og:url"
          content={siteUrl}
        />

        <meta
          property="og:site_name"
          content="Soeel Beg Portfolio"
        />

        <meta
          property="og:locale"
          content="en_IN"
        />

        {/* Twitter / X */}
        <meta
          name="twitter:card"
          content="summary"
        />

        <meta
          name="twitter:title"
          content={pageTitle}
        />

        <meta
          name="twitter:description"
          content="Full Stack Developer building modern websites, web applications, APIs and business software solutions."
        />

        {/* Structured Data - Person + Website */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>

      </Helmet>

      {/* Main Website */}
      <div className="min-h-screen bg-[#080b14] text-white transition-colors duration-300">

        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <Footer />

        <ChatBotLauncher />

      </div>

    </ThemeProvider>
  );
}

export default App;
