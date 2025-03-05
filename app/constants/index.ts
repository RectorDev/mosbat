const NAV_LINKS = [
  { title: "About us", href: "/about-us" },
  { title: "Services", href: "/services" },
  { title: "Use Cases", href: "/use-cases" },
  { title: "Pricing", href: "/pricing" },
  { title: "Blog", href: "/blog" },
];

const HERO_SECTION = {
  title: "Navigating the digital landscape for success",
  description:
    "Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.",
  buttonText: "Book a consultation",
};

export const SERVICES_SECTION = {
  title: "Services",
  description: "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:",
  services: [
    { theme: "light", title: "Search engine", title2: "optimization", href: "#", img: "/services/service-1.png" },
    { theme: "green", title: "Pay-per-click", title2: "advertising", href: "#", img: "/services/service-2.png" },
    { theme: "dark", title: "Social Media", title2: "Marketing", href: "#", img: "/services/service-3.png" },
    { theme: "light", title: "Email", title2: "Marketing", href: "#", img: "/services/service-4.png" },
    { theme: "green", title: "Content", title2: "Creation", href: "#", img: "/services/service-5.png" },
    { theme: "dark", title: "Analytics and", title2: "Tracking", href: "#", img: "/services/service-6.png" },
  ],
  foot: {
    title: "Let’s make things happen",
    description: "Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.",
    button:"Get your free proposal"
  },
};

export { NAV_LINKS, HERO_SECTION };
