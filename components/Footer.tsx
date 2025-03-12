import { NAV_LINKS } from "@/app/constants";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Heading from "./Heading";
import { Input } from "./ui/input";
import Button from "./Button";

export default function Footer() {
  
  return (
    <section className="max-container 2xl:px-[100px]">
      <div className="px-5 py-10 xl:px-[60px] xl:py-[55px] xl:rounded-t-4xl bg-secondary text-white para">
        <div className="flex flex-col lg:flex-row max-lg:gap-10 justify-center lg:justify-between">
          <div className="flex justify-center items-center">
            <Image src={"/public/logo.png"} width={180} height={29} alt="logo" />
          </div>
          <div className="flex flex-col lg:flex-row  items-center gap-2 lg:gap-10">
            {NAV_LINKS.map((item) => (
              <Link className="lg:underline" href={"#"} key={item.href}>
                {item.title}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-5 max-lg:hidden">
            <Facebook size={30} className="text-secondary p-1  bg-white rounded-full" fill="#191a23" />
            <Twitter size={30} className="text-secondary p-1  bg-white rounded-full" fill="#191a23" />
            <Linkedin size={30} className="text-secondary   bg-white rounded-full" fill="#000" />
          </div>
        </div>
        <div className="flex-col flex lg:flex-row lg:justify-between  items-center margin-y-xl">
          <div className="flex flex-col max-lg:items-center h-full  justify-between gap-2.5">
            <Heading classes="head-4 !h-[26px] !py-0 !px-[7px] " label="Contact us:" />
            <p>Email:info@mosbat.com</p>
            <p>Phone:+98 514-444-1234</p>
            <p className="max-lg:text-center">
              address:1234 Main St <br />
              Moonstone City, Stardust State 12345
            </p>
          </div>
          <div className="lg:py-[58px] rounded-xl p-4 lg:px-[80px] bg-slate-800 flex flex-col lg:flex-row margin-y-xl">
            <Input placeholder="Email" className="h-full border-white lg:mr-5 max-lg:my-5" />
            <Button classes="w-full cursor-pointer justify-center" variant="btn-green" label="Subscribe to news" />
          </div>
        </div>
        <div className="flex items-center justify-center my-5 gap-5 lg:hidden">
          <Facebook size={30} className="text-secondary p-1  bg-white rounded-full" fill="#191a23" />
          <Twitter size={30} className="text-secondary p-1  bg-white rounded-full" fill="#191a23" />
          <Linkedin size={30} className="text-secondary   bg-white rounded-full" fill="#000" />
        </div>
        <hr />
        <div className="margin-y-2xl max-lg:text-center para">
          © 2023 Positivus. All Rights Reserved. <span className="margin-l">Privacy Policy</span>
        </div>
        <hr className="border-amber-500" />
        <p className="text-center mt-5 head-4">
          <Link className="text-amber-500" href={"https://www.linkedin.com/in/mohammad-zibaei-744b72326/"}>
            رِکتور
          </Link>{" "}
          اینجا بوده
        </p>
      </div>
    </section>
  );
}
