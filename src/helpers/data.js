import jsLogo from "../assets/js.png";
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
export const techsIUse = {
  Frontend: [
    {
      itemName: "Javascript",
      itemLogo: jsLogo,
      itemBaseColor: "#F0DB4F",
      thoughts:
        "I really love JS! It's my favorite. I find it very beautiful language. Love the frameworks, using it all the time.",
    },
    {
      itemName: "React.js",
      itemLogo: reactLogo,
      itemBaseColor: "#61DBFB",
      thoughts:
        "It's easy to find what you want to do with React on the internet. I did some projects with React and it was fun.",
    },
    {
      itemName: "Vue.js",
      itemLogo: vueLogo,
      itemBaseColor: "#41B883",
      thoughts:
        "I worked with Vue3/Composition API in Epigra for 7 months. Learned a lot about Frontend with Vue.",
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
        "I've been working with Tailwind for a long time. I used it in many projects like Arçelik/Beko's PerakendeTV.",
    },
    {
      itemName: "Bootstrap",
      itemLogo: bootstrapLogo,
      itemBaseColor: "#8f4Cff",
      thoughts:
        "I use bootstrap when I need to make quick projects. I really like the UI Components of Bootstrap.",
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
      thoughts: "",
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
    until: "Dec 2022",
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
    name: "Ziv4 Trade Pilot & Project Setup",
    link: "https://ziv4-pilot.netlify.app/",
    image: "/ziv4.png",
    description:
      "It's just a test project and ready to connect with Backend. And that Donut Chart right there is a talent, I tell you that...",
  },
  {
    name: "Arçelik/Beko Perakende TV",
    link: "",
    image: "/ptv.jpg",
    description:
      "Lots of contributions. Not published yet. A video-sharing and social media platform for company employees. I've learned so many things with this project.",
  },
  {
    name: "Epigra 2022 Internal Project",
    link: "http://2022.epigra.com/",
    image: "/epigra.png",
    description: "Small contributions. A website for Epigra.",
  },
];
