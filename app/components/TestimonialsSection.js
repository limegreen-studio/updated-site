'use client';
import { CardStack } from './ui/card-stack';
import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Meteors } from "@/components/ui/meteors"
// Highlight component for testimonials
export const Highlight = ({ children, className }) => {
  return (
    <span
      className={cn(
        'font-bold bg-[#D8FF00]/20 text-[#ABFF00] px-1 py-0.5',
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: 'Sarah Chen',
    designation: 'CEO, TechStart Inc',
    content: (
      <p>
        Working with Lime Green Studios was <Highlight>transformative</Highlight>.
        They took our rough idea and turned it into a polished product in just 4 weeks.
        The team&apos;s expertise and dedication were <Highlight>exceptional</Highlight>.
      </p>
    ),
  },
  {
    id: 1,
    name: 'Michael Rodriguez',
    designation: 'Founder, HealthTrack',
    content: (
      <p>
        I&apos;ve worked with many agencies, but none delivered like Lime Green Studios.
        <Highlight>From zero to launch</Highlight> in a month - absolutely incredible.
        Our app now serves thousands of users daily.
      </p>
    ),
  },
  {
    id: 2,
    name: 'Emily Watson',
    designation: 'Product Lead, FinanceFlow',
    content: (
      <p>
        The <Highlight>speed and quality</Highlight> were unmatched. Lime Green Studios
        understood our vision immediately and executed flawlessly. They didn&apos;t just
        build a product, they built our <Highlight>dream solution</Highlight>.
      </p>
    ),
  },
  {
    id: 3,
    name: 'David Kim',
    designation: 'CTO, EduLearn',
    content: (
      <p>
        <Highlight>Professional, fast, and innovative</Highlight>. The team at Lime Green
        Studios went above and beyond to ensure our product was perfect. The 4-week timeline
        seemed impossible, but they <Highlight>made it happen</Highlight>.
      </p>
    ),
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState(0);

  // Track scroll progress through this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end end'],
  });

  // Reveal cards based on scroll position
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      // Slower reveal — each card needs more scroll (~12% per card instead of ~20%)
      const newVisibleCards = Math.min(
        Math.floor(latest * (CARDS.length + 0.8)),
        CARDS.length
      );
      setVisibleCards(newVisibleCards);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[500vh] flex flex-col items-center justify-start py-20 px-6 md:px-12 lg:px-16"
      style={{
        background:
          'linear-gradient(to bottom, #111827 0%, #111827 55%, #1e293b 70%, #475569 80%, #94a3b8 88%, #e2e8f0 94%, #ffffff 100%)',
      }}
    >
      <div className="sticky top-20 w-full max-w-7xl mx-auto space-y-12 md:space-y-20">
      
      <Meteors minDelay={0} maxDelay={0.1} maxDuration={15}/>

        {/* Section Header */}
        <motion.div
          style={{
            color: useTransform(
              scrollYProgress,
              [0, 0.6, 0.8, 0.9, 1],
              ['#ffffff', '#ffffff', '#64748b', '#334155', '#1e293b']
            ),
          }}
          className="text-center space-y-4"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-display text-5xl lg:text-6xl font-bold"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg 2xl:text-xl text-gray-300 font-light leading-relaxed "
          >
            Real results from real partnerships
          </motion.p>
        </motion.div>

        {/* Cards Container */}
        <div className="flex items-center mx-1 justify-center w-full min-h-[300px]">
          {visibleCards > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <CardStack items={CARDS.slice(0, visibleCards)} autoFlip={false} />
            </motion.div>
          )}
        </div>

        {/* Progress Indicator */}
        <motion.div
          className="flex justify-center items-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {CARDS.map((_, index) => (
            <motion.div
              key={index}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: 40,
                backgroundColor:
                  index < visibleCards
                    ? '#ABFF00'
                    : 'rgba(156, 163, 175, 0.3)',
              }}
              initial={{ scaleX: 0.3 }}
              animate={{
                scaleX: index < visibleCards ? 1 : 0.3,
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
