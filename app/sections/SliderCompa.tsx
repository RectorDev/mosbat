import Image from "next/image";

const logos = [
  "/companies/Company-logo-1.png",
  "/companies/Company-logo-2.png",
  "/companies/Company-logo-3.png",
  "/companies/Company-logo-4.png",
  "/companies/Company-logo-5.png",
  "/companies/Company-logo.png",
];

export default function LogoSlider() {
  return (
    <section className="w-full overflow-hidden py-10 bg-white">
      {/* Desktop - Single Continuous Slider */}
      <div className="hidden lg:flex">
        <div className="flex animate-scroll whitespace-nowrap">
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="mx-2"> {/* Increased margin for more space */}
              <Image
                className="object-contain"
                src={logo}
                alt="Company Logo"
                width={150} // Increased width
                height={50} // Increased height
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile - Split into Two Opposite Sliders */}
      <div className="flex flex-col gap-6 lg:hidden">
        {/* First row */}
        <div className="flex animate-scroll whitespace-nowrap">
          {[...logos.slice(0, logos.length / 2), ...logos.slice(0, logos.length / 2)].map((logo, index) => (
            <div key={index} className="mx-6"> {/* Increased margin for more space */}
              <Image
                src={logo}
                alt="Company Logo"
                width={150} // Increased width
                height={90} // Increased height
              />
            </div>
          ))}
        </div>

        {/* Second row (reverse scroll) */}
        <div className="flex animate-scroll-reverse whitespace-nowrap">
          {[...logos.slice(logos.length / 2), ...logos.slice(logos.length / 2)].map((logo, index) => (
            <div key={index} className="mx-6"> {/* Increased margin for more space */}
              <Image
                src={logo}
                alt="Company Logo"
                width={120} // Increased width
                height={60} // Increased height
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}