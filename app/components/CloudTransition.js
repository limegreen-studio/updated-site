'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CloudTransition() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const containerRef = useRef(null);
  const cloudRefs = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const clouds = [
    { src: '/clouds/cloud.webp', left: '5%', top: '10%', speed: 80, delay: 0 },
    { src: '/clouds/cloud2.webp', left: '28%', top: '25%', speed: 100, delay: 2 },
    { src: '/clouds/cloud3.webp', left: '55%', top: '5%', speed: 90, delay: 4 },
    { src: '/clouds/cloud4.webp', left: '80%', top: '20%', speed: 110, delay: 6 },
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full h-48 md:h-56 overflow-visible pointer-events-auto"
      style={{
        background: 'linear-gradient(to bottom, #111827 0%, #1f2937 50%, #111827 100%)',
      }}
    >
      {clouds.map((cloud, index) => {
        return (
          <CloudElement
            key={index}
            cloud={cloud}
            index={index}
            mousePosition={mousePosition}
            cloudRefs={cloudRefs}
          />
        );
      })}

      {/* Subtle overlay gradient for better blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent pointer-events-none" />
    </div>
  );
}

function CloudElement({ cloud, index, mousePosition, cloudRefs }) {
  const [cloudCenter, setCloudCenter] = useState({ x: 0, y: 0 });
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      cloudRefs.current[index] = elementRef.current;
      const rect = elementRef.current.getBoundingClientRect();
      setCloudCenter({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    }
  }, [index, cloudRefs]);

  // Calculate distance from mouse to this specific cloud
  const deltaX = mousePosition.x - cloudCenter.x;
  const deltaY = mousePosition.y - cloudCenter.y;
  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

  // Calculate repulsion effect - clouds move away from cursor
  const repulsionStrength = Math.max(0, 200 - distance) / 200;
  const repelX = distance > 0 && deltaX !== 0 ? -(deltaX / distance) * repulsionStrength * 100 : 0;
  const repelY = distance > 0 && deltaY !== 0 ? -(deltaY / distance) * repulsionStrength * 100 : 0;

  return (
    <motion.div
      ref={elementRef}
      className="absolute"
      style={{
        left: cloud.left,
        top: cloud.top,
        width: '320px',
        height: '200px',
      }}
      initial={{ x: -50, opacity: 0 }}
      animate={{
        x: 50,
        opacity: 1,
      }}
      transition={{
        x: {
          duration: cloud.speed,
          repeat: Infinity,
          ease: 'linear',
          delay: cloud.delay,
        },
        opacity: {
          duration: 2,
          delay: cloud.delay,
        },
      }}
    >
      <motion.div
        animate={{
          x: repelX,
          y: repelY,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 20,
        }}
        className="relative w-full h-full"
      >
        <Image
          src={cloud.src}
          alt={`Cloud ${index + 1}`}
          fill
          className="object-contain opacity-60"
          style={{
            filter: 'blur(0.5px)',
          }}
          priority={index < 2}
        />
      </motion.div>
    </motion.div>
  );
}
