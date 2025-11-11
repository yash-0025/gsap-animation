"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const TextPluginSection = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.to(".typewriter", {
        duration: 1,
        text: "This text types out like a typewriter...",
        ease: "none",
        scrollTrigger: {
          trigger: ".typewriter",
          start: "top 40%",
        },
      });

      gsap.to(".text-replace", {
        duration: 2,
        text: "The text has been replaced",
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".text-replace",
          start: "top 80%",
        },
      });

      const words = gsap.utils.toArray(".word");
      gsap.from(words, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".word-container",
          start: "top 80%",
        },
      });

      const chars = gsap.utils.toArray(".char");
      gsap.from(chars, {
        opacity: 0,
        scale: 0,
        rotation: 360,
        duration: 0.5,
        stagger: 0.03,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: ".char-container",
            start: "top 80%",
        }
      })

      const scrambleText = "DECRYPTING MESSAGE...";
      const finalText = "Mission Accomplished!";

      gsap.timeline({
        scrollTrigger: {
            trigger: '.scramble',
            start: "top 80%",
            // scrub: 1,
        }
      })
      .to(".scramble", {
        duration: 1.5,
        text: scrambleText,
        ease: "none",
      })
      .to(".scramble", {
        duration: 1.5,
        text: finalText,
        ease: "none",
        delay: 0.5,
      });


      gsap.to(".counter", {
        duration: 3,
        textContent: 1000,
        roundProps:"textContent",
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".counter",
            start: "top 80%",
        }
      });

    },
    {
      scope: container,
    }
  );

  return (
    <section ref={container} className="section section-light">
      <div className="p-8 space-y-32 w-full max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold mb-8">TypeWriter Effect</h2>
          <p className="typewriter text-4xl font-mono text-blue-600 min-h-[60px]">
            This is the original text...
          </p>
        </div>

        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold mb-8">Text Replacement</h2>
          <p className="text-replace text-xl text-zinc-700">
            This is the original text...
          </p>
        </div>

        <div className="word-container max-w-2xl">
          <h2 className="text-4xl font-bold mb-8">Word-by-Word Animation</h2>
          <p className="text-2xl leading-realxed">
            <span className="word inline-block mr-2">Each</span>
            <span className="word inline-block mr-2">word</span>
            <span className="word inline-block mr-2">appears</span>
            <span className="word inline-block mr-2">one</span>
            <span className="word inline-block mr-2">after</span>
            <span className="word inline-block mr-2">another</span>
            <span className="word inline-block mr-2">with</span>
            <span className="word inline-block mr-2">smooth</span>
            <span className="word inline-block mr-2">timing</span>
          </p>
        </div>

        <div className="char-container max-w-2xl">
          <h2 className="text-4xl font-bold mb-8">Character Animation</h2>
          <p className="text-3xl font-bold text-blue-600">
            <span className="char inline-block">A</span>
            <span className="char inline-block">N</span>
            <span className="char inline-block">I</span>
            <span className="char inline-block">M</span>
            <span className="char inline-block">A</span>
            <span className="char inline-block">T</span>
            <span className="char inline-block">E</span>
            <span className="char inline-block">🚀</span>
          </p>
        </div>


    <div className="max-w-2xl">
        <h2 className="text-4xl font-bold mb-8">Scramble Effect</h2>
        <p className="scramble text-3xl font-mono font-bold text-green-600 min-h-[40px]"></p>
    </div>

    <div className="max-w-2xl">
        <h2 className="text-4xl font-bold mb-8">Number Counter</h2>
        <div className="text-center">
            <p className="text-6xl font-bold text-blue-600">
                <span className="counter">0</span>
            </p>
            <p className="text-xl text-zinc-600">Projects Completed</p>
        </div>
    </div>
      </div>
    </section>
  );
};

export default TextPluginSection;
