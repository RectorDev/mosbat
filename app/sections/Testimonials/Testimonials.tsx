"use client";
import SectionHead from "@/components/SectionHead";
import { TESTIMONIALS_SECTION } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Parallax } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/parallax";
import "swiper/css/navigation";
import { useRef } from "react";
export default function Testimonials() {
  const next = useRef()
  return (
    <section className="container-padding  margin-y-2xl">
      <div>
        <SectionHead description={TESTIMONIALS_SECTION.description} head={TESTIMONIALS_SECTION.title} />
      </div>
      <div className="margin-y-2xl">
        <Swiper centeredSlides={true} slidesPerView={1}  parallax={{enabled:true}} navigation={{ enabled: true,nextEl:next }} pagination={{ enabled: true }} modules={[Parallax, Pagination, Navigation]}>
          <SwiperSlide >ssdasd</SwiperSlide>
          <SwiperSlide>dsadas</SwiperSlide>
          <SwiperSlide>sdasd</SwiperSlide>
          <button ref={next}>next</button>
        </Swiper>
      </div>
    </section>
  );
}
