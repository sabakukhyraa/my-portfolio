import { contents } from "../helpers/data";
export default function About() {
  return (
    <div className="background-css">
      <div className="container">
        <div className="flex flex-col">
          <div className="flex flex-col items-center justify-center pb-18 lg:pb-12 px-12 gap-8 h-[100vh]">
            <img
              className="object-contain rounded-full shadow-lg w-52 h-52 aspect-square"
              src="/about-me.png"
              alt="about"
            />
            <div className="relative flex justify-center w-full text-2xl font-medium text-center lg:text-6xl text-gray">
              {contents.join(" ")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
