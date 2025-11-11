"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerSection = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".scroll-text", {
        x: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".scroll-text",
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(".scrub-box", {
        x: 100,
        rotation: 360,
        duration: 1,
        scrollTrigger: {
          trigger: ".scrub-box",
          start: "top 60%",
          end: "bottom 20%",
          scrub: 1,
        },
      });

      gsap.to(".pin-content", {
        scrollTrigger: {
          trigger: ".pin-section",
          start: "top top",
          end: "+=500",
        //   pin: ".pin-content",
          pin: true,
          scrub: true,
        },
      });

      gsap.to(".stagger-item", {
        y:100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        markers: true,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".stagger-container",
            start: "top 80%",
            toggleActions: "play none none reverse",
        }
      })
    },
    {
      scope: container,
    }
  );
  return (
    <section ref={container} className="section section-light">
      <div className="p-8 space-y-32 w-full max-w-6xl relative">
        <div className="max-w-2xl">
          <h2 className="text-7xl font-bold mb-4">Basic Scroll Trigger</h2>
          <p className="scroll-text text-4xl text-zinc-700">
            This text fades from left when we scroll to it. When we Scroll back
            it reverse the animation.
          </p>
        </div>

        <div className="space-y-8">
          <h2 className="text-7xl font-bold">Scrub Animation</h2>
          <p className="text-4xl text-zinc-700">
            The box below moves and rotates as we scroll. The animation is
            directly linked to scroll position
          </p>
          <div className="scrub-box w-24 h-24 bg-blue-600 rounded-lg"></div>
        </div>

        <div className="pin-section min-h-[800px] bg-zinc-800 rounded-lg p-8">
          <div className="pin-content">
            <h2 className="text-7xl font-bold mb-4 text-white">Pinned Section</h2>
            <p className="text-4xl text-white ">
              The content stays pinned while we scroll. Keep scrolling to see it
              gets unpin.
            </p>
          </div>
        </div>

        <div className="stagger-container space-y-4">
            <h2 className="text-7xl font-bold mb-8">Stagger Animation</h2>
            <div className="stagger-item bg-zinc-800 text-white p-6 rounded-lg">Item 1 - I appear first</div>
            <div className="stagger-item bg-zinc-800 text-white p-6 rounded-lg">Item 2 - I appear 0.2s later</div>
            <div className="stagger-item bg-zinc-800 text-white p-6 rounded-lg">Item 3 - I appear 0.4s later</div>
            <div className="stagger-item bg-zinc-800 text-white p-6 rounded-lg">Item 4 - I appear 0.6s later</div>
        </div>
      </div>
    </section>
  );
};

export default ScrollTriggerSection;
