"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MorphSVGSection = () => {
    const container = useRef<HTMLElement>(null);

    useGSAP(() => {
        const pathLength = document.querySelector<SVGPathElement>(".draw-path")?.getTotalLength() || 0;
        
        gsap.set(".draw-path", {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength
        });

        gsap.to(".draw-path", {
            strokeDashoffset: 0,
            duration: 2,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".draw-svg",
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.from(".grow-circle", {
            attr: { r: 0 },
            duration: 1.5,
            ease: "elastic.out(1, 0.5)",
            scrollTrigger: {
                trigger: ".grow-svg",
                start: "top 70%",
            }
        });

        gsap.to(".color-rect", {
            attr: { fill: "#ef4444" },
            duration: 1,
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1,
            scrollTrigger: {
                trigger: ".color-svg",
                start: "top 70%",
            }
        });

        const paths = gsap.utils.toArray<SVGPathElement>(".complex-path");
        
        paths.forEach(path => {
            const length = path.getTotalLength();
            gsap.set(path, {
                strokeDasharray: length,
                strokeDashoffset: length
            });
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".complex-svg",
                start: "top 70%",
            }
        });

        paths.forEach(path => {
            tl.to(path, {
                strokeDashoffset: 0,
                duration: 1.5,
                ease: "power2.inOut"
            }, "-=0.5");
        });

        gsap.to(".transform-group", {
            rotation: 360,
            scale: 1.5,
            duration: 2,
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1,
            scrollTrigger: {
                trigger: ".transform-svg",
                start: "top 70%",
            }
        });

        gsap.to(".loader-circle", {
            rotation: 360,
            duration: 1,
            ease: "none",
            repeat: -1,
            transformOrigin: "50% 50%"
        });

    }, { scope: container });

    return (
        <section ref={container} className="section section-dark text-white">
            <div className="p-8 space-y-32 w-full max-w-6xl">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-8">SVG Line Drawing</h2>
                    <svg className="draw-svg mx-auto" width="300" height="200" viewBox="0 0 300 200">
                        <path
                            className="draw-path"
                            d="M 50 100 Q 150 50 250 100"
                            fill="none"
                            stroke="#60a5fa"
                            strokeWidth="4"
                        />
                    </svg>
                </div>

                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-8">Growing Circle</h2>
                    <svg className="grow-svg mx-auto" width="200" height="200" viewBox="0 0 200 200">
                        <circle
                            className="grow-circle"
                            cx="100"
                            cy="100"
                            r="80"
                            fill="#10b981"
                        />
                    </svg>
                </div>

                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-8">Color Pulse</h2>
                    <svg className="color-svg mx-auto" width="200" height="200" viewBox="0 0 200 200">
                        <rect
                            className="color-rect"
                            x="50"
                            y="50"
                            width="100"
                            height="100"
                            fill="#3b82f6"
                            rx="10"
                        />
                    </svg>
                </div>

                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-8">Complex Drawing</h2>
                    <svg className="complex-svg mx-auto" width="300" height="300" viewBox="0 0 300 300">
                        <path
                            className="complex-path"
                            d="M 150 50 L 200 200 L 100 120 L 200 120 L 100 200 Z"
                            fill="none"
                            stroke="#a855f7"
                            strokeWidth="3"
                        />
                    </svg>
                </div>

                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-8">Transform Animation</h2>
                    <svg className="transform-svg mx-auto" width="200" height="200" viewBox="0 0 200 200">
                        <g className="transform-group">
                            <rect x="75" y="75" width="50" height="50" fill="#f59e0b" />
                        </g>
                    </svg>
                </div>

                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-8">Animated Loader</h2>
                    <svg width="100" height="100" viewBox="0 0 100 100" className="mx-auto">
                        <circle
                            className="loader-circle"
                            cx="50"
                            cy="50"
                            r="35"
                            fill="none"
                            stroke="#60a5fa"
                            strokeWidth="5"
                            strokeDasharray="164 64"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
}

export default MorphSVGSection;