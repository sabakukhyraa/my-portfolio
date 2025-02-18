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
import epigraLogo from "../assets/epigra.png";
import hogarthLogo from "../assets/hogarth.jpg";
import fiLogo from "../assets/fi.png";
import sassLogo from "../assets/sass.png";
import nextLogo from "../assets/nextjs.png";
import mysqlLogo from "../assets/mysql.png";
import expoLogo from "../assets/expo.png";
export const techsIUse = {
  Frontend: [
    {
      itemName: "Javascript",
      itemLogo: jsLogo,
      itemBaseColor: "#F0DB4F",
      thoughts:
        "I really love JS and I can do anything with it! It's just perfect and it's my favorite language.",
    },
    {
      itemName: "React.js",
      itemLogo: reactLogo,
      itemBaseColor: "#61DBFB",
      thoughts:
        "It's easy to find what you want to do with React on the internet. I did plenty of projects with React.",
    },
    {
      itemName: "React Native",
      itemLogo: reactLogo,
      itemBaseColor: "#61DBFB",
      thoughts:
        "I have developed more than five professional mobile applications using React Native. I also build my own products with React Native—shoutout to Expo!",
    },
    {
      itemName: "Next.js",
      itemLogo: nextLogo,
      itemBaseColor: "#00000",
      thoughts:
        "Next.js is a fantastic framework that speeds up the development process and makes working with React more enjoyable. However, there are moments when it feels a bit too magical, making me feel like I've lost some control.",
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
  ],
  Backend: [
    {
      itemName: "Node.js",
      itemLogo: nodeLogo,
      itemBaseColor: "#3C873A",
      thoughts: "Long live the king.",
    },
    {
      itemName: "Typescript",
      itemLogo: tsLogo,
      itemBaseColor: "#007acc",
      thoughts:
        "Thanks to TypeScript for allowing me to see every property and method of the objects I use through a dropdown in VS Code.",
    },
    {
      itemName: "MongoDB",
      itemLogo: mongodbLogo,
      itemBaseColor: "#4DB33D",
      thoughts:
        "The freedom of a flexible schema is pure bliss. With Mongoose, managing MongoDB feels almost too smooth to be real.",
    },
    {
      itemName: "MySQL",
      itemLogo: mysqlLogo,
      itemBaseColor: "#4DB33D",
      thoughts:
        "SQL's structured beauty never ceases to amaze me. Its reliability and consistency make it my go-to choice for relational data. Also, love to do normalization.",
    },
    {
      itemName: "GraphQL",
      itemLogo: graphqlLogo,
      itemBaseColor: "#e535ab",
      thoughts:
        "Asking only for what I need and getting precisely that—absolute perfection. It turns data fetching into an art rather than a struggle.",
    },
    {
      itemName: "PHP/Laravel",
      itemLogo: laravelLogo,
      itemBaseColor: "#ff2222",
      thoughts: "I've some projects with Laravel.",
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
];

export const contents = [
  "I'm 24.",
  "I'm from Istanbul, Turkiye.",
  "I believe engineering is the perfect planning of solutions with foresight.",
  "My dream is to be one of the best engineers.",
];

export const experiences = [
  {
    companyName: "Hogarth",
    companyLogo: hogarthLogo,
    title: "Frontend Developer",
    since: "Mar 2023",
    still: true,
    until: "",
    thoughts:
      "I develop and localize the website of one of the largest and most iconic tech companies in the world for 30+ countries. Also, I write script codes and develop Chrome extensions and desktop applications(tools) for various teams through a private github to accelerate their work.",
  },
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
    title: "Software Developer",
    since: "Jan 2022",
    still: true,
    until: "",
    thoughts:
      "Developed and delivered over 20 freelance projects, working as both a backend and frontend developer for mobile and web applications. Built scalable and efficient backend systems while also crafting intuitive and responsive user interfaces. Worked with various tech stacks, adapting to project requirements and client needs. Focused on delivering high-quality, maintainable, and performant applications.",
  },
];

export const projects = [
  {
    name: "Kafin",
    link: "https://kafin.app",
    image: "/kafin.png",
    description:
      "My own product. A mobile application that specifically makes it easier for local and small-scale cafés to run customer loyalty campaigns.",
    tags: [expoLogo, reactLogo, nodeLogo, mongodbLogo, tsLogo],
  },
  {
    name: "Altın Köprü",
    link: "https://play.google.com/store/apps/details?id=com.sabakukhyraa.altinkopru",
    image: "/altinkopru.png",
    description:
      "A Freelance b2b cross-platform mobile app project for jewelers",
    tags: [expoLogo, reactLogo, laravelLogo, mysqlLogo],
  },
  {
    name: "EasyFish Oil - EasyClub",
    link: "",
    image: "/easyfishoil.png",
    description: "",
    tags: [sassLogo, jsLogo, bootstrapLogo],
  },
  {
    name: "Arçelik/Beko Perakende TV",
    link: "",
    image: "/ptv.jpg",
    description:
      "The first large project that I worked on. A video-sharing and social media platform for company employees. I've learned so many things with this project.",
    tags: [vueLogo, tailwindLogo],
  },
  {
    name: "Ziv4 Trade Pilot & Project Setup",
    link: "",
    image: "/ziv4.png",
    description:
      "It's just a test project and ready to connect with Backend. And that Donut Chart right there is a talent, I tell you that...",
    tags: [reactLogo, tailwindLogo],
  },
  {
    name: "Epigra 2022 Internal Project",
    link: "https://epigra.com/",
    image: "/epigra.png",
    description:
      "A website for Epigra. Small contributions. Excellent design. The project I had the most difficulty with in its UI.",
    tags: [sassLogo, jsLogo, bootstrapLogo],
  },
  {
    name: "Uzm. Dr. Emre Metin",
    link: "https://www.dremremetin.com",
    image: "/dremremetin.jpeg",
    description: "Developing and designing the whole website.",
    tags: [reactLogo, tailwindLogo],
  },
  {
    name: "Dünyagöz",
    link: "#",
    image: "/null.jpg",
    description:
      "Localizing the website to Arabic. It was messy but I found a nice and quick solution.",
    tags: [sassLogo, jsLogo, bootstrapLogo],
  },
  {
    name: "İstaç",
    link: "#",
    image: "/null.jpg",
    description: "Small contributions like forms.",
    tags: [vueLogo, tailwindLogo],
  },
  {
    name: "Eczacıbaşı",
    link: "#",
    image: "/null.jpg",
    description: "Small contributions like bug fixing.",
    tags: [sassLogo, jsLogo, bootstrapLogo],
  },
  {
    name: "Agenda Project",
    link: "",
    image: "/agenda-react.png",
    description: "Small app to understand state managment of React better.",
    tags: [reactLogo, tailwindLogo],
  },
  {
    name: "Fifa Cards",
    link: "https://fifa-cards-react.netlify.app/",
    image: "/fifa-cards.png",
    description: "React practice with a fifa card market and filter.",
    tags: [reactLogo, tailwindLogo],
  },
];
