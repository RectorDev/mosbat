import { WORKING_PROCESS_SECTION } from "@/app/constants";
import SectionHead from "@/components/SectionHead";

export default function OurWorkingProcess() {
  return (
    <section className="container-padding margin-y-2xl">
        <div><SectionHead description={WORKING_PROCESS_SECTION.description} head={WORKING_PROCESS_SECTION.title} /></div>
    </section>
  )
}
