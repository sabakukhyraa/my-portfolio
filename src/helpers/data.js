import jsLogo from "../assets/js.png";
import tsLogo from "../assets/ts.png";
import reactLogo from "../assets/react.png";
import vueLogo from "../assets/vue.png";
import cssLogo from "../assets/css.png";
import tailwindLogo from "../assets/tailwind.png";
import bootstrapLogo from "../assets/bootstrap.png";
import nodeLogo from "../assets/node.png";
import mongodbLogo from "../assets/mongodb.png";
import graphqlLogo from "../assets/graphql.png";
import laravelLogo from "../assets/laravel.png";
import linkedinLogo from "../assets/linkedin.png";
import githubLogo from "../assets/github.png";
import instagramLogo from "../assets/instagram.png";
import epigraLogo from "../assets/epigra.png";
import fiLogo from "../assets/fi.png";
import sassLogo from "../assets/sass.png"
export const techsIUse = {
  Frontend: [
    {
      itemName: "Javascript",
      itemLogo: jsLogo,
      itemBaseColor: "#F0DB4F",
      thoughts:
        "I really love JS! It's just perfect and it's my favorite language.",
    },
    {
      itemName: "Typescript",
      itemLogo: tsLogo,
      itemBaseColor: "#007acc",
      thoughts:
        "It can be useful in large-scale projects like 100+ classes and 10+ developers.",
    },
    {
      itemName: "React.js",
      itemLogo: reactLogo,
      itemBaseColor: "#61DBFB",
      thoughts:
        "It's easy to find what you want to do with React on the internet. I did some projects with React and I'm pretty confident with it.",
    },
    {
      itemName: "Vue.js",
      itemLogo: vueLogo,
      itemBaseColor: "#41B883",
      thoughts:
        "I worked with Vue3/Composition&Options API in Epigra for 7 months. Learned a lot about Frontend with Vue.",
    },
    {
      itemName: "CSS",
      itemLogo: cssLogo,
      itemBaseColor: "#2565AE",
      thoughts:
        "I love writing CSS. It's just so fun to work with. Writing CSS has become a lot more fun with browsers starting to support most new CSS features. Also useful with SCSS/SASS.",
    },
    {
      itemName: "Tailwind CSS",
      itemLogo: tailwindLogo,
      itemBaseColor: "#11aAEe",
      thoughts:
        "I've been working with Tailwind for a long time. Although I don't like how they market CSS properties as their own properties, I use it for the speed and convenience it provides.",
    },
    {
      itemName: "Bootstrap",
      itemLogo: bootstrapLogo,
      itemBaseColor: "#8f4Cff",
      thoughts:
        "I use bootstrap when I need to make quick projects. Great UI Components.",
    },
  ],
  Backend: [
    {
      itemName: "Node.js",
      itemLogo: nodeLogo,
      itemBaseColor: "#3C873A",
      thoughts: "",
    },
    {
      itemName: "MongoDB",
      itemLogo: mongodbLogo,
      itemBaseColor: "#4DB33D",
      thoughts: "",
    },
    {
      itemName: "GraphQL",
      itemLogo: graphqlLogo,
      itemBaseColor: "#e535ab",
      thoughts: "",
    },
    {
      itemName: "PHP/Laravel",
      itemLogo: laravelLogo,
      itemBaseColor: "#ff2222",
      thoughts: "I've some projects with Laravel but I didn't like the documentation.",
    },
  ],
};

export const socialMedia = [
  {
    itemName: "LinkedIn",
    itemLogo: linkedinLogo,
    url: "https://www.linkedin.com/in/ali-kerem-ata-11149521a/",
  },
  {
    itemName: "Github",
    itemLogo: githubLogo,
    url: "https://www.github.com/sabakukhyraa",
  },
  {
    itemName: "Instagram",
    itemLogo: instagramLogo,
    url: "https://www.instagram.com/khyraaranger/",
  },
];

export const contents = [
  "I'm 21.",
  "I'm from Istanbul, Turkiye.",
  "I'm studying Information Technologies Engineering at Piri Reis University.",
  "I'm learning everything about web.",
  "I believe engineering is the perfect planning of solutions with foresight.",
  "My dream is to be one of the best engineers.",
];

export const experiences = [
  {
    companyName: "Epigra",
    companyLogo: epigraLogo,
    title: "Frontend Developer",
    since: "June 2022",
    still: false,
    until: "Jan 2023",
    thoughts:
      "It was my first job. I started as an intern and got the job in the end! I gained amazing experience there. Excellent co-workers. Fun projects!",
  },
  {
    companyName: "Freelance",
    companyLogo: fiLogo,
    title: "Frontend Developer",
    since: "Jan 2022",
    still: true,
    until: "",
    thoughts:
      "I was doing static websites at the beginning that I don't proud of... I learned so much stuff with those projects but still, I can't even look at what I did :D. And I do better web applications with React and Vue these days.",
  },
];

export const projects = [
  {
    name: "Ar??elik/Beko Perakende TV",
    link: "",
    image: "/ptv.jpg",
    description:
    "The biggest project that I worked on. The source of my confidence. A video-sharing and social media platform for company employees. I've learned so many things with this project.",
    tags: [vueLogo , tailwindLogo]
  },
  {
    name: "Ziv4 Trade Pilot & Project Setup",
    link: "https://ziv4-pilot.netlify.app/",
    image: "/ziv4.png",
    description:
      "It's just a test project and ready to connect with Backend. And that Donut Chart right there is a talent, I tell you that...",
    tags: [reactLogo, tailwindLogo]
  },
  {
    name: "Epigra 2022 Internal Project",
    link: "http://epigra.com/",
    image: "/epigra.png",
    description: "A website for Epigra. Small contributions. Excellent design. The project I had the most difficulty with in its UI.",
    tags: [sassLogo, jsLogo, bootstrapLogo]
  },
  {
    name: "Agenda Project",
    link: "https://your-agenda.netlify.app/",
    image: "/agenda-react.png",
    description: "Small app to understand state managment of React better.",
    tags: [reactLogo, tailwindLogo]
  },
  {
    name: "Fifa Cards",
    link: "https://fifa-cards-react.netlify.app/",
    image: "/fifa-cards.png",
    description: "React practice with a fifa card market and filter.",
    tags: [reactLogo, tailwindLogo]
  },
  {
    name: "??sta??",
    link: "#",
    image: "/null.jpg",
    description: "Small contributions like forms.",
    tags: [vueLogo, tailwindLogo]
  },
  {
    name: "Eczac??ba????",
    link: "#",
    image: "/null.jpg",
    description: "Small contributions like bug fixing.",
    tags: [sassLogo, jsLogo, bootstrapLogo]
  },
];
