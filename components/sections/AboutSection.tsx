"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
    const container = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.from(".about-text", {
            x: -100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",

            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
            }
        })
    }, {
        scope: container
    })

    return (
        <section className="section section-light" ref={container}>
            <div className="p-8 max-w-2xl">
                <h2 className="text-4xl font-bold mb-4">About us</h2>
                <p className="about-text text-lg">We are a creative agency that believes in the power of motion. This animation is triggered as you scroll.</p>
            </div>
        </section>
    )
}

export default AboutSection;