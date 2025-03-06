import SectionHead from "@/components/SectionHead";
import { TESTIMONIALS_SECTION } from "../constants";

export default function Testimonials() {
  return (
    <section className="container-padding  margin-y-2xl">
        <div>
            <SectionHead description={TESTIMONIALS_SECTION.description} head={TESTIMONIALS_SECTION.title}/>
        </div>
    </section>
  )
}
