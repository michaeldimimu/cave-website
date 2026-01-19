import School from "../types/schools-types";

const schools: School[] = [
  {
    id: "selling",
    theme: "dark",
    title: "The Selling School",
    subtitle: "Learn how to make your work sell without selling your soul.",
    description:
      "Selling School helps you turn what you know into income — not with hype or manipulation, but with clarity, structure, and real-world selling skills.",
    highlightsTitle: "What you will actually gain:",
    highlights: [
      "How to price your work confidently",
      "How to explain your value so people understand it",
      "How to attract the right customers",
      "How to close sales without feeling fake",
      "How to build income that doesn’t collapse under pressure",
    ],
    image: "/selling-school-img.jpg",
    cta: "Begin",
    reverse: false,
  },
  {
    id: "healing",
    theme: "light",
    title: "The Healing School",
    subtitle: "Learn how to stay consistent without breaking yourself.",
    description:
      "Healing School helps you fix the inner patterns that quietly sabotage your progress. Because when your inner life is chaotic, your results will be too.",
    highlightsTitle: "What you will actually gain:",
    highlights: [
      "How to stop self-sabotage and procrastination",
      "How to manage overwhelm and mental pressure",
      "How to rebuild confidence in yourself",
      "How to stay disciplined without hating your life",
      "How to become emotionally steady under responsibility",
    ],
    image: "/sticky-man.jpeg",
    cta: "Begin",
    reverse: true,
  },
  {
    id: "impact",
    theme: "dark",
    title: "The Impact School",
    subtitle: "Learn how to carry power responsibly.",
    description:
      "Impact School is for people who are growing in skill, money, or influence, and want to do it with integrity.",
    highlightsTitle: "What you will actually gain:",
    highlights: [
      "How to lead without ego",
      "How to build without exploiting people",
      "How to communicate with emotional intelligence",
      "How to handle influence without becoming careless",
      "How to grow while staying grounded",
    ],
    image: "/sticky-man.jpeg",
    cta: "Begin",
    reverse: false,
  },
];

export default schools;
