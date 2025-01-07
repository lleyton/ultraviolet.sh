import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const writings = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/writings" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    published: z.boolean(),
  }),
});
const blurbs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blurbs" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    published: z.boolean(),
  }),
});
const lines = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/lines" }),
  schema: z.object({
    date: z.date(),
    published: z.boolean(),
  }),
});

export const collections = { writings, blurbs, lines };
