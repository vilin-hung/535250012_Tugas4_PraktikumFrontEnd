
export type Teacher = {
  id: string;
  name: string;
  role: string;
  specialty: string;
  description: string;
  // picture: string;
};

export const teachers: Teacher[] = [
  {
    id: "vilin-hung",
    name: "Vilin Hung",
    role: "Piano & Music Theory Teacher",
    specialty: "Classical Piano",
    description:
      "Passionate about helping students develop musical technique, confidence, and an appreciation for classical music.",
  },
  {
    id: "celin-hung",
    name: "Celin Hung",
    role: "Piano Teacher",
    specialty: "Piano Fundamentals",
    description:
      "Enjoys guiding beginners through their first melodies and building a strong musical foundation.",
  },
  {
    id: "ipin-hung",
    name: "Ipin Hung",
    role: "Music Theory Teacher",
    specialty: "Music Theory",
    description:
      "Makes music theory easier to understand through clear explanations, practical examples, and engaging activities.",
  },
];
