import js1 from '../../src/images/fullstack1.png';
import js2 from '../../src/images/fullstack2.png';
import js3 from '../../src/images/js2.png';
import js4 from '../../src/images/js3.png';
import js5 from '../../src/images/js4.png';
import js6 from '../../src/images/2.png';
import js7 from '../../src/images/react1.png';
import js8 from '../../src/images/react3.png';
import js9 from '../../src/images/react2.png';
import js10 from '../../src/images/react4.png';
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  category: 'react' | 'javascript' | 'fullstack';
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'AI Code Reviewer Tool',
    description: 'An intelligent code review platform that analyzes source code and provides suggestions for cleaner, optimized, and bug-free code.',
    image: js9,
    technologies: ['React', 'Node.js', 'Express', 'Gemini API'],
    github: 'https://github.com/SoeelBeg/Code-Review/',
    demo: 'https://code-review-1-7851.onrender.com/',
    category: 'fullstack'
  },
  {
    id: 2,
    title: 'MCP Server Chat Box',
    description: 'An AI-powered chat box application that interacts with the MCP server, connected to Gemini API for intelligent responses and internet access. This system enables posting text and images to X (formerly Twitter) using simple commands via the chat interface.',
    image: js10,
    technologies: ['ReactJS', 'Node.js', 'ExpressJS', 'Gemini API', 'X (Twitter) API'],
    github: 'https://github.com/SoeelBeg/MCP-Chat_Box',
    demo: 'https://mcp-chat-box.onrender.com/',
    category: 'fullstack'
  },

  {
    id: 3,
    title: 'Lawyer Profile Management System',
    description: 'A system for managing and displaying lawyer profiles with search, filter, and profile sharing features.',
    image: js1,
    technologies: ['Golang', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'API'],
    github: 'https://github.com/SoeelBeg/lawyer-profile',
    demo: 'https://lawyer-profile.vercel.app/',
    category: 'fullstack'
  },
  {
    id: 4,
    title: 'Real Estate Management System',
    description: 'A comprehensive platform to manage real estate property listings, client inquiries, and agent profiles.',
    image: js2,
    technologies: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Golang', 'API'],
    github: 'https://github.com/SoeelBeg/real-estate-app',
    demo: 'https://real-estate-app-jiec.onrender.com/',
    category: 'fullstack'
  },

  {
    id: 5,
    title: 'Weather Dashboard',
    description: 'A weather application that displays current and forecasted weather data for any location.',
    image: js3,
    technologies: ['Html', 'OpenWeather API', 'Javascript', 'CSS'],
    github: 'https://github.com/SoeelBeg/Weather-app',
    demo: 'https://soeelbeg.github.io/Weather-app/',
    category: 'javascript'
  },
  {
    id: 6,
    title: 'Currency Converter Web App',
    description: 'A responsive web application that allows users to convert currencies in real-time using the latest exchange rates.',
    image: js4,
    technologies: ['HTML', 'CSS', 'JavaScript', 'OpenCurrency API'],
    github: 'https://github.com/SoeelBeg/Currency-Converted',
    demo: 'https://soeelbeg.github.io/Currency-Converted/',
    category: 'javascript'
  },
  {
    id: 7,
    title: 'Baby Kids School Website',
    description: 'A colorful and responsive website for a baby kids school designed to showcase programs, admission details, staff profiles, and gallery. Built using modern frontend tools with a MySQL database to manage contact forms, admissions, and newsletter subscriptions.',
    image: js6,
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'MySQL'],
    github: 'https://github.com/soeelbeg/kids-school-website',
    demo: 'https://baby-kids-school-demo.com',
    category: 'fullstack'
  },

  {
    id: 8,
    title: 'Tic Tac Toe Game',
    description: 'A classic 2-player Tic Tac Toe game built with HTML, CSS, and JavaScript. Features include interactive gameplay, win/draw detection, score tracking, and a clean responsive design for desktop and mobile screens.',
    image: js5,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/SoeelBeg/Tic-Tac-Toe-Game',
    demo: 'https://soeelbeg.github.io/Tic-Tac-Toe-Game/',
    category: 'javascript'
  },
  {
    id: 9,
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with React and styled using Tailwind CSS to showcase projects, skills, experience, and contact information.',
    image: js7,
    technologies: ['React', 'Tailwind CSS'],
    github: '#',
    demo: '#',
    category: 'react'
  },
  {
    id: 10,
    title: 'Todo List App',
    description: 'A simple and efficient Todo List application built with ReactJS. It allows users to add, delete, and mark tasks as complete.',
    image: js8,
    technologies: ['React'],
    github: 'https://github.com/SoeelBeg/Todo-list',
    demo: 'https://todo-list-blue-chi-40.vercel.app/',
    category: 'react'
  },

];