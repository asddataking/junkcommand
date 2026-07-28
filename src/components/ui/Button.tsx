import { ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-bright shadow-[0_0_24px_rgba(7,135,255,0.35)]",
  secondary:
    "bg-transparent text-white border border-[rgba(0,135,255,0.55)] hover:border-bright hover:bg-[rgba(7,135,255,0.08)]",
  ghost: "bg-transparent text-muted hover:text-white",
};

type SharedProps = {
  variant?: ButtonVariant;
  showArrow?: boolean;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  href,
  showArrow = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bright disabled:opacity-60 disabled:pointer-events-none rounded-[2px]",
    variants[variant],
    className,
  ].join(" ");

  const content = (
    <>
      {children}
      {showArrow ? <ArrowRight className="size-4 shrink-0" aria-hidden /> : null}
    </>
  );

  if (href) {
    const { onClick, ...linkProps } = props as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <Link href={href} className={classes} onClick={onClick} {...linkProps}>
        {content}
      </Link>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button type="button" className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
