import { useEffect } from "react";
import { techsIUse } from "../helpers/data";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Home() {

  useEffect(() => {
    AOS.init();
  }, [])


  const frontendSkills = techsIUse[0].skills.map((skill, index) => (
    <li data-aos={`${index%2===0 ? 'fade-right' : 'fade-left'}`} key={index} className={`flex flex-col h-full rounded-md`}>
      <h3 className="p-2 text-2xl font-semibold text-gray">
        {skill.skillName}
      </h3>
      <div style={{boxShadow: "inset 0px 0px 31px -20px" + skill.techBaseColor}} className="flex justify-between h-full gap-4 p-4 transition-all duration-300 ease-in-out rounded-lg bg-back-front hover:scale-105">
        <img
          className="object-contain w-40 h-40 rounded-lg aspect-square"
          src={`${skill.techLogo}`}
          alt={skill.skillName}
        />
        <div className="flex flex-col place-content-between">
          <p className="text-lg text-gray">{skill.thoughts}</p>
          <div className="relative z-30 self-end w-32 h-6 rounded-full bg-back">
            <div
              style={{
                backgroundColor: skill.techBaseColor,
                width: skill.skillLevel * 100 + "%",
              }}
              className="absolute h-full rounded-full"
            ></div>
          </div>
        </div>
      </div>
    </li>
  ));
  const backendSkills = techsIUse[1].skills.map((skill, index) => (
    <li data-aos={`${index%2===0 ? 'fade-right' : 'fade-left'}`} key={index} className="flex flex-col rounded-md">
      <h3 className="p-2 text-2xl font-semibold text-gray">
        {skill.skillName}
      </h3>
      <div style={{boxShadow: "inset 0px 0px 31px -20px" + skill.techBaseColor}} className="flex justify-between h-full gap-4 p-4 transition-all duration-300 ease-in-out rounded-lg bg-back-front hover:scale-105">
        <img
          className="object-contain w-40 h-40 rounded-lg aspect-square"
          src={`${skill.techLogo}`}
          alt={skill.skillName}
        />
        <div className="flex flex-col place-content-between">
          <p className="text-lg text-gray">{skill.thoughts}</p>
          <div className="relative z-30 self-end w-32 h-6 rounded-full bg-back">
            <div
              style={{
                backgroundColor: skill.techBaseColor,
                width: skill.skillLevel * 100 + "%",
              }}
              className="absolute w-1/2 h-full rounded-full progress"
            ></div>
          </div>
        </div>
      </div>
    </li>
  ));

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-center gap-8 h-[100vh] background-css" data-aos="zoom-in">
        <img
          className="object-contain w-40 h-40 rounded-full shadow-lg aspect-square"
          src="/profile.png"
          alt="profile"
        />
        <h1 className="text-5xl font-bold text-gray">Ali Kerem Ata</h1>
        <div className="text-center">
          <p className="text-xl font-semibold text-gray">
            Hi! You can find my personal information, projects and career
            history in this website.
          </p>
          <p className="text-xl font-semibold text-gray">
            If you desire to work with me please contact me.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 background-css">
        <h1 className="self-center mb-8 text-5xl font-bold text-gray">
          Techs I Use:
        </h1>
        <div className="mb-24 skills">
          <h2 className="font-light text-7xl text-semigray">Frontend</h2>
          <p className="text-lg font-medium text-gray">
            I'm working as a Frontend Developer for 1.5 years. Writing Frontend is perfect for reducing stress!
          </p>
          <ul>{frontendSkills}</ul>
        </div>
        <div className="skills">
          <h2 className="font-light text-7xl text-semigray">Backend</h2>
          <p className="text-lg font-medium text-gray">
            I'm pretty new at Backend. I'm trying to learn everything and while I learn Backend, I understand Frontend better.
          </p>
          <ul>{backendSkills}</ul>
        </div>
      </div>
      <div className="z-20 flex flex-col items-center justify-center gap-8 pb-60 background-css"></div>
    </div>
  );
}
