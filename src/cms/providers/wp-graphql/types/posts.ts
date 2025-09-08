import { z } from "astro:schema";

// Schemas originales (raw GraphQL)
export const CategorySchema = z.object({
    name: z.string(),
    slug: z.string(),
});

export const FeaturedImageSchema = z.object({
    sourceUrl: z.string(),
    altText: z.string(),
});

// ACFs: solo los dos opcionales permiten null
export const AuthorACFSchema = z.object({ author: z.string() });
export const PremiumACFSchema = z.object({ premium: z.boolean() });
export const SubtitleACFSchema = z.object({ subtitle: z.string().nullable() });
export const ReadingTimeACFSchema = z.object({ readingTime: z.number() });

export const PostNodeSchema = z.object({
    id: z.string(),
    title: z.string(),
    slug: z.string(),
    date: z.string(),
    categories: z.object({ nodes: z.array(CategorySchema) }),
    featuredImage: z.object({ node: FeaturedImageSchema }).nullable(),
    authorACF: AuthorACFSchema,
    premiumACF: PremiumACFSchema,
    subtitleACF: SubtitleACFSchema,
    tiempoDeLecturaACF: ReadingTimeACFSchema,
});

export const PostsResponseSchema = z.object({
    nodes: z.array(PostNodeSchema),
});

// Inferimos tipos
export type PostNodeRaw = z.infer<typeof PostNodeSchema>;