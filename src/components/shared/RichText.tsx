import Link from "next/link";
import type { ReactNode } from "react";

const TOKEN = /(\[[^\]]+\]\([^)]+\))/g;
const LINK = /^\[([^\]]+)\]\(([^)]+)\)$/;

export function RichText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const parts = text.split(TOKEN).filter(Boolean);

  return (
    <p className={className}>
      {parts.map((part, index) => {
        const match = part.match(LINK);
        if (!match) return <span key={index}>{part}</span>;
        const [, label, href] = match;
        return (
          <Link
            key={`${href}-${index}`}
            href={href}
            className="font-semibold text-bright underline-offset-2 hover:text-white hover:underline"
          >
            {label}
          </Link>
        );
      })}
    </p>
  );
}

export function RichTextBlock({
  paragraphs,
  className = "space-y-4 leading-relaxed text-muted",
}: {
  paragraphs: string[];
  className?: string;
}) {
  return (
    <div className={className}>
      {paragraphs.map((paragraph) => (
        <RichText key={paragraph.slice(0, 48)} text={paragraph} />
      ))}
    </div>
  );
}

export function richTextToNode(text: string): ReactNode {
  return <RichText text={text} />;
}
