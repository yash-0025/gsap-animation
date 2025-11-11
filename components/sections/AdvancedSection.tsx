"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AdvancedSection = () => {
    const container = useRef<HTMLElement>(null);

    useGSAP(() => {
        const boxes = gsap.utils.toArray<HTMLElement>(".random-box");
        
        boxes.forEach(box => {
            gsap.to(box, {
                x: gsap.utils.random(-100, 100),
                y: gsap.utils.random(-50, 50),
                rotation: gsap.utils.random(-180, 180),
                scale: gsap.utils.random(0.5, 1.5),
                duration: gsap.utils.random(1, 2),
                ease: "power2.inOut",
                repeat: -1,
                yoyo: true,
                scrollTrigger: {
                    trigger: ".random-section",
                    start: "top 70%",
                }
            });
        });

        gsap.to(".callback-box", {
            x: 300,
            duration: 2,
            ease: "power2.inOut",
            onStart: () => {
                console.log("Animation started!");
            },
            onUpdate: function() {
                const progress = Math.round(this.progress() * 100);
                const progressEl = document.querySelector(".progress-text");
                if (progressEl) {
                    progressEl.textContent = `${progress}%`;
                }
            },
            onComplete: () => {
                console.log("Animation complete!");
            },
            scrollTrigger: {
                trigger: ".callback-section",
                start: "top 70%",
            }
        });

        const customEase = (x: number) => {
            return x < 0.5
                ? 8 * x * x * x * x
                : 1 - Math.pow(-2 * x + 2, 4) / 2;
        };

        gsap.to(".custom-ease-box", {
            y: 200,
            duration: 2,
            ease: customEase,
            yoyo: true,
            repeat: -1,
            scrollTrigger: {
                trigger: ".custom-ease-section",
                start: "top 70%",
            }
        });

        gsap.to(".function-box", {
            x: (index) => index * 100,
            rotation: (index) => index * 90,
            backgroundColor: (index) => {
                const colors = ["#ef4444", "#10b981", "#3b82f6", "#a855f7"];
                return colors[index];
            },
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".function-section",
                start: "top 70%",
            }
        });

        gsap.to(".scroll-box", {
            scrollTrigger: {
                trigger: ".scroll-link-section",
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
                onUpdate: (self) => {
                    const rotation = self.progress * 720;
                    gsap.set(".scroll-box", { rotation });
                }
            }
        });

        const isMobile = window.innerWidth < 768;
        
        gsap.from(".conditional-box", {
            x: isMobile ? -100 : -200,
            opacity: 0,
            duration: isMobile ? 0.5 : 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".conditional-section",
                start: "top 70%",
            }
        });

        ScrollTrigger.batch(".batch-item", {
            onEnter: (elements) => {
                gsap.from(elements, {
                    y: 100,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out"
                });
            },
            start: "top 80%",
        });

    }, { scope: container });

    return (
        <section ref={container} className="section section-light">
            <div className="p-8 space-y-32 w-full max-w-6xl">
                <div className="random-section">
                    <h2 className="text-4xl font-bold mb-8">Random Animations</h2>
                    <p className="text-lg text-zinc-700 mb-8">
                        Using gsap.utils.random() for organic movement
                    </p>
                    <div className="flex gap-4 justify-center">
                        <div className="random-box w-16 h-16 bg-red-500 rounded"></div>
                        <div className="random-box w-16 h-16 bg-green-500 rounded"></div>
                        <div className="random-box w-16 h-16 bg-blue-500 rounded"></div>
                        <div className="random-box w-16 h-16 bg-purple-500 rounded"></div>
                    </div>
                </div>

                <div className="callback-section">
                    <h2 className="text-4xl font-bold mb-8">Animation Callbacks</h2>
                    <p className="text-lg text-zinc-700 mb-4">
                        Progress: <span className="progress-text font-bold">0%</span>
                    </p>
                    <div className="callback-box w-20 h-20 bg-blue-600 rounded"></div>
                </div>

                <div className="custom-ease-section">
                    <h2 className="text-4xl font-bold mb-8">Custom Easing Function</h2>
                    <div className="custom-ease-box w-20 h-20 bg-purple-600 rounded mx-auto"></div>
                </div>

                <div className="function-section">
                    <h2 className="text-4xl font-bold mb-8">Function-Based Values</h2>
                    <p className="text-lg text-zinc-700 mb-8">
                        Each element gets different values based on its index
                    </p>
                    <div className="flex gap-4">
                        <div className="function-box w-16 h-16 bg-zinc-400 rounded"></div>
                        <div className="function-box w-16 h-16 bg-zinc-400 rounded"></div>
                        <div className="function-box w-16 h-16 bg-zinc-400 rounded"></div>
                        <div className="function-box w-16 h-16 bg-zinc-400 rounded"></div>
                    </div>
                </div>

                <div className="scroll-link-section min-h-screen flex items-center justify-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-8 text-center">Scroll-Linked Animation</h2>
                        <p className="text-lg text-zinc-700 mb-8 text-center">
                            Rotation linked to scroll position
                        </p>
                        <div className="scroll-box w-24 h-24 bg-orange-500 rounded-lg mx-auto"></div>
                    </div>
                </div>

                <div className="conditional-section">
                    <h2 className="text-4xl font-bold mb-8">Conditional Animation</h2>
                    <p className="text-lg text-zinc-700 mb-8">
                        Different animation on mobile vs desktop
                    </p>
                    <div className="conditional-box w-20 h-20 bg-teal-600 rounded"></div>
                </div>

                <div className="batch-section">
                    <h2 className="text-4xl font-bold mb-8">Batch Animations</h2>
                    <p className="text-lg text-zinc-700 mb-8">
                        Efficiently animate many elements
                    </p>
                    <div className="grid grid-cols-4 gap-4">
                        {Array.from({ length: 12 }).map((_, i) => (
                            <div key={i} className="batch-item bg-zinc-800 text-white p-6 rounded-lg text-center">
                                {i + 1}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AdvancedSection;