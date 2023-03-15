import { socialMedia } from "../helpers/data";
import AOS from "aos";
import { useEffect } from "react";
export default function Contact() {

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  
  const cards = (array) =>
    array.map((item, index) => (
      <li
        data-aos={`${index % 2 === 0 ? "fade-right" : "fade-left"}`}
        key={index}
      >
        <a className="flex flex-col h-full rounded-md" href={item.url}>
          <div
            className="flex items-center justify-start h-full gap-4 p-4 m-1 transition-all duration-300 ease-in-out rounded-lg hover:scale-105"
          >
            <img
              className="object-contain w-12 h-12 rounded-lg aspect-square"
              src={`${item.itemLogo}`}
              alt={item.itemName}
            />
            <h1 className="text-4xl font-bold text-gray">{item.itemName}</h1>
          </div>
        </a>
      </li>
    ));

  return (
    <div className="background-css">
      <div className="container">
        <div className="flex flex-col items-center h-screen gap-12">
          <div>
            <h1 className="flex items-center py-8 pt-12 font-bold text-center lg:py-24 text-7xl text-gray">Contact me</h1>
          </div>
          <div>
            <a className="py-4 text-xl font-semibold lg:text-5xl text-gray" href="mailto:aliatabusiness@gmail.com">aliatabusiness@gmail.com</a>
          </div>
          <div>
            <ul className="grid grid-cols-1 lg:grid-cols-2">{cards(socialMedia)}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}
