import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaFlask, FaCalculator, FaGraduationCap, FaTrophy } from 'react-icons/fa';

const FormationsSection = () => {
  const formations = [
    {
      id: 1,
      title: 'Physique – Chimie',
      description: 'Cours approfondis en physique et chimie pour tous les niveaux.',
      icon: <FaFlask className="w-8 h-8" />,
      link: '/formations#physique-chimie'
    },
    {
      id: 2,
      title: 'Mathématiques',
      description: 'Renforcement et perfectionnement en mathématiques.',
      icon: <FaCalculator className="w-8 h-8" />,
      link: '/formations#mathematiques'
    },
    {
      id: 3,
      title: 'Soutien scolaire',
      description: 'Accompagnement personnalisé pour les élèves du collège et du lycée.',
      icon: <FaGraduationCap className="w-8 h-8" />,
      link: '/formations#soutien-scolaire'
    },
    {
      id: 4,
      title: 'Préparation aux concours',
      description: 'Préparation intensive aux concours des grandes écoles marocaines.',
      icon: <FaTrophy className="w-8 h-8" />,
      link: '/formations#concours'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image de gauche */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img
              src="/images/students-learning.jpg"
              alt="Étudiants en situation d'apprentissage"
              className="rounded-2xl w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 rounded-2xl"></div>
          </motion.div>

          {/* Contenu de droite */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Formations</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Découvrez notre gamme complète de formations adaptées à vos besoins
              </p>
            </motion.div>

            {/* Grille des formations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {formations.map((formation, index) => (
                <motion.div
                  key={formation.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                      {formation.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{formation.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{formation.description}</p>
                    <Link
                      to={formation.link}
                      className="mt-4 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 transform hover:scale-105 inline-flex items-center"
                    >
                      Voir plus
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormationsSection;