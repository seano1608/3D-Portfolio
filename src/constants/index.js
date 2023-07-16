import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  go,
  zaio,
  tds,
  busii,
  medpages,
  carrent,
  jobit,
  tripguide,
  threejs,
  cryptobase,
  hotblog,
  gallery,
  expense,
  amazon,
  youtube,
  ryan,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "React Developer",
    icon: backend,
  },
  {
    title: "3D Animations",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Golang",
    icon: go,
  },
];

const experiences = [
  {
    title: "Web Developer Intership",
    company_name: "Zaio",
    icon: zaio,
    iconBg: "#383E56",
    date: "September 2021 - July 2022",
    points: [
      "Startup creating web development courses.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality courses.",
      "Assist in ensuring new courses are accurate and easy to understand.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Operations Assistant",
    company_name: "TD Strategists",
    icon: tds,
    iconBg: "#E6DEDD",
    date: "July 2022 - January 2023",
    points: [
      "Amazon FBA inventory and supply chain management.",
      "E-Commerce and graphic design.",
      "SEO and advertsing optimization.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Busii",
    icon: busii,
    iconBg: "#383E56",
    date: "August 2022 - present",
    points: [
      "Developing and maintaining web application (ASSIST), project for University of Cape Town (UCT), taken on by the World Health Organization (WHO)",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Vue.js and Golang for a data-driven application (ASSIST).",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Medpages",
    icon: medpages,
    iconBg: "#E6DEDD",
    date: "March 2023 - Present",
    points: [
      "Styling website using Bootstrap.",
      "Developed and maintained web application using Vue.js",
      "Designing emailers and ensuring cross-browser compatibility through Mailtrak server.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Sean proved me wrong.",
    name: "Ryan Oertle",
    designation: "CEO",
    company: "TD Strategists",
    image: ryan,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Sean does.",
    name: "Tristan Turner",
    designation: "Manager",
    company: "Turner Motors",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Sean optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    id: 1,
    name: "Gallery",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "pixabayAPI",
        color: "pink-text-gradient",
      },
    ],
    image: gallery,
    site_link: "https://sean-tailwind-gallery.netlify.app/",
    source_code_link: "https://github.com/seano1608/tailwind_gallery",
    filter: "Fullstack",
  },
  {
    id: 2,
    name: "Amazon Clone",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "stripeAPI",
        color: "pink-text-gradient",
      },
    ],
    image: amazon,
    site_link: "https://clone-e3a8b.web.app/home",
    source_code_link: "https://github.com/seano1608/amazon_clone",
    filter: "Fullstack",
  },
  {
    id: 3,
    name: "Youtube Clone",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: youtube,
    site_link: "https://youtube-clone-sean.netlify.app/",
    source_code_link: "https://github.com/seano1608/youtube-clone",
    filter: "Frontend",
  },
  {
    id: 4,
    name: "Cryptobase",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: cryptobase,
    site_link: "https://cryptobase-75a4e.web.app/",
    source_code_link: "https://github.com/seano1608/CryptoBase",
    filter: "Fullstack",
  },
  {
    id: 5,
    name: "Hot Blog",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "nextjs",
        color: "pink-text-gradient",
      },
      {
        name: "graphcms",
        color: "blue-text-gradient",
      },
    ],
    image: hotblog,
    site_link: "https://graphcms-blog-qb2akolup-seano1608.vercel.app/",
    source_code_link: "https://github.com/seano1608/Graphcms_Blog",
    filter: "Fullstack",
  },
];


export { services, technologies, experiences, testimonials, projects };