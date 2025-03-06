"use client";
import { useState } from "react";
import Expand from "./Expand";

export default function ExpandableBar({ step, title, description }: { description: string; title: string; step: string }) {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <div className={`${expanded && "!bg-accent"} w-full bg-primary p-[32px] lg:p-[60px] shadow-secondary rounded-[41px] shadow-[0px_5px_0px] transition-all duration-200`}>
      {/* header */}
      <div className="flex justify-between items-center">
        <div className=" flex items-center gap-5">
          <p className="text-4xl lg:text-6xl">{step}</p>
          <p className="text-xl lg:text-[1.9rem]">{title}</p>
        </div>
        <Expand action={()=>setExpanded(!expanded)} expand={false} />
      </div>
      {/* detail */}
      {expanded && (
        <div>
          <hr className="my-[30px]" />
          <p className="para">{description}</p>
        </div>
      )}
    </div>
  );
}
