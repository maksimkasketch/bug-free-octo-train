'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const blogPosts = [
  {
    icon: '🏃',
    title: 'Как начать тренироваться с нуля',
    description: 'Пошаговое руководство для новичков: с чего начать, как не бросить через неделю и избежать типичных ошибок.',
    date: '18 января 2024',
    link: 'https://tiktok.com/@vityapump',
  },
  {
    icon: '🥗',
    title: 'Диета для быстрого похудения',
    description: 'Безопасные и эффективные методы снижения веса без вреда для здоровья. Реальные принципы, которые работают.',
    date: '15 января 2024',
    link: 'https://tiktok.com/@vityapump',
  },
  {
    icon: '💪',
    title: '10 упражнений для дома',
    description: 'Эффективная тренировка всего тела без оборудования. Можно выполнять в любое время и в любом месте.',
    date: '12 января 2024',
    link: 'https://tiktok.com/@vityapump',
  },
  {
    icon: '🍎',
    title: 'Мифы о правильном питании',
    description: 'Развенчиваю популярные мифы о еде и диетах. Что действительно работает, а что - маркетинг.',
    date: '10 января 2024',
    link: 'https://tiktok.com/@vityapump',
  },
  {
    icon: '🔥',
    title: 'Жиросжигающая тренировка',
    description: 'Интенсивная 20-минутная тренировка для максимального сжигания калорий. Результат уже на следующий день.',
    date: '8 января 2024',
    link: 'https://tiktok.com/@vityapump',
  },
  {
    icon: '🎯',
    title: 'Как набрать мышечную массу',
    description: 'Полное руководство по набору качественной мышечной массы: тренировки, питание, восстановление.',
    date: '5 января 2024',
    link: 'https://tiktok.com/@vityapump',
  },
];

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="blog" className="section-padding bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-white tracking-tight">
            Блог и TikTok
          </h2>
          <div className="w-16 h-0.5 bg-[#FF6B6B] mx-auto mb-8" />
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed tracking-wide">
            Полезный контент о тренировках, питании и мотивации
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.a
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-[#FF6B6B]/30 hover:shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FF6B6B]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#FF6B6B]/15 to-[#FF6B6B]/5 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                    {post.icon}
                  </div>
                </div>

                <div className="text-xs text-gray-400 mb-3 tracking-wide">{post.date}</div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-3 group-hover:text-[#FF6B6B] transition-colors duration-300 tracking-tight">
                  {post.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                  {post.description}
                </p>

                <div className="flex items-center gap-2 text-[#FF6B6B] font-medium text-sm">
                  <span>Смотреть на TikTok</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#FF6B6B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a
            href="https://tiktok.com/@vityapump"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-lg sm:rounded-xl hover:shadow-lg hover:shadow-[#FF6B6B]/30 hover:from-pink-600 hover:to-red-600 transition-all duration-300 active:scale-95 tracking-wide"
          >
            <span className="text-2xl">📱</span>
            <span>Подписаться на TikTok @vityapump</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
