'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

export function ParallaxComponent() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggerElement = parallaxRef.current?.querySelector('[data-parallax-layers]');

    if (triggerElement) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      const layers = [
        { layer: '1', yPercent: -20 },
        { layer: '2', yPercent: -35 },
        { layer: '3', yPercent: -60 },
        { layer: '4', yPercent: -90 }
      ];

      layers.forEach((layerObj, idx) => {
        tl.to(
          triggerElement.querySelectorAll(`[data-parallax-layer="${layerObj.layer}"]`),
          {
            yPercent: layerObj.yPercent,
            ease: 'none'
          },
          idx === 0 ? undefined : '<'
        );
      });
    }

    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
      if (triggerElement) {
        gsap.killTweensOf(triggerElement);
      }
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="parallax relative w-full bg-black text-white" ref={parallaxRef}>
      <section className="parallax__header relative h-[100vh] w-full overflow-hidden">
        <div className="parallax__visuals relative h-full w-full">
          <div className="parallax__black-line-overflow absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />
          
          <div data-parallax-layers className="parallax__layers absolute inset-0 w-full h-full">
            {/* Layer 1: Far Sky Background */}
            <div data-parallax-layer="1" className="absolute inset-0 w-full h-full">
              <img 
                src="https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795be09b462b2e8ebf71_osmo-parallax-layer-3.webp" 
                loading="eager" 
                alt="Mountain background sky" 
                className="w-full h-[120%] object-cover object-center -top-[10%]" 
              />
            </div>

            {/* Layer 2: Midground Mountain Peaks */}
            <div data-parallax-layer="2" className="absolute inset-0 w-full h-full z-10">
              <img 
                src="https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795b4d5ac529e7d3a562_osmo-parallax-layer-2.webp" 
                loading="eager" 
                alt="Midground mountain layer" 
                className="w-full h-[120%] object-cover object-center -top-[10%]" 
              />
            </div>

            {/* Layer 3: Text Title "BRNPRO" */}
            <div data-parallax-layer="3" className="absolute inset-0 w-full h-full flex flex-col items-center justify-center z-20 pointer-events-none px-4 text-center">
              <h1 className="parallax__title text-7xl sm:text-9xl md:text-[13rem] font-black tracking-tighter text-white uppercase drop-shadow-2xl leading-none font-sans">
                BRNPRO
              </h1>
              <p className="text-zinc-400 font-mono tracking-widest text-xs sm:text-base uppercase mt-4">
                Bharanidharan S — Java &amp; Full Stack Software Developer
              </p>
            </div>

            {/* Layer 4: Foreground Person on Cliff */}
            <div data-parallax-layer="4" className="absolute inset-0 w-full h-full z-30 pointer-events-none">
              <img 
                src="https://cdn.prod.website-files.com/671752cd4027f01b1b8f1c7f/6717795bb5aceca85011ad83_osmo-parallax-layer-1.webp" 
                loading="eager" 
                alt="Foreground hiker layer" 
                className="w-full h-[130%] object-cover object-bottom" 
              />
            </div>
          </div>

          <div className="parallax__fade absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/90 to-transparent z-40 pointer-events-none" />
        </div>
      </section>

      {/* Scroll indicator divider */}
      <div className="relative z-50 bg-black pt-12 pb-6 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 160 160" fill="none" className="osmo-icon-svg text-white animate-pulse">
          <path d="M94.8284 53.8578C92.3086 56.3776 88 54.593 88 51.0294V0H72V59.9999C72 66.6273 66.6274 71.9999 60 71.9999H0V87.9999H51.0294C54.5931 87.9999 56.3777 92.3085 53.8579 94.8283L18.3431 130.343L29.6569 141.657L65.1717 106.142C67.684 103.63 71.9745 105.396 72 108.939V160L88.0001 160L88 99.9999C88 93.3725 93.3726 87.9999 100 87.9999H160V71.9999H108.939C105.407 71.9745 103.64 67.7091 106.12 65.1938L106.142 65.1716L141.657 29.6568L130.343 18.3432L94.8284 53.8578Z" fill="currentColor"></path>
        </svg>
      </div>
    </div>
  );
}

export default ParallaxComponent;
