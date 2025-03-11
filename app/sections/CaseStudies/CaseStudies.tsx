import SectionHead from "@/components/SectionHead";
import React from "react";
import { CASE_STUDIES_SECTION } from "@/app/sections/constants";
import Case from "./Case";

export default function CaseStudies() {
  return (
    <section className="container-padding margin-y-2xl">
      <SectionHead head={CASE_STUDIES_SECTION.title} description={CASE_STUDIES_SECTION.description} />
      <div className="text-white margin-t-2xl bg-secondary max-lg:bg-transparent flex rounded-[45px] overflow-x-auto max-lg:gap-10 ">
        {CASE_STUDIES_SECTION.caseStudies.map((c, index) => (
          <Case link={c.href} key={index} texts={c.description} />
        ))}
      </div>
    </section>
  );
}
