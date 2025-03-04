interface Props {
  label?: string;
  variant?: "dark-heading" | "light-heading" | "green-heading";
}
export default function Heading({ label = "label", variant = "green-heading" }: Props) {
  return <h3 className={`h-2 p-[7px] inline rounded-[7px] ${variant}`}>{label}</h3>;
}
