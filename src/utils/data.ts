
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  category:
  | 'fullstack'
  | 'web'
  | 'mobile'
  | 'backend'
  | 'management';
}

export const projectsData: Project[] = [


  // ==========================================
  // Mobile App
  // ==========================================

  {
    id: 1,
    title: 'Subscription Management App',
    description:
      'A mobile subscription management application designed for textile businesses to manage clients, products, subscriptions, recurring billing periods, and payment tracking. Includes authentication, subscription status management, and an organized dashboard for managing business operations.',
    image: '/subcription.png',
    technologies: [
      'React Native',
      'Expo',
      'TypeScript',
      'NativeWind',
      'Tailwind CSS',
      'ASP.NET Core Web API',
      'SQL Server',
      'REST API'
    ],
    github: '',
    demo: '',
    category: 'mobile'
  },
  {
    id: 2,
    title: 'FaceTrack - Face Recognition Attendance App',
    description:
      'A smart employee attendance mobile application using face recognition technology. Employees can register their faces and mark IN/OUT attendance through real-time face detection and verification. Built using MobileFaceNet and TensorFlow Lite with backend API integration for attendance management.',
    image: '/face.png',
    technologies: [
      'React Native',
      'Expo',
      'TypeScript',
      'Vision Camera',
      'MobileFaceNet',
      'TensorFlow Lite',
      'ASP.NET Core Web API',
      'SQL Server',
      'REST API'
    ],
    github: '',
    demo: '',
    category: 'mobile'
  },
  {
    id: 3,
    title: 'SmartPayroll - Payroll & HR Management App',
    description:
      'A modern payroll and employee management mobile application designed for businesses with multiple companies and stores. Includes secure JWT authentication, company and store management, employee records, attendance tracking, salary management, and payroll operations.',
    image: '/payroll.png',
    technologies: [
      'React Native',
      'Expo',
      'TypeScript',
      'NativeWind',
      'ASP.NET Core Web API',
      'Entity Framework Core',
      'SQL Server',
      'JWT Authentication',
      'REST API'
    ],
    github: '',
    demo: '',
    category: 'mobile'
  },

  // ==========================================
  // FULL STACK PROJECTS
  // ==========================================

  {
    id: 4,
    title: 'AI Code Reviewer Tool',
    description:
      'An intelligent code review platform that analyzes source code and provides suggestions for cleaner, optimized, and bug-free code.',
    image: '/react2.PNG',
    technologies: ['React', 'Node.js', 'Express', 'Gemini API'],
    github: 'https://github.com/SoeelBeg/Code-Review/',
    demo: 'https://code-review-1-7851.onrender.com/',
    category: 'fullstack'
  },
  {
    id: 5,
    title: 'Baby Kids School Website',
    description:
      'A colorful and responsive school website showcasing programs, admission details, staff profiles, and gallery. Includes MySQL database integration for managing contact forms, admissions, and newsletter subscriptions.',
    image: '/2.PNG',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'MySQL'],
    github: 'https://github.com/SoeelBeg/baby-kids-school',
    demo: 'https://soeelbeg.github.io/baby-kids-school/',
    category: 'fullstack'
  },

  // ==========================================
  // WEB DEVELOPMENT PROJECTS
  // ==========================================

  {
    id: 6,
    title: 'Sehat Healthcare',
    description:
      'A modern hospital website built for a client to showcase healthcare services, facilities, doctors, timings, and contact details. Developed with Next.js and Tailwind CSS, providing a professional, responsive, and user-friendly experience.',
    image: '/sehat.PNG',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    demo: 'https://sehat-healthcare.vercel.app/',
    category: 'web'
  },
  {
    id: 7,
    title: 'FictionDigital',
    description:
      'A modern client website built for a startup business. Features a clean and responsive design, smooth navigation, and a professional online presence with a focus on performance and user experience.',
    image: '/fiction.PNG',
    technologies: ['React.js', 'Tailwind CSS'],
    demo: 'https://fiction-digital.vercel.app/',
    category: 'web'
  },
  {
    id: 8,
    title: 'Portfolio Website',
    description:
      'A personal developer portfolio built with React and Tailwind CSS to showcase projects, technical skills, professional experience, and contact information.',
    image: '/react1.PNG',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    category: 'web'
  },

  // ==========================================
  // BACKEND / API PROJECTS
  // ==========================================

  {
    id: 9,
    title: 'MCP Server Chat Box',
    description:
      'An AI-powered chat application connected to an MCP server and Gemini API for intelligent responses and internet access. Supports posting text and images to X (formerly Twitter) through simple chat commands.',
    image: '/react4.PNG',
    technologies: [
      'React',
      'Node.js',
      'Express.js',
      'Gemini API',
      'X (Twitter) API'
    ],
    github: 'https://github.com/SoeelBeg/MCP-Chat_Box',
    demo: 'https://mcp-chat-box.onrender.com/',
    category: 'backend'
  },

  // ==========================================
  // ERP & MANAGEMENT SYSTEMS
  // ==========================================

  {
    id: 10,
    title: 'Real Estate Management System',
    description:
      'A comprehensive real estate management platform designed to manage property listings, client inquiries, and agent profiles with an organized and user-friendly interface.',
    image: '/fullstack2.PNG',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'MongoDB',
      'Golang',
      'REST API'
    ],
    github: 'https://github.com/SoeelBeg/real-estate-app',
    demo: 'https://real-estate-app-jiec.onrender.com/',
    category: 'management'
  },

];
