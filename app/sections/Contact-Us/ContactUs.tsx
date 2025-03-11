import SectionHead from "@/components/SectionHead";
import React from "react";
import { CONTACT_US_SECTION } from "../constants";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
export default function ContactUs() {
  return (
    <section className="container-padding  flex-col items-start flex margin-y-2xl">
      <div className="margin-y-2xl">
        <SectionHead description={CONTACT_US_SECTION.description} head={CONTACT_US_SECTION.title} />
      </div>
      <div className="bg-primary w-full rounded-[45px] lg:h-[610px]">
        <form className="p-10 lg:px-[100px] lg:py-[60px]" action="post">
          <RadioGroup className="flex gap-7" defaultValue="comfortable">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1">Say Hi</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2">Get a quote</Label>
            </div>
          </RadioGroup>
        </form>
      </div>
    </section>
  );
}
