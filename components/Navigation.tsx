'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const menuItems = [
  { icon: '🏠', label: 'Главная', href: '#home' },
  { icon: '👤', label: 'О тренере', href: '#about' },
  { icon: '💪', label: 'Услуги', href: '#services' },
  { icon: '⭐', label: 'Отзывы', href: '#reviews' },
  { icon: '❓', label: 'FAQ', href: '#faq' },
  { icon: '📱', label: 'Блог', href: '#blog' },
  { icon: '📞', label: 'Контакты', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <motion.button
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 z-50 w-12 h-12 flex items-center justify-center bg-white/[0.05] backdrop-blur-md rounded-full border border-white/10 hover:bg-white/[0.1] transition-all duration-300"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 250 }}
              className="fixed top-0 right-0 h-full w-80 bg-black/98 backdrop-blur-xl border-l border-white/5 z-50 flex flex-col"
            >
              <div className="p-6 border-b border-white/5">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/[0.05] transition-colors ml-auto"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <nav className="flex-1 p-6">
                <ul className="space-y-2">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <a
                        href={item.href}
                        onClick={handleLinkClick}
                        className="flex items-center gap-4 px-4 py-3 rounded-lg text-white hover:bg-white/[0.03] transition-all duration-300 group"
                      >
                        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </span>
                        <span className="text-base font-medium tracking-tight">{item.label}</span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className="p-6 border-t border-white/5">
                <div className="text-center text-[#b0b0b0] text-sm">
                  <p>@vityapump</p>
                  <p className="mt-1">Online Coach</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
