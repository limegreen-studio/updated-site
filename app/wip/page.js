'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Wrench } from 'lucide-react';

export default function WIPPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-lime-400/20 blur-3xl rounded-full"></div>
              <Wrench className="w-24 h-24 text-lime-400 relative" strokeWidth={1.5} />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-display text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Work in{' '}
            <span className="text-lime-400">Progress</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-300 mb-12 leading-relaxed"
          >
            We're building something awesome here! This page is under construction and will be shipped soon.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-lime-400 text-gray-900 font-semibold rounded-full hover:bg-lime-300 transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <a
              href="mailto:contact@limegreen.studio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-lime-400 text-lime-400 font-semibold rounded-full hover:bg-lime-400 hover:text-gray-900 transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </a>
          </motion.div>

          {/* Progress Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-16"
          >
            <div className="flex items-center justify-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                className="w-3 h-3 bg-lime-400 rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                className="w-3 h-3 bg-lime-400 rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                className="w-3 h-3 bg-lime-400 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
