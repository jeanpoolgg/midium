export type PostNormalized = {
  id: string;
  title: string;
  slug: string;
  date: string;
  categories: { name: string; slug: string }[];
  featuredImage: { sourceUrl: string; altText: string } | null;
  author: string;
  premium: boolean;
  subtitle: string | null;
  readingTime: number;
};
