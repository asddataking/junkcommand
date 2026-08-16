"use client";

import { useEffect, useRef, type ComponentPropsWithoutRef } from "react";
import { useInView, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NumberTickerProps extends ComponentPropsWithoutRef<"span"> {
  value: number;
  startValue?: number;
  direction?: "up" | "down";
  delay?: number;
  decimalPlaces?: number;
}

function formatNumber(value: number, decimalPlaces: number) {
  return Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  }).format(Number(value.toFixed(decimalPlaces)));
}

export function NumberTicker({
  value,
  startValue,
  direction = "up",
  delay = 0,
  className,
  decimalPlaces = 0,
  ...props
}: NumberTickerProps) {
  const reduceMotion = useReducedMotion();
  const shouldAnimate = startValue !== undefined && startValue !== value && !reduceMotion;
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(
    shouldAnimate ? (direction === "down" ? value : startValue) : value,
  );
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (!shouldAnimate || !isInView) return;

    const timer = setTimeout(() => {
      motionValue.set(direction === "down" ? startValue : value);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [motionValue, isInView, delay, value, direction, startValue, shouldAnimate]);

  useEffect(() => {
    if (!shouldAnimate) return;
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = formatNumber(latest, decimalPlaces);
      }
    });
  }, [springValue, decimalPlaces, shouldAnimate]);

  return (
    <span
      ref={ref}
      className={cn("inline-block tabular-nums tracking-wider text-white", className)}
      {...props}
    >
      {formatNumber(value, decimalPlaces)}
    </span>
  );
}
