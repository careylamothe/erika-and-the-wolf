import { z } from "zod";
import type { ContactFormData, FormResult } from "@/types";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.enum(["booking", "press", "general"], {
    error: "Please select a subject",
  }),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function validateContactForm(data: FormData): FormResult {
  const raw = {
    name: data.get("name"),
    email: data.get("email"),
    subject: data.get("subject"),
    message: data.get("message"),
  };

  const result = contactSchema.safeParse(raw);

  if (!result.success) {
    const errors: FormResult["errors"] = {};
    for (const issue of result.error.issues) {
      const field = issue.path[0] as keyof ContactFormData;
      errors[field] = issue.message;
    }
    return { ok: false, errors };
  }

  return { ok: true };
}
