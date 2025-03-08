"use client";
import SectionHead from "@/components/SectionHead";
import TestimonialCard from "@/app/sections/Testimonials/TestimonialCard";
import { TESTIMONIALS_SECTION } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination, Parallax } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/parallax";
import "swiper/css/navigation";
import { useRef } from "react";
export default function Testimonials() {
  return (
    <section className="container-padding  margin-y-2xl">
      <div>
        <SectionHead description={TESTIMONIALS_SECTION.description} head={TESTIMONIALS_SECTION.title} />
      </div>
      <div className="margin-y-2xl">
        <Swiper
          centeredSlides={true}
          initialSlide={3}
          grabCursor
          freeMode={{ enabled: true }}
          slidesPerView={2}
          spaceBetween={3}
          parallax={{ enabled: true }}
          navigation={{ enabled: true }}
          pagination={{ enabled: true }}
          modules={[Parallax, Pagination, Navigation,FreeMode]}
          slideToClickedSlide
        >
          {TESTIMONIALS_SECTION.testimonials.map((tes, index) => (
            <SwiperSlide  key={index}>
              <TestimonialCard author={tes.author} quote={tes.quote} role={tes.role} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
