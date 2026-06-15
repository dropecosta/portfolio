import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/data";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body?.name || !body?.email || !body?.message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.log("⚠️  RESEND_API_KEY not configured. Email preview mode enabled.");
    return NextResponse.json({ ok: true, preview: true });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const contactEmail = process.env.CONTACT_TO_EMAIL || "dropecosta@gmail.com";

  try {
    await resend.emails.send({
      from: "Pedro Reis <onboarding@resend.dev>",
      to: contactEmail,
      replyTo: body.email,
      subject: `Nova mensagem de contacto: ${body.name}`,
      text: `Nome: ${body.name}\nEmail: ${body.email}\nEmpresa: ${body.company || "-"}\n\n${body.message}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9fafb; border-radius: 8px;">
          <div style="background: white; padding: 24px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <h2 style="margin: 0 0 24px; font-size: 24px; font-weight: 600; color: #1a1a1a;">Nova Mensagem de Contacto</h2>
            
            <div style="margin-bottom: 20px; padding: 16px; background: #f3f4f6; border-radius: 6px;">
              <p style="margin: 0 0 8px; font-size: 12px; font-weight: 600; text-transform: uppercase; color: #6b7280;">Nome</p>
              <p style="margin: 0; font-size: 16px; color: #1a1a1a;">${escapeHtml(body.name)}</p>
            </div>

            <div style="margin-bottom: 20px; padding: 16px; background: #f3f4f6; border-radius: 6px;">
              <p style="margin: 0 0 8px; font-size: 12px; font-weight: 600; text-transform: uppercase; color: #6b7280;">Email</p>
              <p style="margin: 0; font-size: 16px; color: #1a1a1a;"><a href="mailto:${escapeHtml(body.email)}" style="color: #2563eb; text-decoration: none;">${escapeHtml(body.email)}</a></p>
            </div>

            ${body.company ? `
            <div style="margin-bottom: 20px; padding: 16px; background: #f3f4f6; border-radius: 6px;">
              <p style="margin: 0 0 8px; font-size: 12px; font-weight: 600; text-transform: uppercase; color: #6b7280;">Empresa</p>
              <p style="margin: 0; font-size: 16px; color: #1a1a1a;">${escapeHtml(body.company)}</p>
            </div>
            ` : ''}

            <div style="margin-bottom: 24px;">
              <p style="margin: 0 0 8px; font-size: 12px; font-weight: 600; text-transform: uppercase; color: #6b7280;">Mensagem</p>
              <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #1a1a1a; white-space: pre-wrap;">${escapeHtml(body.message)}</p>
            </div>

            <div style="border-top: 1px solid #e5e7eb; padding-top: 16px; margin-top: 24px;">
              <p style="margin: 0; font-size: 12px; color: #6b7280; text-align: center;">
                Responda directamente a esta mensagem para contactar ${escapeHtml(body.name)}
              </p>
            </div>
          </div>
        </div>
      `
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
