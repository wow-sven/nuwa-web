export interface Category {
  title: string;
  slug: string;
  color: "green" | "blue" | "orange" | "purple" | "pink";
  description: string;
}

export const categories: Category[] = [
  {
    title: "Technology",
    slug: "technology",
    color: "blue",
    description:
      "Keep up with the latest tech trends and learn about the latest innovations in software development, hardware design, cybersecurity, and more.",
  },
  {
    title: "Lifestyle",
    slug: "lifestyle",
    color: "orange",
    description:
      "Explore the latest trends and ideas in fashion, food, home design, and more, and get inspiration for living your best life.",
  },
  {
    title: "Personal",
    slug: "personal",
    color: "green",
    description:
      "Discover tips and strategies for self-improvement, personal development, and achieving your goals, and find resources to help you grow as a person.",
  },
  {
    title: "Travel",
    slug: "travel",
    color: "pink",
    description:
      "Plan your next adventure and get travel tips and inspiration from experienced travelers, with articles covering destinations, cultures, and more.",
  },
  {
    title: "Design",
    slug: "design",
    color: "purple",
    description:
      "Get insights and inspiration from the world of design, with articles covering graphic design, product design, interior design, and more.",
  },
  {
    title: "Product",
    slug: "product",
    color: "green",
    description:
      "Stories and updates about NUWA's product decisions, releases, and feature deep-dives.",
  },
  {
    title: "Tech",
    slug: "tech",
    color: "blue",
    description:
      "Technical explorations, architecture decisions, and engineering learnings from building NUWA.",
  },
  {
    title: "Insights",
    slug: "insights",
    color: "orange",
    description:
      "Perspectives, analyses, and learnings from the NUWA team across AI, community, and industry trends.",
  },
  {
    title: "Branding",
    slug: "branding",
    color: "purple",
    description:
      "Brand storytelling, positioning updates, and the creative thinking that shapes NUWA's identity.",
  },
  {
    title: "Milestone",
    slug: "milestone",
    color: "pink",
    description:
      "Key company milestones, launches, and celebrations as NUWA continues to grow.",
  },
];
