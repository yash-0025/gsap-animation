"use client";

import { use, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TimelineSection = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {

    const mm = gsap.matchMedia();
    mm.add("(min-width: 0px)", () => {
        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".first-section",
                start: 'top 40%',
                end: 'bottom 40%',
                // scrub: 1,
                toggleActions: 'play none none reverse',
            },
            defaults: { duration: 0.8, ease: "power3.out" },
          });
    
          tl1
            .from(".tl-title", { y: -50, opacity: 0 })
            .from(".tl-subtitle", { y: 50, opacity: 0 })
            .from(".tl-box-1", { scale: 0, opacity: 0 })
            .from(".tl-box-2", { scale: 0, opacity: 0 })
            .from(".tl-box-3", { scale: 0, opacity: 0 });
    
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".custom-timing",
                start: "top bottom",
                end:"bottom 20%",
                // scrub: 1,
                toggleActions: "play none none reverse"
            }
        });
    
        tl2.from('.ct-1', {x: -100, opacity: 0, duration: 0.6})
           .from('.ct-2', {x: -100, opacity: 0, duration: 0.6}, "-=0.3")
           .from('.ct-3', {x: -100, opacity:0, duration: 0.6}, "-=0.3")
           .from('.ct-4', {x: -100, opacity:0, duration:0.6}, "-=0.3");
    
    
        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".stagger-timeline",
                start: "top 70%",
                // end: 'bottom top',
                // scrub: 1,
                toggleActions: 'play none none reverse',
            }
        });
        tl3.from(".st-title", {
            scale: 0, opacity:0, duration: 0.6
        })
            .from(".st-card", {
                y: 100,
                opacity: 0,
                duration: 0.6,
                stagger: 0.15,
                ease: "back.out(1.7)"
            });
    
        const tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: ".label-timeline",
                start: 'top 70%',
                toggleActions: 'play none none reverse',
            }
        });
    
        tl4.addLabel("start")
           .from(".lt-header", {y: -50, opacity:0, duration:0.5})
           .addLabel("content")
           .from('.lt-left', { x:-100, opacity:0, duration: 0.6}, "content")
           .from('.lt-right', { x: 100 , opacity:0, duration: 0.6}, "content");    
    });
    
    
mm.add("(min-width: 768px)", () => {
    const tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: '.scrub-timeline',
            start: 'top top',
            end: "+=1000",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
        }
    })
    tl5.to(".scrub-item", { x: 500, duration: 1})
       .to(".scrub-item", {rotation: 360, duration:1})
       .to(".scrub-item", { scale: 2, duration:1})
       .to(".scrub-item", { backgroundColor: "#ef4444", duration:1});
});

mm.add("(max-width: 768px)", () => {
    const tl5 = gsap.timeline({
        scrollTrigger: {
          trigger: ".scrub-timeline",
          start: "top top",
          end: "+=500",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl5
        .to(".scrub-item", { x: 200, duration: 1 })
        .to(".scrub-item", { rotation: 360, duration: 1 })
        .to(".scrub-item", { scale: 1.5, duration: 1 })
        .to(".scrub-item", { backgroundColor: "#ef4444", duration: 1 });
})

    return () => mm.revert()
    },
    {
      scope: container,
    }
  );
  return (
    <section ref={container} className="section section-dark text-white">
      <div className="p-8 space-y-32 w-full max-w-6xl">
        <div className="text-center space-y-8 first-section">
          <h2 className="tl-title text-5xl font-bold">Basic Timeline</h2>
          <p className="tl-subtitle text-xl text-zinc-400">
            Animations Play in sequence automatically
          </p>
          <div>
            <div className="tl-box-1 w-20 h-20 bg-blue-600 rounded-lg"></div>
            <div className="tl-box-2 w-20 h-20 bg-green-600 rounded-lg"></div>
            <div className="tl-box-3 w-20 h-20 bg-purple-600 rounded-lg"></div>
          </div>
        </div>

        <div className="custom-timing space-y-4">
          <h2 className="text-4xl font-bold mb-8">Overlapping Animations</h2>
          <div className="ct-1 bg-zinc-800 p-6 rounded-lg">Step 1</div>
          <div className="ct-2 bg-zinc-800 p-6 rounded-lg">
            Step 2 (overlaps)
          </div>
          <div className="ct-3 bg-zinc-800 p-6 rounded-lg">
            Step 3 (overlaps)
          </div>
          <div className="ct-4 bg-zinc-800 p-6 rounded-lg">
            Step 4 (overlaps)
          </div>
        </div>

        <div className="stagger-timeline text-center space-y-8">
            <h2 className="st-title text-4xl font-bold">Timeline with Stagger</h2>
            <div className="grid grid-cols-3 gap-4">
                <div className="st-card bg-zinc-800 p-6 rounded-lg">Card 1</div>
                <div className="st-card bg-zinc-800 p-6 rounded-lg">Card 2</div>
                <div className="st-card bg-zinc-800 p-6 rounded-lg">Card 3</div>
            </div>
        </div>

        <div className="label-timeline space-y-8">
            <h2 className="lt-header text-4xl font-bold text-center">Timeline with labels</h2>
            <div className="grid grid-cols-2 gap-8">
                <div className="lt-left bg-zinc-800 p-6 rounded-lg">
                    Left content animates from left
                </div>
                <div className="lt-right bg-zinc-800 p-6 rounded-lg">
                    Right content animates from right
                </div>
            </div>
        </div>



        <div className="scrub-timeline min-h-screen flex items-center justify-center md:flex-col">
            <div className="text center space-y-8">
                <h2 className="text-4xl font-bold">Scrubbed timeline</h2>
                <p className="text-xl text-zinc-400">Scroll to control the timeline progress</p>
                <div className="scrub-item w-24 h-24 bg-blue-600 rounded-lg mx-auto"></div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default TimelineSection;
