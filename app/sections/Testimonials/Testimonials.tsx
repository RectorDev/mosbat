"use client";
import SectionHead from "@/components/SectionHead";
import TestimonialCard from "@/app/sections/Testimonials/TestimonialCard";
import { TESTIMONIALS_SECTION } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
export default function Testimonials() {
  return (
    <section className="container-padding  margin-y-2xl">
      <div>
        <SectionHead description={TESTIMONIALS_SECTION.description} head={TESTIMONIALS_SECTION.title} />
      </div>
      <div className="margin-y-2xl bg-secondary rounded-[45px]">
        <Swiper
          className="swiper_container"
          centeredSlides={true}
          centeredSlidesBounds
          initialSlide={3}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            renderBullet(index, className) {
              return `<span class=${className}> <Image  fill="#fff" src="/Vector.svg"> </span>`;
            },
          }}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          modules={[Pagination, Navigation]}
          grabCursor
          slidesPerView={"auto"}
          slideToClickedSlide
        >
          {TESTIMONIALS_SECTION.testimonials.map((tes, index) => (
            <SwiperSlide className="margin-y-2xl" key={index}>
              <TestimonialCard author={tes.author} quote={tes.quote} role={tes.role} />
            </SwiperSlide>
          ))}

          <div className="swiper-button-prev">
            <span>
              <ArrowLeft className="px-4 py-2" size={24} />
            </span>
          </div>
          <div className="swiper-button-next">--?</div>
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
}
