import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  eyebrow,
  title,
  children,
  className
}: {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("mx-auto max-w-6xl px-4 py-16 md:py-24", className)}>
      {eyebrow || title ? (
        <div className="mb-10 max-w-3xl">
          {eyebrow ? <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">{eyebrow}</p> : null}
          {title ? <h2 className="mt-3 text-3xl font-semibold tracking-normal md:text-4xl">{title}</h2> : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}
