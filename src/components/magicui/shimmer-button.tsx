import React, { type ComponentPropsWithoutRef, type CSSProperties } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ShimmerButtonProps extends ComponentPropsWithoutRef<"button"> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  href?: string;
}

export const ShimmerButton = React.forwardRef<
  HTMLButtonElement,
  ShimmerButtonProps
>(
  (
    {
      shimmerColor = "#ffffff",
      shimmerSize = "0.05em",
      shimmerDuration = "3s",
      borderRadius = "2px",
      background = "linear-gradient(90deg, #0787ff, #18a0ff)",
      className,
      children,
      href,
      onClick,
      ...props
    },
    ref,
  ) => {
    const style = {
      "--spread": "90deg",
      "--shimmer-color": shimmerColor,
      "--radius": borderRadius,
      "--speed": shimmerDuration,
      "--cut": shimmerSize,
      "--bg": background,
    } as CSSProperties;

    const classes = cn(
      "group relative z-0 inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden [border-radius:var(--radius)] border border-white/10 px-5 py-3 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.08em] text-white [background:var(--bg)]",
      "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
      "shadow-[0_0_24px_rgba(7,135,255,0.35)]",
      className,
    );

    const content = (
      <>
        <div
          className={cn(
            "-z-30 blur-[2px]",
            "absolute inset-0 overflow-visible [container-type:size]",
          )}
        >
          <div className="animate-shimmer-slide absolute inset-0 aspect-square h-[100cqh] rounded-none [mask:none]">
            <div className="animate-spin-around absolute -inset-full w-auto rotate-0 [translate:0_0] [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]" />
          </div>
        </div>
        <span className="relative z-10 inline-flex items-center gap-2">
          {children}
        </span>
        <div
          className={cn(
            "absolute inset-0 size-full",
            "shadow-[inset_0_-8px_10px_#ffffff1f]",
            "transform-gpu transition-all duration-300 ease-in-out",
            "group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]",
            "group-active:shadow-[inset_0_-10px_10px_#ffffff3f]",
          )}
        />
        <div
          className={cn(
            "absolute [inset:var(--cut)] -z-20 [border-radius:var(--radius)] [background:var(--bg)]",
          )}
        />
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          className={classes}
          style={style}
          onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        style={style}
        className={classes}
        ref={ref}
        onClick={onClick}
        {...props}
      >
        {content}
      </button>
    );
  },
);

ShimmerButton.displayName = "ShimmerButton";
