'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF6B6B]/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF6B6B]/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-10"
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-8 leading-tight tracking-tight"
            style={{
              background: 'linear-gradient(to right, #ffffff, #e8e8e8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Я помогу тебе<br />изменить тело и жизнь
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 space-y-5"
        >
          <p className="text-lg md:text-xl text-[#e8e8e8] font-normal tracking-wide">
            Онлайн-тренер <span className="text-[#FF6B6B] font-medium">@vityapump</span>
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-[#b0b0b0]">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⏱️</span>
              <span className="text-sm md:text-base tracking-wide">Опыт работы более 3 лет</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              <span className="text-sm md:text-base tracking-wide">Более 5000 трансформаций</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-[#FF6B6B] text-white text-base md:text-lg font-medium rounded-full hover:bg-[#ff8585] transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#FF6B6B]/30 tracking-wide"
          >
            Начать трансформацию →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/30 text-4xl"
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
