import AIIcon from "../components/icons/AIIcon.astro";
import ClerkIcon from "../components/icons/ClerkIcon.astro";
import DockerIcon from "../components/icons/DockerIcon.astro";
import GitHubIcon from "../components/icons/GitHubIcon.astro";
import GitIcon from "../components/icons/GitIcon.astro";
import LinkedInIcon from "../components/icons/LinkedInIcon.astro";
import NestsJsIcon from "../components/icons/NestsJsIcon.astro";
import NextJsIcon from "../components/icons/NextJsIcon.astro";
import NodeJsIcon from "../components/icons/NodeJsIcon.astro";
import OpenaiIcon from "../components/icons/OpenaiIcon.astro";
import PostgresIcon from "../components/icons/PostgresIcon.astro";
import PrismaIcon from "../components/icons/PrismaIcon.astro";
import PythonIcon from "../components/icons/PythonIcon.astro";
import ReactIcon from "../components/icons/ReactIcon.astro";
import SqliteIcon from "../components/icons/SqliteIcon.astro";
import SupabaseIcon from "../components/icons/SupabaseIcon.astro";
import TailwindIcon from "../components/icons/TailwindIcon.astro";
import TwilioIcon from "../components/icons/TwilioIcon.astro";
import TypescriptIcon from "../components/icons/TypescriptIcon.astro";
import UpstashIcon from "../components/icons/UpstashIcon.astro";


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
        name: 'Experience',
        href: '#experience',
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
        color: '#ffffff',
        bgColor: '#ffffff',
    },
    {
        name: 'Linkedin',
        href: 'https://www.linkedin.com/in/varcesar/',
        icon: LinkedInIcon,
        color: '#3178c6',
        bgColor: '#5ca2ee',
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
        name: 'Nest.js',
        color: '#EA2845',
        icon: NestsJsIcon,
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
        name: 'Supabase',
        color: '#3ECF8E',
        icon: SupabaseIcon,
    },
    {
        name: 'SQLite',
        color: '#3178c6',
        icon: SqliteIcon,
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
    },
    {
        name: 'Upstash',
        color: '#34d399',
        icon: UpstashIcon,
    },
    {
        name: 'Clerk',
        color: '#ffffff',
        icon: ClerkIcon,
    },
    {
        name: 'Prisma',
        color: '#ffffff',
        icon: PrismaIcon,
    },
    {
        name: 'OpenAI',
        color: '#3178c6',
        icon: OpenaiIcon,
    },
    {
        name: 'Docker',
        color: '#ffffff',
        icon: DockerIcon,
    },
    {
        name: 'Twilio',
        color: '#ffffff',
        icon: TwilioIcon,
    }
];

export const experiences = [
    {
        title: 'Software Developer',
        description: 'Since June 2023, I have been working as a Software Developer, focusing on both frontend and backend development. I developed a platform that allows clients to visualize their dashboards connected to both Google and Tableau. My work includes AI projects such as a WhatsApp chatbot and a web-based chatbot, utilizing vector database memory to assist clients efficiently. Additionally, I created a modern survey platform that significantly improved efficiency, saving the company over two weeks of work. This platform supports both English and Spanish and includes an administrative dashboard with user insights. My contributions have been crucial in enhancing client interaction and operational efficiency.',
        date: 'June 2023 - Present',
        link: 'https://let-datastudio.com',
    },
    {
        title: 'Software Development Trainee',
        description: `At Turing-IA, I led the development of a client portal, working on both the frontend and backend. The portal provided users with access to exclusive content such as video tutorials, webinars, masterclasses, and personalized services. My main focus was on implementing secure email and password authentication, validating users' subscription plans, and enabling users to update their personal information. For administrators, I added features to manage content and users. I also integrated Tableau dashboards with Single Sign-On for real-time data visualization, enhancing the user experience. My contributions were crucial to the portal's success, providing a valuable platform for the company's clients.`,
        date: 'December 2022 - May 2023',
        link: '',
    },
    {
        title: 'Social Service - Systems Developer',
        description: 'During my social service, I designed and developed an automated registration system that significantly improved the efficiency of the client registration process. The system organized data in a logical and orderly manner, facilitating its use in subsequent analyses. I worked closely with the company team to ensure the system met their specific needs and requirements. Once implemented, the system was well-received by users and became an essential tool for the business.',
        date: 'January 2022 - December 2022',
        link: '',
    },
];

