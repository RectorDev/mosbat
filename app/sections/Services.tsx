import Heading from "@/components/Heading";
import { SERVICES_SECTION } from "../constants";
import ServiceCard from "./ServiceCard";
import Button from "@/components/Button";
import Image from "next/image";

export default function Services() {
  return (
    <section className="container-padding  margin-t-2xl">
      {/* heading */}
      <div className="flex items-center justify-center flex-col lg:flex-row lg:w-2/3 ">
        <Heading label={SERVICES_SECTION.title} />
        <p className="para inline lg:ml-7 max-lg:mt-8 max-lg:text-center ">{SERVICES_SECTION.description}</p>
      </div>
      {/* cards */}
      <div className="flex flex-wrap gap-10 justify-center items-center margin-y-2xl">
        {SERVICES_SECTION.services.map((card) => (
          <ServiceCard key={card.title} theme={card.theme as "green" | "dark" | "light"} title={card.title} title2={card.title2} image={card.img} label="learn more" />
        ))}
      </div>
      {/* foot */}
      <div className="bg-primary flex rounded-[45px] relative p-[60px] lg:flex-row flex-col gap-8  lg:h-[347px]">
        <div className="flex flex-1 flex-col ">
          <h4 className="head-3 ">{SERVICES_SECTION.foot.title}</h4>
          <p className="para mt-8">{SERVICES_SECTION.foot.description}</p>
          <Button variant="btn-dark" classes="w-fit my-8 max-lg:w-full justify-center" label={SERVICES_SECTION.foot.button} />
        </div>
        <div className="flex flex-1 items-center justify-center relative max-lg:hidden">
          {" "}
          <Image className="absolute " src={"/service-foot.png"} width={359} height={359} alt="illustration" />
        </div>
      </div>
    </section>
  );
}
