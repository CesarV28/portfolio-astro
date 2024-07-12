import AIIcon from "../components/icons/AIIcon.astro";
import GitHubIcon from "../components/icons/GitHubIcon.astro";
import GitIcon from "../components/icons/GitIcon.astro";
import LinkedInIcon from "../components/icons/LinkedInIcon.astro";
import NextJsIcon from "../components/icons/NextJsIcon.astro";
import NodeJsIcon from "../components/icons/NodeJsIcon.astro";
import PostgresIcon from "../components/icons/PostgresIcon.astro";
import PythonIcon from "../components/icons/PythonIcon.astro";
import ReactIcon from "../components/icons/ReactIcon.astro";
import TailwindIcon from "../components/icons/TailwindIcon.astro";
import TypescriptIcon from "../components/icons/TypescriptIcon.astro";


export const pages = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'About',
        href: '#about',
    },
    {
        name: 'Projects',
        href: '#projects',
    },
    {
        name: 'Contact',
        href: '#contact',
    },
];


export const socials = [
    {
        name: 'Github',
        href: 'https://github.com/CesarV28',
        icon: GitHubIcon,
        color: '#000',
    },
    {
        name: 'Linkedin',
        href: '',
        icon: LinkedInIcon,
        color: '#000',
    },
]


export const technologies = [
    {
        name: 'React',
        color: '#61dafb',
        icon: ReactIcon,
    },
    {
        name: 'Next.js',
        color: '#ffffff',
        icon: NextJsIcon,
    },
    {
        name: 'Tailwind CSS',
        color: '#38bdf8',
        icon: TailwindIcon,
    },
    {
        name: 'TypeScript',
        color: '#3178c6',
        icon: TypescriptIcon,
    },
    {
        name: 'Node.js',
        color: '#4ea94b',
        icon: NodeJsIcon,
    },
    {
        name: 'Git',
        color: '#f14e32',
        icon: GitIcon,
    },
    {
        name: 'PostgreSQL',
        color: '#3178c6',
        icon: PostgresIcon,
    },
    {
        name: 'Python',
        color: '#FFE873',
        icon: PythonIcon,
    },
    {
        name: 'GitHub',
        color: '#ffffff',
        icon: GitHubIcon,
    },
    {
        name: 'IA',
        color: '#38bdf8',
        icon: AIIcon,
    }
];


export const projects = [
    {
        name: 'Astro Portfolio',
        description: 'Astro Portfolio is a modern, responsive portfolio website built using Astro, HTML, CSS, and JavaScript. Designed to showcase projects and skills, this portfolio features a clean and minimalistic design, smooth animations, and a user-friendly interface. Fully responsive, it looks great on all devices, from desktops to smartphones. The project demonstrates proficiency in web development and design, making it a perfect tool for personal branding and professional presentation.',
        slug: 'astro-portfolio',
        url: 'https://github.com/CesarV28/astro-portfolio',
        image: 'https://github.com/CesarV28/astro-portfolio/blob/main/src/assets/images/astro-portfolio.png?raw=true',
        color: '#191d51',
      },
      {
        name: 'React Blog',
        description: 'A blog platform built with React',
        slug: 'react-blog',
        url: 'https://github.com/CesarV28/react-blog',
        image: 'https://imgs.search.brave.com/t7GbhNrMWYEpfvyiiS9A0TSYLk-GQBCJO6qQJMk16kU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGlnaXRhbG9jZWFu/LmNvbS9hcGkvc3Rh/dGljLWNvbnRlbnQv/djEvaW1hZ2VzP3Ny/Yz0vX25leHQvc3Rh/dGljL21lZGlhL2lu/dHJvLXRvLWNsb3Vk/LmQ0OWJjNWY3Lmpw/ZWcmd2lkdGg9MTky/MA',
        color: '#61dafb',
      },
      {
        name: 'Next.js E-commerce',
        description: 'An e-commerce website built with Next.js',
        slug: 'nextjs-ecommerce',
        url: 'https://github.com/CesarV28/nextjs-ecommerce',
        image: 'https://imgs.search.brave.com/t7GbhNrMWYEpfvyiiS9A0TSYLk-GQBCJO6qQJMk16kU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGlnaXRhbG9jZWFu/LmNvbS9hcGkvc3Rh/dGljLWNvbnRlbnQv/djEvaW1hZ2VzP3Ny/Yz0vX25leHQvc3Rh/dGljL21lZGlhL2lu/dHJvLXRvLWNsb3Vk/LmQ0OWJjNWY3Lmpw/ZWcmd2lkdGg9MTky/MA',
        color: '#000',
      },
      {
        name: 'Python Data Analysis',
        description: 'A data analysis project using Python',
        slug: 'python-data-analysis',
        url: 'https://github.com/CesarV28/python-data-analysis',
        image: 'https://imgs.search.brave.com/t7GbhNrMWYEpfvyiiS9A0TSYLk-GQBCJO6qQJMk16kU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGlnaXRhbG9jZWFu/LmNvbS9hcGkvc3Rh/dGljLWNvbnRlbnQv/djEvaW1hZ2VzP3Ny/Yz0vX25leHQvc3Rh/dGljL21lZGlhL2lu/dHJvLXRvLWNsb3Vk/LmQ0OWJjNWY3Lmpw/ZWcmd2lkdGg9MTky/MA',
        color: '#306998',
      },
      {
        name: 'Database Management System',
        description: 'A database management system project',
        slug: 'database-management-system',
        url: 'https://github.com/CesarV28/dbms',
        image: 'https://imgs.search.brave.com/t7GbhNrMWYEpfvyiiS9A0TSYLk-GQBCJO6qQJMk16kU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGlnaXRhbG9jZWFu/LmNvbS9hcGkvc3Rh/dGljLWNvbnRlbnQv/djEvaW1hZ2VzP3Ny/Yz0vX25leHQvc3Rh/dGljL21lZGlhL2lu/dHJvLXRvLWNsb3Vk/LmQ0OWJjNWY3Lmpw/ZWcmd2lkdGg9MTky/MA',
        color: '#4479A1',
      },
      {
        name: 'AI Chatbot',
        description: 'An AI chatbot built with machine learning techniques',
        slug: 'ai-chatbot',
        url: 'https://github.com/CesarV28/ai-chatbot',
        image: 'https://imgs.search.brave.com/t7GbhNrMWYEpfvyiiS9A0TSYLk-GQBCJO6qQJMk16kU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGlnaXRhbG9jZWFu/LmNvbS9hcGkvc3Rh/dGljLWNvbnRlbnQv/djEvaW1hZ2VzP3Ny/Yz0vX25leHQvc3Rh/dGljL21lZGlhL2lu/dHJvLXRvLWNsb3Vk/LmQ0OWJjNWY3Lmpw/ZWcmd2lkdGg9MTky/MA',
        color: '#ffb300',
      },
];