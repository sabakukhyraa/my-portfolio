import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOn, setIsOn] = useState(false);

  const toggleClass = () => {
    setIsOn(!isOn);
  }

  return (
    <div className="overflow-hidden">
      <nav
        className={
          isOn
            ? "fixed top-0 left-0 w-full h-[100vh] bg-back-front z-[800] navbar transition-transform duration-500 ease-out"
            : "fixed top-0 left-0 w-full h-[100vh] bg-back-front z-[800] navbar transition-transform duration-500 ease-in deactive"
        }
      >
        <ul className="flex flex-col items-center justify-center h-full gap-y-10">
          <li className="group">
            <NavLink
              className="group-hover:text-transparent"
              to="/"
              onClick={toggleClass}
            >
              Home
            </NavLink>
          </li>
          <li className="group">
            <NavLink
              className="group-hover:text-transparent"
              to="/projects"
              onClick={toggleClass}
            >
              Projects
            </NavLink>
          </li>
          <li className="group">
            <NavLink
              className="group-hover:text-transparent"
              to="/about"
              onClick={toggleClass}
            >
              About Me
            </NavLink>
          </li>
          <li className="group">
            <NavLink
              className="group-hover:text-transparent"
              to="/contact"
              onClick={toggleClass}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <svg
        className={`ham ham6 fixed left-0 lg:left-6 top-0 bottom-0 my-auto z-[999] w-[50px] lg:w-[100px] ${isOn && "active"}`}
        viewBox="0 0 100 100"
        onClick={toggleClass}
      >
        <path
          className="line top"
          d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
        />
        <path
          className="line middle"
          d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
        />
        <path
          className="line bottom"
          d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
        />
      </svg>
    </div>
  );
}
