import Image from "next/image";
import { HERO_SECTION } from "@/app/constants";
import Button from "@/components/Button";
import SliderCompa from "./SliderCompa";

export default function Hero() {
  return (
    <section className="container-padding">
      <div className="flex flex-col lg:flex-row  justify-between gap-10 lg:gap-20 mt-[50px] ">
        <div className="flex-1 flex flex-col  max-lg:items-center">
          <h1 className="head-1 leading-tight ">{HERO_SECTION.title}</h1>
          <Image className="h-auto w-auto object-contain  lg:hidden" alt="hero image" src={"/hero-img.png"} width={500} height={500} />
          <p className="para mt-9">{HERO_SECTION.description}</p>
          <Button variant="btn-dark" classes="max-lg:w-full lg:w-fit mt-9 justify-center" label={HERO_SECTION.buttonText} />
        </div>
        <div className="hidden flex-1  lg:flex  items-center justify-center">
          <Image className="h-[500] w-[500px] object-contain object-center" alt="hero image" src={"/hero-img.png"} width={500} height={500} />
        </div>
      </div>
      <SliderCompa />
    </section>
  );
}
