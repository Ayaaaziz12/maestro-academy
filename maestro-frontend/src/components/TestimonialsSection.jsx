import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaStarHalfAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TestimonialsSection = () => {
  const [currentSet, setCurrentSet] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Données des témoignages statiques
  const testimonials = [
    {
      id: 1,
      name: "Yasmine Benali",
      location: "Rabat, Avenue de France",
      rating: 5,
      message: "Une expérience exceptionnelle ! Les cours sont très bien structurés et les professeurs sont à l'écoute. J'ai vraiment progressé en peu de temps.L’accompagnement est constant, on se sent soutenu à chaque étape."
    },
    {
      id: 2,
      name: "Karim El Fathi",
      location: "Rabat, Hay Riad",
      rating: 5,
      message: "La qualité de l'enseignement est remarquable. Je recommande vivement ! Grâce à Le Maestro Academy, j’ai gagné en confiance et en méthode de travail."
    },
    {
      id: 3,
      name: "Reda Cherkaoui",
      location: "Rabat, Bab Challah",
      rating: 5,
      message: "Un accompagnement personnalisé qui fait toute la différence. Merci pour votre professionnalisme !Les conseils des formateurs m’ont beaucoup aidé dans mes préparations aux concours."
    },
    {
      id: 4,
      name: "Nadia Alami",
      location: "Rabat, Hassan",
      rating: 5,
      message: "Une expérience enrichissante qui a transformé ma vision de la cuisine. Les cours sont bien structurés et le chef prend le temps d'expliquer chaque technique en détail. Je recommande vivement cette académie !"
    },
    {
      id: 5,
      name: "Sarah Bennani",
      location: "Rabat, Agdal",
      rating: 5,
      message: "J’ai retrouvé le plaisir d’apprendre grâce à une méthode claire et motivante. Une ambiance sérieuse mais bienveillante, idéale pour apprendre."
    },
    {
      id: 6,
      name: "Mohammed Tazi",
      location: "Rabat, Souissi",
      rating: 5,
      message: "L'équipe pédagogique est vraiment investie, on sent qu’on n’est pas juste un numéro. Les résultats ont suivi très rapidement. Un vrai boost pour mes études !"
    }
  ];

  const testimonialsPerSet = 3;
  const totalSets = Math.ceil(testimonials.length / testimonialsPerSet);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSet((prev) => (prev + 1) % totalSets);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSets]);

  const nextSet = () => {
    setCurrentSet((prev) => (prev + 1) % totalSets);
    setIsAutoPlaying(false);
  };

  const prevSet = () => {
    setCurrentSet((prev) => (prev - 1 + totalSets) % totalSets);
    setIsAutoPlaying(false);
  };

  const currentTestimonials = testimonials.slice(
    currentSet * testimonialsPerSet,
    (currentSet + 1) * testimonialsPerSet
  );

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600">
            Ils nous font confiance
          </h2>
          <p className="text-lg italic text-gray-600">
            Découvrez les expériences de nos étudiants
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSet}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white transition-all duration-300 border border-gray-100"
          >
            <FaChevronLeft className="w-6 h-6 text-primary-600" />
          </button>
          <button
            onClick={nextSet}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white transition-all duration-300 border border-gray-100"
          >
            <FaChevronRight className="w-6 h-6 text-primary-600" />
          </button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {currentTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${currentSet}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="pt-4 text-center">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary-100">
                        <img
                          src={`/images/testimonials/${testimonial.name.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {testimonial.name}
                      </h3>
                      <div className="italic text-primary-600 mb-2">
                        {testimonial.location}
                      </div>
                      <div className="mb-3">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400">
                            {i < testimonial.rating ? (
                              <FaStar className="inline" />
                            ) : (
                              <FaStarHalfAlt className="inline" />
                            )}
                          </span>
                        ))}
                      </div>
                      <p className="text-gray-600 text-base">
                        {testimonial.message}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Progress Bar */}
          <div className="mt-8 flex justify-center">
            <div className="w-full max-w-md h-1 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary-600 to-primary-500"
                initial={{ width: "0%" }}
                animate={{ width: `${((currentSet + 1) / totalSets) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Set Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: totalSets }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSet(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSet
                    ? 'bg-primary-600 w-4'
                    : 'bg-gray-200'
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