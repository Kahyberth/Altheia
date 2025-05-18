import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  start?: number;
  end: number;
  duration?: number;
  delay?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export default function StatCounter({
  start = 0,
  end,
  duration = 2,
  delay = 0,
  decimals = 0,
  suffix = "",
  prefix = "",
  className,
}: StatCounterProps) {
  const [count, setCount] = useState(start);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;

    hasAnimated.current = true;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min(
        (timestamp - startTimestamp) / (duration * 1000),
        1
      );

      const currentCount = progress * (end - start) + start;
      setCount(currentCount);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    const timeoutId = setTimeout(() => {
      window.requestAnimationFrame(step);
    }, delay * 1000);

    return () => clearTimeout(timeoutId);
  }, [start, end, duration, delay, isVisible]);

  return (
    <span ref={countRef} className={cn(className)}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}
