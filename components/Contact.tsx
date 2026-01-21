'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const socialLinks = [
  {
    icon: '📱',
    name: 'WhatsApp',
    description: 'Быстрая связь',
    link: 'https://wa.me/79999999999',
    color: '#25D366',
  },
  {
    icon: '✈️',
    name: 'Telegram',
    description: 'Основной канал связи',
    link: 'https://t.me/vityapump',
    color: '#0088cc',
  },
  {
    icon: '📷',
    name: 'Instagram',
    description: 'Фото трансформаций',
    link: 'https://instagram.com/vityapump',
    color: '#E1306C',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: '',
      email: '',
      message: '',
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Пожалуйста, введите ваше имя';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Пожалуйста, введите ваш email';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Пожалуйста, введите корректный email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Пожалуйста, введите сообщение';
    }

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      alert('Спасибо за сообщение! Я свяжусь с вами в ближайшее время.');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
    if (errors[target.name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [target.name]: '',
      });
    }
  };

  return (
    <section id="contact" className="section-padding bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-white tracking-tight">
            Контакты
          </h2>
          <div className="w-16 h-0.5 bg-[#FF6B6B] mx-auto mb-8" />
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed tracking-wide">
            Готовы начать свою трансформацию? Свяжитесь со мной удобным способом
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-white mb-6 text-center lg:text-left tracking-tight">
              Свяжитесь со мной
            </h3>

            <div className="space-y-4 mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-xl hover:shadow-2xl"
                  style={{
                    borderColor: `${social.color}20`,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{
                      backgroundColor: `${social.color}15`,
                    }}
                  >
                    {social.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-medium">{social.name}</div>
                    <div className="text-gray-400 text-sm">{social.description}</div>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7-7"
                    />
                  </svg>
                </motion.a>
              ))}
            </div>

            <div className="p-6 bg-gradient-to-br from-[#FF6B6B]/8 to-[#FF8E8E]/4 border border-[#FF6B6B]/15 rounded-2xl shadow-xl">
              <div className="flex items-start gap-4">
                <div className="text-3xl">⏰</div>
                <div>
                  <h4 className="text-white font-semibold mb-2 tracking-tight">Время работы</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Отвечаю на сообщения ежедневно с 9:00 до 21:00 по МСК.
                    Срочные вопросы - в любое время!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold text-white mb-6 text-center lg:text-left tracking-tight">
              Написать сообщение
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ваше имя"
                  className={`w-full px-6 py-4 bg-white/5 border ${
                    errors.name ? 'border-red-500' : 'border-white/10'
                  } rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF6B6B] transition-colors duration-300`}
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Ваш email"
                  className={`w-full px-6 py-4 bg-white/5 border ${
                    errors.email ? 'border-red-500' : 'border-white/10'
                  } rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF6B6B] transition-colors duration-300`}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Ваше сообщение"
                  rows={6}
                  className={`w-full px-6 py-4 bg-white/5 border ${
                    errors.message ? 'border-red-500' : 'border-white/10'
                  } rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF6B6B] transition-colors duration-300 resize-none`}
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-lg sm:rounded-xl hover:shadow-lg hover:from-pink-600 hover:to-red-600 transition-all duration-300 tracking-wide active:scale-95"
              >
                Отправить сообщение
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-white/5 text-center"
        >
          <p className="text-gray-400">
            © 2024 @vityapump. Все права защищены.
          </p>
          <p className="text-gray-400 text-sm mt-2 tracking-wide">
            Онлайн-тренер | Трансформация тела и жизни
          </p>
        </motion.div>
      </div>
    </section>
  );
}
