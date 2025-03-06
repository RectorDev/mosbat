import Heading from "./Heading";

export default function SectionHead({ head, description }: { head: string; description: string }) {
  return (
    <div className="flex items-center justify-center flex-col lg:flex-row lg:w-2/3 ">
      <Heading label={head} />
      <p className="para inline lg:ml-7 max-lg:mt-8 max-lg:text-center ">{description}</p>
    </div>
  );
}
