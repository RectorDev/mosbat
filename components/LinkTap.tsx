import { ExternalLink, Link, Link2 } from "lucide-react";
import React from "react";

interface Props {
  label?: string;
  labelVariant: "l-dark" | "l-green" | "l-white";
  arrowVariant: "green-white" | "green-dark" | "white-dark" | "white-green" | "dark-green" | "dark-white" | "green-tran" | "white-tran" | "dark-tran";
  tran?: boolean;
}
export default function LinkTap({ arrowVariant, labelVariant, label = "Label", tran }: Props) {
  return (
    <div className={`para flex items-center gap-2 ${labelVariant}`}>
      {!tran && (
        <span className={`p-2 rounded-full flex items-center justify-between ${arrowVariant}`}>
          <ExternalLink size={20} />
        </span>
      )}
      {label}

      {tran && (
        <span className={`p-2 rounded-full ${arrowVariant} `}>
          <ExternalLink size={20} />
        </span>
      )}
    </div>
  );
}
