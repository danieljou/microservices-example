/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {  useEffect, useRef, useState } from "react";

/**
 * Custom hook to observe when an element enters the viewport.
 * Returns a ref, isIntersecting, and hasIntersected (true once intersected).
 */
export default function useIntersectionObserver(options?: IntersectionObserverInit): [
  React.RefObject<HTMLDivElement> | any,
  boolean,
  boolean
] {
  const ref = useRef<React.RefObject<HTMLDivElement> >(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting) setHasIntersected(true);
      },
      options
    );
    observer.observe(node as unknown as Element);
    return () => observer.disconnect();
  }, [options]);

  return [ref, isIntersecting, hasIntersected];
}
