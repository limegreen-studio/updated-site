'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Search, Code, Rocket, Truck } from 'lucide-react';

const Process = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how far the section has been scrolled through
      const scrollPosition = windowHeight - rect.top;
      const sectionHeight = rect.height;

      // Calculate progress as a percentage (0 to 100)
      const progress = Math.min(Math.max((scrollPosition / sectionHeight) * 100, 0), 100);
      setScrollProgress(progress);

      // Update active step based on progress
      const stepProgress = progress / 25; // Divide by 25 since we have 4 steps (100/4 = 25)
      setActiveStep(Math.min(Math.floor(stepProgress), 3));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      icon: Search,
      title: 'Week-1',
      description: 'Conducting a detailed market research and competitor analysis.'
    },
    {
      icon: Code,
      title: 'Week-2',
      description: 'Developing the product based on the research analysis.'
    },
    {
      icon: Rocket,
      title: 'Week-3',
      description: 'Deploying the product and conducting a beta test.'
    },
    {
      icon: Truck,
      title: 'Week-4',
      description: 'Preparing Marketing strategy and executing launch plan.'
    },
  ];

  return (
    <section id="process" ref={sectionRef} className="relative py-24 px-6" style={{ backgroundColor: '#111827' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How We Work
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our proven process takes you from idea to launch with clarity and confidence.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line - Now with lower z-index */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700 hidden lg:block z-0">
            <div
              className="bg-lime-400 w-full transition-all duration-300 ease-out"
              style={{ height: `${scrollProgress}%` }}
            ></div>
          </div>

          {/* Steps */}
          <div className="space-y-16 lg:space-y-24 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index <= activeStep;
              const isCurrentStep = index === activeStep;

              return (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 text-center lg:text-left ${
                    index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                  }`}>
                    <div className={`transition-all duration-1000 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`} style={{ transitionDelay: `${index * 200}ms` }}>
                      <h3 className={`text-2xl font-bold mb-4 transition-colors duration-500 ${
                        isActive ? 'text-lime-400' : 'text-gray-400'
                      }`}>
                        {step.title}
                      </h3>
                      <p className={`text-gray-300 text-lg leading-relaxed mx-auto lg:mx-0 lg:text-left ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left' } `}>
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon with background to hide timeline */}
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-full border-4 flex items-center justify-center transition-all duration-500 ${
                      isActive ? 'border-lime-400' : 'border-gray-600'
                    } ${isCurrentStep ? 'scale-110 shadow-lg shadow-lime-400/25' : ''}`}
                    style={{ backgroundColor: '#111827' }}>
                      <Icon
                        className={`transition-all duration-500 ${
                          isActive ? 'text-lime-400' : 'text-gray-400'
                        } ${isCurrentStep ? 'scale-125' : ''}`}
                        size={24}
                      />
                    </div>

                    {/* Step Number */}
                    <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                      isActive ? 'bg-lime-400 text-gray-900' : 'bg-gray-600 text-gray-300'
                    }`}>
                      {index + 1}
                    </div>
                  </div>

                  {/* Spacer for layout */}
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
