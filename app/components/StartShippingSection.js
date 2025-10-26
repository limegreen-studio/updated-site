'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import lemon from "../../public/lemon.png"
export default function StartShippingSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email submitted:', email);
  };

  return (
    <section className="relative bg-white w-full py-0 md:py-20 md:px-12 lg:px-16">
      <motion.div
        className="w-full md:max-w-7xl md:mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="relative w-full md:rounded-3xl min-h-[600px] overflow-hidden"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Background Image - Full coverage */}
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src={lemon}
              alt="Lemon tree with fresh lemons"
              fill
              className="object-cover md:rounded-3xl"
              priority
            />
          </motion.div>

          {/* Content */}
          <div className="relative z-20 px-6 sm:px-8 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              >
                Start Shipping
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <p className="text-white/90 text-base md:text-xl font-light">
                  Turn your ideas into Products.
                </p>
                <p className="text-white/90 text-base md:text-xl font-light">
                  Stop sleeping over it and start shipping
                </p>
              </motion.div>

              {/* Form */}
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 sm:flex-row sm:gap-4 pt-6"
              >
                <input
                  type="email"
                  placeholder="name@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-5 py-3 md:px-6 md:py-4 rounded-full bg-white/95 text-gray-800 placeholder:text-gray-400 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
            <div className="relative w-1/2 md:w-full inline-block rounded-full p-[0.5px] bg-gradient-to-t from-[#3D578D] to-[#111827]">
              <button type='submit' className="w-full h-full rounded-full bg-gradient-to-t from-[#111827] to-[#3D578D] px-6 py-3 md:px-8 md:py-4 text-white text-sm font-medium transition-all whitespace-nowrap">
                Contact Us
              </button>
            </div>

              </motion.form>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}