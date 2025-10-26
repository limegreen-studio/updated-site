'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FacebookLogo, TwitterLogo, InstagramLogo } from '@phosphor-icons/react';

export default function Footer() {
  return (
    <footer className="relative w-full pt-8 px-4 md:pt-12 md:px-12 lg:px-16 bg-white">
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

              {/* Social Icons */}
              <div className="flex items-center gap-3 md:gap-4">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <FacebookLogo className="w-4 h-4 md:w-5 md:h-5 text-gray-700" weight="fill" />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <TwitterLogo className="w-4 h-4 md:w-5 md:h-5 text-gray-700" weight="fill" />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramLogo className="w-4 h-4 md:w-5 md:h-5 text-gray-700" weight="fill" />
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
              <Link
                href="/services"
                className="text-gray-600 hover:text-gray-900 text-xs md:text-base transition-colors"
              >
                Services
              </Link>
              <Link
                href="/blogs"
                className="text-gray-600 hover:text-gray-900 text-xs md:text-base transition-colors"
              >
                Blogs
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-gray-900 text-xs md:text-base transition-colors"
              >
                Contact
              </Link>
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
