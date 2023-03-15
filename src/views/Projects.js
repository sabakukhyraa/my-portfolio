import { projects } from "../helpers/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";

export default function Projects() {
  const pagination = {
    clickable: true,
  };

  const tagMapper = (tagArray) => {
    return tagArray.map((logo, index) => (
      <img
        className="!object-contain !w-8 !h-8 !aspect-square !rounded-none"
        src={logo}
        alt=""
        key={index}
      />
    ));
  };

  const projectSlide = projects.map((project, index) => (
    <SwiperSlide key={index}>
      <a href={project.link}>
        <img src={project.image} alt={`project-${project.name}`} />
      </a>
      <div className="bottom-0 text-center">
        <h3>{project.name}</h3>
        <div className="flex items-center justify-center gap-4">
          {tagMapper(project.tags)}
        </div>
        <p>{project.description}</p>
      </div>
    </SwiperSlide>
  ));

  return (
    <div className="background-css">
      <div className="container">
        <div className="flex flex-col items-center justify-center min-h-screen gap-12 py-12 lg:px-24 lg:py-3">
          <h1 className="pt-6 text-2xl font-light text-center text-gray">
            Waiting for permission to share the projects I worked on...
            (click the projects to see them)
          </h1>
          <Swiper
            breakpoints={{
              968: {
                slidesPerView: 2.5,
              },
            }}
            effect={"coverflow"}
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={4}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 270,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={pagination}
            modules={[EffectCoverflow, Pagination]}
            className="flex flex-col items-center justify-center w-full gap-2 p-2 lg:gap-12 lg:p-12"
          >
            {projectSlide}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
