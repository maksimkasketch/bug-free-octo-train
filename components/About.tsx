'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const benefits = [
  {
    icon: '💪',
    title: 'Персональный подход',
    description: 'Программа тренировок и питания создается индивидуально под ваши цели',
  },
  {
    icon: '🏋️',
    title: 'Профессиональный опыт',
    description: 'Более 3 лет практики и европейское образование в фитнес-индустрии',
  },
  {
    icon: '😊',
    title: 'Поддержка 24/7',
    description: 'Всегда на связи для ответов на вопросы и корректировки программы',
  },
  {
    icon: '⚡',
    title: 'Быстрые результаты',
    description: 'Первые изменения заметны уже через 2-3 недели работы',
  },
];

const stats = [
  { number: '3+', label: 'Года опыта' },
  { number: '5000+', label: 'Клиентов' },
  { number: '98%', label: 'Успешных трансформаций' },
  { number: '24/7', label: 'Поддержка' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="section-padding bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-white tracking-tight">
            О тренере
          </h2>
          <div className="w-16 h-0.5 bg-[#FF6B6B] mx-auto mb-8" />
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed tracking-wide">
            Я @vityapump — сертифицированный онлайн-тренер с европейским образованием.
            Моя миссия — помочь вам достичь тела мечты через научный подход к тренировкам и питанию.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="text-center p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl hover:bg-white/10 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="relative p-6 sm:p-8 lg:p-10 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl hover:bg-white/10 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative z-10">
                <div className="text-4xl sm:text-5xl mb-4 text-center">{benefit.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 text-center tracking-tight">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-center text-sm sm:text-base">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
