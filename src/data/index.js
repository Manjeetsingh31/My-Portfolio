export const personalData = {
  name: 'Manjeet Kumar',
  location: 'Erode, Tamil Nadu, India',
  phone: '+91 6383976909',
  email: 'msmanjeetsingh4271@gmail.com',
  role: 'Software Engineer',
  titles: [
    'Python Developer',
    'Data Science Enthusiast',
    'FastAPI Developer',
  ],
  summary:
    'Software Engineer with a strong foundation in programming fundamentals, Object-Oriented Programming, Data Structures, DBMS, and SQL. Experienced in building and maintaining applications end-to-end, from data handling and CRUD features to responsive web interfaces. Comfortable with Git-based version control and quick to pick up new tools and frameworks.',
  aboutIntro:
    'I am a Computer Science and Design student at Erode Sengunthar Engineering College with hands-on experience in software development and data science. I enjoy building real-world applications, solving problems through code, and continuously learning new technologies.',
  resumeUrl: '#',
  leetcode: 'https://leetcode.com/u/Manjeet012/',
  social: {
    github: 'https://github.com/Manjeetsingh31',
    linkedin: 'https://www.linkedin.com/in/manjeet-kumar-a4b353296',
    email: 'msmanjeetsingh4271@gmail.com',
  },
}

export const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Education', to: 'education' },
  { name: 'Certifications', to: 'certificates' },
  { name: 'Contact', to: 'contact' },
]

export const skills = {
  languages: ['Python', 'SQL', 'JavaScript (Basic)'],
  backend: ['FastAPI', 'REST API', 'CRUD Operations'],
  databases: ['MySQL', 'SQL', 'DBMS Concepts', 'SQLAlchemy'],
  webTechnologies: ['HTML', 'CSS', 'JavaScript'],
  tools: ['Git', 'GitHub', 'Postman', 'Swagger UI', 'VS Code', 'Jupyter Notebook'],
  coreConcepts: ['Data Structures', 'Object-Oriented Programming', 'Problem Solving'],
}

export const projects = [
  {
    title: 'Student Management REST API',
    image: '/images/projects/student-management-api.png',
    description:
      'A comprehensive RESTful API for managing student records with full CRUD operations, request validation, MySQL database integration, and Swagger UI documentation.',
    technologies: ['Python', 'FastAPI', 'SQLAlchemy', 'MySQL', 'Pydantic', 'Git', 'Postman'],
    features: [
      'RESTful API',
      'CRUD Operations',
      'Request Validation',
      'MySQL Database Integration',
      'Swagger UI Documentation',
      'Modular Project Structure',
    ],
    github: null,
    live: null,
  },
  {
    title: 'Expense Tracker',
    image: '/images/projects/expense-tracker.png',
    description:
      'A Python application to log and analyze daily expenses, generating summary reports to surface spending patterns using file handling and core data structures.',
    technologies: ['Python'],
    features: [
      'Income & Expense Tracking',
      'CRUD Operations',
      'File Handling',
      'Data Management',
    ],
    github: 'https://github.com/Manjeetsingh31/expense-tracker-python',
    live: null,
  },
  {
    title: 'To-Do List Application',
    image: '/images/projects/todo-list.png',
    description:
      'A task management application supporting full CRUD operations for daily task tracking with a clean console interface.',
    technologies: ['Python'],
    features: [
      'Task Management',
      'CRUD Operations',
      'Clean Console Interface',
    ],
    github: null,
    live: null,
  },
  {
    title: 'Personal Portfolio Website',
    image: '/images/projects/portfolio.png',
    description:
      'A responsive personal portfolio website showcasing skills and projects with dark/light mode, smooth animations, and glassmorphism UI design.',
    technologies: ['React', 'Vite', 'Framer Motion', 'CSS Modules'],
    features: [
      'Responsive Design',
      'Dark/Light Mode',
      'Smooth Animations',
      'Glassmorphism UI',
    ],
    github: 'https://github.com/Manjeetsingh31/My-Portfolio',
    live: null,
  },
]

export const experience = [
  {
    role: 'Data Science Intern',
    type: 'Remote',
    description:
      'Performed exploratory data analysis (EDA) on real-world datasets using Python, Pandas, and NumPy. Cleaned and preprocessed raw datasets, handling missing values and inconsistencies. Built visualizations using Matplotlib to communicate findings and support data-driven conclusions.',
  },
]

export const education = [
  {
    degree: 'B.E. Computer Science and Design',
    institution: 'Erode Sengunthar Engineering College, Tamil Nadu',
    period: '2023 - 2027',
    score: 'CGPA: 7.9',
  },
  {
    degree: 'Higher Secondary (12th, PCM)',
    institution: 'DAV Public School, CBSE Board',
    period: '2021 - 2023',
    score: '62.7%',
  },
]

export const certifications = [
  {
    name: 'Python Programming Certification',
    org: 'Python',
    image: '/images/certificates/python.png',
    description: 'Comprehensive certification demonstrating proficiency in Python fundamentals, data structures, and object-oriented programming.',
    url: null,
    verifyUrl: null,
  },
  {
    name: 'Oracle Cloud Infrastructure Data Science Professional Certification',
    org: 'Oracle',
    image: '/images/certificates/oracle.png',
    description: 'Professional-level certification validating expertise in data science methodologies and Oracle Cloud Infrastructure services.',
    url: null,
    verifyUrl: null,
  },
  {
    name: 'Deloitte Data Analytics Virtual Experience Program',
    org: 'Deloitte',
    image: '/images/certificates/deloitte.png',
    description: 'Hands-on virtual internship simulating real-world data analytics workflows, dashboard creation, and client communication.',
    url: null,
    verifyUrl: null,
  },
  {
    name: 'Google Cloud Arcade Participant',
    org: 'Google Cloud',
    image: '/images/certificates/google-cloud.png',
    description: 'Active participant in Google Cloud skills development program, completing hands-on labs and cloud computing challenges.',
    url: null,
    verifyUrl: null,
  },
  {
    name: '50-Day LeetCode Challenge',
    org: 'LeetCode',
    image: '/images/certificates/leetcode.png',
    description: 'Consistent problem-solving practice across algorithms, data structures, and database challenges over 50 consecutive days.',
    url: 'https://leetcode.com/u/Manjeet012/',
    verifyUrl: 'https://leetcode.com/u/Manjeet012/',
  },
  {
    name: 'Web Development Certification',
    org: 'Web Development',
    image: '/images/certificates/web-development.png',
    description: 'Foundational certification covering HTML, CSS, JavaScript, and responsive web design principles.',
    url: null,
    verifyUrl: null,
  },
]
