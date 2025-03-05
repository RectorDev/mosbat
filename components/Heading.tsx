interface Props {
  label?: string;
  variant?: "dark-heading" | "light-heading" | "green-heading";
}
export default function Heading({ label = "label", variant = "green-heading" }: Props) {
  return <h3 className={`head-3 w-fit h-fit p-[7px] inline rounded-[7px] text-nowrap ${variant}`}>{label}</h3>;
}
