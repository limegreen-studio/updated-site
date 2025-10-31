'use client';

import { ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Personal Branding",
      description: "So whatever we have here as text is just a test of timeliness and if we can write a paragraph or text without interfering other.",
      gradient: "from-[#D8FF00] via-[#b8e600] to-[#98cc00]",
      icon3d: "personal-branding"
    },
    {
      title: "Product Development",
      description: "So whatever we have here as text is just a test of timeliness and if we can write a paragraph or text without interfering other.",
      gradient: "from-[#D8FF00] via-[#b8e600] to-[#98cc00]",
      icon3d: "product-development"
    }
  ];

  return (
    <section className="w-full min-h-screen bg-[#111827] py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-white text-5xl md:text-6xl font-bold text-center mb-20">
          Our Services
        </h2>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Card */}
              <div className={`
                relative overflow-hidden
                bg-gradient-to-br ${service.gradient}
                rounded-[24px]
                p-8
                h-[400px]
                flex flex-col
                transition-all duration-300
                hover:scale-[1.02]
                hover:shadow-2xl
              `}>
                {/* Content Container */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Title */}
                  <h3 className="text-white text-3xl md:text-4xl font-bold mb-4 leading-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/90 text-base mb-auto leading-relaxed">
                    {service.description}
                  </p>

                  {/* Button */}
                  <button className="
                    inline-flex items-center gap-2
                    bg-white
                    text-gray-900
                    px-6 py-3
                    rounded-full
                    font-medium
                    text-sm
                    transition-all duration-300
                    hover:gap-4
                    hover:shadow-lg
                    self-start
                    group/button
                  ">
                    Let's Build Together...
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/button:translate-x-1" />
                  </button>
                </div>

                {/* 3D Icon Background */}
                <div className="absolute bottom-0 right-0 w-2/3 h-2/3 opacity-30">
                  {service.icon3d === "personal-branding" && (
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      {/* Wavy shape for Personal Branding */}
                      <path
                        d="M 50,100 Q 75,70 100,100 T 150,100"
                        fill="none"
                        stroke="rgba(0,0,0,0.2)"
                        strokeWidth="40"
                        strokeLinecap="round"
                      />
                      <circle cx="100" cy="80" r="30" fill="rgba(0,0,0,0.15)" />
                    </svg>
                  )}
                  {service.icon3d === "product-development" && (
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      {/* Gear/Settings icon for Product Development */}
                      <circle cx="150" cy="60" r="25" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="8" />
                      <circle cx="150" cy="60" r="12" fill="rgba(0,0,0,0.15)" />
                      <circle cx="100" cy="130" r="35" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="10" />
                      <circle cx="100" cy="130" r="18" fill="rgba(0,0,0,0.15)" />
                      <circle cx="60" cy="80" r="20" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="6" />
                      <circle cx="60" cy="80" r="10" fill="rgba(0,0,0,0.15)" />
                    </svg>
                  )}
                </div>

                {/* Gradient Overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
