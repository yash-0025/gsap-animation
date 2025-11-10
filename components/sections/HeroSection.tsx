"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const HeroSection = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
    });

    gsap.from(".hero-subtitle", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.8,
    });
  }, {
    scope: container
  });

  return (
  <section ref={container} className="section section-dark">
    <div className="text-center">
      <h1 className="hero-title text-6xl md:text-8xl font-bold">Animate</h1>
      <p className="hero-subtitle text-2xl md:text-3xl text-zinc-400">
        With GSAP and Lenis
      </p>
    </div>
  </section>
  )
};

export default HeroSection;