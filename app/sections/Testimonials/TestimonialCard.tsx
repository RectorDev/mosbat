export default function TestimonialCard({ quote, author, role }: { role: string; quote: string; author: string }) {
  return (
    <div className="py-8 px-4 md:px-8">
      <div className="relative mb-12">
        <div className="bg-gray-900 border border-accent rounded-3xl p-6 relative">
          <p className="text-white text-base md:text-lg">"{quote}"</p>
          {/* Speech bubble tail */}
          <div className="absolute bottom-0 left-12 w-6 h-6 transform translate-y-3 rotate-45 border-r border-b border-accent bg-gray-900"></div>
        </div>
        <div className="mt-8 pl-12">
          <h4 className="text-accent font-medium text-lg">{author}</h4>
          <p className="text-white">{role}</p>
        </div>
      </div>
    </div>
  );
}
