import Heading from "@/components/Heading";
import LinkTap from "@/components/LinkTap";
import Image from "next/image";

interface Props {
  title: string;
  title2: string;
  label?: string;
  image: string;
  theme: "green" | "light" | "dark";
}
export default function ServiceCard({ title, title2, label, image, theme }: Props) {
  return (
    <div
      className={`w-[600px] border rounded-[45px] lg:aspect-[2/1] shadow-secondary shadow-[0px_5px] max-sm:flex-col flex justify-between p-[50px] max-sm:p-8 gap-8 ${
        theme === "green" && "bg-accent"
      } ${theme === "dark" && "bg-secondary"} ${theme === "light" && "bg-primary"}`}
    >
      <div className=" flex flex-col justify-between">
        <div className="flex flex-col">
          <Heading label={title} variant={theme === "green" ? "dark-heading" : theme === "dark" ? "light-heading" : "green-heading"} />
          <Heading label={title2} variant={theme === "green" ? "dark-heading" : theme === "dark" ? "light-heading" : "green-heading"} />
        </div>
        <div className="hidden sm:flex">
          <LinkTap
            arrowVariant={theme === "green" ? "green-dark" : theme === "dark" ? "dark-white" : "green-dark"}
            label="learn more"
            labelClass={theme === "green" ? "text-black !bg-transparent" : theme === "dark" ? "text-white" : "text-black"}
          />
        </div>
      </div>
      <div className="flex  items-end justify-between">
        <div className="sm:hidden">
          <LinkTap arrowVariant={theme === "green" ? "green-dark" : theme === "dark" ? "dark-white" : "green-dark"} label="" />
        </div>
        <Image className="object-contain" src={image} width={210} height={166} alt="service" />
      </div>
    </div>
  );
}
