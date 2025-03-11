import SectionHead from "@/components/SectionHead";
import React from "react";
import { CONTACT_US_SECTION } from "../constants";
import { RadioGroup } from "@/components/ui/radio-group";
import { RadioGroupItem } from "@radix-ui/react-radio-group";
import { Label } from "@/components/ui/label";

export default function ContactUs() {
  return (
    <section className="container-padding  flex-col items-start flex margin-y-2xl">
      <div className="margin-y-2xl">
        <SectionHead description={CONTACT_US_SECTION.description} head={CONTACT_US_SECTION.title} />
      </div>
      <div className="bg-primary w-full rounded-[45px] lg:h-[610px]">
        <form className="p-10 lg:px-[100px] lg:py-[60px]" action="post">
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Option One</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Option Two</Label>
            </div>
          </RadioGroup>
        </form>
      </div>
    </section>
  );
}
