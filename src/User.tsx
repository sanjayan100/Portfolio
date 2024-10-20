import EkartImage from './assests/Ekart.png';
import Electricity from './assests/Electricity_Billing.png';
import SpotifyImage from './assests/Spotify.png';
import IBMSkill from './assests/IBM.png';
import SysctlImage from './assests/Sysctl.png';

import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin } from "@tabler/icons-react";
const Info = {
    name: "Sanjay Singh",
    stack: ["Software Engineer", "Full Stack Developer","DevOps Engineer", "Freelancer", "Open Source Contributor"],
    bio: "I'm a passionate software engineer specialized in crafting efficient and scalable solutions, deliver top-notch web applications, and provide freelance services that exceed client expectations. Let's connect and create something amazing together!"
}


const ProjectInfo = [
    {
        title: "Ekart E-comm App",
        desc: "Ekart is a modern, fully responsive e-commerce platform built using React, TailwindCSS, Heroicons, and HeadlessUI, offering a seamless shopping experience across all devices. It features secure user authentication with login, registration, and logout functionalities. Users can add items to a wishlist or remove them, search for specific products, and add them to a shopping cart for purchase. The checkout process includes form validation for address and payment information, ensuring accuracy and security. After purchase, users can view their order history in the Orders section. Ekart combines robust functionality with a sleek, intuitive design, making online shopping effortless and enjoyable.",
        image: EkartImage,
        live: false,
        technologies: ["React", "Tailwind", "Redux", "Heroicons", "HeadlessUI"],
        link: "",
        github: "https://github.com/sanjayan100/E_Commerce_Backend_API"
    },
    {
        title: "Eletricity Billing System",
        desc: "The Electricity Billing System is a desktop application developed with Core JAVA, Swing, JDBC, MySQL, and JWT to automate electricity billing for utility companies. It tracks electricity consumption, calculates bills, and manages payment processing. Administrators can oversee customer data, monitor usage, and generate reports, while customers can access their billing history and securely make payments. The system integrates with payment gateways and uses JWT for secure authentication, ensuring data protection. By streamlining the billing process, it reduces errors, enhances efficiency, and offers a reliable solution for managing large-scale electricity billing operations.",
        image: Electricity,
        live: false,
        technologies: ["CoreJava", "AWT", "MySQL", "Swings", "JSP", "JDBC"],
        link: "",
        github: "https://github.com/sanjayan100/Electricity_Billing_System"
    },
    {
        title: "Spotify Clone",
        desc: "The Spotify Clone is a music streaming web application built with React, Redux, and Firebase that replicates the Spotify interface and functionality. Users can browse a library of songs, create playlists, and play music. The app features a responsive design, real-time updates, and secure user authentication with Firebase. It leverages Redux for state management, enabling seamless data flow and efficient updates. By emulating the popular Spotify platform, the clone provides an immersive music experience while showcasing frontend development skills.",
        image: SpotifyImage,
        live: false,
        technologies: ["React", "Redux", "Firebase", "MaterialUI"],
        link: "",
        github: ""
    }
]


const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript","TypeScript", "React JS", "Redux", "Tailwind CSS", "Material UI", "Bootstrap"
        ]
    },
    {
        title: "Backend",
        skills: ["Springboot", "Node JS", "Express JS", "MySQL", "MongoDB", "Firebase", "PostgresSQL"]
    },
    {
        title: "Languages",
        skills: ["C", "Java", "JavaScript", "TypeScript"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass", "Spring Tool Suite"]
    }
]
const socialLinks = [
    { link: "https://github.com/sanjayan100", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/sanjay011", icon: IconBrandLinkedin },
    { link: "https://www.instagram.com/sanjay_an1005", icon: IconBrandInstagram }, 
    { link: "https://www.leetcode.com/u/sanjay_an1005", icon: IconBrandLeetcode }
];


const ExperienceInfo = [
    {
        role: "Software Engineer",
        company: "Sysctl",
        image: SysctlImage,
        date: "Sept 2024 - Present",
        desc: "I led software development with NodeJS, React, and Express, creating scalable microservices and interfaces. I optimized performance by integrating frontend and backend, and enhanced security with RESTful APIs. Collaborating in agile teams, I fostered innovation and efficiency for top-quality solutions.",
        skills: ["React JS", "TypeScript", "Node JS", "Express", "MongoDB", "Restful APIs"]
    },
    {
        role: "Web Developer Intern",
        company: "IBM SkillsBuild Summer Internship Program with CSRBOX",
        image: IBMSkill,
        date: "June 2024 - Aug 2024",
        desc: "I led software development using HTML, CSS and JavaScript to create scalable user interfaces. By integrating front-end and back-end components. My collaborative work in agile teams fostered innovation and efficiency, resulting in high-quality software solutions.",
        skills: ["HTML", "CSS", "JavaScript", "React JS", "Node JS", "MongoDB"]
    }
]
const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs };