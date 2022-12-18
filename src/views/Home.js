import { useEffect } from "react";
import { techsIUse } from "../helpers/data";
import AOS from "aos";

export default function Home() {

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
        <div
          style={{
            boxShadow: "inset 0px 0px 31px -20px" + item.itemBaseColor,
          }}
          className="flex justify-between h-full gap-4 p-4 m-1 transition-all duration-300 ease-in-out rounded-lg bg-back-front hover:scale-105"
        >
          <img
            className="object-contain w-20 h-20 rounded-lg lg:w-40 lg:h-40 aspect-square"
            src={`${item.itemLogo}`}
            alt={item.itemName}
          />
          <div className="flex flex-col place-content-between">
            <p className="text-lg text-gray">{item.thoughts}</p>
          </div>
        </div>
      </li>
    ));

  return (
    <div className="background-css">
      <div className="container">
        <div className="flex flex-col">
          <div
            className="flex flex-col items-center justify-center gap-8 h-[100vh] "
            data-aos="zoom-in"
          >
            <img
              className="object-contain w-40 h-40 rounded-full shadow-lg aspect-square"
              src="/profile.png"
              alt="profile"
            />
            <h1 className="text-5xl font-bold text-gray neon-text">Ali Kerem Ata</h1>
            <h2 className="text-2xl font-semibold text-gray">Frontend Developer</h2>
            <div className="text-center">
              <p className="text-xl font-semibold text-gray">
                Welcome! You can find my personal information, projects and career
                history on this website.
              </p>
              <p className="text-xl font-semibold text-gray">
                If you desire to work with me please contact me.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-8 pb-24">
            <div className="mb-24 cards-wrapper">
              <h2 className="font-light text-7xl text-semigray">Frontend</h2>
              <p className="text-lg font-medium text-gray">
                I'm working as a Frontend Developer for 1.5 years. I think
                writing Frontend is perfect for reducing stress!
              </p>
              <ul>{skills(techsIUse.Frontend)}</ul>
            </div>
            <div className="cards-wrapper">
              <h2 className="font-light text-7xl text-semigray">Backend</h2>
              <p className="text-lg font-medium text-gray">
                I'm pretty new at Backend. I'm trying to learn everything and
                while I learn Backend, I understand Frontend better.
              </p>
              <ul>{skills(techsIUse.Backend)}</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
