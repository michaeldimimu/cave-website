type School = {
  id: string;
  theme: "light" | "dark";
  title: string;
  subtitle: string;
  description: string;
  highlightsTitle: string;
  highlights: string[];
  image: string;
  cta: string;
  reverse: boolean;

  testimonials?: {
    name: string;
    role: string;
    body: string;
    highlight?: boolean;
  }[];
};

export default School;
