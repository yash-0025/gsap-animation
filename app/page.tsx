// import HeroSection from '@/components/sections/HeroSection';
// import AboutSection from '@/components/sections/AboutSection';
// import FeaturesSection from '@/components/sections/FeatureSection';
// import ScrollTriggerSection from '@/components/sections/ScrollTriggerSection';
// import TimelineSection from '@/components/sections/TimelineSections';
// import TextPluginSection from '@/components/sections/TextPluginSection';
// import MorphSVGSection from '@/components/sections/MorphSVGSection';
// import AdvancedSection from '@/components/sections/AdvancedSection';
// import PracticalExamples from '@/components/sections/PracticalExample';

// export default function Home() {
//   return (
//     <main>
//       <HeroSection />
//       <TimelineSection />
//      {/*  <ScrollTriggerSection />
//       <AboutSection /> */}
//       <TextPluginSection />
//       {/* <MorphSVGSection />
//       <AdvancedSection /> */}
//       <PracticalExamples />
//       <FeaturesSection />

//       <section className='section section-light'>
//         <h2 className='text-6xl font-bold'>The End.</h2>
//       </section>

//     </main>    
//   );
// }


"use client";

import HeroSection from "@/components/sections/HeroSection";
import ScrollTriggerSection from "@/components/sections/ScrollTriggerSection";
import TimelineSection from "@/components/sections/TimelineSections";
import TextPluginSection from "@/components/sections/TextPluginSection";
import MorphSVGSection from "@/components/sections/MorphSVGSection";
import AdvancedSection from "@/components/sections/AdvancedSection";
import PracticalExamples from "@/components/sections/PracticalExample";

export default function Home() {
  return (
    <main className="relative">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/80 backdrop-blur-sm border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">
              GSAP + Lenis <span className="text-blue-400">Masterclass</span>
            </h1>
            <div className="flex gap-4">
              <a
                href="https://greensock.com/docs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Docs
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* All Animation Sections */}
      <div className="pt-16">
        <HeroSection />
        <ScrollTriggerSection />
        <TimelineSection />
        <TextPluginSection />
        <MorphSVGSection />
        <AdvancedSection />
        <PracticalExamples />

        {/* Footer */}
        <footer className="section section-dark border-t border-zinc-800">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold">You're Now a GSAP Pro! 🎉</h2>
            <p className="text-xl text-zinc-400">
              You've learned everything from basic animations to advanced techniques.
              Now go build something amazing!
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">📚 Documentation</h3>
                <p className="text-zinc-400 text-sm">
                  Refer to GSAP docs for complete API reference
                </p>
              </div>
              <div className="bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">💡 Examples</h3>
                <p className="text-zinc-400 text-sm">
                  Check CodePen for community examples
                </p>
              </div>
              <div className="bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">🎓 Practice</h3>
                <p className="text-zinc-400 text-sm">
                  Build projects to solidify your knowledge
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-zinc-800">
              <p className="text-zinc-500">
                Made with ❤️ using GSAP 3.12+ and Lenis
              </p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}