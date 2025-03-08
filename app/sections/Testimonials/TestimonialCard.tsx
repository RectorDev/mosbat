export default function TestimonialCard({ quote, author, role }: { role: string; quote: string; author: string }) {
  return (
    <div className="p-4 para bg-accent text-secondary w-[450px]">
      <div>{quote}</div>
      <div>
        <p>{author}</p>
        <p>{role}</p>
      </div>
    </div>
  );
}
