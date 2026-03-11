"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const ringXRef = useRef(0);
  const ringYRef = useRef(0);
  const mouseXRef = useRef(0);
  const mouseYRef = useRef(0);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    const onMove = (e: MouseEvent) => {
      mouseXRef.current = e.clientX;
      mouseYRef.current = e.clientY;
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    const animate = () => {
      ringXRef.current += (mouseXRef.current - ringXRef.current) * 0.12;
      ringYRef.current += (mouseYRef.current - ringYRef.current) * 0.12;
      ring.style.left = ringXRef.current + "px";
      ring.style.top = ringYRef.current + "px";
      requestAnimationFrame(animate);
    };
    animate();

    document.addEventListener("mousemove", onMove);

    const interactives = document.querySelectorAll("a, button, .cursor-hover");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.classList.add("hovering");
        ring.classList.add("hovering");
      });
      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("hovering");
        ring.classList.remove("hovering");
      });
    });

    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}