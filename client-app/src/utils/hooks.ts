import { useState, useEffect, useRef } from "react";

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const updatePosition = () => setScrollPosition(window.pageYOffset);
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);
  return scrollPosition;
};

export const useIntersectionObserver = (options: IntersectionObserverInit = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const targetRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected) setHasIntersected(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px", ...options }
    );
    observer.observe(target);
    return () => observer.unobserve(target);
  }, [hasIntersected, options]);
  return [targetRef, isIntersecting, hasIntersected] as const;
};

export const useCounter = (end: number, duration = 2000, startOnIntersect = false) => {
  const [count, setCount] = useState(0);
  const [isStarted, setIsStarted] = useState(!startOnIntersect);
  useEffect(() => {
    if (!isStarted) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, isStarted]);
  const startCounter = () => setIsStarted(true);
  return [count, startCounter] as const;
};
