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

  const projectSlide = projects.map((project, index) => (
    <SwiperSlide key={index}>
      <a href="https://www.google.com">
        <img src={project.image} alt={`project-${project.name}`} />
      </a>
      <h3>{project.name}</h3>
    </SwiperSlide>
  ));

  return (
    <div className="background-css">
      <div className="container">
        <div className="flex flex-col items-center justify-center h-[100vh] gap-12 lg:px-24 lg:py-3">
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
              depth: 300,
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
