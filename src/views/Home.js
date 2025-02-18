import { useEffect, useState } from "react";
import { techsIUse, contents } from "../helpers/data";
import AOS from "aos";
import { experiences } from "../helpers/data";

export default function Home() {
  const carrierHistory = experiences.map((experience, index) => (
    <li
      key={index}
      className="flex flex-col items-center gap-8 p-6 2xl:p-8 lg:flex-row rounded-xl bg-back-front"
    >
      <img
        className="self-start object-contain w-24 h-24 rounded-lg lg:self-center lg:w-52 lg:h-52 aspect-square"
        src={experience.companyLogo}
        alt={experience.companyName}
      />
      <div className="flex flex-col justify-center gap-2">
        <h2 className="text-4xl font-bold lg:text-6xl">
          {experience.companyName}
        </h2>
        <h3 className="text-xl font-bold lg:text-2xl">{experience.title}</h3>
        <p>{experience.thoughts}</p>
        <span className="text-white">
          {experience.since}
          {!experience.still ? ` - ${experience.until}` : " - Still"}
        </span>
      </div>
    </li>
  ));

  const [activeSpeech, setActiveSpeech] = useState(0);

  const bilmemne = setInterval(() => {
    if (activeSpeech === contents.length - 1) {
      setActiveSpeech(0);
      clearInterval(bilmemne);
    } else {
      setActiveSpeech(activeSpeech + 1);
      clearInterval(bilmemne);
    }
  }, 3600);

  let speechLoop = contents.map((content, index) => (
    <p
      key={index}
      style={{ opacity: activeSpeech === index && 100 + "%" }}
      className="absolute w-full transition-opacity duration-200 ease-in opacity-0"
    >
      {content}
    </p>
  ));

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
    });
  }, []);

  const skills = (array) =>
    array.map((item, index) => (
      <li
        data-aos={`${index % 2 === 0 ? "fade-right" : "fade-left"}`}
        key={index}
        className={`flex flex-col h-full rounded-md`}
      >
        <h3 className="py-2 text-2xl font-semibold text-gray">
          {item.itemName}
        </h3>
        <div className="flex flex-col justify-between h-full gap-4 p-6 m-1 transition-all duration-300 ease-in-out rounded-lg 2xl:p-8 2xl:flex-row bg-back-front hover:scale-105">
          <img
            className="object-contain w-20 h-20 rounded-lg lg:w-40 lg:h-40 aspect-square"
            src={`${item.itemLogo}`}
            alt={item.itemName}
          />
          <div className="flex flex-col overflow-hidden place-content-between">
            <p className="text-lg break-words whitespace-pre-wrap text-start text-gray">
              {item.thoughts}
            </p>
          </div>
        </div>
      </li>
    ));

  return (
    <div className="background-css">
      <div className="container">
        <div className="flex flex-col">
          <div
            className="flex flex-col items-center justify-center h-screen gap-8"
            data-aos="zoom-in"
          >
            <img
              className="object-contain w-40 h-40 rounded-full shadow-lg aspect-square"
              src="/profile.jpeg"
              alt="profile"
            />
            <h1 className="text-[42px] font-bold text-gray neon-text">
              Ali Kerem Ata
            </h1>
            <h2 className="text-2xl font-semibold text-gray">
              Frontend Developer
            </h2>
            <div className="text-center">
              <p className="text-xl font-semibold text-gray">
                Welcome! You can find my personal information, projects and
                career history on this website. If you desire to work with me
                please contact me.
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="relative flex items-center justify-center w-full h-screen px-8 text-4xl font-medium text-center lg:text-6xl text-gray"
          >
            {speechLoop}
          </div>
          <div className="flex flex-col items-center justify-center gap-12 pb-24">
            <div className="space-y-12">
              <h2 className="font-light text-7xl text-semigray">Carrier</h2>
              <ul className="space-y-8 text-gray">{carrierHistory}</ul>
            </div>
            <div className="mb-24 cards-wrapper">
              <h2 className="font-light text-7xl text-semigray">Frontend</h2>
              <p className="text-lg font-medium text-gray">
                I'm working as a Frontend Developer for 4 years. I think writing
                Frontend is perfect for reducing stress!
              </p>
              <ul>{skills(techsIUse.Frontend)}</ul>
            </div>
            <div className="cards-wrapper">
              <h2 className="font-light text-7xl text-semigray">Backend</h2>
              <p className="text-lg font-medium text-gray">
                I love writing REST APIs with regular model-view-controller
                method and GraphQL APIs and I want to learn more about modular
                monolithic architecture!
              </p>
              <ul>{skills(techsIUse.Backend)}</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
