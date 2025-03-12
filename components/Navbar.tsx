"use client";
import Image from "next/image";
import Button from "./Button";
import { NAV_LINKS } from "@/app/constants";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="container-padding max-container flex justify-between  sticky top-0  h-[90px] items-center w-full     backdrop-blur-md z-20">
      {/* left side */}
      <div className="flex">
        <Link href={"/"}>
          <Image className="" src={"/companies/logo.png"} width={219} height={58} alt="logo" />
        </Link>
      </div>
      {/* right side */}
      <div className=" items-center hidden max-xl:flex  ">
        <div className="top-7 right-5 cursor-pointer absolute z-50 " onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? <Menu size={36} /> : <X size={36} />}
        </div>
        {isOpen && (
          <div className="xl:hidden fixed h-screen w-[320px] top-0 right-0 z-40 flex p-5 items-center justify-center flex-col gap-3 backdrop-blur-2xl bg-white/20">
            {NAV_LINKS.map((item) => (
              <Link className="py-4 px-6 w-full bg-accent/20 hover:bg-accent/50 transition-colors duration-200 border  border-black rounded-[14px]" key={item.href} href={item.href}>{item.title}</Link>
            ))}
            <Button variant="btn-outline" label="Request a quote" />
          </div>
        )}
      </div>
      <div className=" items-center hidden xl:flex">
        <ul className="flex gap-10 justify-around mr-10">
          {NAV_LINKS.map((item) => (
            <li key={item.title}>
              <Link href={item.href} className="para hover:text-accent duration-150 transition-all hover:tracking-wider">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <Button variant="btn-outline" label="Request a quote" />
      </div>
    </nav>
  );
}
