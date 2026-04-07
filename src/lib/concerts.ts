import type { Concert } from "@/types";

export function formatConcertDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",  // display in UTC so the date matches what's in the JSON
  });
}

export function concertFromEntry(entry: {
  id: string;
  data: {
    title: string;
    date: string;
    time?: string;
    venue: string;
    city: string;
    programme: Array<{ composer: string; title: string; duration?: string }>;
    ticketUrl?: string;
    isFeatured?: boolean;
    flyerImage?: string;
  };
}): Concert {
  return {
    id: entry.id,
    title: entry.data.title,
    date: new Date(entry.data.date),
    time: entry.data.time,
    venue: entry.data.venue,
    city: entry.data.city,
    programme: entry.data.programme,
    ticketUrl: entry.data.ticketUrl,
    isFeatured: entry.data.isFeatured,
    flyerImage: entry.data.flyerImage,
  };
}