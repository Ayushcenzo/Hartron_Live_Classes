export interface ScrollItem {
  id: number;
  paragraph: string;
  highlightWords?: string[];
}

export const scrollData: ScrollItem[] = [
  {
    id: 1,
    paragraph:
      "Welcome to Hartron Live Classes. Learn from expert mentors. Build your future with confidence.",
    highlightWords: ["Hartron Live Classes", "expert mentors", "future"],
  },
  {
    id: 2,
    paragraph:
      "Interactive live sessions. Real time problem solving. Industry level guidance.",
    highlightWords: ["live sessions", "problem solving", "Industry level"],
  },
  {
    id: 3,
    paragraph:
      "Master practical skills. Gain real experience. Become job ready.",
    highlightWords: ["practical skills", "real experience", "job ready"],
  },
];
