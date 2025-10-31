'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FacebookLogo, TwitterLogo, InstagramLogo } from '@phosphor-icons/react';
import ServicesModal from './ServicesModal';

export default function Footer() {
  const [isServicesModalOpen, setIsServicesModalOpen] = useState(false);

  const handleContactClick = (e) => {
    e.preventDefault();
    // Scroll to Start Shipping Section
    const startShippingSection = document.querySelector('section');
    if (startShippingSection) {
      // Find the section with the "Start Shipping" form
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        if (section.textContent.includes('Start Shipping')) {
          section.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    }
  };

  return (
    <footer className="relative w-full pt-8 px-4 md:pt-12 md:px-12 lg:px-16 bg-white">
      <ServicesModal isOpen={isServicesModalOpen} onClose={() => setIsServicesModalOpen(false)} />
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative  md:border-t md:border-l md:border-r md:border-b-0 border-gray-200 rounded-t-3xl rounded-l-3xl rounded-r-3xl rounded-b-0 px-5 md:px-12 lg:px-16 pt-8 md:pt-16 overflow-hidden"
        >
          {/* Main Footer Content */}
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-start gap-4 md:gap-12 mb-8 md:mb-12">
            {/* Left Side - Logo and Info */}
            <div className="space-y-4 md:space-y-6">
              {/* Logo */}
              <div className="flex items-center gap-2 md:gap-3">
                <Image
                  src="/LGS.svg"
                  alt="Lime Green Studios Logo"
                  width={28}
                  height={28}
                  className="w-6 h-6 md:w-8 md:h-8"
                />
                <span className="font-display text-base md:text-xl font-semibold text-gray-900">
                  Lime Green Studios
                </span>
              </div>

              {/* Tagline */}
              <p className="text-gray-600 text-xs md:text-base max-w-xs leading-relaxed">
                Stop keeping your ideas to yourself and
                <br />
                start shipping it to the world
              </p>

              {/* Email */}
              <a
                href="mailto:contact@limegreen.studio"
                className="text-gray-600 hover:text-gray-900 text-xs md:text-base transition-colors inline-block"
              >
                contact@limegreen.studio
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-3 md:gap-4">
                <Link
                  href="https://www.facebook.com/limegreen.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <FacebookLogo className="w-4 h-4 md:w-5 md:h-5 text-gray-700" weight="fill" />
                </Link>
                <Link
                  href="https://twitter.com/LimeGreen_dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <TwitterLogo className="w-4 h-4 md:w-5 md:h-5 text-gray-700" weight="fill" />
                </Link>
                <Link
                  href="https://www.instagram.com/limegreen.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramLogo className="w-4 h-4 md:w-5 md:h-5 text-gray-700" weight="fill" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/lime-green-studios/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </Link>
              </div>

            <p className="hidden md:block text-gray-500 text-[10px] md:text-sm">
              Copyright ©2025 Lime Green Labs
            </p>
            </div>

            {/* Right Side - Navigation Links */}
            <nav className="flex flex-wrap gap-x-8 md:gap-x-16 md:gap-y-4">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 text-xs md:text-base transition-colors"
              >
                Home Page
              </Link>
              <button
                onClick={() => setIsServicesModalOpen(true)}
                className="text-gray-600 hover:text-gray-900 text-xs md:text-base transition-colors text-left"
              >
                Services
              </button>
              <Link
                href="/wip"
                className="text-gray-600 hover:text-gray-900 text-xs md:text-base transition-colors"
              >
                Blogs
              </Link>
              <button
                onClick={handleContactClick}
                className="text-gray-600 hover:text-gray-900 text-xs md:text-base transition-colors text-left"
              >
                Contact
              </button>
            </nav>

            <p className="block md:hidden text-gray-500 text-[10px] md:text-sm">
              Copyright ©2025 Lime Green Labs
            </p>
          </div>

          {/* Copyright */}
          <div className="relative z-10 border-gray-200 pt-4 md:pt-6">
            <div className="relative w-full mt-2 md:mt-4 sm:ml-0 md:-ml-2">
              <h2 className="font-display text-[2.5rem] md:text-[8rem] font-bold text-[#ABFF00]/50 whitespace-nowrap leading-none">
                limegreen.studio
              </h2>
            </div>
          </div>

        </motion.div>
      </div>
    </footer>
  );
}
