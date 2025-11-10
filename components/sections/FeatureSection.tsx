"use client";

import { useRef } from "react";
import {useGSAP} from '@gsap/react';
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = () => {
    const container = useRef<HTMLElement>(null);

    useGSAP(() => {
       gsap.from('.feature-card', {
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2,

        scollTrigger: {
            trigger: container.current,
            start: 'top 70%',
            toggleActions: 'pla none none none',
        },
       });
    }, {
        scope: container
    });

    return (
        <section ref={container} className="section section-dark">
            <div className="p-8 text-center">
                <h2 className="text-4xl font-bold mb-12">Our Services</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="feature-card bg-zinc-800 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">Web Design</h3>
                        <p>Crafting beautiful and functional websites.</p>
                    </div>
                    <div className="feature-card bg-zinc-800 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">Animation</h3>
                        <p>Bringing your ideas to life with motion</p>
                    </div>
                    <div className="features-card bg-zinc-800 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">Strategy</h3>
                        <p>Data-Driven insights for growth.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection;