"use client"

import { ReactNode, useEffect } from "react"
import Lenis from 'lenis';
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';


interface LenisProviderProps {
    children: ReactNode;
}


const LenisProvider = ({children} : LenisProviderProps) => {
    const pathname = usePathname();

    // Reset scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    // Setup Lenis and ScrollTrigger
    useEffect(() => {
        // 1. Register the ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // 2. Initialize lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            syncTouch: false,
        })
        // 3. Setup GSAP <-> lenis integration (THE MAGIC)
        ScrollTrigger.scrollerProxy(document.body, {
            scrollTop(value) {
                if(arguments.length && typeof value === 'number') {
                    lenis.scrollTo(value, { immediate: true});
                }
                return lenis.scroll;
            },
            getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight,
                };
            },
        });

        // 4. Update ScrollTrigger every time Lenis scrolls
        lenis.on('scroll', ScrollTrigger.update);

        // 5. Use GSAPs ticker to drive Lenis animation frame
        const scrollFn = (time: number) => {
            lenis.raf(time * 1000); // Convert seconds to milliseconds
        }
        gsap.ticker.add(scrollFn);
        gsap.ticker.lagSmoothing(0);

        // 6. Refresh ScrollTrigger on window resize
        const onResize = () =>ScrollTrigger.refresh();
        window.addEventListener('resize', onResize);

        // 7. Cleanup function
        return () => {
            gsap.ticker.remove(scrollFn);
            lenis.destroy();
            window.removeEventListener('resize', onResize);
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        }
    },[]);
    return <>{children}</>
}


export default LenisProvider;