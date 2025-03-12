import SectionHead from "@/components/SectionHead";
import React from "react";
import { CONTACT_US_SECTION } from "../constants";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Button from "@/components/Button";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
export default function ContactUs() {
  return (
    <section className="container-padding  flex-col items-start flex margin-y-2xl">
      <div className="margin-y-2xl">
        <SectionHead description={CONTACT_US_SECTION.description} head={CONTACT_US_SECTION.title} />
      </div>
      <div className="relative bg-primary w-full rounded-[45px] lg:h-[773px] overflow-hidden">
        <form className="p-10 max-lg:gap-9 max-lg:items-center w-full  lg:px-[100px] lg:max-w-1/2 lg:pt-[60px] flex flex-col justify-between h-full  lg:pb-[80px]" action="post">
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
          <div className="w-full" >
            <Label className="py-2" htmlFor="name-input">Name</Label>
            <Input placeholder="Name" id="name-input" />
          </div>
          <div className="w-full" >
            <Label className="py-2" htmlFor="email-input">Email*</Label>
            <Input placeholder="Email" id="email-input" />
          </div>
         
          <div className="w-full">
            <Label className="py-2">Message</Label>
            <Textarea className="lg:h-[190px]" placeholder="Message"/>
          </div>
          <Button variant="btn-dark" classes="justify-center w-full " label="Send Message"/>
        </form>
        <div className="absolute max-lg:hidden top-0 -right-1/4"><Image src={'/illustration.png'} width={691} height={648} alt="illustration" /></div>
      </div>
    </section>
  );
}
