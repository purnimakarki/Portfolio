import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";


import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodeTree,
} from "@remixicon/react";
import {
  RiDatabaseLine,
  RiCodeSSlashLine,
  RiGitBranchLine,
} from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Purnima Karki Chhetri",
  role: "Web Developer",
  subheading:
    "A passionate web developer with a strong focus on creating responsive and user-friendly websites.I'm always eager to learn and adapt to new technologies. I believe in the power of collaboration and continuous learning to deliver exceptional web experiences.",
};

export const PROJECTS = [
  {
    id: 1,
    title: "E-commerce Website",
    description:
      "creating a user-friendly e-commerce platform with  optimized product browsing and seamless navgation.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    imgSrc: project1,
    link: "https://example-ecommerce.com",
  },
  {
    id: 2,
    title: "Recipe Web Book application",
    description:
      "Built a recipe web application that allows users to search, save, and share recipes. Implemented a robust search functionality and user authentication.",
    techStack:["React", "Node.js", "Express", "MongoDB"],
    imgSrc: project2,
    link: "",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects and skills. Fully responsive and optimized for performance.",
    techStack: ["React", "Tailwind CSS"],
    imgSrc: project3,
    link: "https://myportfolio.com",
  },
  {
    id: 4,
    title: "TO-DO List ",
    description:
      " A simple and intuitive to-do list application for managing tasks and staying organized.",
    techStack: ["React","Css"],
    imgSrc: project4,
    link: "https://to-do-list-omega-topaz.vercel.app/",
  },
  {
    id: 5,
    title: "Roll the Dice",
    description:
      "A dice game where players roll the dice to score points.",
    techStack: ["JavaScript", "Css"],
    imgSrc: project5,
    link: "https://dice-game-puce-omega.vercel.app/",
  },

];

export const SKILLS = [
  {
    name: "HTML5",
    icon: <RiHtml5Line className="text-orange-600" />,
  },
  {
    name: "CSS3",
    icon: <RiCss3Line className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500" />,
  },
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
  },
  {
    name: "Node.js",
    icon: <RiNodeTree className="text-green-500" />,
  },
  {
    name: "MongoDB",
    icon: <RiDatabaseLine className="text-green-600" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },
  
];


export const EDUCATION = [
  {
    id: 1,
    Qualification: "Bachelor in computer application",
    institution: "Ratna Rajya Campus , Pradarshani Marg,Kathmandu",
    Affiliation:"Tribhuvan University",
    duration: "2020-running(7thsem)",
    
  },
  {
    id: 2,
    Qualification: "10+2",
    institution: "Sudur Pashchimanchal Academy",
    Affiliation:"NEB",
    duration: "2020",
    
  },
  {
    id: 3,
    Qualification: "SEE",
    institution: "New Horizon Institute , Butwal ,Rupandehi",
    Affiliation: "SEE Board",
    duration: "2017",
    
  },
];

