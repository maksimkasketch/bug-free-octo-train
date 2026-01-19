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
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 text-white tracking-tight">
            О тренере
          </h2>
          <div className="w-16 h-0.5 bg-[#FF6B6B] mx-auto mb-8" />
          <p className="text-base md:text-lg text-[#e8e8e8] max-w-[800px] mx-auto leading-relaxed tracking-wide">
            Я @vityapump — сертифицированный онлайн-тренер с европейским образованием.
            Моя миссия — помочь вам достичь тела мечты через научный подход к тренировкам и питанию.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-[900px] mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="text-center p-6 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/5"
            >
              <div className="text-3xl md:text-4xl font-semibold text-[#FF6B6B] mb-2">
                {stat.number}
              </div>
              <div className="text-[#b0b0b0] text-sm tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.01, y: -3 }}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.05] backdrop-blur-sm border border-white/5 overflow-hidden group"
            >
              <div className="absolute top-0 right-0 text-7xl opacity-3 group-hover:opacity-5 transition-opacity duration-300">
                {benefit.icon}
              </div>
              <div className="relative z-10">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                  {benefit.title}
                </h3>
                <p className="text-[#e8e8e8] leading-relaxed">
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
