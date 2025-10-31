'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

export default function ServicesModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1a2332] z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
              className="relative w-full max-w-5xl pointer-events-auto"
            >
              <div className="relative bg-[#1a2332] rounded-3xl overflow-hidden py-16 px-8">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 text-white" />
                </button>

                {/* Header */}
                <div className="text-center mb-12">
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-2">
                    Our Services
                  </h2>
                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {/* Personal Branding Card */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="relative group"
                  >
                    {/* Gradient Border */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400 via-lime-400 to-lime-400 p-[2px]">
                      <div className="w-full h-full rounded-3xl bg-gradient-to-br from-[#d4ff4d] via-[#c3ff00] to-[#a8e600] relative overflow-hidden">
                        {/* 3D Wave Effect */}
                        <div className="absolute inset-0 opacity-40">
                          <svg viewBox="0 0 400 400" className="w-full h-full">
                            <defs>
                              <filter id="goo-personal">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                                <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                              </filter>
                            </defs>
                            <g filter="url(#goo-personal)">
                              <ellipse cx="150" cy="250" rx="120" ry="80" fill="#a8e600" opacity="0.6" />
                              <ellipse cx="250" cy="280" rx="100" ry="60" fill="#8bc700" opacity="0.5" />
                              <path d="M 100,200 Q 200,150 300,200 T 400,200" fill="none" stroke="#7ab800" strokeWidth="60" opacity="0.4" />
                            </g>
                          </svg>
                        </div>

                        {/* Content */}
                        <div className="relative p-8 flex flex-col h-full min-h-[320px]">
                          <div className="flex-1">
                            <h3 className="font-display text-3xl font-bold text-white mb-4">
                              Personal<br/>Branding
                            </h3>
                            <p className="text-white/90 text-sm leading-relaxed">
                              So whatever we have here as text is just a test of timelines and if we can write a paragraph of text without interfering other...
                            </p>
                          </div>

                          {/* Button */}
                          <a
                            href="mailto:contact@limegreen.studio?subject=Personal Branding Inquiry"
                            className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold px-5 py-2.5 rounded-full hover:bg-gray-100 transition-all duration-300 self-start mt-6 group-hover:gap-3"
                          >
                            <span className="text-sm">Let's Build Together...</span>
                            <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center">
                              <ArrowRight className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Product Development Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="relative group"
                  >
                    {/* Gradient Border */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400 via-lime-400 to-lime-400 p-[2px]">
                      <div className="w-full h-full rounded-3xl bg-gradient-to-br from-[#d4ff4d] via-[#c3ff00] to-[#a8e600] relative overflow-hidden">
                        {/* 3D Gear/Cog Effect */}
                        <div className="absolute inset-0 opacity-40">
                          <svg viewBox="0 0 400 400" className="w-full h-full">
                            <defs>
                              <filter id="goo-product">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                                <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                              </filter>
                            </defs>
                            <g filter="url(#goo-product)">
                              {/* Large Gear */}
                              <circle cx="300" cy="280" r="70" fill="none" stroke="#7ab800" strokeWidth="25" opacity="0.5" />
                              <circle cx="300" cy="280" r="30" fill="#8bc700" opacity="0.6" />

                              {/* Small Gear */}
                              <circle cx="180" cy="200" r="45" fill="none" stroke="#8bc700" strokeWidth="20" opacity="0.5" />
                              <circle cx="180" cy="200" r="20" fill="#7ab800" opacity="0.6" />

                              {/* Connecting Elements */}
                              <ellipse cx="240" cy="240" rx="60" ry="40" fill="#a8e600" opacity="0.4" />
                            </g>
                          </svg>
                        </div>

                        {/* Content */}
                        <div className="relative p-8 flex flex-col h-full min-h-[320px]">
                          <div className="flex-1">
                            <h3 className="font-display text-3xl font-bold text-white mb-4">
                              Product<br/>Development
                            </h3>
                            <p className="text-white/90 text-sm leading-relaxed">
                              So whatever we have here as text is just a test of timelines and if we can write a paragraph of text without interfering other...
                            </p>
                          </div>

                          {/* Button */}
                          <a
                            href="mailto:contact@limegreen.studio?subject=Product Development Inquiry"
                            className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold px-5 py-2.5 rounded-full hover:bg-gray-100 transition-all duration-300 self-start mt-6 group-hover:gap-3"
                          >
                            <span className="text-sm">Let's Build Together...</span>
                            <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center">
                              <ArrowRight className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
