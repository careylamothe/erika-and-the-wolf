import type { APIRoute } from "astro";
import { validateContactForm } from "@/lib/validate";
import { sendContactEmail } from "@/lib/email";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const validation = validateContactForm(data);

  if (!validation.ok) {
    return new Response(JSON.stringify(validation), {
      status: 422,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    await sendContactEmail({
      name: data.get("name") as string,
      email: data.get("email") as string,
      subject: data.get("subject") as string,
      message: data.get("message") as string,
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Email send failed:", err);
    return new Response(
      JSON.stringify({ ok: false, message: "Failed to send message. Please try again." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
