import { WORKING_PROCESS_SECTION } from "@/app/sections/constants";
import ExpandableBar from "@/components/ExpandableBar";
import SectionHead from "@/components/SectionHead";

export default function OurWorkingProcess() {
  return (
    <section className="container-padding margin-y-2xl">
      <div>
        <SectionHead description={WORKING_PROCESS_SECTION.description} head={WORKING_PROCESS_SECTION.title} />
      </div>
      <div className="margin-y-2xl flex flex-col gap-[30px]">
        {WORKING_PROCESS_SECTION.steps.map((step) => (
          <ExpandableBar description={step.description} title={step.title} step={step.step} key={step.step} />
        ))}
      </div>
    </section>
  );
}
