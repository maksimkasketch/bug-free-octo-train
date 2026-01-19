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
    <section id="pricing" className="section-padding bg-black">
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 text-white tracking-tight">
            Тарифы
          </h2>
          <div className="w-16 h-0.5 bg-[#FF6B6B] mx-auto mb-8" />
          <p className="text-base md:text-lg text-[#e8e8e8] max-w-[800px] mx-auto leading-relaxed tracking-wide">
            Выберите оптимальный тариф для достижения ваших целей
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`relative p-8 rounded-2xl backdrop-blur-sm border ${
                plan.featured
                  ? 'bg-gradient-to-br from-[#FF6B6B]/15 to-[#FF6B6B]/5 border-[#FF6B6B]/30 shadow-xl shadow-[#FF6B6B]/10'
                  : 'bg-white/[0.03] border-white/5'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1.5 bg-[#FF6B6B] text-white text-xs font-medium rounded-full shadow-lg">
                  РЕКОМЕНДУЕМ
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
                  {plan.name}
                </h3>
                <p className="text-[#b0b0b0] text-sm mb-6 leading-relaxed">
                  {plan.description}
                </p>
                <div className="flex items-end justify-center gap-2">
                  <span className="text-4xl font-semibold text-white">
                    {plan.price}
                  </span>
                </div>
                <p className="text-[#b0b0b0] text-sm mt-2">
                  {plan.period}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#e8e8e8] text-sm">
                    <span className="text-[#FF6B6B] text-lg flex-shrink-0 mt-0.5">✓</span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full text-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  plan.featured
                    ? 'bg-[#FF6B6B] text-white hover:bg-[#ff8585] shadow-lg shadow-[#FF6B6B]/30'
                    : 'bg-white/10 text-white hover:bg-white/15'
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
