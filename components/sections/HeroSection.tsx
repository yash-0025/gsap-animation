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

    gsap.from('.hero-button', {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: 'back.out(1.7)',
        delay: 1.2,
    });
  }, {
    scope: container
  });

  return (
  <section ref={container} className="section section-dark">
    <div className="text-center space-y-8">
      <h1 className="hero-title text-6xl md:text-8xl font-bold">GSAP Animate</h1>
      <p className="hero-subtitle text-2xl md:text-3xl text-zinc-400">
       Animate Like a Professional animator.
      </p>
      <button className="hero-button px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition-colors">Get Started</button>
    </div>
  </section>
  )
};

export default HeroSection;