/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect } from "react";
import { useCounter, useIntersectionObserver } from "../utils/hooks";

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  startOnIntersect?: boolean;
}

const Counter: React.FC<CounterProps> = ({ end, suffix = "", prefix = "", startOnIntersect = true }) => {
  const [count, startCounter] = useCounter(end, 2000, startOnIntersect);
  const [ref, isIntersecting] = useIntersectionObserver();
  useEffect(() => {
    if (isIntersecting && startOnIntersect) startCounter();
  }, [isIntersecting, startOnIntersect, startCounter]);
  return (
    <span ref={ref as any} className="animate-counter">
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

export default Counter;
