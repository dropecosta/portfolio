import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/data";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body?.name || !body?.email || !body?.message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ ok: true, preview: true });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: process.env.CONTACT_TO_EMAIL || siteConfig.email,
    subject: `Nova mensagem de ${body.name}`,
    replyTo: body.email,
    text: `Nome: ${body.name}\nEmail: ${body.email}\nEmpresa: ${body.company || "-"}\n\n${body.message}`
  });

  return NextResponse.json({ ok: true });
}
