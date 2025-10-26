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

  // 🎯 Trigger Lottie when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.2 && !hasPlayed) {
            setShouldPlay(true);
            setHasPlayed(true);

            // Play animation
            setTimeout(() => {
              if (dotLottieRef.current) dotLottieRef.current.play();
            }, 150);
          }
        });
      },
      { threshold: [0, 0.2, 0.5, 1] }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasPlayed]);

  const handleDotLottieRefCallback = dotLottie => {
    dotLottieRef.current = dotLottie;
    if (shouldPlay && dotLottie) dotLottie.play();
  };

  // 🕒 After 2 seconds of play, trigger text + move Lottie left
  useEffect(() => {
    if (shouldPlay) {
      const timer = setTimeout(() => {
        setShowText(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [shouldPlay]);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen overflow-hidden">
      <StarsBackground
        factor={0.05}
        speed={50}
        starColor="#FFF"
        pointerEvents={true}
        className="absolute inset-0"
      >
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-24 flex items-center justify-center min-h-screen">
          
          {/* 🌙 Mobile Layout */}
          <div className="flex flex-col lg:hidden gap-8 items-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: shouldPlay ? 1 : 0,
                scale: shouldPlay ? 1 : 0.9,
              }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="w-full flex items-center justify-center"
            >
              <div
                className="w-full flex items-center justify-center"
                style={{
                  height: '50vh',
                  maxHeight: '600px',
                }}
              >
                <DotLottieReact
                  src="/LGS_rocket.lottie"
                  loop
                  autoplay={false}
                  dotLottieRefCallback={handleDotLottieRefCallback}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: shouldPlay ? 1 : 0,
                y: shouldPlay ? 0 : 30,
              }}
              transition={{ duration: 1, delay: 1 }}
              className="text-white text-center"
            >
              <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]">
                10+ Happy Clients
              </h2>
              <p className="text-base md:text-lg text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
                Clients from all around the world trust us to bring their ideas to life —
                from 0 to reality.
              </p>
            </motion.div>
          </div>

          {/* 💻 Desktop Layout */}
          <div className="hidden lg:flex items-center justify-center w-full relative" >
            
            {/* 🚀 Lottie Animation */}
            <motion.div
              initial={{ opacity: 0, x: 0 }}
              animate={{
                opacity: shouldPlay ? 1 : 0,
                transform: showText ? 'translateX(-55%)' : 'translateX(0%)',
              }}              
              transition={{
                opacity: { duration: 0.8, ease: 'easeOut' },
                x: { duration: 1.4, ease: [0.25, 0.8, 0.25, 1] },
              }}
              className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center"
              style={{ willChange: 'transform' }}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  height: '50vh',
                  width: '50vh',
                }}
              >
                <DotLottieReact
                  src="/LGS_rocket.lottie"
                  loop
                  autoplay={false}
                  dotLottieRefCallback={handleDotLottieRefCallback}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              </div>
            </motion.div>

            {/* ✨ Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 250 }}
              animate={{
                opacity: showText ? 1 : 0,
                x: showText ? 0 : 250,
              }}
              transition={{
                duration: 1.2,
                ease: [0.25, 0.8, 0.25, 1],
                delay: 0.3,
              }}
              className="absolute right-0 text-white text-left"
              style={{ width: '45%', willChange: 'transform, opacity' }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={{
                  opacity: showText ? 1 : 0,
                  y: showText ? 0 : 40,
                }}
                transition={{
                  duration: 1,
                  delay: 0.6,
                  ease: [0.25, 0.8, 0.25, 1],
                }}
                className="font-display text-5xl xl:text-7xl 2xl:text-8xl font-extrabold mb-8 leading-tight drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]"
              >
                10+ Happy Clients
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: showText ? 1 : 0,
                  y: showText ? 0 : 30,
                }}
                transition={{
                  duration: 1,
                  delay: 0.8,
                  ease: [0.25, 0.8, 0.25, 1],
                }}
                className="text-lg xl:text-xl 2xl:text-2xl text-gray-300 font-light max-w-2xl leading-relaxed"
              >
                Clients from all around the world trust us to bring their ideas to life —
                from 0 to reality.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </StarsBackground>
    </section>
  );
}
