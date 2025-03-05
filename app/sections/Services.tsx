import Heading from "@/components/Heading";
import { SERVICES_SECTION } from "../constants";

export default function Services() {
  return (
    <section className="container-padding margin-t-2xl">
        {/* heading */}
      <div className="flex items-center justify-center flex-col lg:flex-row lg:w-2/3 ">
        <Heading label={SERVICES_SECTION.title} />
        <p className="para inline lg:ml-7 max-lg:mt-8 max-lg:text-center ">{SERVICES_SECTION.description}</p>
      </div>
    </section>
  );
}
