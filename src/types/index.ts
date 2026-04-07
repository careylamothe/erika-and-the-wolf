// ── Concert ──────────────────────────────────────────────────────────────────
export interface Concert {
  id: string;
  title: string;
  date: Date;
  time?: string;
  venue: string;
  city: string;
  programme: ProgrammeItem[];
  ticketUrl?: string;
  isFeatured?: boolean;
  flyerImage?: string;
}

export interface ProgrammeItem {
  composer: string;
  title: string;
  duration?: string; // e.g. "22'"
}

// ── Repertoire ────────────────────────────────────────────────────────────────
export interface RepertoireEntry {
  id: string;
  composer: string;
  title: string;
  year?: number;
  movements?: string[];
  duration?: string;
  notes?: string;
  tags: RepertoireTag[];
}

export type RepertoireTag =
  | "standard"
  | "contemporary"
  | "transcription"
  | "commission";

// ── Ensemble member ───────────────────────────────────────────────────────────
export interface Member {
  id: string;
  name: string;
  instrument: WoodwindInstrument;
  bio: string;
  photoUrl: string;
  website?: string;
}

export type WoodwindInstrument =
  | "flute"
  | "oboe"
  | "clarinet"
  | "horn"
  | "bassoon";

// ── Forms ─────────────────────────────────────────────────────────────────────
export interface ContactFormData {
  name: string;
  email: string;
  subject: "booking" | "press" | "general";
  message: string;
}

export interface FormResult {
  ok: boolean;
  errors?: Partial<Record<keyof ContactFormData, string>>;
  message?: string;
}
