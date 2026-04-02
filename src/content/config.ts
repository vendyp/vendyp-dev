import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    category: z.string(),
    date: z.date(),
    description: z.string().optional(),
  }),
});

export const collections = {
  posts,
};
