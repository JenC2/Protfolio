const navLinks = [
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Collaboration", imgPath: "/images/handshake.svg" },
];

const abilities = [
  {
    imgPath: "/images/adaptability.png",
    title: "Adaptability",
    desc: "Quickly adapting to new technologies, environments, and project requirements while staying effective.",
  },
  {
    imgPath: "/images/autonomy.png",
    title: "Autonomy",
    desc: "Able to work independently, take ownership of tasks, and drive features from idea to completion.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Teamwork",
    desc: "Collaborating effectively with others, sharing ideas, and contributing to a healthy development workflow.",
  },
  {
    imgPath: "/images/organization.png",
    title: "Rigor & Organization",
    desc: "Writing clean, structured code and staying organized to ensure maintainability and scalability.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Working at Myriad Connect allowed me to grow as a full stack developer in a fintech environment, building secure and scalable production-ready solutions.",
    imgPath: "/images/exp1.png",
    title: "Full Stack Developer - Fintech",
    date: "Oct 2023 - Nov 2025",
    responsibilities: [
      "Developed and maintained USSD-based solutions using Elixir, adding new features and fixing production issues.",
      "Built secure backend services with Elixir and Phoenix for tax payment, KYC, and B2W workflows.",
      "Designed and deployed serverless APIs using Python and AWS (Lambda, API Gateway, S3, DynamoDB).",
      "Implemented frontend features for mobile apps using Flutter.",
      "Developed React features for a fintech web application, integrating multiple APIs securely.",
      "Worked in an Agile environment (scrum, code reviews, sprint planning).",
    ],
  },
  {
    review:
      "This role strengthened my organizational skills, autonomy, and ability to manage complex processes with international stakeholders.",
    imgPath: "/images/exp2.png",
    title: "Purchasing Manager",
    date: "Jan 2016 - Oct 2022",
    responsibilities: [
      "Managed end-to-end order processes from customer demand to factory shipment.",
      "Collaborated with international suppliers (China, Turkey), negotiating prices and ensuring production quality.",
      "Sourced fabrics and materials aligned with market trends and quality standards.",
      "Coordinated with product teams to meet technical and regulatory requirements.",
      "Provided clients with detailed product and order information.",
    ],
  },
  {
    review:
      "At Syngenta, I developed analytical and reporting skills while working on supply chain processes and data management.",
    imgPath: "/images/exp3.png",
    title: "Supply Chain Assistant Manager",
    date: "Jul 2014 - Dec 2014",
    responsibilities: [
      "Managed orders and stock levels for packaging materials.",
      "Produced and analyzed monthly procurement reports.",
      "Maintained and updated product databases.",
    ],
  },
  {
    review:
      "This experience gave me a strong foundation in logistics operations, coordination, and client communication.",
    imgPath: "/images/exp4.png",
    title: "Operation Specialist",
    date: "Jul 2012 - Jun 2014",
    responsibilities: [
      "Handled international transportation requests for import clients.",
      "Optimized shipping routes and selected efficient transport methods.",
      "Maintained regular communication with clients for shipment tracking.",
    ],
  },
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    url: "https://www.facebook.com/",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    url: "https://www.x.com/",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  socialImgs,
  techStackIcons,
  techStackImgs,
  expCards,
  navLinks,
};
