'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const pricingPlans = [
  {
    name: 'Старт',
    price: '5000₽',
    period: 'разовая',
    description: 'Идеально для знакомства с онлайн-тренингом',
    features: [
      'Консультация 60 минут',
      'Анализ текущего состояния',
      'План тренировок на 2 недели',
      'Базовые рекомендации по питанию',
      'Поддержка в чате 2 недели',
    ],
    buttonText: 'Выбрать',
  },
  {
    name: 'Трансформация',
    price: '15000₽',
    period: 'месяц',
    description: 'Самый популярный тариф для достижения результата',
    features: [
      'Индивидуальная программа тренировок',
      'Персональный план питания',
      'Поддержка в чате 24/7',
      'Еженедельная корректировка программы',
      'Видео-консультации 2 раза в месяц',
      'Отслеживание прогресса',
      'Техника упражнений',
    ],
    featured: true,
    buttonText: 'Выбрать',
  },
  {
    name: 'VIP',
    price: '35000₽',
    period: 'месяц',
    description: 'Максимальный результат с полным сопровождением',
    features: [
      'Все из тарифа "Трансформация"',
      'Ежедневные видео-созвоны',
      'Анализ каждой тренировки',
      'Корректировка питания в реальном времени',
      'Приоритетная поддержка',
      'Доступ к закрытому сообществу',
      'Персональные тренировки онлайн',
      'Гарантия результата',
    ],
    buttonText: 'Выбрать',
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="pricing" className="section-padding bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Тарифы
          </h2>
          <div className="w-20 h-1 bg-[#FF6B6B] mx-auto mb-8" />
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Выберите оптимальный тариф для достижения ваших целей
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03, y: -10 }}
              className={`relative p-8 rounded-2xl backdrop-blur-sm border ${
                plan.featured
                  ? 'bg-gradient-to-br from-[#FF6B6B]/20 to-[#FF6B6B]/5 border-[#FF6B6B] shadow-2xl shadow-[#FF6B6B]/20'
                  : 'bg-white/5 border-white/10'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-[#FF6B6B] text-white text-sm font-bold rounded-full shadow-lg">
                  РЕКОМЕНДУЕМ
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  {plan.description}
                </p>
                <div className="flex items-end justify-center gap-2">
                  <span className="text-5xl font-bold text-white">
                    {plan.price}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mt-2">
                  {plan.period}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <span className="text-[#FF6B6B] text-xl flex-shrink-0">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full text-center px-6 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  plan.featured
                    ? 'bg-[#FF6B6B] text-white hover:bg-[#FF8E8E] shadow-lg shadow-[#FF6B6B]/50'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {plan.buttonText}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
