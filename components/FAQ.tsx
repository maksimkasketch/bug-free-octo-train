'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const faqs = [
  {
    question: 'За сколько я сброшу вес?',
    answer: 'Результаты индивидуальны и зависят от многих факторов: начального веса, обмена веществ, соблюдения программы. В среднем мои клиенты теряют 2-4 кг в месяц здоровым способом. Важно понимать, что быстрая потеря веса часто ведет к возврату килограммов. Я учу создавать устойчивые привычки для долгосрочного результата.',
  },
  {
    question: 'Есть ли гарантии результатов?',
    answer: 'Я гарантирую результат при соблюдении всех рекомендаций программы. За 3+ года работы 98% моих клиентов достигли своих целей. Если вы выполняете программу тренировок, следуете плану питания и остаетесь на связи - результат будет обязательно! Я всегда корректирую программу под ваш прогресс.',
  },
  {
    question: 'Сколько будет стоить рацион?',
    answer: 'Стоимость продуктов зависит от вашего региона и предпочтений, но в среднем составляет 10000-15000₽ в месяц. Я составляю планы питания из доступных продуктов, которые можно купить в обычных магазинах. Никаких дорогих суперфудов или специальных добавок - только обычная здоровая еда.',
  },
  {
    question: 'Исключаем ли молочные и сладкие продукты?',
    answer: 'Нет строгих запретов! Я не верю в экстремальные диеты. Молочные продукты включаются, если у вас нет непереносимости. Сладкое тоже можно - я научу вас, как вписывать любимые продукты в рацион без вреда для фигуры. Главное - баланс и умеренность, а не отказ от всего вкусного.',
  },
  {
    question: 'Можно ли тренироваться дома?',
    answer: 'Абсолютно! Я составляю программы как для зала, так и для домашних тренировок. Для дома нужен минимум оборудования: гантели или бутылки с водой, коврик. Многие упражнения выполняются с собственным весом. Домашние тренировки могут быть такими же эффективными, как и зал - главное правильная техника и регулярность.',
  },
  {
    question: 'Как проходят консультации?',
    answer: 'Мы общаемся через удобные вам мессенджеры (Telegram, WhatsApp). Видео-консультации проходят в Zoom или Google Meet. Я всегда на связи для ответов на вопросы. Еженедельно мы проверяем прогресс, делаем замеры и корректируем программу при необходимости. Это полноценное сопровождение, а не просто готовый план.',
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-black">
      <div className="max-w-[800px] mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 text-white tracking-tight">
            Часто задаваемые вопросы
          </h2>
          <div className="w-16 h-0.5 bg-[#FF6B6B] mx-auto mb-8" />
          <p className="text-base md:text-lg text-[#e8e8e8] leading-relaxed tracking-wide">
            Ответы на популярные вопросы о работе со мной
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/[0.03] backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors duration-300"
              >
                <span className="text-base md:text-lg font-medium text-white pr-4 tracking-tight">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <svg
                    className="w-5 h-5 text-[#FF6B6B]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-[#b0b0b0] leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center p-8 bg-gradient-to-r from-[#FF6B6B]/8 to-[#FF8E8E]/5 rounded-2xl border border-[#FF6B6B]/15"
        >
          <p className="text-base text-[#e8e8e8] mb-4 tracking-wide">
            Не нашли ответ на свой вопрос?
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-[#FF6B6B] text-white font-medium rounded-full hover:bg-[#ff8585] transition-all duration-300 tracking-wide"
          >
            Задать вопрос лично
          </a>
        </motion.div>
      </div>
    </section>
  );
}
