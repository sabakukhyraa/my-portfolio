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
            className="flex justify-start items-center h-full gap-4 p-4 m-1 transition-all duration-300 ease-in-out rounded-lg hover:scale-105"
          >
            <img
              className="object-contain w-12 h-12 rounded-lg aspect-square"
              src={`${item.itemLogo}`}
              alt={item.itemName}
            />
            <h1 className="font-bold text-4xl text-gray">{item.itemName}</h1>
          </div>
        </a>
      </li>
    ));

  return (
    <div className="background-css">
      <div className="container">
        <div className="flex items-center flex-col h-[100vh] gap-12">
          <div>
            <h1 className="flex items-center py-8 lg:py-24 text-7xl font-bold text-gray">Contact me</h1>
          </div>
          <div>
            <a className="text-3xl font-semibold text-gray" href="mailto:aliatabusiness@gmail.com">aliatabusiness@gmail.com</a>
          </div>
          <div>
            <ul className="grid grid-cols-2">{cards(socialMedia)}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}
