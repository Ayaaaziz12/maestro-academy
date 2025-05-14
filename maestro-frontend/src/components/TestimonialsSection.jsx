import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaStarHalfAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import axios from 'axios';

const TestimonialsSection = () => {
  useEffect(() => {
    axios.defaults.baseURL = 'http://127.0.0.1:8000/';
    axios.defaults.headers.common['Accept'] = 'application/json';
    axios.defaults.headers.common['Content-Type'] = 'application/json';
  }, []);
  const [currentSet, setCurrentSet] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [testimonials, setTestimonials] = useState([]); 
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    contenu: '',
    rating: 5
  });
  const [submitStatus, setSubmitStatus] = useState({ show: false, message: '', isError: false });

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
        const response = await axios.get('api/temoignages?is_validated=1'); // Notez le 'api/' au début
        const dynamicTestimonials = response.data.temoignages || [];
        const formattedDynamicTestimonials = dynamicTestimonials.map(t => ({
            id: t.id,
            name: t.nom,
            message: t.contenu,
            rating: t.rating,
            location: "Rabat"
        }));
        setTestimonials([...staticTestimonials, ...formattedDynamicTestimonials]);
    } catch (error) {
        console.error('Erreur détaillée:', error);
        const errorMessage = error.response?.data?.message || error.message;
        setError(`Impossible de charger les témoignages. ${errorMessage}`);
        setTestimonials(staticTestimonials);
    } finally {
        setIsLoading(false);
    }
};

const handleSubmit = async (e) => {
  e.preventDefault();

  // Validation côté client
  if (!formData.nom.trim()) {
    setSubmitStatus({
      show: true,
      message: 'Le nom est requis',
      isError: true
    });
    return;
  }

  if (!formData.contenu.trim() || formData.contenu.length < 10) {
    setSubmitStatus({
      show: true,
      message: 'Le témoignage doit contenir au moins 10 caractères',
      isError: true
    });
    return;
  }

  if (formData.email && !formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    setSubmitStatus({
      show: true,
      message: 'Veuillez entrer une adresse email valide',
      isError: true
    });
    return;
  }

  try {
    // 1. Fetch CSRF token
    const csrfRes = await fetch('http://localhost:8000/csrf-token', {
      method: 'GET',
      credentials: 'include',
    });

    const csrfData = await csrfRes.json();
    const csrfToken = csrfData.csrfToken;

    if (!csrfToken) {
      setSubmitStatus({
        show: true,
        message: 'CSRF token introuvable',
        isError: true
      });
      return;
    }

    // 2. Submit the form with the CSRF token
    const response = await fetch('http://localhost:8000/api/temoignages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-CSRF-TOKEN': csrfToken,
      },
      credentials: 'include',
      body: JSON.stringify({
        ...formData,
        is_validated: false,
      }),
    });

    const data = await response.json();

    if (response.ok && data?.success) {
      setSubmitStatus({
        show: true,
        message: 'Merci pour votre témoignage ! Il sera affiché après validation par notre équipe.',
        isError: false
      });
      setFormData({ nom: '', email: '', contenu: '', rating: 5 });
      setShowForm(false);
    } else {
      throw new Error(data.message || 'Réponse invalide du serveur');
    }
  } catch (error) {
    console.error('Erreur lors de la soumission du formulaire:', error);
    const errorMessage = error.message || 'Une erreur est survenue. Veuillez réessayer.';
    setSubmitStatus({
      show: true,
      message: errorMessage,
      isError: true
    });
  }
};

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
   const staticTestimonials = [
    {
      id: 1,
      name: "Yasmine Benali",
      location: "Rabat, Avenue de France",
      rating: 4.5 ,
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
      rating: 4.5, 
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
      rating: 4.5 ,
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
  const totalSets = testimonials.length > 0 ? Math.ceil(testimonials.length / testimonialsPerSet) : 1;

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

  const currentTestimonials = testimonials.length > 0
    ? testimonials.slice(
        currentSet * testimonialsPerSet,
        (currentSet + 1) * testimonialsPerSet
      )
    : [];

  if (isLoading) {
    return <div className="text-center py-10">Chargement des témoignages...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

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
                       {testimonial.message || testimonial.contenu}
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

          {/* Add Testimonial Button */}
          <div className="text-center mt-8">
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Laisser un témoignage
            </button>
          </div>

          {/* Testimonial Form Modal */}
          {showForm && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
                <h3 className="text-2xl font-bold mb-4">Partagez votre expérience</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nom">
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleInputChange}
                      required
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                      Email (optionnel)
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contenu">
                      Votre témoignage *
                    </label>
                    <textarea
                      id="contenu"
                      name="contenu"
                      value={formData.contenu}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
                      Note
                    </label>
                    <select
                      id="rating"
                      name="rating"
                      value={formData.rating}
                      onChange={handleInputChange}
                      className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                      <option value="5">5 étoiles</option>
                      <option value="4">4 étoiles</option>
                      <option value="3">3 étoiles</option>
                      <option value="2">2 étoiles</option>
                      <option value="1">1 étoile</option>
                    </select>
                  </div>
                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md"
                    >
                      Annuler
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-md"
                    >
                      Envoyer
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Status Message */}
          {submitStatus.show && (
            <div className={`fixed bottom-4 right-4 p-4 rounded-md ${
              submitStatus.isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
            }`}>
              {submitStatus.message}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
