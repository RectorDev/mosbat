import { ExternalLink} from "lucide-react";
import React from "react";

interface Props {
  label?: string;
  labelVariant?: "l-dark" | "l-green" | "l-white";
  arrowVariant?: "green-white" | "green-dark" | "white-dark" | "white-green" | "dark-green" | "dark-white" | "green-tran" | "white-tran" | "dark-tran";
  labelClass?:string
  tran?: boolean;
}
export default function LinkTap({ arrowVariant, labelVariant, label, tran ,labelClass}: Props) {
  return (
    <div className={`para flex items-center gap-2 ${labelVariant}`}>
      {!tran && (
        <span className={`p-2 rounded-full flex items-center justify-between ${arrowVariant}`}>
          <ExternalLink size={20} />
        </span>
      )}
      <p className={labelClass}>{label}</p>

      {tran && (
        <span className={`p-2 rounded-full ${arrowVariant} `}>
          <ExternalLink size={20} />
        </span>
      )}
    </div>
  );
}
