import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  
  {
    id: 1,
    title: "SPARK Website",
    desc: "Developed a dynamic website for the SPARK scientific department using React, Next.js, and Tailwind CSS to showcase all its activities and information.",
    img: "/static/projects/1.png",
    link: "https://spark-omega-eight.vercel.app/",
    tags: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Book Store",
    desc: "Built a modern, responsive Flutter bookstore app, featuring clean architecture, elegant UI, and seamless user experience with authentication, book management, and Supabase integration.",
    img: "/static/projects/5.png",
    tags: ["Dart", "Flutter", "Supabase"],
  },
  {
    id: 0,
    title: "ENGINEERS'S GALA Backend",
    desc: "An enterprise grade Django REST Framework system that streamlines event management from participant registration and company integration to ticketing, notifications, and real time analytics, all powered by PostgreSQL.",
    img: "/static/projects/4.png",
    link: "https://gala.vic-enp.com",
    tags: ["Django","Django REST Framework", "PostgreSQL", "API"],
  },
  {
    id: 4,
    title: "Event Planner",
    desc: "Developed a modern, responsive event planning web app using Django featuring event creation, RSVP and rating systems, and a calendar-based event view.",
    img: "/static/projects/3.png",
    link: "https://event-planner-nu-sandy.vercel.app",
    tags: ["Django","HTML", "CSS", "Javascript"],
  },
  {
    id: 3,
    title: "My Portfolio Website",
    desc: "Created my first personal portfolio using React and Vite a fast, responsive, and modern website showcasing my projects and skills with smooth UI, clean design, and optimized performance",
    img: "/static/projects/8.png",
    link: "https://portfolio2-seven-virid.vercel.app",
    tags: ["React", "Vite", "CSS"],
  },
  
  {
    id: 5,
    title: "Tasbir El Fawakih",
    desc: "Built a modern, responsive e-commerce website for Tasbir El Fawakih using React and Tailwind CSS, showcasing 100% natural products with detailed information, smooth navigation, and an easy ordering system.",
    img: "/static/projects/2.png",
    link: "https://tasbir-elfawakih.vercel.app",
    tags: ["React", "Tailwind CSS"],
  },
  {
    id: 6,
    title: "Boofey",
    desc: "a Flutter based restaurant authentication app for companies, featuring three secure login methods: Face ID recognition, NFC card scanning, and QR code verification for a seamless and modern access experience.",
    img: "/static/projects/6.png",
    tags: ["Flutter", "Dart","API"],
  },
  {
    id: 7,
    title: "X O Game",
    desc: "Created a unique Tic-Tac-Toe game with Flutter featuring a special twist, random events trigger after every three moves, adding fun and unpredictability to the classic gameplay experience",
    img: "/static/projects/7.png",
    github: "https://github.com/med-amine-ok/x_o_game",
    tags: ["Flutter", "Dart"],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects
