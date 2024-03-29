import { experiences } from "../helpers/data";
export default function About() {
  const carrierHistory = experiences.map((experience, index) => (
    <li
      key={index}
      className="flex flex-col items-center justify-between gap-8 p-8 lg:flex-row rounded-xl bg-back-front"
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

  return (
    <div className="background-css">
      <div className="container">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center justify-center h-screen gap-8 pb-18 lg:pb-12">
            <img
              className="object-contain rounded-full shadow-lg w-52 h-52 aspect-square"
              src="/about-me.png"
              alt="about"
            />
            <div className="flex justify-center w-full text-xl font-medium text-center lg:text-5xl text-gray">
              <p>
                I'm 21 from Istanbul, Turkiye. Studying Information Technologies
                Engineering at Piri Reis University with full scholarship. And
                I'm learning everything about web. I believe engineering is the
                perfect planning of solutions with foresight. My dream is to be
                one of the best engineers.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full py-16">
            <h1 className="self-start mb-8 font-light text-7xl text-semigray">
              Carrier
            </h1>
            <ul className="space-y-8 text-gray">{carrierHistory}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}
