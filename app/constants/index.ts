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

const SERVICES_SECTION = {
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
    button: "Get your free proposal",
  },
};

const CASE_STUDIES_SECTION = {
  title: "Case Studies",
  description: "Explore real-life examples of our proven digital marketing success through our case studies.",
  caseStudies: [
    {
      description: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
      href: "#",
    },
    {
      description: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
      href: "#",
    },
    {
      description: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
      href: "#",
    },
  ],
};

const WORKING_PROCESS_SECTION = {
  title: "Our Working Process",
  description: "Step-by-Step Guide to Achieving Your Business Goals",
  steps: [
    {
      step: "01",
      title: "Consultation",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      step: "02",
      title: "Research and Strategy Development",
      description:
        "We conduct in-depth research to understand your industry, competitors, and target audience. Based on this, we develop a customized strategy to achieve your business goals.",
    },
    {
      step: "03",
      title: "Implementation",
      description: "Our team puts the strategy into action, executing campaigns across various channels such as SEO, PPC, social media, and content marketing to drive results.",
    },
    {
      step: "04",
      title: "Monitoring and Optimization",
      description: "We continuously monitor the performance of your campaigns and make data-driven adjustments to optimize results and ensure maximum ROI.",
    },
    {
      step: "05",
      title: "Reporting and Communication",
      description: "We provide regular reports and updates on campaign performance, ensuring transparency and keeping you informed about progress toward your goals.",
    },
    {
      step: "06",
      title: "Continual Improvement",
      description: "We analyze results, gather insights, and refine strategies to ensure ongoing success and adaptation to changing market conditions.",
    },
  ],
};
export { NAV_LINKS, HERO_SECTION, CASE_STUDIES_SECTION, SERVICES_SECTION, WORKING_PROCESS_SECTION };
