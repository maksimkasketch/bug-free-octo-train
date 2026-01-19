'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const reviews = [
  {
    id: 1,
    name: 'Анна М.',
    date: '15 января 2024',
    beforeText: 'До начала работы',
    afterText: 'Через 3 месяца',
    text: 'Спасибо Вите за невероятную трансформацию! Сбросила 15 кг и впервые в жизни чувствую себя уверенно. Программа была жесткой, но результат того стоил! 💪',
    avatar: '👩',
  },
  {
    id: 2,
    name: 'Дмитрий К.',
    date: '10 января 2024',
    beforeText: 'Начало пути',
    afterText: '2 месяца спустя',
    text: 'Набрал 8 кг чистой мышечной массы! Витя помог мне понять, что правильное питание - это не сложно. Теперь я знаю, как поддерживать форму всю жизнь 🔥',
    avatar: '👨',
  },
  {
    id: 3,
    name: 'Елена С.',
    date: '5 января 2024',
    beforeText: 'Было',
    afterText: 'Стало',
    text: 'После родов думала, что никогда не верну форму. Витя доказал обратное! За 4 месяца вернулась к своему весу и даже улучшила показатели. Невероятно благодарна! ✨',
    avatar: '👩‍🦰',
  },
  {
    id: 4,
    name: 'Максим П.',
    date: '28 декабря 2023',
    beforeText: 'До программы',
    afterText: 'После программы',
    text: 'Похудел на 20 кг за 5 месяцев! Витя всегда был на связи, поддерживал и мотивировал. Программа тренировок и питания работают на 100%. Рекомендую всем! 🎯',
    avatar: '👨‍🦱',
  },
  {
    id: 5,
    name: 'Ольга В.',
    date: '20 декабря 2023',
    beforeText: 'Старт',
    afterText: 'Результат',
    text: 'Витя - настоящий профессионал! Помог не только с физической формой, но и с отношением к себе. Теперь я люблю тренировки и правильное питание. Спасибо огромное! 🙏',
    avatar: '👩‍🦳',
  },
];

export default function Reviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [isAutoplay]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
    setIsAutoplay(false);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    setIsAutoplay(false);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsAutoplay(false);
  };

  const currentReview = reviews[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section id="reviews" className="section-padding bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF6B6B]/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF6B6B]/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-white tracking-tight">
            Отзывы клиентов
          </h2>
          <div className="w-16 h-0.5 bg-[#FF6B6B] mx-auto mb-8" />
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed tracking-wide">
            Реальные истории трансформации от моих клиентов
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/10">
              <div className="text-3xl sm:text-4xl mb-4 text-center">🎯</div>
              <h3 className="text-xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text mb-2 text-center tracking-tight">5000+</h3>
              <p className="text-gray-400 text-sm text-center">Успешных трансформаций</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/10">
              <div className="text-3xl sm:text-4xl mb-4 text-center">⭐</div>
              <h3 className="text-xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text mb-2 text-center tracking-tight">98%</h3>
              <p className="text-gray-400 text-sm text-center">Клиентов достигли своих целей</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/10">
              <div className="text-3xl sm:text-4xl mb-4 text-center">🔥</div>
              <h3 className="text-xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text mb-2 text-center tracking-tight">-15 кг</h3>
              <p className="text-gray-400 text-sm text-center">Средний результат за 3 месяца</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative w-80 h-[600px] bg-black rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden"
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-20" />

                <div className="h-full bg-gradient-to-b from-gray-900 to-black p-4 overflow-hidden">
                  <div className="bg-white/[0.03] rounded-t-2xl p-3 mb-2 flex items-center gap-3">
                    <div className="text-2xl">{currentReview.avatar}</div>
                    <div>
                      <div className="text-white font-medium">{currentReview.name}</div>
                      <div className="text-[#b0b0b0] text-xs">{currentReview.date}</div>
                    </div>
                  </div>

                  <div className="space-y-3 overflow-y-auto h-[calc(100%-5rem)] pb-4">
                    <AnimatePresence initial={false} custom={direction}>
                      <motion.div
                        key={currentReview.id}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                        className="space-y-3"
                      >
                        <div className="bg-white/[0.05] rounded-2xl rounded-tl-none p-3">
                          <div className="text-xs text-[#b0b0b0] mb-2">{currentReview.beforeText}</div>
                          <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg flex items-center justify-center">
                            <span className="text-6xl">📸</span>
                          </div>
                        </div>

                        <div className="flex justify-center">
                          <div className="bg-[#FF6B6B]/15 rounded-full px-4 py-2 flex items-center gap-2">
                            <span className="text-xl">⚡</span>
                            <span className="text-xs text-white">Трансформация</span>
                          </div>
                        </div>

                        <div className="bg-white/[0.05] rounded-2xl rounded-tl-none p-3">
                          <div className="text-xs text-[#b0b0b0] mb-2">{currentReview.afterText}</div>
                          <div className="w-full h-48 bg-gradient-to-br from-[#FF6B6B]/20 to-[#FF8E8E]/15 rounded-lg flex items-center justify-center">
                            <span className="text-6xl">💪</span>
                          </div>
                        </div>

                        <div className="bg-white/[0.05] rounded-2xl rounded-tl-none p-4">
                          <p className="text-white text-sm leading-relaxed">
                            {currentReview.text}
                          </p>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>

              <div className="absolute -left-16 top-1/2 transform -translate-y-1/2">
                <button
                  onClick={handlePrev}
                  className="w-12 h-12 bg-white/[0.05] hover:bg-white/[0.1] backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>

              <div className="absolute -right-16 top-1/2 transform -translate-y-1/2">
                <button
                  onClick={handleNext}
                  className="w-12 h-12 bg-white/[0.05] hover:bg-white/[0.1] backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/10">
              <div className="text-3xl sm:text-4xl mb-4 text-center">📊</div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 text-center tracking-tight">Научный подход</h3>
              <p className="text-gray-400 text-sm text-center">Все программы основаны на научных исследованиях</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/10">
              <div className="text-3xl sm:text-4xl mb-4 text-center">💬</div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 text-center tracking-tight">Поддержка 24/7</h3>
              <p className="text-gray-400 text-sm text-center">Всегда на связи для ответов на вопросы</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/10">
              <div className="text-3xl sm:text-4xl mb-4 text-center">🎓</div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 text-center tracking-tight">Европейское образование</h3>
              <p className="text-gray-400 text-sm text-center">Сертифицированный тренер с международным опытом</p>
            </div>
          </motion.div>
        </div>

        <div className="flex items-center justify-center gap-6 mt-12">
          <div className="flex gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#FF6B6B] w-6'
                    : 'bg-white/[0.2] hover:bg-white/[0.3]'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setIsAutoplay(!isAutoplay)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              isAutoplay
                ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white hover:shadow-lg hover:from-pink-600 hover:to-red-600'
                : 'bg-white/10 text-white hover:bg-white/15'
            }`}
          >
            {isAutoplay ? '⏸ Пауза' : '▶ Авто'}
          </button>
        </div>
      </div>
    </section>
  );
}
