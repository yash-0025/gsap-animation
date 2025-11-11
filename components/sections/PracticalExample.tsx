"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PracticalExamples = () => {
    const container = useRef<HTMLElement>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.to(".parallax-back", {
            y: -150,
            ease: "none",
            scrollTrigger: {
                trigger: ".parallax-container",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            }
        });

        gsap.to(".parallax-mid", {
            y: -100,
            ease: "none",
            scrollTrigger: {
                trigger: ".parallax-container",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            }
        });

        gsap.to(".parallax-front", {
            y: -50,
            ease: "none",
            scrollTrigger: {
                trigger: ".parallax-container",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            }
        });

        gsap.from(".reveal-image", {
            clipPath: "inset(0 100% 0 0)",
            duration: 1.5,
            ease: "power3.inOut",
            scrollTrigger: {
                trigger: ".reveal-image",
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });

        const counters = gsap.utils.toArray<HTMLElement>(".counter-number");
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute("data-target") || "0");
            
            gsap.to(counter, {
                textContent: target,
                duration: 2,
                ease: "power2.out",
                snap: { textContent: 1 },
                scrollTrigger: {
                    trigger: counter,
                    start: "top 80%",
                    toggleActions: "play none none reset"
                }
            });
        });

        const horizontalSection = document.querySelector<HTMLElement>(".horizontal-scroll");
        if (horizontalSection) {
            const scrollWidth = horizontalSection.scrollWidth - window.innerWidth;
            
            gsap.to(".horizontal-scroll", {
                x: -scrollWidth,
                ease: "none",
                scrollTrigger: {
                    trigger: ".horizontal-container",
                    start: "top top",
                    end: () => `+=${scrollWidth}`,
                    pin: true,
                    scrub: 1,
                }
            });
        }

        gsap.from(".grid-card", {
            scale: 0.8,
            opacity: 0,
            duration: 0.6,
            stagger: {
                amount: 0.8,
                from: "random"
            },
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: ".grid-container",
                start: "top 70%",
            }
        });

        const marqueeContent = document.querySelector<HTMLElement>(".marquee-content");
        if (marqueeContent) {
            const marqueeWidth = marqueeContent.offsetWidth;
            
            gsap.to(".marquee-content", {
                x: -marqueeWidth / 2,
                duration: 20,
                ease: "none",
                repeat: -1,
            });
        }

    }, { 
        scope: container,
        dependencies: [isMenuOpen, isModalOpen] 
    });

    useGSAP(() => {
        if (!menuRef.current) return;

        if (isMenuOpen) {
            gsap.to(menuRef.current, {
                x: 0,
                duration: 0.4,
                ease: "power3.out"
            });

            gsap.from(".menu-item", {
                x: -50,
                opacity: 0,
                duration: 0.4,
                stagger: 0.1,
                ease: "power3.out",
                delay: 0.2
            });
        } else {
            gsap.to(menuRef.current, {
                x: "-100%",
                duration: 0.3,
                ease: "power3.in"
            });
        }
    }, { dependencies: [isMenuOpen], scope: container });

    useGSAP(() => {
        if (!modalRef.current) return;

        if (isModalOpen) {
            gsap.to(modalRef.current, {
                autoAlpha: 1,
                duration: 0.3,
                ease: "power2.out"
            });

            gsap.from(".modal-content", {
                scale: 0.8,
                opacity: 0,
                duration: 0.4,
                ease: "back.out(1.7)",
                delay: 0.1
            });
        } else {
            gsap.to(modalRef.current, {
                autoAlpha: 0,
                duration: 0.2,
                ease: "power2.in"
            });
        }
    }, { dependencies: [isModalOpen], scope: container });

    return (
        <section ref={container} className="section section-dark text-white">
            <div className="p-8 space-y-32 w-full max-w-6xl">
                <div className="text-center">
                    <h2 className="text-5xl font-bold mb-4">Real-World Examples</h2>
                    <p className="text-xl text-zinc-400">
                        Production-ready animations for your projects
                    </p>
                </div>

                <div className="parallax-container relative h-[600px] overflow-hidden rounded-xl">
                    <div className="parallax-back absolute inset-0 bg-blue-900 flex items-center justify-center text-4xl font-bold">
                        Background Layer
                    </div>
                    <div className="parallax-mid absolute inset-0 flex items-center justify-center text-5xl font-bold text-blue-300">
                        Middle Layer
                    </div>
                    <div className="parallax-front absolute inset-0 flex items-center justify-center text-6xl font-bold text-white">
                        Front Layer
                    </div>
                </div>

                <div>
                    <h3 className="text-3xl font-bold mb-8">Image Reveal</h3>
                    <div className="reveal-image h-96 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-2xl font-bold">
                        Dramatic Image Reveal
                    </div>
                </div>

                <div>
                    <h3 className="text-3xl font-bold mb-8 text-center">Our Impact</h3>
                    <div className="grid grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="counter-number text-5xl font-bold text-blue-400" data-target="1250">0</div>
                            <p className="text-zinc-400 mt-2">Projects</p>
                        </div>
                        <div>
                            <div className="counter-number text-5xl font-bold text-green-400" data-target="5400">0</div>
                            <p className="text-zinc-400 mt-2">Clients</p>
                        </div>
                        <div>
                            <div className="counter-number text-5xl font-bold text-purple-400" data-target="98">0</div>
                            <p className="text-zinc-400 mt-2">Awards</p>
                        </div>
                    </div>
                </div>

                <div className="horizontal-container min-h-screen">
                    <h3 className="text-3xl font-bold mb-8">Horizontal Scroll Gallery</h3>
                    <div className="horizontal-scroll flex gap-8">
                        {[1, 2, 3, 4, 5].map(i => (
                            <div key={i} className="flex-shrink-0 w-96 h-96 bg-zinc-800 rounded-xl flex items-center justify-center text-4xl font-bold">
                                Slide {i}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid-container">
                    <h3 className="text-3xl font-bold mb-8 text-center">Staggered Grid</h3>
                    <div className="grid grid-cols-4 gap-4">
                        {Array.from({ length: 12 }).map((_, i) => (
                            <div key={i} className="grid-card bg-zinc-800 p-8 rounded-lg text-center text-xl font-semibold">
                                {i + 1}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="overflow-hidden">
                    <h3 className="text-3xl font-bold mb-8 text-center">Infinite Marquee</h3>
                    <div className="marquee-content flex gap-8 whitespace-nowrap">
                        <span className="text-4xl font-bold">⭐ GSAP</span>
                        <span className="text-4xl font-bold">⚡ Lenis</span>
                        <span className="text-4xl font-bold">🎨 Animation</span>
                        <span className="text-4xl font-bold">🚀 Performance</span>
                        <span className="text-4xl font-bold">⭐ GSAP</span>
                        <span className="text-4xl font-bold">⚡ Lenis</span>
                        <span className="text-4xl font-bold">🎨 Animation</span>
                        <span className="text-4xl font-bold">🚀 Performance</span>
                    </div>
                </div>

                <div className="space-y-8">
                    <h3 className="text-3xl font-bold text-center">Interactive Components</h3>
                    
                    <div className="flex gap-4 justify-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                        >
                            Toggle Menu
                        </button>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
                        >
                            Open Modal
                        </button>
                    </div>
                </div>

                <div
                    ref={menuRef}
                    className="fixed top-0 left-0 h-full w-64 bg-zinc-900 shadow-2xl z-50"
                    style={{ transform: "translateX(-100%)" }}
                >
                    <div className="p-8">
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="mb-8 text-2xl"
                        >
                            ✕
                        </button>
                        <nav className="space-y-4">
                            <div className="menu-item text-xl">Home</div>
                            <div className="menu-item text-xl">About</div>
                            <div className="menu-item text-xl">Services</div>
                            <div className="menu-item text-xl">Contact</div>
                        </nav>
                    </div>
                </div>

                <div
                    ref={modalRef}
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    style={{ visibility: "hidden", opacity: 0 }}
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className="modal-content bg-white text-black p-8 rounded-xl max-w-md"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3 className="text-2xl font-bold mb-4">Animated Modal</h3>
                        <p className="text-zinc-700 mb-6">
                            This modal animates in with a scale and fade effect using GSAP!
                        </p>
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PracticalExamples;