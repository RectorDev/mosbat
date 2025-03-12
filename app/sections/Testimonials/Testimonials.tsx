"use client";
import SectionHead from "@/components/SectionHead";
import { TESTIMONIALS_SECTION } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section className="container-padding margin-y-2xl">
      <div>
        <SectionHead description={TESTIMONIALS_SECTION.description} head={TESTIMONIALS_SECTION.title} />
      </div>
      <div className="margin-y-2xl bg-secondary rounded-[45px] relative">
        <Swiper
          className="swiper_container"
          centeredSlides={true}
          centeredSlidesBounds
          initialSlide={3}
          breakpoints={{ 700: { slidesPerView: 2 } }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            renderBullet(index, className) {
              return `<span class="${className}"><Image src="/logo.svg" alt="bullet" /></span>`;
            },
          }}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          modules={[Pagination, Navigation]}
          grabCursor
          slidesPerView={1}
          slideToClickedSlide
        >
          {TESTIMONIALS_SECTION.testimonials.map((tes, index) => (
            <SwiperSlide className="margin-y-2xl" key={index}>
              <TestimonialCard author={tes.author} quote={tes.quote} role={tes.role} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom navigation and pagination positioned like in the image */}
        <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-8 z-10">
          {/* Left arrow */}
          <div className="swiper-button-prev max-sm:!hidden  !static !w-auto !h-auto !mt-0">
            <span className="flex items-center justify-center w-10 h-10">
              <ArrowLeft className="text-white" size={24} />
            </span>
          </div>

          {/* Pagination bullets */}
          <div className="swiper-pagination !static !w-auto flex items-center gap-4"></div>

          {/* Right arrow */}
          <div className="swiper-button-next max-sm:!hidden  !static !w-auto !h-auto !mt-0">
            <span className="flex items-center justify-center w-10 h-10">
              <ArrowRight className="text-white" size={24} />
            </span>
          </div>
        </div>
      </div>

      {/* Add custom styles for the pagination bullets */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 16px;
          height: 16px;
          opacity: 0.5;
          background: transparent;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .swiper-pagination-bullet img {
          filter: invert(100%);
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
        }

        .swiper-pagination-bullet-active img {
          filter: invert(48%) sepia(79%) saturate(600%) hue-rotate(90deg) brightness(150%) contrast(100%);
        }

        .swiper-pagination-bullet img {
          width: 16px;
          height: 16px;
        }

        /* Remove default arrow styling */
        .swiper-button-next:after,
        .swiper-button-prev:after {
          display: none;
        }
      `}</style>
    </section>
  );
}
