import { z } from "zod";

export const concertSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  time: z.string(),
  venue: z.string(),
  city: z.string(),
  ticketUrl: z.string().url().optional(),
  flyerImage: z.string().optional(),
  isFeatured: z.boolean().default(false),
  programme: z.array(
    z.object({
      composer: z.string(),
      title: z.string(),
      duration: z.string().optional(),
    })
  ),
});

export type ConcertFrontmatter = z.infer<typeof concertSchema>;