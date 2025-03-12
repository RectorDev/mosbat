interface Props {
  label?: string;
  variant?: "dark-heading" | "light-heading" | "green-heading";
  classes?: string;
}
export default function Heading({ classes, label = "label", variant = "green-heading" }: Props) {
  return <h3 className={`head-3 w-fit   p-[7px] block text-center rounded-[7px] h-[51px] text-nowrap  ${classes} ${variant}`}>{label}</h3>;
}
