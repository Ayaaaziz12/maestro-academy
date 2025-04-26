import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Benali',
      role: 'Élève en Terminale',
      image: '/images/testimonials/sarah.jpg',
      quote: 'Grâce à l\'accompagnement personnalisé, j\'ai pu progresser significativement en mathématiques. Les cours sont clairs et les exercices très bien choisis.',
      verified: true
    },
    {
      id: 2,
      name: 'Mohammed El Fathi',
      role: 'Étudiant en Prépa',
      image: '/images/testimonials/mohammed.jpg',
      quote: 'La préparation aux concours est excellente. Les professeurs sont très compétents et toujours disponibles pour répondre à nos questions.',
      verified: true
    },
    {
      id: 3,
      name: 'Lina Cherkaoui',
      role: 'Élève en Première',
      image: '/images/testimonials/lina.jpg',
      quote: 'L\'approche pédagogique est vraiment adaptée à chaque élève. J\'ai retrouvé confiance en moi et mes résultats se sont nettement améliorés.',
      verified: true
    }
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-5xl mb-4 block text-blue-500">💬</span>
            <h2 className="text-4xl font-bold text-gray-700 mb-4">
              Paroles d'élèves, preuves de succès
            </h2>
            <p className="text-lg text-gray-600">
              Parce que chaque élève a une histoire à raconter...
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-blue-50 transition-colors duration-200"
          >
            <FaChevronLeft className="w-6 h-6 text-blue-500" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-blue-50 transition-colors duration-200"
          >
            <FaChevronRight className="w-6 h-6 text-blue-500" />
          </button>

          {/* Testimonials carousel */}
          <div className="relative h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col items-center text-center">
                    {/* Avatar */}
                    <div className="relative mb-6">
                      <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-blue-100">
                        <img
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                        ✅ Témoignage vérifié
                      </div>
                    </div>

                    {/* Quote */}
                    <FaQuoteLeft className="text-4xl text-blue-200 mb-4" />
                    <p className="text-lg text-gray-700 italic mb-6">
                      "{testimonials[currentIndex].quote}"
                    </p>

                    {/* Author info */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-blue-500">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-blue-500' : 'bg-blue-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 