interface Props {
  variant: "btn-green" | "btn-outline" | "btn-dark";
  label?: string;
  classes?:string
}

export default function Button({ variant, label = "label",classes }: Props) {
  return <button className={`h4 px-8.5 cursor-pointer transition-all duration-200 hover:brightness-50 py-5 rounded-[14px] items-center flex text-center  ${variant} ${classes}`}>{label}</button>;
}
