"use client";

import { Send } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { t } = useLanguage();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: { "Content-Type": "application/json" }
    });
    setStatus(response.ok ? "success" : "error");
    if (response.ok) event.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      {["name", "email", "company"].map((field) => (
        <label key={field} className="grid gap-2 text-sm font-medium">
          {field === "name" ? t.contact.name : field === "email" ? t.contact.email : t.contact.company}
          <input
            required={field !== "company"}
            name={field}
            type={field === "email" ? "email" : "text"}
            className="h-11 rounded-md border border-input bg-background px-3 text-sm outline-none transition focus:ring-2 focus:ring-ring"
          />
        </label>
      ))}
      <label className="grid gap-2 text-sm font-medium">
        {t.contact.message}
        <textarea
          required
          name="message"
          rows={6}
          className="resize-none rounded-md border border-input bg-background px-3 py-3 text-sm outline-none transition focus:ring-2 focus:ring-ring"
        />
      </label>
      <Button disabled={status === "loading"} className="w-full sm:w-fit">
        <Send className="h-4 w-4" />
        {status === "loading" ? t.contact.sending : t.contact.send}
      </Button>
      {status === "success" ? <p className="text-sm text-primary">{t.contact.success}</p> : null}
      {status === "error" ? <p className="text-sm text-red-400">{t.contact.error}</p> : null}
    </form>
  );
}
