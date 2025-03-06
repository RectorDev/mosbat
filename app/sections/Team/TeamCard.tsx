import Image from "next/image";

interface Props {
  name: string;
  role: string;
  img: string;
  experience: string;
  expertise: string;
}

export default function TeamCard({ expertise, experience, img, role, name }: Props) {
  return (
    <div className="max-w-[387px] rounded-[45px] shadow-secondary shadow-[0px_5px_0px]  py-10 px-[35px] border">
      <div className="flex items-end">
        <div className=" relative ">
          <Image className="absolute max-sm:min-h-[75] max-sm:min-w-[75] z-0 -bottom-[5px] -right-[5px]" src={"/Vector.svg"} width={100} height={100} alt="shadow" />
          <Image className="pfp-mask max-sm:min-h-[75] max-sm:min-w-[75] z-10" src={img} width={100} height={100} alt={name} />
        </div>
        <div className="ml-5">
          <p className="head-4">{name}</p>
          <p className="para">{role}</p>
        </div>
      </div>
      <hr className="my-7" />
      <div>
        <p className="para">{experience}</p>
        <p className="para">{expertise}</p>
      </div>
    </div>
  );
}