export const projects = [
    // {
    //     name: 'Astro Portfolio',
    //     description: 'Astro Portfolio is a modern, responsive portfolio website built using Astro, HTML, CSS, and JavaScript. Designed to showcase projects and skills, this portfolio features a clean and minimalistic design, smooth animations, and a user-friendly interface. Fully responsive, it looks great on all devices, from desktops to smartphones. The project demonstrates proficiency in web development and design, making it a perfect tool for personal branding and professional presentation.',
    //     technologies: ['Astro', 'HTML', 'CSS', 'JavaScript'],
    //     slug: 'astro-portfolio',
    //     url: 'https://github.com/CesarV28/astro-portfolio',
    //     demo: '',
    //     image: 'https://github.com/CesarV28/astro-portfolio/blob/main/src/assets/images/astro-portfolio.png?raw=true',
    //     color: '#191d51',
    //   },
      {
        name: 'Budget Tracker app built with Next.js',
        description: 'I developed a budget tracking app using Next.js, integrating an authentication and user management tool called Clerk, and using SQLite as the database. The app stands out for its ability to create new categories for purchases and expenses, organized by week, month, and year. Additionally, it features charts that display spending trends over selected dates, providing users with clear insights into their financial habits.',
        technologies: ['Next.js', 'Clerk', 'SQLite', 'Docker', 'Tailwind CSS'],
        slug: 'budget-tracker',
        url: 'https://github.com/CesarV28/react-blog',
        demo: '',
        image: '/imgs/project-1.webp',
        color: '#db852e',
      },
      {
        name: 'Next.js Auth template',
        description: 'A Next.js authentication template built with NextAuth, Prisma and postgresql. The template includes features such as user registration, login, password recovery, and social login integration. It also includes a dashboard for users to manage their profiles, access levels, and other settings.',
        technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Docker', 'Tailwind CSS'],
        slug: 'nextjs-auth-template',
        url: 'https://github.com/CesarV28/next-auth-template',
        demo: '',
        image: '/imgs/project-2-1.webp',
        color: '#000',
      },
      {
        name: 'AI Chatbot web application built with Next.js and OpenAI',
        description: 'A chatbot web application built with Nextjs and OpenAI. The application allows users to chat with agents, which each one has it owns information to answer, set up conversations, and interact with the chatbots. It also includes features such as chat history, user authentication, and integration with various third-party APIs. Chatbots memory are using Upstash, a vector database, to store and retrieve information and file documents.',
        technologies: ['Next.js', 'OpenAI', 'Upstash', 'PostgreSQL'],
        slug: 'ai-chatbot',
        url: '',
        demo: 'https://alfy.ia.letdatastudio.com/',
        image: '/imgs/project-3.webp',
        color: '#688589',
      },
      {
        name: 'Whatsapp AI Chatbot application with OpenAI and Twilio',
        description: 'Developed a Whatsapp AI chatbot using OpenAI and Twilio. The chatbot provides detailed information about products and services, utilizes Twilio buttons and lists for better interaction, allows users to easily schedule appointments, and integrates OpenAI for in-depth consultations about the company. This project enhances user engagement and accessibility for customers seeking information and services.',
        technologies: ['OpenAI', 'Twilio', 'Nest.js', 'Supabase', 'PostgreSQL', 'Docker'],
        slug: 'whatsapp-ai-chatbot',
        url: '',
        demo: 'https://wa.me/17066703660?text=Hello%20I%20have%20an%20inquiry',
        image: '/imgs/project-4.webp',
        color: '#005c4b',
      },
];
