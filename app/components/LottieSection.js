'use client';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { StarsBackground } from './ui/backgrounds/stars.js';

export default function LottieSection() {
  const sectionRef = useRef(null);
  const dotLottieRef = useRef(null);

  const [shouldPlay, setShouldPlay] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [showText, setShowText] = useState(false);

  // Intersection Observer to trigger animation when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.2 && !hasPlayed) {
            setShouldPlay(true);
            setHasPlayed(true);

            // Small delay to ensure Lottie is mounted
            setTimeout(() => {
              if (dotLottieRef.current) {
                dotLottieRef.current.play();
              }
            }, 150);
          }
        });
      },
      { 
        threshold: [0, 0.2, 0.5, 1],
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasPlayed]);

  // Lottie ref callback
  const handleDotLottieRefCallback = (dotLottie) => {
    dotLottieRef.current = dotLottie;
    if (shouldPlay && dotLottie) {
      dotLottie.play();
    }
  };

  // Show text after animation plays for 2 seconds (desktop only)
  useEffect(() => {
    if (shouldPlay) {
      const timer = setTimeout(() => {
        setShowText(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [shouldPlay]);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full min-h-screen overflow-hidden"
    >
      <StarsBackground
        factor={0.05}
        speed={50}
        starColor="#FFF"
        pointerEvents={true}
        className="absolute inset-0"
      >
        <div className="relative z-10 w-full h-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 md:py-24">
          
          {/* Unified Container - Mobile: Column, Desktop: Row with animation */}
          <div className="w-full max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 sm:gap-12 lg:gap-16 relative">
              
              {/* Single Lottie Animation - Responsive */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: shouldPlay ? 1 : 0,
                  scale: shouldPlay ? 1 : 0.8,
                  x: showText ? 0 : 0, // No x translation on mobile
                }}
                transition={{ 
                  opacity: { duration: 0.8, ease: 'easeOut' },
                  scale: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] },
                }}
                className="w-full lg:w-1/2 flex items-center justify-center flex-shrink-0"
              >
                <div className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[500px] xl:max-w-[600px] aspect-square">
                  <DotLottieReact
                    src="/LGS_rocket.lottie"
                    loop
                    autoplay={false}
                    speed={2}
                    dotLottieRefCallback={handleDotLottieRefCallback}
                    className="w-full h-full"
                    style={{
                      objectFit: 'contain',
                      display: 'block',
                    }}
                  />
                </div>
              </motion.div>

              {/* Text Content - Responsive */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: shouldPlay ? 1 : 0,
                  y: shouldPlay ? 0 : 30,
                }}
                transition={{ 
                  duration: 1, 
                  delay: 1,
                  ease: [0.25, 0.8, 0.25, 1]
                }}
                className="w-full lg:w-1/2 text-center lg:text-left"
              >
                {/* Heading */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: shouldPlay ? 1 : 0,
                    y: shouldPlay ? 0 : 20,
                  }}
                  transition={{
                    duration: 1,
                    delay: 1.2,
                    ease: [0.25, 0.8, 0.25, 1],
                  }}
                  className="font-display text-white text-5xl  xl:text-6xl 2xl:text-7xl font-extrabold mb-4 sm:mb-6 lg:mb-8 leading-tight drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]"
                >
                  10+ Happy{' '}
                  <span className="text-[#abff00] drop-shadow-[0_0_25px_rgba(171,255,0,0.3)]">
                    Clients
                  </span>
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: shouldPlay ? 1 : 0,
                    y: shouldPlay ? 0 : 20,
                  }}
                  transition={{
                    duration: 1,
                    delay: 1.4,
                    ease: [0.25, 0.8, 0.25, 1],
                  }}
                  className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl text-gray-300 font-light leading-relaxed max-w-xl lg:max-w-none mx-auto lg:mx-0 px-4 lg:px-0"
                >
                  Clients from all around the world trust us to bring their ideas to life
                  from 0 to reality.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </StarsBackground>
    </section>
  );
}