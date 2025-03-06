import { Minus, Plus } from "lucide-react";

interface Props {
  action?: () => void; 
  expand?: boolean;
}

export default function Expand({ expand = true, action }: Props) {
  return (
    <div className="inline rounded-full bg-white">
      {expand ? (
        <button
          onClick={action}
          aria-label="Expand"
          className="p-1 border hover:bg-black hover:text-white rounded-full flex items-center w-fit cursor-pointer duration-150 transition-colors"
        >
          <Plus size={30} />
        </button>
      ) : (
        <button
          onClick={action}
          aria-label="Collapse"
          className="p-1 border hover:bg-black hover:text-white rounded-full flex items-center w-fit cursor-pointer duration-150 transition-colors"
        >
          <Minus size={30} />
        </button>
      )}
    </div>
  );
}