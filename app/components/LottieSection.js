'use client';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { StarsBackground } from './ui/backgrounds/stars';

export default function LottieSection() {
  const [shouldPlay, setShouldPlay] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const sectionRef = useRef(null);
  const dotLottieRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Play when 30% of the section is visible
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3 && !hasPlayed) {
            setShouldPlay(true);
            setHasPlayed(true);

            // Play the animation using the player instance
            if (dotLottieRef.current) {
              dotLottieRef.current.play();
            }
          }
        });
      },
      {
        threshold: [0, 0.3, 0.5, 1],
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasPlayed]);

  const handleDotLottieRefCallback = (dotLottie) => {
    dotLottieRef.current = dotLottie;

    // If shouldPlay is already true when ref is set, play immediately
    if (shouldPlay && dotLottie) {
      dotLottie.play();
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#0a0a0f' }}
    >
      {/* Stars Background */}
      <StarsBackground
        starColor="#FFF"
        className="absolute inset-0"
      />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={shouldPlay ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex justify-center lg:justify-start"
          >
            <div className="w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl">
              <DotLottieReact
                src="/LGS_rocket.lottie"
                loop={true}
                autoplay={false}
                dotLottieRefCallback={handleDotLottieRefCallback}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </motion.div>

          {/* Right side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={shouldPlay ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="text-white text-center lg:text-left"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              10+ Happy clients
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-sans">
              Clients from All around the world trust us to ship their ideas from 0 to reality.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
