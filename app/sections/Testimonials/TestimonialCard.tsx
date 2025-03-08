export default function TestimonialCard({ quote, author, role }: { role: string; quote: string; author: string }) {
  return (
    <div className=" ">
      <div className="para text-white max-w-[606px] max-sm:p-7 mx-4 p-[50px] border  border-accent rounded-[45px]"><q>{quote}</q></div>
      <div className="mt-10 ml-10 max-sm:ml-16">
        <p className="head-4 text-accent">{author}</p>
        <p className="para text-white">{role}</p>

      </div>
    </div>
  );
}
