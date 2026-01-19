'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    icon: '💬',
    title: 'Онлайн-консультация',
    description: 'Индивидуальная консультация по питанию и тренировкам. Я отвечу на все ваши вопросы и помогу составить план действий.',
    features: [
      'Видео-звонок 60 минут',
      'Анализ текущего состояния',
      'Рекомендации по питанию',
      'План тренировок',
    ],
    price: 'от 3000₽',
  },
  {
    icon: '🍎',
    title: 'Программа питания',
    description: 'Персонализированный план питания с учетом ваших предпочтений, целей и образа жизни.',
    features: [
      'Индивидуальный расчет КБЖУ',
      'Меню на 4 недели',
      'Список покупок',
      'Рецепты блюд',
    ],
    price: 'от 5000₽',
  },
  {
    icon: '🎯',
    title: 'Индивидуальный план трансформации',
    description: 'Полное сопровождение на пути к телу мечты. Комплексный подход к достижению результата.',
    features: [
      'Программа тренировок',
      'План питания',
      'Поддержка 24/7',
      'Еженедельная корректировка',
      'Отслеживание прогресса',
    ],
    price: 'от 15000₽/мес',
    featured: true,
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Услуги
          </h2>
          <div className="w-20 h-1 bg-[#FF6B6B] mx-auto mb-8" />
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Выберите формат работы, который подходит именно вам
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`relative p-8 rounded-2xl backdrop-blur-sm border overflow-hidden ${
                service.featured
                  ? 'bg-gradient-to-br from-[#FF6B6B]/20 to-[#FF6B6B]/5 border-[#FF6B6B]'
                  : 'bg-white/5 border-white/10'
              }`}
            >
              {service.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-[#FF6B6B] text-white text-xs font-bold rounded-full">
                  ПОПУЛЯРНО
                </div>
              )}

              <div className="text-6xl mb-6">{service.icon}</div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-400">
                    <span className="text-[#FF6B6B] mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="text-3xl font-bold text-white mb-6">
                {service.price}
              </div>

              <a
                href="#contact"
                className={`block w-full text-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  service.featured
                    ? 'bg-[#FF6B6B] text-white hover:bg-[#FF8E8E]'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Выбрать
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
