import { Minus, Plus } from "lucide-react";

interface Props {
  expand?: boolean;
}
export default function Expand({ expand = true }: Props) {
  return (
    <div className="inline">
      {expand ? (
        <button className=" p-1 border hover:bg-black hover:text-white rounded-full  flex items-center w-fit cursor-pointer duration-150 transition-colors">
          <Plus size={30} />
        </button>
      ) : (
        <button>
          <Minus size={30} />
        </button>
      )}
    </div>
  );
}
