import CaseStudies from "./sections/CaseStudies/CaseStudies";
import Hero from "./sections/Hero/Hero";
import OurWorkingProcess from "./sections/OurWorkingProcess/OurWorkingProcess";
import Services from "./sections/Services/Services";
import Team from "./sections/Team/Team";
import Testimonials from "./sections/Testimonials/Testimonials";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Services />
      <CaseStudies />
      <OurWorkingProcess />
      <Team />
      <Testimonials />
    </div>
  );
}
