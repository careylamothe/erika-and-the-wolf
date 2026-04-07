// Email sending via Resend (https://resend.com)

interface EmailPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(payload: EmailPayload): Promise<void> {
  const apiKey = import.meta.env.RESEND_API_KEY;
  const emailTo = import.meta.env.EMAIL_TO;

  if (!apiKey || !emailTo) {
    throw new Error("Email environment variables not configured");
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Contact <contact@contact.careylamothe.com>",
      to: emailTo,
      reply_to: payload.email,
      subject: `[${payload.subject}] Message from ${payload.name}`,
      text: `From: ${payload.name} <${payload.email}>\n\n${payload.message}`,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Resend API error: ${err}`);
  }
}
