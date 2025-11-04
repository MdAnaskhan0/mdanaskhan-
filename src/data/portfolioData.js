import MED from "../assets/ProjectImage/med.png";
import DailyNeeds from "../assets/ProjectImage/ecommers.png";
import HospitalManagement from "../assets/ProjectImage/hms.png";
import RealtimeChat from "../assets/ProjectImage/chat.png";
import { image } from "framer-motion/client";

export const personalInfo = {
  name: "Md. Anas Khan",
  title: "Full Stack Developer & IT Professional",
  email: "anas.cse.201@gmail.com",
  phone: "+8801537191012",
  location: "Dhaka, Bangladesh",
  bio: [
    "I'm a passionate developer with experience in IT infrastructure management and full-stack web development. I enjoy turning complex ideas into elegant, intuitive solutions.",
    "My goal is to leverage my skills to deliver secure, high-performance, and user-focused digital solutions. I'm driven by curiosity, adaptability, and a commitment to turning challenges into opportunities.",
  ],
  socialLinks: {
    github: "https://github.com/MdAnaskhan0",
    linkedin: "https://www.linkedin.com/in/md-anas-khan-b2122119b/",
    instagram: "https://www.instagram.com/mdanaskhan_0001",
    facebook: "https://www.facebook.com/honerabla.boyshanto",
  },
};

export const codeSnippets = [
  [
    "function createPortfolio() {",
    "  const developer = {",
    "    name: 'Md. Anas Khan',",
    "    role: 'Full Stack Developer & IT Professional',",
    "    skills: ['JavaScript', 'React', 'Redux', 'Node.js', 'PHP', 'MySQL', 'MongoDB', 'MikroTik'],",
    "    passion: 'Building amazing digital experiences'",
    "  };",
    "  return developer;",
    "}",
  ],
  [
    "class Portfolio extends React.Component {",
    "  constructor() {",
    "    super();",
    "    this.state = {",
    "      projects: ['Employee Movement Data Record Web Solution'],",
    "      Tech Stack: ['JavaScript', 'React', 'Tailwind', 'Node.JS', 'MySQL', 'Socket.IO'],",
    "    };",
    "  }",
    "",
    "  render() {",
    "    return <div>Awesome Portfolio</div>;",
    "  }",
    "}",
  ],
  [
    "// API fetch example",
    "async function fetchProjects() {",
    "  try {",
    "    const response = await fetch('/api/projects');",
    "    const data = await response.json();",
    "    return data.projects;",
    "  } catch (error) {",
    "    console.error('Error:', error);",
    "  }",
    "}",
  ],
];

export const projects = [
  {
    title: "Employee Movement Data Record Web Solution",
    description:
      "Developed and deployed a secure, scalable full-stack platform featuring dedicated admin and client portals",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MySQL",
      "Socket.IO",
      "Tailwind CSS",
    ],
    github: "https://github.com/MdAnaskhan0/med",
    demo: "https://med-movement.vercel.app/",
    image: MED,
  },
  {
    title: "DailyNeeds E-commerce Web Application",
    description:
      "Full-stack e-commerce application using MERN stack with user authentication and payment integration",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/MdAnaskhan0/DailyNeeds-E-Commerce.git",
    demo: "https://github.com/MdAnaskhan0/DailyNeeds-E-Commerce.git",
    image: DailyNeeds,
  },
  {
    title: "Hospital Management System",
    description:
      "Comprehensive system with admin, doctor, and patient modules for managing hospital operations",
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap", "HTML", "CSS"],
    github: "https://github.com/MdAnaskhan0/Hospital-Management-System.git",
    demo: "https://github.com/MdAnaskhan0/Hospital-Management-System.git",
    image: HospitalManagement,
  },
  {
    title: "Full-Stack MERN Real-Time chat application",
    description:
      "A real-time chat application with user authentication, private messaging, and group chats using MERN stack and Socket.IO",
    tags: ["React", "Node.js", "MongoDB", "Socket.IO", "Tailwind CSS"],
    github: "https://github.com/MdAnaskhan0/Realtime-Chat.git",
    demo: "https://github.com/MdAnaskhan0/Realtime-Chat.git",
    image: RealtimeChat,
  },
  {
    title: "WhatsBlast Engine",
    description:
      "A WhatsApp Bulk Sender that enables automated messaging to multiple contacts through a web interface. Built with Node.js backend and React frontend, it features QR-based authentication and supports Bangladesh number formatting for efficient communication.",
    tags: ["React", "Node.js", "Express.js", "WhatsApp Web API", "Bulk Messaging", "REST API", "JavaScript", "Tailwind CSS", "Web Automation", "QR Authentication"],
    github: "https://github.com/MdAnaskhan0/Bulk-WhatsApp-Message.git",
    demo: "https://github.com/MdAnaskhan0/Bulk-WhatsApp-Message.git",
    image: RealtimeChat,
  },
];

export const skills = [
  { name: "JavaScript", level: 85, icon: "SiJavascript" },
  { name: "React", level: 80, icon: "SiReact" },
  { name: "Node.js", level: 85, icon: "SiNodedotjs" },
  { name: "CSS/Tailwind", level: 85, icon: "SiTailwindcss" },
  { name: "PHP", level: 80, icon: "SiPhp" },
  { name: "MySQL", level: 80, icon: "SiMysql" },
  { name: "MongoDB", level: 80, icon: "SiMongodb" },
  { name: "Git", level: 80, icon: "SiGit" },
  { name: "MikroTik", level: 80, icon: "SiMikrotik" },
];

export const experiences = [
  {
    role: "IT Officer",
    company: "Fashion Group",
    period: "February 2025 – Present",
    description:
      "Administer and maintain IT infrastructure, ensuring high system availability, performance, and security. Maintain and update the company's website, ensuring functionality, security, and up-to-date content.",
    technologies: [
      "IT Infrastructure",
      "System Administration",
      "Web Maintenance",
      "Security",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Battery Low Interactive Ltd.",
    period: "November 2024 – December 2024",
    description:
      "Completed an internship focusing on building and optimizing user interfaces using React, enhancing application performance, and delivering engaging user experiences.",
    technologies: ["React", "JavaScript", "UI/UX", "Performance Optimization"],
  },
  {
    role: "Call Operator",
    company: "Leopard Calling Service Ltd.",
    period: "September 2021 – October 2022",
    description:
      "Addressed customer inquiries with expertise and professionalism, providing efficient and effective service to improve customer satisfaction.",
    technologies: ["Customer Service", "Communication", "Problem Solving"],
  },
];

export const education = [
  {
    degree: "Bachelor of Science in Computer Science and Engineering",
    institution: "Green University of Bangladesh",
    period: "2021 - 2025",
    description: "CGPA: 3.14/4. Graduation Completed: January 2025",
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "AKM Rahamatullah University College",
    period: "2017 - 2019",
    description: "Science, GPA: 3.92/5, Dhaka Board",
  },
  {
    degree: "Secondary School Certificate",
    institution: "Banani Model School",
    period: "2017",
    description: "Science, GPA: 4.86/5, Dhaka Board",
  },
];

export const certifications = [
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    period: "2024",
    link: "https://www.freecodecamp.org/certification/mdanaskhan/javascript-algorithms-and-data-structures-v8",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    period: "2024",
    link: "https://www.freecodecamp.org/certification/mdanaskhan/responsive-web-design",
  },
  {
    title: "Employability Skills",
    issuer: "Wadhwani Foundation",
    period: "2024",
    link: "https://web.certificate.wfglobal.org/en/certificate?certificateId=6754962c02f442946f62df3d",
  },
];
