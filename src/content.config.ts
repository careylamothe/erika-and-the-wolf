import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const concerts = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/concerts" }),
  schema: z.object({
    title: z.string(),
    date: z.string(), // ISO date string — Astro 6 glob loader doesn't coerce to Date
    time: z.string().optional(),
    venue: z.string(),
    city: z.string(),
    ticketUrl: z.string().url().optional(),
    flyerImage: z.string().optional(),
    isFeatured: z.boolean().default(false),
    programme: z.array(z.object({
      composer: z.string(),
      title: z.string(),
      duration: z.string().optional(),
    })),
  }),
});

const repertoire = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/repertoire" }),
  schema: z.object({
    composer: z.string(),
    title: z.string(),
    year: z.number().optional(),
    duration: z.string().optional(),
    movements: z.array(z.string()).optional(),
    tags: z.array(z.enum(["standard", "contemporary", "transcription", "commission"])),
    notes: z.string().optional(),
  }),
});

const members = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/members" }),
  schema: z.object({
    name: z.string(),
    instrument: z.enum(["flute", "oboe", "clarinet", "horn", "bassoon"]),
    photoUrl: z.string(),
    bio: z.string(),
    website: z.string().url().optional(),
  }),
});

export const collections = { concerts, repertoire, members };