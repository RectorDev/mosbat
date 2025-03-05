import Image from "next/image";
import Button from "./Button";
import { NAV_LINKS } from "@/app/constants";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="container-padding flex justify-between sticky top-0  h-[90px] items-center w-full   mt-6  backdrop-blur-md z-40">
      {/* left side */}
      <div className="flex">
        <Link href={"/"}>
          <Image src={"/companies/logo.png"} width={219} height={58} alt="logo" />
        </Link>
      </div>
      {/* right side */}
      <div className=" items-center hidden max-xl:flex  ">
        <div className="top-5 right-5 cursor-pointer absolute "><Menu size={36}/></div>
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
